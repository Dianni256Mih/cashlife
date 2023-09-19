import React from "react";
import {View, ActivityIndicator} from 'react-native';
import AuthRoutes from "./auth.routes";

function Routes(){
    const loading = false; //usuario carregando
    const signed = false; //usuario logado

    return signed ? <View></View> : <AuthRoutes/>;
    

}

export default Routes;