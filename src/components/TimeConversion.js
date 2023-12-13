export default function TimeConversion(unixTime) {
  let time;
  // Convert to milliseconds and
  // then create a new Date object
  let dateObj = new Date(unixTime * 1000);
  let hours = dateObj.getHours();
  let minutes = dateObj.getMinutes();
  if (minutes<=9) {
    time = `${hours}:0${minutes}`;
  } else {
    time = `${hours}:${minutes}`;
  }
  return time;
}
// TimeConversion();
