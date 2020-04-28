import {createStackNavigator} from 'react-navigation-stack'
import Tray from '../containers/tc_screen';
import TraySettings from '../containers/settings_tc'

const HomeNavigator = createStackNavigator({

    Tray:{
        screen : Tray,
        navigationOptions:{
            headerShown: false
        }
            
    },
    TraySettings:{
        screen : TraySettings,
        navigationOptions:{
            headerShown: false
        }
            
    }
});

export default HomeNavigator