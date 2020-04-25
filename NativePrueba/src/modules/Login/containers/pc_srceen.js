import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Text } from 'native-base';
import AntDesign from 'react-native-vector-icons/AntDesign'
import {connect} from 'react-redux'

class AnatomyExample extends Component {
  registrer = () => {
        this.props.navigation.openDrawer()
  }

  registrer2 = () => {
    this.props.navigation.navigate('PostureSettings')
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
    <Text>IP : {this.props.ipID}</Text>
    <Text>Port : {this.props.portID}</Text>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    ipID: state.ipID,
    portID: state.portID
  }
}

export default connect(mapStateToProps)(AnatomyExample)