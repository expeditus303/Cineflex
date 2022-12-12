import styled from "styled-components"

export default function MovieCard(props) {

    const { movies, setSelectedMovie, setSelectedShowTime, setSelectedSeat } = props

    function selectMovie(s) {
        setSelectedMovie(s)
        setSelectedShowTime([])
        setSelectedSeat([])
    }

    return (
        <MovieCardContainer>
            <img src={movies.posterURL} alt="" onClick={() => selectMovie(movies)}/>
        </MovieCardContainer>
    )
}

const MovieCardContainer = styled.div`
    width: 129px;
    height: 193px;
    margin-bottom: 27px;
    
    img {
        width: 100%;
    }

    &:hover {
        cursor: pointer;
    }
`