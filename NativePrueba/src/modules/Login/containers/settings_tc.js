import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';

class AnatomyExample extends Component {

  BackTray = () => {
    this.props.navigation.navigate('Tray')}

  render() {
    return (
      <Container>
        <Header>
          <Left>
          <Button transparent onPress={this.BackTray}>
            <Icon name='arrow-back' />
          </Button>
          </Left>
          <Body>
            <Title style={{fontSize: 16.6}}>Trajectory Settings</Title>
          </Body>
          <Right/>
        </Header>
      </Container>
    );
  }
}

export default AnatomyExample