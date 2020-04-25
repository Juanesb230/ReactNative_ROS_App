import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Content, Form, Item, Label, Input, Text } from 'native-base';
import * as actions from '../../../actions'
import {connect} from 'react-redux'

class AnatomyExample extends Component {

  constructor(props){
    super(props)
    this.state = {
      vref:'0.2',
      wref:'0.2'
    }
  }

  BackTele = () => {
    this.props.navigation.navigate('Teleop')}

  save_vel = () => {
    this.props.vref(this.state.vref)
    this.props.wref(this.state.wref)
  }

  render() {
    return (
      <Container>
        <Header>
          <Left>
          <Button transparent onPress={this.BackTele}>
            <Icon name='arrow-back' />
          </Button>
          </Left>
          <Body>
            <Title style={{fontSize: 14}}>Teleoperation Settings</Title>
          </Body>
          <Right/>
        </Header>
        <Content>
          <Form>
            <Item stackedLabel>
              <Label>Lineal Velocity (m/s)</Label>
              <Input keyboardType='phone-pad' onChangeText={(vref) => this.setState({vref})}/>
            </Item>
            <Item stackedLabel last>
              <Label>Angular Velocity (rad/s)</Label>
              <Input keyboardType='phone-pad' onChangeText={(wref) => this.setState({wref})}/>
            </Item>
          </Form>
          <Button block style={{marginTop:'10%', width:'90%',marginLeft:'5%'}} onPress={this.save_vel}>
            <Text>Confirm</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

export default connect(null,actions)(AnatomyExample)