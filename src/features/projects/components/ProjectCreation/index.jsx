import { useState } from "react";

import Button from "../../../../components/shared/Button";
import Modal from "../../../../components/shared/Modal";
import Form from "../../../../components/shared/Form";

import useCreateProjectMutation from "../../hooks/useCreateProjectMutation";
import useAuth from "../../../authentication/hooks/useAuth";

function ProjectCreation() {
  const { currentUser } = useAuth();
  const { mutate } = useCreateProjectMutation();
  const [ fontFamilyName, setFontFamilyName ] = useState("");
  const [ isOpen, setIsOpen ] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function handleSubmit(ev) {
    ev.preventDefault();

    const { uid } = currentUser;

    mutate({ uid, fontFamilyName });
  }

  return (
    <div>
      <Button
        onButtonClick={openModal}
        appearance={{
          margin: 0,
          padding: 0,
          color: "#222",
          backgroundColor: "transparent",
          boxShadow: "none",
        }}
      >
        <h1
          css={{
            fontSize: "2rem",
            fontWeight: 900,
            fontFamily: "'Roboto', sans-serif",
            fontStyle: "italic",
          }}
        >
          create a project
        </h1>
      </Button>
      {isOpen && (
        <Modal
          onModalClick={closeModal}
          appearance={{ backgroundColor: "#fff" }}
        >
          <Form onFormSubmit={handleSubmit}>
            <input
              type="text"
              value={fontFamilyName}
              onChange={(ev) => setFontFamilyName(ev.target.value)}
              placeholder="Test Sans"
            />
            <Button
              type="submit"
              appearance={{ width: "100%", backgroundColor: "#fff" }}
            >
              <strong>create</strong>
            </Button>
          </Form>
        </Modal>
      )}
    </div>
  );
}

export default ProjectCreation;
