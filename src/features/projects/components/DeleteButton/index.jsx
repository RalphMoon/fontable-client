import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Button from "../../../../components/shared/Button";
import Image from "../../../../components/shared/Image";
import Modal from "../../../../components/shared/Modal";

import useDeleteProjectMutation from "../../hooks/useDeleteProjectMutation";

import deleteIconUrl from "../../../../assets/delete_icon.svg";

function DeleteButton({ projectName, projectId }) {
  const { mutate, isSuccess } = useDeleteProjectMutation();
  const navigate = useNavigate("/");
  const [ isOpen, setIsOpen ] = useState(false);

  function deleteProject(id) {
    mutate({ projectId: id });
  }

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  useEffect(() => {
    if (isSuccess) {
      navigate("/");
    }
  }, [ isSuccess, navigate ]);

  return (
    <>
      <Button
        onButtonClick={openModal}
        appearance={{
          display: "inline-block",
          padding: "0",
          margin: "0",
          backgroundColor: "transparent",
          boxShadow: "none",
        }}
      >
        <Image
          url={deleteIconUrl}
          appearance={{ width: "20px", height: "20px" }}
        />
      </Button>
      {isOpen && (
        <Modal
          onModalClick={closeModal}
          appearance={{ backgroundColor: "#fff" }}
        >
          <div css={{ padding: "20px" }}>
            Are you sure you want to delete <strong>{projectName}</strong>?
            <div css={{ display: "flex" }}>
              <Button
                onButtonClick={closeModal}
                appearance={{
                  marginRight: "5%",
                  width: "95%",
                  backgroundColor: "#fff",
                }}
              >
                Cancel
              </Button>
              <Button
                onButtonClick={() => deleteProject(projectId)}
                appearance={{
                  width: "95%",
                  backgroundColor: "#222",
                  color: "#fff",
                }}
              >
                Delete
              </Button>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
}

export default DeleteButton;
