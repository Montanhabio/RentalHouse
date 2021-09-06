import React from "react";
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';
import {Feather} from '@expo/vector-icons';
import { TouchableOpacity } from "react-native";

import Home from './pages/Home';
import Detail from './pages/Detail';

const Stack = createStackNavigator();

function Routes(){
    return(
        <NavigationContainer>
            <Stack.Navigator>
                
                <Stack.Screen 
                name="Home" 
                component={Home}
                options={{
                    title: "Rental House",
                    headerTitleStyle: {
                        fontFamily: 'Montserrat_700Bold'
                    },
                    headerRight:() => (
                        <TouchableOpacity style={{marginRight:15}}>
                            <Feather 
                                name='shopping-bag'
                                size={24}
                                color= 'black'
                                
                            />
                        </TouchableOpacity>
                    )    
                }}
                />

                <Stack.Screen 
                name="Detail" 
                component={Detail}
                options={{
                    title: "Detail House",
                    headerTitleStyle: {
                        fontFamily: 'Montserrat_700Bold'
                    },
                    headerRight:() => (
                        <TouchableOpacity style={{marginRight:15}}>
                            <Feather 
                                name='shopping-bag'
                                size={24}
                                color= 'bcack'
                                
                            />
                        </TouchableOpacity>

                    )    
                }}
                />

            </Stack.Navigator>
        </NavigationContainer>
    )

}

export default Routes;