import React, { Component } from 'react';
import {View, ScrollView, Alert} from 'react-native'
import { Container, Header, Left, Body, Right, Button, Icon, Title, Text, Form, Item, Label, Input } from 'native-base';
import AntDesign from 'react-native-vector-icons/AntDesign'
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
        data: 'Posture Control'
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

  constructor(props){
    super(props)
    this.state = {
      xref:'0.0',
      yref:'0.0'
    }
  }

  Topic_vel =() => {
    this.topic = new ROSLIB.Topic({
      ros: this.props.rosID,
      name:this.props.top_velID,
      messageType: 'geometry_msgs/Twist'
    })}

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

  registrer = () => {
        this.props.navigation.openDrawer()
  }

  registrer2 = () => {
    this.props.navigation.navigate('PostureSettings')
  }

  posRef = () => {
    if (this.props.rosconID){
      this.Xref = new ROSLIB.Param({
        ros : this.props.rosID,
        name : 'x_position'
      })
      this.Xref.set(parseFloat(this.state.xref))
      this.Yref = new ROSLIB.Param({
        ros : this.props.rosID,
        name : 'y_position'
      })
      this.Yref.set(parseFloat(this.state.yref))
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
            <Title >Posture Control</Title>
          </Body>
          <Right>
            <Button transparent onPress={this.registrer2}>
              <AntDesign name='setting' size={25} style={{color : 'white'}}/>
            </Button>
          </Right>
        </Header>
        <ScrollView contentContainerStyle={{flexGrow: 1}}>
          <View style={{flex:0.25, marginTop:'2%'}}>
              <Text style={{textAlign: 'left'}}>Server connection: {this.props.ipID}:{this.props.portID}</Text>
              <Text style={{textAlign: 'left', marginTop: '3%'}}>Velocity Topic: {this.props.top_velID}</Text>
              <Text style={{textAlign: 'left'}}>Odometry Topic: {this.props.top_odomID}</Text>   
          </View>
          <View style={{marginBottom: '67%'}}>
                <Form>
                  <Item stackedLabel >
                    <Label>x Position Reference (m)</Label>
                    <Input value={this.state.xref} keyboardType='phone-pad' onChangeText={(xref) => this.setState({xref})}/>
                  </Item>
                  <Item stackedLabel last>
                    <Label>y Position Reference (m)</Label>
                    <Input value={this.state.yref} keyboardType='phone-pad' onChangeText={(yref) => this.setState({yref})}/>
                  </Item>
                </Form>
                <Button block style={{marginTop:'5%', width:'90%',marginLeft:'5%'}} onPress={this.posRef}>
                  <Text>Set Position</Text>
                </Button>
          </View>
        </ScrollView>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    ipID: state.ipID,
    portID: state.portID,
    top_velID: state.top_velID,
    top_odomID: state.top_odomID,
    rosID: state.rosID,
    rosconID: state.rosconID
  }
}

export default connect(mapStateToProps)(AnatomyExample)