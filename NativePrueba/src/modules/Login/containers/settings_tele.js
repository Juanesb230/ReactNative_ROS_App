import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Content } from 'native-base';

class AnatomyExample extends Component {

  BackTele = () => {
    this.props.navigation.navigate('Teleop')}

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
            <Item floatingLabel>
              <Label>Username</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label>Password</Label>
              <Input />
            </Item>
          </Form>
        </Content>
      </Container>
    );
  }
}

export default AnatomyExample