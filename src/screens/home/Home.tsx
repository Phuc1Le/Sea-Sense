import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Box, ScrollView, VStack } from "@gluestack-ui/themed";
import SlideImage from "./component/SlideImage";
import {
  groupSea,
  headerSlideData,
} from "../../db/slide-data";
import MarineList from "./component/MarineList";
import CardList from "./component/CardList";
import { EDisplayType } from "../../types";
import { NativeStackScreenProps } from "react-native-screens/lib/typescript/native-stack/types";
import { BottomTabsParams, RootStackParams } from "../../navigations/config";

type Props = {} & NativeStackScreenProps<BottomTabsParams, "Home">;

const Home = ({ navigation }: Props) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <VStack flex={1} p={"$4"} gap={"$4"} bg="$white">
        <SlideImage data={headerSlideData} />
        <MarineList />
        <CardList
          title="Sea creature groups"
          data={Object.values(groupSea)}
          displayType={EDisplayType.LARGE}
        />
        {/* <CardList
          title="Động vật thân mềm"
          data={softAnimal}
          displayType={EDisplayType.NORMAL}
        /> */}
      </VStack>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({});
