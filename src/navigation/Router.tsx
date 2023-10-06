import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import ConverterScreen from '../screens/ConverterScreen';
import { Home, Swap } from '../assets/SVG';
import { colors } from '../styles/colors';

const {Navigator, Screen} = createBottomTabNavigator();


const Routes: React.FC = () => {
    return (
        <NavigationContainer>
            <Navigator 
            screenOptions={{
                tabBarActiveTintColor: colors.active,
                tabBarInactiveTintColor: colors.purple02,
                unmountOnBlur: true,
                freezeOnBlur: true,
                tabBarShowLabel: false,
                // tabBarStyle: {
                //     //paddingVertical: 6,
                //     backgroundColor: colors.primaryDark,
                //     borderColor: colors.secondaryDark,
                // }
            }}
            initialRouteName='HomeScreen'>
                <Screen
                    name='HomeScreen'
                    component={HomeScreen}
                    options={{
                        unmountOnBlur: true,
                        headerShown: false,
                        tabBarIcon: ({color, size}) => <Home width={size} fill={color} />,
                    }}
                />
                <Screen
                    name='Converter'
                    component={ConverterScreen}
                    options={{
                        unmountOnBlur: true,
                        headerShown: false,
                        tabBarIcon: ({color, size}) => <Swap width={size} fill={color} />,
                    }}
                />
            </Navigator>
        </NavigationContainer>
    );
}

export default Routes;