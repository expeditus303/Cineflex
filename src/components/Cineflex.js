import styled from "styled-components";
import MoviesList from "./MoviesList";
import movies from "../MOVIES"

export default function Cineflex() {
  return (
    <>
      <LogoContainer>
        <h1>CINEFLEX</h1>
      </LogoContainer>

      <MoviesList movies={movies}/>
    </>
  );
}

const LogoContainer = styled.div`
  position: sticky;
  top: 0;
  right: 0;
  left: auto;
  width: 100%;
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
