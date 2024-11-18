import { StyleSheet } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ErrorOverlay from "../components/common/ErrorOverlay";
import LoadingOverlay from "../components/common/LoadingOverlay";
import { RootStackParams } from "./config";
import TabNavigation from "./TabNavigation";
import QuizzResult from "../screens/quizz-mode/QuizzResult";
import QuizzScreen from "../screens/quizz-mode/QuizzScreen";
import PracticeResult from "../screens/guess-word/PracticeResult";
import PracticeScreen from "../screens/guess-word/PracticeScreen";
import Detail from "../screens/detail/Detail";
import { UseTokenColor } from "../hook/UseTokenColor";
import PuzzleScreen from "../screens/puzzle/PuzzleScreen";
import DetailWaterArea from "../screens/detail/DetailWaterArea";
import DetailAnimal from "../screens/detail/DetailAnimal";

const Stack = createNativeStackNavigator<RootStackParams>();

const Root = () => {
  const colors = UseTokenColor();
  return (
    <>
      <LoadingOverlay />
      <ErrorOverlay />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="TabNavigation" component={TabNavigation} />
          <Stack.Screen name="Detail" component={Detail} />
          <Stack.Screen name="DetailAnimal" component={DetailAnimal} />
          <Stack.Screen name="DetailWaterArea" component={DetailWaterArea} />

          <Stack.Screen
            name="QuizzResult"
            component={QuizzResult}
            options={{
              headerShown: true,
              title: "Quiz result",
              headerBackVisible :false,
              headerStyle: {
                backgroundColor: colors.white,
              },
              headerTitleStyle: {
                color: colors.primary600,
              },
              headerTintColor: colors.primary600,
            }}
          />
          <Stack.Screen
            name="QuizzScreen"
            component={QuizzScreen}
            options={{
              headerShown: true,
              title: "Quizzz",
              headerBackVisible :false,
              headerStyle: {
                backgroundColor: colors.white,
              },
              headerTitleStyle: {
                color: colors.primary600,
              },
              headerTintColor: colors.primary600,
            }}
          />
          <Stack.Screen
            name="PracticeScreen"
            component={PracticeScreen}
            options={{
              headerShown: true,
              title: "WordGuess",
              headerStyle: {
                backgroundColor: colors.white,
              },
              headerTitleStyle: {
                color: colors.primary600,
              },
              headerTintColor: colors.primary600,
            }}
          />
          <Stack.Screen
            name="PracticeResult"
            component={PracticeResult}
            options={{
              headerShown: true,
              title: "Result",
              headerBackVisible :false,
              headerStyle: {
                backgroundColor: colors.white,
              },
              headerTitleStyle: {
                color: colors.primary600,
              },
              headerTintColor: colors.primary600,
            }}
          />
          <Stack.Screen
            name="PuzzleScreen"
            component={PuzzleScreen}
            options={{
              headerShown: true,
              title: "Puzzle",
              headerBackVisible :false,
              headerStyle: {
                backgroundColor: colors.white,
              },
              headerTitleStyle: {
                color: colors.primary600,
              },
              headerTintColor: colors.primary600,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default Root;

const styles = StyleSheet.create({});