import styled from "styled-components"

export default function selectedMovie(props) {

    const { selectedMovie, selectedShowTime } = props

    console.log(selectedMovie)

    return (
        <>
        <SelectedMovieContainer>
            <div>
                <img src={selectedMovie.posterURL} alt="" />
            </div>
            <div id="title">
                <h3>{selectedMovie.title}</h3>
                <h3>{selectedShowTime[1]} {selectedShowTime.length === 0 ? "" : "-"} {selectedShowTime[0]}</h3>
            </div>
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
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 14px;
}

img{
    width: 48px;
}

h3 {
    font-size: 20px;
    color: #293845;
    margin-bottom: 5px;
}

#title {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: baseline;
    justify-items: center;
}
`