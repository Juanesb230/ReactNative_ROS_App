import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
import AntDesign from 'react-native-vector-icons/AntDesign'

class AnatomyExample extends Component {
  registrer = () => {
        this.props.navigation.openDrawer()
  }

  registrer2 = () => {
    this.props.navigation.navigate('TraySettings')
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
      </Container>
    );
  }
}

export default AnatomyExample