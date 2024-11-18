import { ImageSourcePropType, StyleSheet } from "react-native";
import React from "react";
import { Box, ImageBackground, Text, VStack } from "@gluestack-ui/themed";

export interface MemberImageProps {
  id: number;
  image: string;
  title: string;
  description: string;
}

export default function MemberImage(props: MemberImageProps) {
  const { image, title, description } = props;

  return (
    <Box rounded={"$2xl"} overflow="hidden" height={"$96"}>
      <ImageBackground
        source={{ uri: image }}
        w="$full"
        alt="Animal"
        h={"$full"}
        resizeMode={"stretch"}
      >
        <Box p={"$4"} flexDirection="column" justifyContent="flex-end" flex={1}>
          <VStack
            gap={"$3"}
            w={"$full"}
            bg="$white"
            opacity={"$60"}
            p="$4"
            borderRadius={"$2xl"}
          >
            <Text color="$black" fontSize={18} fontWeight="$bold">
              {title}
            </Text>
            <Text color="$black" ellipsizeMode="tail" numberOfLines={4}>
              {description}
            </Text>
          </VStack>
        </Box>
      </ImageBackground>
    </Box>
  );
}

const styles = StyleSheet.create({});
