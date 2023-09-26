import React from "react";
import {createNativeStackNavigator} from '@react-navigation/native';
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";

const AuthStack = createNativeStackNavigator();

function AuthRoutes(){
    return(
        <AuthStack.Navigator>
            <AuthStack.Screen name="SignIn" component={SignIn} options ={{headerShown: false,}}/>

            <AuthStack.Screen name="SignUp" component={SignUp}/>
        </AuthStack.Navigator>

    )
}

export default AuthRoutes;