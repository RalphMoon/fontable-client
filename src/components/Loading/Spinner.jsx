import styled from "@emotion/styled";

function Spinner() {
  return (
    <Overlay>
      <StyledSpinner />
    </Overlay>
  );
}

const Overlay = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  justify-content: center;
  align-items: center;
`;

const StyledSpinner = styled.div`
  display: inline-block;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: linear-gradient(to right, rgb(22, 113, 202) 50%, transparent 50%);
  box-shadow: 4px -40px 60px 5px rgb(26, 117, 206) inset;
  animation: spin 1s infinite linear;

  &::before {
    display: block;
    content: "";
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 90px;
    height: 90px;
    background-color: #fff;
    border-radius: 50%;
  }
`;

export default Spinner;
