import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';

class AnatomyExample extends Component {

  BackPosture = () => {
    this.props.navigation.navigate('Posture')}

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
            <Title >Posture Settings</Title>
          </Body>
          <Right/>
        </Header>
      </Container>
    );
  }
}

export default AnatomyExample