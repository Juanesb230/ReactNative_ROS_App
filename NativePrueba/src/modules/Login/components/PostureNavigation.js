import {createStackNavigator} from 'react-navigation-stack'
import Posture from '../containers/pc_srceen';
import PostureSettings from '../containers/settings_pc'

const HomeNavigator = createStackNavigator({

    Posture:{
        screen : Posture,
        navigationOptions:{
            headerShown: false
        }
            
    },
    PostureSettings:{
        screen : PostureSettings,
        navigationOptions:{
            headerShown: false
        }
            
    }
});

export default HomeNavigator