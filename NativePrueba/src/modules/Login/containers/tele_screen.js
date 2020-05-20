import React, { Component } from 'react';
import {View} from 'react-native'
import { Container, Header, Left, Body, Right, Button, Icon, Title, Text } from 'native-base';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import {connect} from 'react-redux'
import * as ROSLIB from 'roslib'

class AnatomyExample extends Component {

  componentDidMount() {
    this.didFocusListener = this.props.navigation.addListener('didFocus', () => {
      this.someAction();
    })
  }

  someAction() {
    if (this.props.rosconID){
      this.string = new ROSLIB.Message({
        data: 'Teleoperation'
      })
      this.stop()
      this.Topic_mode()
      this.topic2.publish(this.string)
    }
  }

  componentWillUnmount() {
    this.didFocusListener.remove();
  }


  Topic_mode = () =>{
    this.topic2 = new ROSLIB.Topic({
      ros: this.props.rosID,
      name: '/mode',
      messageType: 'std_msgs/String'
    })
  }
  
  registrer = () => {
    if (this.props.rosconID){
      this.stop()
    }
    this.props.navigation.openDrawer()  
  }

  registrer2 = () => {
    if (this.props.rosconID){
      this.stop()
    }
    this.props.navigation.navigate('TeleSettings')
  }

  Topic_vel =() => {
    this.topic = new ROSLIB.Topic({
      ros: this.props.rosID,
      name:this.props.top_velID,
      messageType: 'geometry_msgs/Twist'
    })
  }

  forward =() => {
    if (this.props.rosconID){
      this.message = new ROSLIB.Message({
        linear: {x: parseFloat(this.props.vrefID), y: 0.0, z: 0.0},
        angular: {x: 0.0, y: 0.0, z: 0.0 }
      })
      this.Topic_vel()
      this.topic.publish(this.message)
    }
  }

  behind =() => {
    if (this.props.rosconID){
      this.message = new ROSLIB.Message({
        linear: {x: -parseFloat(this.props.vrefID), y: 0.0, z: 0.0},
        angular: {x: 0.0, y: 0.0, z: 0.0 }
      })
      this.Topic_vel()
      this.topic.publish(this.message)
    }
  }

  left =() => {
    if (this.props.rosconID){
      this.message = new ROSLIB.Message({
        linear: {x: 0.0, y: 0.0, z: 0.0},
        angular: {x: 0.0, y: 0.0, z: parseFloat(this.props.wrefID) }
      })
      this.Topic_vel()
      this.topic.publish(this.message)
    }
  }

  right =() => {
    if (this.props.rosconID){
      this.message = new ROSLIB.Message({
        linear: {x: 0.0, y: 0.0, z: 0.0},
        angular: {x: 0.0, y: 0.0, z: - parseFloat(this.props.wrefID) }
      })
      this.Topic_vel()
      this.topic.publish(this.message)
    }
  }

  stop =() => {
    if (this.props.rosconID){
      this.message = new ROSLIB.Message({
        linear: {x: 0.0, y: 0.0, z: 0.0},
        angular: {x: 0.0, y: 0.0, z: 0.0 }
      })
      this.Topic_vel()
      this.topic.publish(this.message)
    }
  }

  render() {

    return (
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={this.registrer}>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>Teleoperation</Title>
          </Body>
          <Right>
            <Button transparent onPress={this.registrer2}>
              <AntDesign name='setting' size={25} style={{color : 'white'}}/>
            </Button>
          </Right>
        </Header>
        <View style={{flex:0.05, marginTop:'2%'}}>
            <Text style={{textAlign: 'left'}}>Server connection: {this.props.ipID}:{this.props.portID}</Text>
            <Text style={{textAlign: 'left', marginTop: '3%'}}>Velocity Topic: {this.props.top_velID}</Text>
            <Text style={{textAlign: 'left', marginTop: '3%'}}>Lineal velocity: {this.props.vrefID} (m/s)</Text>
            <Text style={{textAlign: 'left'}}>Angular velocity: {this.props.wrefID} (rad/s)</Text>
          </View>
        <View style={{flex: 1, flexDirection: 'column',justifyContent: 'space-around', alignItems: 'center', marginTop:'18%'}}>        
          <View style={{width: 50, height: 50}} >
            <Button large light style={{width: '100%'}} onPress={this.forward}>
              <AntDesign name='arrowup' size={35} style={{marginLeft: 7}}/>
            </Button>
          </View>
          <View style={{width: '100%', height: 50, flexDirection: 'row', justifyContent: 'space-around'}} >
            <Button large light style={{width: '15%'}} onPress={this.left}>
              <Feather name='rotate-ccw' size={30} style={{marginLeft: 13}}/>
            </Button>
            <Button large light style={{width: '15%'}} onPress={this.stop}>
              <FontAwesome name='stop-circle-o' size={30} style={{marginLeft: 13}}/>
            </Button>
            <Button large light style={{width: '15%'}} onPress={this.right}>
              <Feather name='rotate-cw' size={30} style={{marginLeft: 11}}/>
            </Button>
          </View>
          <View style={{width: 50, height: 50}} >
            <Button large light style={{width: '100%'}} onPress={this.behind}>
              <AntDesign name='arrowdown' size={35} style={{marginLeft: 7}}/>
            </Button>
          </View>
        </View>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    ipID: state.ipID,
    portID: state.portID,
    top_velID: state.top_velID,
    vrefID: state.vrefID,
    wrefID: state.wrefID,
    rosID: state.rosID,
    rosconID: state.rosconID
  }
}

export default connect(mapStateToProps)(AnatomyExample)