import { StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Text, Box, HStack, VStack, Image } from "@gluestack-ui/themed";
import { useNavigation } from "@react-navigation/native";

type Props = {};

const MarineList = (props: Props) => {
  const navigation = useNavigation<any>();
  return (
    <VStack gap={"$4"}>
      <HStack justifyContent="space-between" mb={"$4"}>
        <Text fontWeight="$semibold" fontSize={"$xl"} color="$primary600">
          Ocean layers
        </Text>
      </HStack>
      <HStack h={"$96"} gap={"$4"}>
        <VStack flex={1} gap={"$4"}>
          <TouchableOpacity
            style={{ flex: 3 }}
            onPress={() => {
              navigation.navigate("DetailWaterArea", {
                waterName: "bientrung",
              });
            }}
          >
            <Image
              source={require("../../../assets/marine2.jpg")}
              alt="marine1"
              flex={3}
              w={"$full"}
              resizeMode="cover"
              rounded={"$xl"}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{ flex: 2 }}
            onPress={() => {
              navigation.navigate("DetailWaterArea", {
                waterName: "biensautham",
              });
            }}
          >
            <Image
              source={require("../../../assets/marine4.jpg")}
              alt="marine1"
              flex={2}
              w={"$full"}
              resizeMode="cover"
              rounded={"$xl"}
            />
          </TouchableOpacity>
        </VStack>
        <VStack flex={1} gap={"$4"}>
          <TouchableOpacity
            style={{ flex: 1 }}
            onPress={() => {
              navigation.navigate("DetailWaterArea", {
                waterName: "matbien",
              });
            }}
          >
            <Image
              source={require("../../../assets/marine1.jpg")}
              alt="marine1"
              flex={1}
              w={"$full"}
              resizeMode="cover"
              rounded={"$xl"}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{ flex: 2 }}
            onPress={() => {
              navigation.navigate("DetailWaterArea", {
                waterName: "biensau",
              });
            }}
          >
            <Image
              source={require("../../../assets/marine3.jpg")}
              alt="marine1"
              flex={2}
              w={"$full"}
              resizeMode="cover"
              rounded={"$xl"}
            />
          </TouchableOpacity>
        </VStack>
      </HStack>
      <Box>
        <TouchableOpacity
          style={{ flex: 1 }}
          onPress={() => {
            navigation.navigate("DetailWaterArea", {
              waterName: "day",
            });
          }}
        >
          <Image
            source={require("../../../assets/marine5.jpg")}
            alt="marine1"
            h={"$32"}
            w={"$full"}
            resizeMode="cover"
            rounded={"$xl"}
          />
        </TouchableOpacity>
      </Box>
    </VStack>
  );
};

export default MarineList;

const styles = StyleSheet.create({});
