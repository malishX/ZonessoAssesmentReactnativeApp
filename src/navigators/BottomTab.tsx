import { Activity, Chat, Post, User, Home } from '@/screens';
import { ACTIVITY, CHAT, POST, USER, HOME, DASHBOARD } from '@/utils/Constants';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, Platform, StyleSheet, View } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import Add_Post from '@/theme/assets/images/bottom_tab/Add_Post.png'
import { useTheme } from '@/theme';
import { Add_Post_Icon_Red, Bell_Icon_Black, Bell_Icon_Red, Home_Icon_Black, Home_Icon_Red, Messsage_Icon_Black, Messsage_Icon_Red, User_Icon_Black, User_Icon_Red } from '@/theme/assets/Svgs/Icons';
import HomeNavigator from './HomeNavigator';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  const navigation = useNavigation();
  const { colors } = useTheme();

  // Common tab options
  const tabOptions = {

    tabBarLabelStyle: {
      fontSize: 10,
      fontWeight: 'bold',
      marginBottom: Platform.OS == "android" ? RFPercentage(1) : RFPercentage(0),
    },
    // tabBarIconStyle: {
    //   height: RFPercentage(4),
    //   width: RFPercentage(4),
    // },
    tabBarInactiveTintColor: colors.textblack,
    tabBarActiveTintColor: colors.red500,


  };

  // Common header style
  const commonHeaderStyle = {
    backgroundColor: colors.red500,
  };

  return (
    <View style={{ flex: 1 }}>
      <Tab.Navigator

        screenOptions={() => ({
          tabBarHideOnKeyboard: true,
          headerShown: false,
          indicatorStyle:{
            // backgroundColor:colors.red500,
            // borderWidth: 3,
            // borderColor: colors.red500,
          
          
          },
          tabBarVisibilityAnimationConfig:{
            show: {
              animation: 'timing',
              config: {
                duration: 100,
              },
            },
            hide: {
              animation: 'timing',
              config: {
                duration: 100,
              },
            },
          
          },
          tabBarShowLabel: true,
          tabBarLabelPosition: 'below-icon',

          headerBackgroundContainerStyle: { height: 0 },
          headerTitleContainerStyle: { height: 0 },
          tabBarStyle: {
            backgroundColor: colors.white,
            height: Platform.OS === 'ios' ? RFPercentage(11) : RFPercentage(9),
            // borderTopWidth: 3,
            // borderColor: colors.red500,
            
            
          },
          
          ...tabOptions,
        })}
      // initialRouteName={CALL_LOGS_NAVIGATOR}
      >
        {/* Home Screen */}


        {/* Leads Screen */}
        <Tab.Screen
          options={{
            ...tabOptions,
            tabBarLabel: 'Home',
            headerStyle: commonHeaderStyle,
            tabBarIcon: ({ focused }) => (
              focused ? <Home_Icon_Red/> : <Home_Icon_Black/>
            ),
          }}
        name={DASHBOARD}
        component={HomeNavigator}
        />
        {/* chat navigator */}
        <Tab.Screen
          options={{
            ...tabOptions,
            // tabBarLabel: 'Chats',
            headerStyle: commonHeaderStyle,
            tabBarIcon: ({ focused }) => (
              focused ? <Bell_Icon_Red/> : <Bell_Icon_Black/>
            ),
          }}
          name={ACTIVITY}
          component={Activity}
        />

        {/* Settings Screen */}

        {/* Call Logs Screen */}
        <Tab.Screen
          options={{
            tabBarLabelStyle: {
              fontSize: 10,
              fontWeight: 'bold',
              marginBottom: Platform.OS == "android" ? RFPercentage(0.2) : RFPercentage(0),
              color: colors.red500,
            },
            // tabBarIconStyle: {
            //   height: RFPercentage(4),
            //   width: RFPercentage(4),
            // },
            tabBarInactiveTintColor: colors.textblack,
            tabBarActiveTintColor: colors.red500,
            // tabBarLabel: 'Calls',
              tabBarIcon: ({ focused }) => (
                <Image source={Add_Post} />
              ),
          }}
          name={POST}
          component={Post}
        />

        {/* Notifications Screen */}
        <Tab.Screen
          options={{
            ...tabOptions,
            // tabBarLabel: 'C',
            tabBarIcon: ({ focused }) => (
              focused?<Messsage_Icon_Red/>:<Messsage_Icon_Black/>
            ),
          }}
          name={CHAT}
          component={Chat}

        />
        <Tab.Screen
          options={{
            ...tabOptions,
            // tabBarLabel: 'C',
            tabBarIcon: ({ focused }) => (
              focused?<User_Icon_Red/>:<User_Icon_Black/>
            ),
          }}
          name={USER}
          component={User}

        />



      </Tab.Navigator>
    </View>
  );
};

export default BottomTabs;

const styles = StyleSheet.create({
  pressBtn: {
    width: RFPercentage(5),
    height: RFPercentage(5),
    position: 'absolute',
  },
});
