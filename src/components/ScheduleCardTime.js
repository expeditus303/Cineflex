export default function aScheduleCardTime(props) {
  const { id, showtimes, setSelectedShowTime, weekday, date, setSelectedSeat } =
    props;

  function selectShowTime(showtime) {
    setSelectedShowTime([showtime, weekday, date, id]);
    setSelectedSeat([]);
  }

  return (
    <button onClick={() => selectShowTime(showtimes.name)} data-test="showtime">
      {showtimes.name}
    </button>
  );
}
