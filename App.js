import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Text, View} from 'react-native';
import {HomeIcon, FavoriteScreenIcon, DetailsScreenIcon, MenuScreenIcon, ProfileScreenIcon} from './src/components/Icons'

const homeName = 'Home';
const favoriteName = 'Favorite';
const detailsName = 'details';
const settingsName = 'Settings';
const anotherName = 'Other';
const profileName = 'Profile';

const Tab = createBottomTabNavigator();

function MainContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName={homeName}>
        <Tab.Screen
          options={{
            tabBarLabel: '',
            tabBarIcon: ({focused}) => {
              return <HomeIcon isActive={focused} />;
            },
          }}
          name={homeName}
          component={HomeScreen}
        />
        <Tab.Screen
          options={{
            tabBarLabel: '',
            tabBarIcon: ({focused}) => {
              return <FavoriteScreenIcon isActive={focused} />;
            },
          }}
          name={favoriteName}
          component={FavoriteScreen}
        />
        <Tab.Screen
          options={{
            tabBarLabel: '',
            tabBarIcon: ({focused}) => {
              return <DetailsScreenIcon isActive={focused} />;
            },
          }}
          name={detailsName}
          component={DetailsScreen}
        />
        <Tab.Screen
          options={{
            tabBarLabel: '',
            tabBarIcon: ({focused}) => {
              return <MenuScreenIcon isActive={focused} />;
            },
          }}
          name={anotherName}
          component={IconsScreen}
        />
        <Tab.Screen
          options={{
            tabBarLabel: '',
            tabBarIcon: ({focused}) => {
              return <ProfileScreenIcon isActive={focused} />;
            },
          }}
          name={profileName}
          component={ProfileScreen}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default function App() {
  return <MainContainer />;
}
