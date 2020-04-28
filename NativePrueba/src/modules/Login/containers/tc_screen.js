import React, { Component } from 'react';
import { ScrollView, View } from 'react-native'
import { Container, Header, Left, Body, Right, Button, Icon, Title, Text, Content, Radio, ListItem } from 'native-base';
import AntDesign from 'react-native-vector-icons/AntDesign'
import {connect} from 'react-redux'

class AnatomyExample extends Component {

  constructor() {
    super();
    this.state = {
     itemSelected: 'itemOne',
   }
  }

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
        <ScrollView contentContainerStyle={{flexGrow: 1}}>
          <View style={{flex:0.25, marginTop:'2%'}}>
              <Text style={{textAlign: 'left'}}>Server connection: {this.props.ipID}:{this.props.portID}</Text>
              <Text style={{textAlign: 'left', marginTop: '3%'}}>Velocity Topic: {this.props.top_velID}</Text>
              <Text style={{textAlign: 'left'}}>Odometry Topic: {this.props.top_odomID}</Text>   
          </View>
          <View style={{marginBottom: '45%'}}>
            <Text style={{fontWeight: 'bold', textAlign: 'center', fontSize: 18}}>Trajectories</Text>
            <ListItem>
              <Left>
                <Text>Initial Position</Text>
              </Left>
              <Right>
                <Radio onPress={() => this.setState({ itemSelected: 'itemOne' })}
                selected={this.state.itemSelected == 'itemOne'} />
              </Right>
            </ListItem>
            <ListItem>
              <Left>
                <Text>Circle</Text>
              </Left>
              <Right>
                <Radio onPress={() => this.setState({ itemSelected: 'itemTwo' })}
                selected={this.state.itemSelected == 'itemTwo'} />
              </Right>
            </ListItem>
            <ListItem>
              <Left>
                <Text>Eigth</Text>
              </Left>
              <Right>
                <Radio onPress={() => this.setState({ itemSelected: 'itemThree' })}
                selected={this.state.itemSelected == 'itemThree'} />
              </Right>
            </ListItem>
            <ListItem>
              <Left>
                <Text>Circle</Text>
              </Left>
              <Right>
                <Radio onPress={() => this.setState({ itemSelected: 'itemFour' })}
                selected={this.state.itemSelected == 'itemFour'} />
              </Right>
            </ListItem>
          </View>
        </ScrollView>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    ipID: state.ipID,
    portID: state.portID,
    top_velID: state.top_velID,
    top_odomID: state.top_odomID
  }
}

export default connect(mapStateToProps)(AnatomyExample)