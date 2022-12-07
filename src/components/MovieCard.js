import styled from "styled-components"

export default function MovieCard(props) {

    const { image } = props

    return (
        <MovieCardContainer>
            <img src={image} alt="" />
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
`