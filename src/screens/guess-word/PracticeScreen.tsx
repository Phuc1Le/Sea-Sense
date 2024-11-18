import { StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import { Box, Button, Text, HStack, View, Image } from "@gluestack-ui/themed";
import React, { useRef, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";
import { QuizInput } from "react-native-quiz-input";
import { EStatus } from "../../components/common/CharacterBox";
import { practiceData } from "../../db/practice";
import { UseTokenColor } from "../../hook/UseTokenColor";

const imgWidth = Math.round(0.8 * Dimensions.get("screen").width);

const bgHeight = Math.round(((5 / 4) * imgWidth) / 6);

interface LevelInfo {
  text: string;
  level: string;
}

const levels: LevelInfo[] = [
  { text: "Easy", level: "easy" },
  { text: "Medium", level: "medium" },
  { text: "Hard", level: "hard" },
];

const show: { [key: string]: string } = {
  easy: "Easy",
  medium: "Medium",
  hard: "Hard",
};

const PracticeScreen = () => {
  const [status, setStatus] = useState<EStatus[]>([
    EStatus.NORMAL,
    EStatus.NORMAL,
    EStatus.NORMAL,
  ]);
  const [point, setPoint] = useState(0);
  const colors = UseTokenColor();
  const route = useRoute<any>();
  const navigation = useNavigation<any>();
  const [currQues, setCurrQues] = useState(0);
  const level: string =
    route.params && route.params.level ? route.params.level : "easy";
  const [correct, setCorrect] = useState<boolean | null>(null);
  const [next, setNext] = useState(false);

  const [practices] = useState(practiceData[level]);

  const onChange = (data: any) => {
    const ans = practices[currQues].ans;
    if (data.wordString.length == ans.length) {
      const ansText = ans.join("");
      setCorrect(ansText.toLowerCase() === data.wordString.toLowerCase());
      setNext(true);
    } else {
      setCorrect(null);
    }
  };

  const onNext = () => {
    if (currQues < practices.length - 1) {
      setCurrQues(currQues + 1);
      if (correct) {
        setPoint(point + 1);
      }
      const newStatus = [...status];
      for (let index = 0; index < newStatus.length; index++) {
        newStatus[index] = EStatus.NORMAL;
      }
      setStatus(newStatus);
    } else {
      navigation.navigate("PracticeResult", { level: level, point });
    }
  };

  return (
    <Box bg="$white" flex={1} alignItems="center" p="$4" gap={4}>
      <Box
        p="$4"
        bg="$warmGray100"
        borderRadius={8}
        w={"$full"}
        alignItems="center"
      >
        <Image
          alt="image-ques"
          source={{
            uri: practices[currQues].img,
          }}
          width={320}
          height={200}
          resizeMode="contain"
        />
      </Box>
      <Box>
        <Text style={styles.text__ques}>{practices[currQues].ques}</Text>
      </Box>
      <HStack>
        <QuizInput
          size="large"
          borderColor={colors.primary600}
          wordStructure={practices[currQues].ans.map((c) => true)}
          onChange={onChange}
          maxBoxesPerLine={6}
          key={currQues}
        />
      </HStack>
      {correct != null && (
        <Text mt="$4">{correct ? "Chính xác" : "Chưa chính xác"}</Text>
      )}
      <HStack mt="$2" gap="$4">
        <Button
          rounded={"$2xl"}
          onPress={() => navigation.goBack()}
          variant="outline"
        >
          <Text
            color="$primary600"
            fontWeight={"$semibold"}
            fontSize={20}
            lineHeight={28}
          >
            Finish
          </Text>
        </Button>
        {next && (
          <Button rounded={"$2xl"} onPress={onNext} variant="solid">
            <Text
              color="$white"
              fontWeight={"$semibold"}
              fontSize={20}
              lineHeight={28}
            >
              {currQues === practices.length - 1 ? "Finish" : "Continue"}
            </Text>
          </Button>
        )}
      </HStack>
    </Box>
  );
};

export default PracticeScreen;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    alignItems: "center",
  },
  header: {
    width: "100%",
    height: "30%",
    backgroundColor: "#FFF9EC",
    alignItems: "center",
    borderBottomStartRadius: 30,
    borderBottomEndRadius: 30,
  },
  text_main: {
    color: "#A1783F",
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 80,
  },
  text_level: {
    color: "#3D7944",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  text__ques: {
    color: "#757575",
    fontSize: 16,
    fontWeight: "700",
  },
  btn: {
    width: "80%",
    height: 40,
    borderRadius: 5,
    backgroundColor: "#FCD02E",
  },
  box__choose: {
    flexDirection: "row",
    marginVertical: 20,
  },
  choose: {
    width: 50,
    height: 50,
    alignItems: "center",
  },
});
