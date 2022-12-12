import styled from "styled-components";

export default function Logo() {
    return (
        <LogoContainer>
        <h1>CINEFLEX</h1>
      </LogoContainer>
    )
}

const LogoContainer = styled.div`
  position: fixed;
  z-index: 2;
  top: 0;
  left: auto;
  width: 375px;
  height: 67px;
  background-color: #c3cfd9;
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 34px;
    line-height: 40px;
    color: #E8833A;
  }
`;