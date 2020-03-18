import React from "react";
import Modal from "react-modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBiohazard } from "@fortawesome/free-solid-svg-icons";
// import App from "./App";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "yellowgreen",
    borderRadius: "15px 15px 15px"
  }
};

function Mymodal() {
  var subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <button className="modal-trash" onClick={openModal}>
        <FontAwesomeIcon icon={faBiohazard} />
      </button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <h2 className="modal-title" ref={_subtitle => (subtitle = _subtitle)}>
          Do you want to delete the item ?
        </h2>
        <button className="modal-button" onClick={closeModal}>
          <p className="modal-button-text">close</p>
        </button>
        <button className="modal-button" onClick={closeModal}>
          <p className="modal-button-text">delete</p>
        </button>
      </Modal>
    </div>
  );
}

export default Mymodal;
