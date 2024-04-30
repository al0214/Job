import useModal from "../../hooks/useModal";

const CardUpdateModal = ({ children, closeModal }) => {
 
  return (
    <>
      <div className="modal-header">
        <button className="close" title="닫기" onClick={() => closeModal()}>
          X
        </button>
      </div>
      <form action="" id="" name="" method=""></form>
    </>
  );
};

export default CardUpdateModal;
