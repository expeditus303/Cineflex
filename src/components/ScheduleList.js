import styled from "styled-components"
import ScheduleCard from "./ScheduleCard"
import SelectedMovie from "./SelectedMovie"

export default function Schedule(props) {
    
    const { sessions } = props

    console.log(sessions)
    console.log(sessions.days)
    
    return (
        <>
            <SelectTimeStyle>Selecione o horário</SelectTimeStyle>

            {sessions.days.map((s) => (
                <ScheduleCard key={s.id}sessions={s}/>
            ))}

            <SelectedMovie image={sessions.posterURL} title={sessions.title}/>
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
`

