import React, { Component } from 'react';
import {View} from 'react-native'
import { Container, Header, Left, Body, Right, Button, Icon, Title, Text } from 'native-base';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import {connect} from 'react-redux'

class AnatomyExample extends Component {

  registrer = () => {
        this.props.navigation.openDrawer()  
  }

  registrer2 = () => {
    this.props.navigation.navigate('TeleSettings')
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
            <Button large light style={{width: '100%'}}>
              <AntDesign name='arrowup' size={35} style={{marginLeft: 7}}/>
            </Button>
          </View>
          <View style={{width: '100%', height: 50, flexDirection: 'row', justifyContent: 'space-around'}} >
            <Button large light style={{width: '15%'}}>
              <Feather name='rotate-ccw' size={30} style={{marginLeft: 13}}/>
            </Button>
            <Button large light style={{width: '15%'}}>
              <FontAwesome name='stop-circle-o' size={30} style={{marginLeft: 13}}/>
            </Button>
            <Button large light style={{width: '15%'}}>
              <Feather name='rotate-cw' size={30} style={{marginLeft: 11}}/>
            </Button>
          </View>
          <View style={{width: 50, height: 50}} >
            <Button large light style={{width: '100%'}}>
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
    wrefID: state.wrefID
  }
}

export default connect(mapStateToProps)(AnatomyExample)