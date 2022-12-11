import styled from "styled-components"
import ScheduleCardTime from "./ScheduleCardTime"

export default function ScheduleCard(props) {

    const {days, setSelectedShowTime } = props


    return (
        <>
            <ScheduleCardContainer>
                <p>{days.weekday}- {days.date}</p>
                <div>
                    {days.showtimes.map((s) => (
                        <ScheduleCardTime key={s.id} id={s.id} showtimes={s} weekday={days.weekday} date={days.date} setSelectedShowTime={setSelectedShowTime}/>
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

button:hover{
    cursor: pointer;
}

`

const MovieSelectedContainer = styled.div`
    
`