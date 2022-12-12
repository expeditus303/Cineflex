import { useEffect, useState } from "react";
import styled from "styled-components";
import MovieCard from "./MovieCard";
import axios from 'axios';

export default function MoviesList(props) {
    const {setSelectedMovie, setSelectedShowTime, setSelectedSeat } = props;

    const [movies, setMovies] = useState([])

    useEffect(() => {
        const ask = axios.get("https://mock-api.driven.com.br/api/v8/cineflex/movies")

        ask.then((answer) => setMovies(answer.data))
    }, [])

    return (
        <>
            <SelectMovieStyle>Selecione o filme</SelectMovieStyle>
            <MovieListContainer>
                {movies.map((m) => (
                <MovieCard key={m.id} movies={m} setSelectedMovie={setSelectedMovie} setSelectedShowTime={setSelectedShowTime} setSelectedSeat={setSelectedSeat} />
            ))}
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
`

const MovieListContainer = styled.div`
  width: 308px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;

