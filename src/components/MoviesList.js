import styled from "styled-components";
import MovieCard from "./MovieCard";

export default function MoviesList(props) {
    const { movies } = props;

    return (
        <>
            <SelectMovieStyle>Select a movie</SelectMovieStyle>
            <MovieListContainer>
                {movies.map((m) => (
                <MovieCard image={m.posterURL} />
            ))}
            </MovieListContainer>
        </>
    );
}

const SelectMovieStyle = styled.h2`
    text-align: center;
    line-height: 110px;
`

const MovieListContainer = styled.div`
  width: 308px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;
