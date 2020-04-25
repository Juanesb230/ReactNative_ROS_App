import React from 'react'
import {Image} from 'react-native'
import {createAppContainer} from 'react-navigation'
import {createDrawerNavigator, DrawerNavigatorItems, DrawerItems} from 'react-navigation-drawer'
import HomeNavigator from './modules/Login/components/HomeNavigation'
import TeleNavigator from './modules/Login/components/TeleNavigation'
import PostureNavigator from './modules/Login/components/PostureNavigation'
import TrayNavigation from './modules/Login/components/TrayNavigation'
import Entypo from 'react-native-vector-icons/Entypo'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { Container, Body, Header, Footer } from 'native-base'

const DrawerContent = (props) => {
  return(
      <Container>
        <Header style={{ height:200}}>
          <Body >
            <Image style={{width:150, height:150, marginLeft:50}} source={require('./images/robot.png')}></Image>
          </Body>
        </Header>
        <DrawerNavigatorItems {...props}/>
      </Container>
    )
}

const LoginNavigator = createDrawerNavigator({
  HomeNavigator:{
    screen : HomeNavigator,
    navigationOptions:{
      title: 'Home',
      drawerIcon: ({item}) => (
        <Entypo name='home' size={20} ></Entypo>
      )
    }
  },
  TeleNavigator:{
    screen : TeleNavigator,
    navigationOptions:{
      title: 'Teleoperation',
      drawerIcon: ({item}) => (
        <MaterialIcons name='gamepad' size={20} ></MaterialIcons>
      )
    }
  },
  PostureNavigator:{
    screen : PostureNavigator,
    navigationOptions:{
      title: 'Posture Control',
      drawerIcon: ({item}) => (
        <Entypo name='location' size={20} ></Entypo>
      )
    }
  },
  TrayNavigation:{
    screen : TrayNavigation,
    navigationOptions:{
      title: 'Trajectory Control',
      drawerIcon: ({item}) => (
        <MaterialCommunityIcons name='arrow-decision-auto' size={20} ></MaterialCommunityIcons>
      )
    }
  }
},{
  drawerPosition: 'left',
  contentComponent: DrawerContent
});

export default createAppContainer(LoginNavigator)