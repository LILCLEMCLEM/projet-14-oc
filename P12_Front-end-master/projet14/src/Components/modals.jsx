import { Box, Modal } from "@mui/material";

function ModalComp({ open, handleClose }) {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="parent-modal-title"
      aria-describedby="parent-modal-description"
    >
      <Box
        style={{
          position: "absolute",
          left: "42%",
          top: "40%",
          color: "white",
          backgroundColor: "black",
          padding: "20px",
          "border-radius": "15px",
        }}
      >
        <h2 id="parent-modal-title">Employé crée</h2>
        <p id="parent-modal-description">l'employée a été ajouté a la liste</p>
      </Box>
    </Modal>
  );
}

export default ModalComp;
