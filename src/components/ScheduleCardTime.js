import styled from "styled-components"

export default function ScheduleCardTime(props) {

    const { showtimes, setSelectedShowTime, weekday, date } = props
    
    function selectShowTime(showtime){
        setSelectedShowTime([showtime, weekday, date])
    }

    return (
        <button onClick={() => selectShowTime(showtimes.name)}>{showtimes.name}</button>
    )
}