export const getUserTime = (matchDate: string) => {
  const matchTime = new Date(matchDate);

  const userTimezoneOffset = new Date().getTimezoneOffset();

  const userMatchTime = new Date(
    matchTime.getTime() - userTimezoneOffset * 60000
  );

  const day = ("0" + userMatchTime.getDate()).slice(-2);
  const month = ("0" + (userMatchTime.getMonth() + 1)).slice(-2);
  const year = userMatchTime.getFullYear();
  const hours = userMatchTime.getHours() % 12 || 12;
  const minutes = ("0" + userMatchTime.getMinutes()).slice(-2);
  const ampm = userMatchTime.getHours() < 12 ? "AM" : "PM";
  const timeString = `${day}-${month}-${year} ${hours}:${minutes} ${ampm}`;

  return timeString;
};
