import styled from "styled-components";
import MovieCard from "./MovieCard";

export default function MoviesList(props) {
    const { movies, setSelectedMovie } = props;

    return (
        <>
            <SelectMovieStyle>Selecione o filme</SelectMovieStyle>
            <MovieListContainer>
                {movies.map((m) => (
                <MovieCard key={m.id} movies={m} setSelectedMovie={setSelectedMovie} />
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

