import { StyleSheet } from "react-native";
import React from "react";
import {
  CloseIcon,
  Icon,
  Image,
  Modal,
  ModalBackdrop,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  Text,
  VStack,
} from "@gluestack-ui/themed";

type Props = {
  show: boolean;
  setShow: any;
  source: { uri: string };
};

const PuzzleModal = ({ show, setShow, source }: Props) => {
  return (
    <Modal
      isOpen={show}
      onClose={() => {
        setShow(false);
      }}
      size="lg"
    >
      <ModalBackdrop />
      <ModalContent>
        <ModalHeader justifyContent="flex-end">
          <ModalCloseButton>
            <Icon as={CloseIcon} />
          </ModalCloseButton>
        </ModalHeader>
        <ModalBody>
          <VStack alignItems="center" mb="$8">
            <Image
              source={source}
              alt="result-img"
              height={300}
              aspectRatio="1"
              borderRadius={8}
              resizeMode = "stretch"
            />
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default PuzzleModal;

const styles = StyleSheet.create({});
