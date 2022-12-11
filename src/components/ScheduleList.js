import axios from "axios"
import { useEffect, useState } from "react"
import styled from "styled-components"
import ScheduleCard from "./ScheduleCard"
import SelectedMovie from "./SelectedMovie"

export default function Schedule(props) {
    
    const {selectedMovie, selectedShowTime, setSelectedShowTime } = props

    const [sessions, setSessions] = useState([])
    

    useEffect(() => {
        const ask = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/movies/${selectedMovie.id ? selectedMovie.id : '1'}/showtimes`)

        ask.then((answer => setSessions(answer.data.days)))
    }, [selectedMovie.id])

    
    return (
        <>
            <SelectTimeStyle>Selecione o horário</SelectTimeStyle>

            {sessions.map((d) => (
                <ScheduleCard key={d.id} days={d} setSelectedShowTime={setSelectedShowTime}/>
            ))}

            <SelectedMovie selectedMovie={selectedMovie} selectedShowTime={selectedShowTime}/>
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

