import styled from "styled-components"
import ScheduleCard from "./ScheduleCard"
import SelectedMovie from "./SelectedMovie"

export default function Schedule(props) {
    
    const { sessions, selectedMovie, selectedShowTime, setSelectedShowTime } = props

    
    return (
        <>
            <SelectTimeStyle>Selecione o horário</SelectTimeStyle>

            {sessions.days.map((d) => (
                <ScheduleCard key={d.id} days={d} setSelectedShowTime={setSelectedShowTime}/>
            ))}

            <SelectedMovie movie={selectedMovie} selectedShowTime={selectedShowTime}/>
            {/* alterar essas props aqui em cima pq deve ser do filme escolhido */}
        </>

        
    )
}

const SelectTimeStyle = styled.h2`
    text-align: center;
    line-height: 110px;
    font-size: 24px;
    color: #293845;
    letter-spacing: 0.04em;
    margin-top: 67px;
`

