import styled from "styled-components"

export default function SelectedMovie(props) {

    const { image, title } = props

    return (
        <>
        <SelectedMovieContainer>
            <div>
                <img src={image} alt="" />
            </div>
            <h3>{title}</h3>
        </SelectedMovieContainer>
        </>

        
    )
}

const SelectedMovieContainer = styled.div`
width: 375px;
height: 117px;
background: #DFE6ED;
border-top: 1px solid #9EADBA;
position: fixed;
bottom: 0px;
display: flex;
align-items: center;

div {
    width: 64px;
    height: 89px;
    background-color: red;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 14px;
}

img{
    width: 48px;
}

h3 {
    font-size: 26px;
    color: #293845;
}
`