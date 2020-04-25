import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';

class AnatomyExample extends Component {

  BackHome = () => {
    this.props.navigation.navigate('Home')}

  render() {
    return (
      <Container>
        <Header>
          <Left>
          <Button transparent onPress={this.BackHome}>
            <Icon name='arrow-back' />
          </Button>
          </Left>
          <Body>
            <Title>Home Settings</Title>
          </Body>
          <Right/>
        </Header>
      </Container>
    );
  }
}


export default AnatomyExample