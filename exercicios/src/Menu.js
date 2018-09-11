import React from 'react'
import {Text} from 'react-native'
import {createDrawerNavigator} from 'react-navigation'


export default createDrawerNavigator({
    App1: {
        screen: () => <Text>App1</Text>,
        navigationOptions: {title: 'App1'}
    },
    App2: {
        screen: () => <Text>App2</Text>,
        navigationOptions: {title: 'App2'}
    },
    App3: {
        screen: () => <Text>App3</Text>,
        navigationOptions: {title: 'App3'}
    }
},{ drawerWidth: 300 })