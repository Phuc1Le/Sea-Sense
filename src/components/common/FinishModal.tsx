import {
  Modal,
  ModalBackdrop,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Text,
  Box,
  Center,
  Button,
  ButtonText,
} from "@gluestack-ui/themed";
import { useNavigation } from "@react-navigation/native";
import { CloseCircle, TickCircle } from "iconsax-react-native";
import React from "react";

type Props = {
  showModal: boolean;
  setShowModal: any;
  idAnimal: string;
  isWinner: boolean;
};

const statusTitle = (winner: boolean) => {
  if (!winner) {
    return {
      title: "Oh no!!",
      description: "Try again",
    };
  }
  return {
    title: "Well done!!",
    description: "You did a great job!",
  };
};

const FinishModal = (props: Props) => {
  const navigation = useNavigation<any>();
  const { showModal, setShowModal, isWinner, idAnimal } = props;
  const handleBtn = () => {
    setShowModal(false);
    if (isWinner) {
      navigation.navigate("DetailAnimal", {
        animalName: idAnimal,
      });
    } else {
      navigation.navigate("TabNavigation");
    }
  };

  return (
    <Modal isOpen={showModal} onClose={() => {}}>
      <ModalBackdrop />
      <ModalContent p="$4">
        <ModalHeader>
          <Center w="$full">
            {isWinner ? (
              <TickCircle size="48" color="#289B1E" />
            ) : (
              <CloseCircle size="32" color="#A52A2A" />
            )}
          </Center>
        </ModalHeader>
        <ModalBody>
          <Center gap={"$2"}>
            <Text
              textAlign="center"
              fontWeight={"$semibold"}
              fontSize={"$lg"}
              color="$dark800"
            >
              {statusTitle(isWinner).title}
            </Text>
            <Text textAlign="center" color="$dark500" maxWidth={156}>
              {statusTitle(isWinner).description}
            </Text>
          </Center>
        </ModalBody>
        <ModalFooter>
          <Box w={"$full"} alignItems="center">
            <Button onPress={handleBtn}>
              <ButtonText>Finish</ButtonText>
            </Button>
          </Box>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default FinishModal;
