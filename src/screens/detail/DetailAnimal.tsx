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
import { animal } from "../../db/slide-data";
import { ButtonText } from "@gluestack-ui/themed";

type Props = {} & NativeStackScreenProps<RootStackParams, "DetailAnimal">;

const DetailAnimal = ({ navigation, route }: Props) => {
  const animalName = route.params.animalName;
  console.log("🚀 ~ DetailAnimal ~ animalName:", animalName);
  const [infoAnimal] = useState(animal[animalName]);
  console.log("🚀 ~ DetailAnimal ~ infoAnimal:", infoAnimal);
  if (!infoAnimal) {
    navigation.goBack();
  }
  return (
    <Box flex={1}>
      <StatusBar style="light" />
      <ImageBackground
        source={{ uri: infoAnimal.image }}
        w="$full"
        height={240}
      >
        <SafeAreaView>
          <HStack>
            
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
              textTransform="capitalize"
            >
              {infoAnimal.name}
            </Text>
          </Box>
          <VStack gap={"$2"}>
            <Text fontWeight={"$bold"} fontSize={"$lg"} color="purple">
              Body structure
            </Text>
            <Text color="$white">{infoAnimal.size}</Text>
          </VStack>
          <VStack gap={"$1"}>
            <Text fontWeight={"$bold"} fontSize={"$lg"} color="purple">
              Habitat
            </Text>
            <Text color="$white">{infoAnimal.habitat}</Text>
          </VStack>
          <VStack gap={"$1"}>
            <Text fontWeight={"$bold"} fontSize={"$lg"} color="purple">
              Lifespan
            </Text>
            <Text color="$white">{infoAnimal.age}</Text>
          </VStack>
          <VStack gap={"$1"}>
            <Text fontWeight={"$bold"} fontSize={"$lg"} color="purple">
              Reproduction
            </Text>
            <Text color="$white">{infoAnimal.behavior}</Text>
          </VStack>
          <VStack gap={"$1"}>
            <Text fontWeight={"$bold"} fontSize={"$lg"} color="purple">
              Appearance
            </Text>
            <Text color="$white">{infoAnimal.color}</Text>
          </VStack>
          <VStack gap={"$1"}>
            <Text fontWeight={"$bold"} fontSize={"$lg"} color="purple">
              Food
            </Text>
            <Text color="$white">{infoAnimal.food}</Text>
          </VStack>
          <VStack gap={"$1"}>
            <Text fontWeight={"$bold"} fontSize={"$lg"} color="purple">
              Fun fact
            </Text>
            <Text color="$white">{infoAnimal.fun}</Text>
          </VStack>
        </VStack>
        <Box w={"$full"} alignItems="center">
          <Button
            onPress={() => {
              navigation.navigate("TabNavigation");
            }}
            variant="outline"
            backgroundColor="$white"
          >
            <ButtonText color="$red">End</ButtonText>
          </Button>
        </Box>
        </ImageBackground>
      </ScrollView>
    </Box>
  );
};

export default DetailAnimal;
