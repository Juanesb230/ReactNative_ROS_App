import {Alert} from 'react-native'
import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Content, Form, Item, Label, Input, Text } from 'native-base';
import * as actions from '../../../actions'
import {connect} from 'react-redux'

class AnatomyExample extends Component {

  constructor(props){
    super(props)
    this.state = {
      topic_vel:this.props.top_velID,
      topic_odom:this.props.top_odomID
    }
  }

  BackPosture = () => {
    this.props.navigation.navigate('Tray')}

  save_topic = () => {
    this.props.topic_vel(this.state.topic_vel)
    this.props.topic_odom(this.state.topic_odom)
    Alert.alert("Success","Changed topics")
  }
  
  render() {
    return (
      <Container>
        <Header>
          <Left>
          <Button transparent onPress={this.BackPosture}>
            <Icon name='arrow-back' />
          </Button>
          </Left>
          <Body>
            <Title >Control Settings</Title>
          </Body>
          <Right/>
        </Header>
        <Content>
          <Form>
            <Item stackedLabel >
              <Label>Velocity Topic</Label>
              <Input onChangeText={(topic_vel) => this.setState({topic_vel})}/>
            </Item>
            <Item stackedLabel >
              <Label>Odometry Topic</Label>
              <Input onChangeText={(topic_odom) => this.setState({topic_odom})}/>
            </Item>
          </Form>
          <Button block style={{marginTop:'10%', width:'90%',marginLeft:'5%'}} onPress={this.save_topic}>
            <Text>Confirm</Text>
          </Button>
        </Content>
    </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    top_velID: state.top_velID,
    top_odomID: state.top_odomID
  }
}

export default connect(mapStateToProps,actions)(AnatomyExample)