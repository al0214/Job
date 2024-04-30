import Modal from "react-modal";

const Modals = ({ children, isOpen, style, contentLabel, closeModal }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={style}
      contentLabel={contentLabel}
    >
      {children}
    </Modal>
  );
};

export default Modals;
