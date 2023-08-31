import styled from "@emotion/styled";

function Form({ onFormSubmit, children }) {
  return <StyledForm onSubmit={onFormSubmit}>{children}</StyledForm>;
}

const StyledForm = styled.form`
  padding: 20px;
  text-align: center;

  input {
    width: 92%;
    height: 30px;
    font-size: 1rem;
    outline: 0;
    border: 1px solid #d9d9d9;
    border-radius: 3px;
  }
`;

export default Form;
