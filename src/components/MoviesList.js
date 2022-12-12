import { useEffect, useState } from "react";
import styled from "styled-components";
import MovieCard from "./MovieCard";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export default function MoviesList(props) {
  const { setSelectedMovie, setSelectedShowTime, setSelectedSeat } = props;

  const [movies, setMovies] = useState([]);

  const { idFilme } = useParams();

  useEffect(() => {
    const ask = axios.get(
      "https://mock-api.driven.com.br/api/v8/cineflex/movies"
    );

    ask.then((answer) => setMovies(answer.data));
  }, []);

  return (
    <>
      <SelectMovieStyle>Selecione o filme</SelectMovieStyle>
      <MovieListContainer>
        {movies.map((m) => (
          <Link to={`/sessoes/${m.id}`} key={m.id}>
            <MovieCard
              key={m.id}
              movies={m}
              setSelectedMovie={setSelectedMovie}
              setSelectedShowTime={setSelectedShowTime}
              setSelectedSeat={setSelectedSeat}
            />

          </Link>
        ))}

        <ButtonToTop>
            <button onClick={() => window.scrollTo(0, 0)}>
            Voltar ao topo
            </button> 
        </ButtonToTop>
      </MovieListContainer>
    </>
  );
}




const SelectMovieStyle = styled.h2`
  text-align: center;
  line-height: 110px;
  font-size: 24px;
  color: #293845;
  letter-spacing: 0.04em;
  margin-top: 67px;
`;

const MovieListContainer = styled.div`
  width: 308px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const ButtonToTop = styled.div`
margin-bottom: 40px;
width: 100%;
display: flex;
justify-content: center;


button {
    display: block;
    height: 50px;
    width: 100%;
    border-radius: 8px;
    background-color: #E8833A;
    color: #ffffff;
    font-size: 18px;
    font-weight: 800;
    border-style: none;
}
`
