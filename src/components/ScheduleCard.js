import styled from "styled-components"
import ScheduleCardTime from "./ScheduleCardTime"

export default function ScheduleCard(props) {

    const { weekday, date, showtimes } = props.sessions

    console.log('aqui' + showtimes[1].name)

    return (
        <>
            <ScheduleCardContainer>
                <p>{weekday} - {date}</p>
                <div>
                    {showtimes.map((s) => (
                        <ScheduleCardTime key={s.id} time={s.name} />
                    ))}
                </div>
            </ScheduleCardContainer>

            
        </>

        
    )
}

const ScheduleCardContainer = styled.div`
margin: 0px 25px;
color: #293845;
font-size: 20px;
letter-spacing: 0.02em;

div {
    display: flex;
    margin: 23px 0px;
}

button {
    margin-right: 8px;
    width: 85px;
    height: 45px;
    border: none;
    border-radius: 3px;
    background-color: #E8833A;
    color: #FFFFFF;
    font-size: 18px;
    letter-spacing: 0.02em;

}

&:last-child {
    
    background-color: red;
    height: 800px;
}
`

const MovieSelectedContainer = styled.div`
    
`