import React, { Component } from 'react';
import {StyleSheet,Image,View,Text,TouchableOpacity} from 'react-native';
import {DrawerNavigator,DrawerView,DrawerItems,StackNavigator} from 'react-navigation';
import Main from './Main.js'
import Profile from './Profile.js'
const CustomDrawerContentComponent = (props) => (
  <View style={styles.container}>
    <Image source={require('./IMG_8203.jpg')} style={styles.background_image}>
    <View style={styles.opacity_container}>
      <View style={styles.icon_container}>
          <Image source={require('./ic_main_flower.png')} style={styles.icon_image}/>
          <Text style={styles.text}>ALLURING, ATTRACTIVE, BLESFUL</Text>
      </View>
    </View>
    </Image>
    <DrawerItems {...props}
      activeTintColor='#B3EFEFEF'
      activeBackgroundColor='rgba(0, 0, 0, .1)'
      inactiveTintColor='#B3EFEFEF'
      inactiveBackgroundColor='transparent' />
  </View>
);


const stackMain = StackNavigator({
    Main: { screen: Main }
}, {
  navigationOptions: ({ navigation }) => ({
    headerLeft: (
        < TouchableOpacity onPress={() => navigation.navigate('DrawerOpen')}>
            <Image source={require('./menu.png')} style={{ width: 20, height: 20, marginLeft: 15 }} />
        </TouchableOpacity >
    ),
    headerRight:(<Image source={require('./notification.png')} style={{ width: 24, height: 24,marginRight: 15 }} />),
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('./home-2.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
  })
});
const stackProfile = StackNavigator({
    Profile: { screen: Profile }
}, {
  navigationOptions: ({ navigation }) => ({
    headerLeft: (
        < TouchableOpacity onPress={() => navigation.navigate('DrawerOpen')}>
            <Image source={require('./menu.png')} style={{ width: 24, height: 24, marginLeft: 10 }} />
        </TouchableOpacity >
    ),
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('./man-user.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
  })
});


const ExplorerApp = DrawerNavigator({
  Main: {screen: stackMain},
  Profile: {screen: stackProfile},

}, {
        contentComponent: (props) => <CustomDrawerContentComponent {...props} />
});


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#157064'
  },
  icon_container: {
    height: 150,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: '#CCEFEFEF'
  },
  opacity_container: {
    backgroundColor:'rgba(0,0,0,.6)'
  },
  icon_image: {
    margin: 10,
  },
  background_image: {
    width: null,
    height: 150,
    resizeMode: 'cover',
  },
  icon: {
   width: 18,
   height: 18,
   resizeMode: 'contain',
 },

});
export default () => <ExplorerApp />;
