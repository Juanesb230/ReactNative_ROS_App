#!/usr/bin/env python
import rospy
from std_msgs.msg import String
import math
import tf
from tf.transformations import euler_from_quaternion
from nav_msgs.msg import Odometry
import geometry_msgs.msg
import numpy as np

OperationType = 'Teleoperation'
ESCALAR_FACTOR=70.0
p_ref_ant=np.array([[0.0],[0.0]])
p_ref=np.array([[0.0],[0.0]])
x= 0.0
y= 0.0
theta=0.0
m=0

#ODOMETRY DATA
def Odom(msg):
    global x
    global y
    global theta

    x=msg.pose.pose.position.x
    y=msg.pose.pose.position.y
    rot_q=msg.pose.pose.orientation
    angles=euler_from_quaternion([rot_q.x, rot_q.y, rot_q.z, rot_q.w])
    theta=angles[2]

def callback(data):
    global OperationType

    OperationType = data.data

def PostureReference(x_ant,y_ant):

    x = rospy.get_param('x_position',x_ant)
    y = rospy.get_param('y_position',y_ant)
    return x, y

def TrayReference(tray):
    tray = rospy.get_param('TrayMode',tray)
    t = rospy.Time.now().to_sec() * math.pi
    if tray == 1:
        x = 2.0 * math.cos(t/ESCALAR_FACTOR)
        y = 2.0 * math.sin(t/ESCALAR_FACTOR)
    elif tray == 2:
        x = 2.0 * math.sin(t/ESCALAR_FACTOR)/(1+math.pow(math.cos(t/ESCALAR_FACTOR),2))
        y = 2.0 * math.sin(t/ESCALAR_FACTOR) * math.cos(t/ESCALAR_FACTOR)/(1+math.pow(math.cos(t/ESCALAR_FACTOR),2))
    elif tray == 3:
        x = 2.0 * math.sin(t/ESCALAR_FACTOR)/(1+math.pow(math.sin(t/ESCALAR_FACTOR),2))
        y = 2.0 * math.sin(t/ESCALAR_FACTOR) * math.cos(t/ESCALAR_FACTOR)/(1+math.pow(math.sin(t/ESCALAR_FACTOR),2))
    else:
        x = 0.0
        y = 0.0
    return x, y, tray

#iNVERSE KINEMATIC PID CONTROL
def Control(angle,x_pos,y_pos,pos_before,pos_ref,K_sin):
    Jr=np.array([[math.cos(angle) ,-0.15 * math.sin(angle)],[math.sin(angle) ,0.15 * math.cos(angle)]])
    Jr_inv=np.linalg.inv(Jr)
    K=np.array([[K_sin[0], 0],[0, K_sin[1]]])
    posp_d=pos_ref - pos_before
    pos=np.array([[x_pos],[y_pos]])
    pos_error=pos_ref - pos
    pos_error[0, 0]=math.tanh(pos_error[0, 0])
    pos_error[1, 0]=math.tanh(pos_error[1, 0])
    c=np.dot(Jr_inv, (10 * posp_d + np.dot(K,pos_error)))
    c1=c[0, 0]
    c2=c[1, 0]
    return c1,c2

if __name__ == '__main__':

    rospy.init_node('ControlReactNative', anonymous=True)
    diff_vel = rospy.Publisher('/mobile_base_controller/cmd_vel', geometry_msgs.msg.Twist,queue_size=1)
    rospy.Subscriber("mode", String, callback)
    sub_odom = rospy.Subscriber('/mobile_base_controller/odom',Odometry,Odom)
    br = tf.TransformBroadcaster()
    rate = rospy.Rate(10.0)
    while not rospy.is_shutdown():
        if OperationType != 'Teleoperation':
            p_ref_ant[0, 0], p_ref_ant[1, 0] = p_ref[0, 0], p_ref[1, 0]
            if a == 0:
                diff_vel = rospy.Publisher('/mobile_base_controller/cmd_vel', geometry_msgs.msg.Twist,queue_size=1)
                a = 1
            if OperationType == 'Posture Control':
                p_ref[0, 0], p_ref[1, 0] = PostureReference(p_ref[0, 0], p_ref[1, 0])               
            else:
                p_ref[0, 0], p_ref[1, 0], m = TrayReference(m)

            br.sendTransform(( p_ref[0, 0], p_ref[1, 0], 0.0),
                    (0.0, 0.0, 0.0, 1.0),
                    rospy.Time.now(),
                    "ref",
                    "odom")

            linear, angular = Control(theta, x, y, p_ref_ant, p_ref, [0.6, 0.6])
            cmd = geometry_msgs.msg.Twist()
            cmd.linear.x = linear
            cmd.angular.z = angular
            diff_vel.publish(cmd)
        else:
            a = 0
            diff_vel.unregister()
        rate.sleep()