import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Task from "./src/pages/Task/";
import NewTask from "./src/pages/NewTask/";
import Filter from "./src/pages/Filter/";
import AuthenticationLogin from "./src/pages/auth/Login/";
import AuthenticationCreate from "./src/pages/auth/Create/";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="AuthenticationLogin">
        <Stack.Screen 
          name="AuthenticationLogin"
          component={AuthenticationLogin}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen 
          name="AuthenticationCreate"
          component={AuthenticationCreate}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen 
          name="Task"
          component={Task}
        />
        <Stack.Screen 
          name="New Task"
          component={NewTask}
        />
        <Stack.Screen 
          name="Filtrar"
          component={Filter}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

