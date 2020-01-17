import { Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './pages/Main';
import Profile from './pages/Profile';

const Routes = createAppContainer(
    createStackNavigator({
        Main: {
            screen: Main,
            navigationOptions: {
                title: 'FinDev'
            }
        },
        Profile: {
            screen: Profile,
            navigationOptions: {
                title: 'Perfil do Github'
            }
        }
    }, {
        defaultNavigationOptions: {
            headerTitleAlign: Platform.OS === 'android' ? "center" : '',
            headerBackTitleVisible: false,
            headerTintColor: "#fff",
            headerStyle: {
                backgroundColor: '#7d40e7'
            }
        }
    })
)

export default Routes;