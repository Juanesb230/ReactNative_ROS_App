import React, { Component } from 'react'
import {StyleSheet, ScrollView} from 'react-native'
import { Container, Header, Left, Body, Right, Button, Icon, Title, Item,Input, Text } from 'native-base';
import AntDesign from 'react-native-vector-icons/AntDesign';
import * as actions from '../../../actions'
import {connect} from 'react-redux'

class AnatomyExample extends Component {

  constructor(props){
    super(props)
    this.state = {
      ip:'localhost',
      port:'9090'
    }
  }
  
  registrer = () => {
    this.props.navigation.openDrawer()  
  }

  registrer2 = () => {
    this.props.navigation.navigate('HomeSettings')
  }

  save_ip = () => {
    this.props.ip_master(this.state.ip)
    this.props.port_master(this.state.port)
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
            <Title>Home</Title>
          </Body>
          <Right>
            <Button transparent onPress={this.registrer2}>
              <AntDesign name='setting' size={25} style={{color : 'white'}}/>
            </Button>
          </Right>
        </Header>
          <ScrollView contentContainerStyle={styles.IP}>
            <Text style={{fontSize: 30, marginBottom:'5%',textAlign:'center', fontWeight: 'bold'}}>Remote ROS</Text>
            <Text style={{fontSize: 30, marginBottom:'15%',textAlign:'center', fontWeight: 'bold'}}>Mobile Robot Control</Text>
            <Text style={{fontSize: 20, marginBottom:'5%'}}>IP Adress:</Text>
            <Item rounded style={{width: '50%', borderColor:'black'}}>
              <Input placeholder='e.g. 100.0.0.0' onChangeText={(ip) => this.setState({ip})} style={{textAlign:'center'}}/>
            </Item>
            <Text style={{fontSize: 20, marginTop:'5%'}}>Port:</Text>
            <Item rounded style={{width: '50%', borderColor:'black', marginTop:'5%'}}>
              <Input keyboardType='phone-pad' placeholder='e.g. 8081' onChangeText={(port) => this.setState({port})} style={{textAlign:'center'}}/>
            </Item>
            <Button onPress={this.save_ip} rounded primary style={{width: '35%',marginLeft: '33%', marginTop:'5%'}}>
              <Text style={{marginLeft:'15%'}}>Connect</Text>
            </Button>
          </ScrollView>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  IP:{
    flexGrow: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  }
})

export default connect(null,actions)(AnatomyExample)