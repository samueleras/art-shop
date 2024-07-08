import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
} from "@chakra-ui/react";
import CarFilter from "./CarFilter";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const CarFilterModal = ({ isOpen, onClose }: Props) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      motionPreset="slideInBottom"
      isCentered
      size={{ base: "xs", md: "md" }}
    >
      <ModalOverlay />
      <ModalContent paddingBottom={3}>
        <ModalCloseButton />
        <ModalBody>
          <CarFilter />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default CarFilterModal;
