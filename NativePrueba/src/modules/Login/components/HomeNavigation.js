import {createStackNavigator} from 'react-navigation-stack'
import Home from '../containers/home';
import HomeSettings from '../containers/settings_home';


const HomeNavigator = createStackNavigator({

    Home:{
        screen : Home,
        navigationOptions:{
            headerShown: false
        }
            
    },
    HomeSettings:{
        screen : HomeSettings,
        navigationOptions:{
            headerShown: false
        }
            
    }
});

export default HomeNavigator