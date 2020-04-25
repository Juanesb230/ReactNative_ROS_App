import {createStackNavigator} from 'react-navigation-stack'
import Teleop from '../containers/tele_screen';
import TeleSettings from '../containers/settings_tele'


const HomeNavigator = createStackNavigator({

    Teleop:{
        screen : Teleop,
        navigationOptions:{
            headerShown: false
        }
            
    },
    TeleSettings:{
        screen : TeleSettings,
        navigationOptions:{
            headerShown: false
        }
            
    }
});

export default HomeNavigator