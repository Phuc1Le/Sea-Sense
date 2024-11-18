import { StyleSheet } from "react-native";
import React, { useState } from "react";
import {
  Box,
  Button,
  ButtonIcon,
  HStack,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  Text,
  VStack,
} from "@gluestack-ui/themed";
import { StatusBar } from "expo-status-bar";
import { ArrowLeft2 } from "iconsax-react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParams } from "../../navigations/config";
import { groupSea } from "../../db/slide-data";

type Props = {} & NativeStackScreenProps<RootStackParams, "Detail">;

const Detail = ({ navigation, route }: Props) => {
  const groupSeaName = route.params.groupSeaName;
  const [data] = useState(groupSea[groupSeaName]);
  return (
    <Box flex={1}>
      <StatusBar style="light" />
      <ImageBackground source={{ uri: data.image }} w="$full" height={240}>
        <SafeAreaView>
          <HStack>
            <Button
              variant="link"
              size="lg"
              px="$2"
              onPress={() => navigation.goBack()}
            >
              <ButtonIcon as={ArrowLeft2} size="xl" color="$white" />
            </Button>
          </HStack>
        </SafeAreaView>
      </ImageBackground>
      <ScrollView>
        {/* Title */}
        <ImageBackground flex={1} source={{ uri: "https://media.istockphoto.com/id/1143347756/vector/underwater-landscape-realistic-vector-background.jpg?s=612x612&w=0&k=20&c=NfdFUgjlg1IUe_WSgQYvgeKUqGZjTqfRDnuGTd5TXlg=" }} alt="Animal" w={"$full"} h={600} resizeMode="cover">
        <VStack p="$4" gap="$4">
          <Box marginTop={12}>
            <Text
              fontSize={"$2xl"}
              fontWeight={"$extrabold"}
              color="yellow"
            >
              {data.title}
            </Text>
          </Box>
          <VStack gap={"$2"}>
            <Text fontWeight={"$bold"} fontSize={"$lg"} color="purple">
              Body structure
            </Text>
            <Text color="white">{data.structure}</Text>
          </VStack>
          <VStack gap={"$1"}>
            <Text fontWeight={"$bold"} fontSize={"$lg"} color="purple">
              Habitat
            </Text>
            <Text color="white">{data.habitat}</Text>
          </VStack>
          <VStack gap={"$1"}>
            <Text fontWeight={"$bold"} fontSize={"$lg"} color="purple">
              Movement
            </Text>
            <Text color="white">{data.movement}</Text>
          </VStack>
          <VStack gap={"$1"}>
            <Text fontWeight={"$bold"} fontSize={"$lg"} color="purple">
              Reproduction
            </Text>
            <Text color="white">{data.behavior}</Text>
          </VStack>
          <VStack gap={"$1"}>
            <Text fontWeight={"$bold"} fontSize={"$lg"} color="purple">
              Adaptation
            </Text>
            <Text color="white">{data.adaptation}</Text>
          </VStack>
          <VStack gap={"$1"}>
            <Text fontWeight={"$bold"} fontSize={"$lg"} color="purple">
              Examples
            </Text>
            <Text color="white">{data.example}</Text>
          </VStack>
        </VStack>
        </ImageBackground>
      </ScrollView>
    </Box>
  );
};

export default Detail;
