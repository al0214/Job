import Container from "../components/layout/Container/container";
import Title from "../components/Title";
import Workflow from "../components/Workflow/Workflow";
import Column from "../components/Column/Column";
import Modal from "../components/Modal/Modal";
import useModal from "../hooks/useModal";
import { useCallback } from "react";
import CardUpdateModal from "../components/CardUpdateModal/CardUpdateModal";

const KanbanBoard = () => {
  const [isOpen, openModal, closeModal] = useModal();

  const openCard = useCallback(() => {
    openModal();
  }, []);

  return (
    <>
      <Container>
        <Title>Kanban Board</Title>
        <Workflow>
          <Column title={"Todo"} theme={"color1"} openCard={openCard}></Column>
          <Column
            title={"In Progress"}
            theme={"color2"}
            openCard={openCard}
          ></Column>
          <Column title={"Done"} theme={"color3"} openCard={openCard}></Column>
        </Workflow>
      </Container>
      <Modal isOpen={isOpen} closeModal={closeModal}>
        <CardUpdateModal closeModal={closeModal}></CardUpdateModal>
      </Modal>
    </>
  );
};

export default KanbanBoard;
