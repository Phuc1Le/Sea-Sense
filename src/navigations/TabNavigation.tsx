import { StyleSheet } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/home/Home";
import { Box, Text, VStack } from "@gluestack-ui/themed";
import { BottomTabsParams } from "./config";
import Ionicons from "@expo/vector-icons/Ionicons";
import Quizz from "../screens/quizz-mode/Quizz";
import Practice from "../screens/guess-word/Practice";
import Puzzle from "../screens/puzzle/Puzzle";
import { UseTokenColor } from "../hook/UseTokenColor";

const Tab = createBottomTabNavigator<BottomTabsParams>();

interface ITabIcon {
  focused: boolean;
  name: keyof typeof Ionicons.glyphMap;
  title: string;
}
const TabIcon = ({ focused, name, title }: ITabIcon) => {
  const colors = UseTokenColor();
  return (
    <Box alignItems="center" justifyContent="center" minWidth={80}>
      <Ionicons
        name={name}
        size={20}
        color={focused ? colors.primary600 : colors.warmGray300}
      />
      <Text
        fontSize={10}
        fontWeight={"$medium"}
        color={focused ? colors.primary600 : colors.warmGray300}
      >
        {title}
      </Text>
    </Box>
  );
};

interface ITabData {
  id: number;
  tabName: keyof BottomTabsParams;
  title: string;
  iconName: keyof typeof Ionicons.glyphMap;
  component: any;
}

export const TabData: ITabData[] = [
  {
    id: 1,
    tabName: "Home",
    title: "Home",
    iconName: "home",
    component: Home,
  },
  {
    id: 2,
    tabName: "Quizz",
    title: "Quizz",
    iconName: "apps",
    component: Quizz,
  },
  {
    id: 3,
    tabName: "Practice",
    title: "Words",
    iconName: "bulb",
    component: Practice,
  },
  {
    id: 4,
    tabName: "Puzzle",
    title: "Puzzle",
    iconName: "extension-puzzle",
    component: Puzzle,
  },
];

const TabNavigation = () => {
  const colors = UseTokenColor();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          paddingTop: 12,
          height: 84,
        },
      }}
    >
      {TabData.map((tab) => (
        <Tab.Screen
          key={tab.id}
          name={tab.tabName}
          component={tab.component}
          options={{
            tabBarIcon: ({ focused }) => (
              <TabIcon
                focused={focused}
                name={tab.iconName}
                title={tab.title}
              />
            ),
            headerShown: true,
            title: tab.title,
            headerStyle: {
              backgroundColor: colors.white,
            },
            headerTitleStyle: {
              color: colors.primary600,
            },
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

export default TabNavigation;

const styles = StyleSheet.create({});