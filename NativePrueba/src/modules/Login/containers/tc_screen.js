import React, { Component } from 'react';
import { ScrollView, View } from 'react-native'
import { Container, Header, Left, Body, Right, Button, Icon, Title, Text, Content, Radio, ListItem } from 'native-base';
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
        data: 'Tray Control'
      })
      this.Param_tray()
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

  constructor() {
    super();
    this.state = {
     itemSelected: 'itemOne',
     mode: 0
   }
  }

  Param_tray = () => {
    if (this.props.rosconID){
      this.tray = new ROSLIB.Param({
        ros : this.props.rosID,
        name : 'TrayMode'
      })
      this.tray.set(parseInt(this.state.mode))
    }
  }

  registrer = () => {
        this.props.navigation.openDrawer()
  }

  registrer2 = () => {
    this.props.navigation.navigate('TraySettings')
  }

  setInit = () => {
    this.state.mode= 0
    this.setState({itemSelected : 'itemOne'})
    this.Param_tray()
  }

  setCircle = () => {
    this.state.mode= 1
    this.setState({itemSelected : 'itemTwo'})
    this.Param_tray()
  }

  setEigth = () => {
    this.state.mode= 2
    this.setState({itemSelected : 'itemThree'})
    this.Param_tray()
  }

  setHeart = () => {
    this.state.mode= 3
    this.setState({itemSelected : 'itemFour'})
    this.Param_tray()
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
            <Title style={{fontSize: 17.6}}>Trajectory Control</Title>
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
          <View style={{marginBottom: '45%'}}>
            <Text style={{fontWeight: 'bold', textAlign: 'center', fontSize: 18}}>Trajectories</Text>
            <ListItem>
              <Left>
                <Text>Initial Position</Text>
              </Left>
              <Right>
                <Radio onPress={this.setInit}
                selected={this.state.itemSelected == 'itemOne'} />
              </Right>
            </ListItem>
            <ListItem>
              <Left>
                <Text>Circle</Text>
              </Left>
              <Right>
                <Radio onPress={this.setCircle}
                selected={this.state.itemSelected == 'itemTwo'} />
              </Right>
            </ListItem>
            <ListItem>
              <Left>
                <Text>Eigth</Text>
              </Left>
              <Right>
                <Radio onPress={this.setEigth}
                selected={this.state.itemSelected == 'itemThree'} />
              </Right>
            </ListItem>
            <ListItem>
              <Left>
                <Text>Heart</Text>
              </Left>
              <Right>
                <Radio onPress={this.setHeart}
                selected={this.state.itemSelected == 'itemFour'} />
              </Right>
            </ListItem>
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