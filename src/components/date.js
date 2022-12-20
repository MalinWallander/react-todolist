function CurrentDate() {
  const current = new Date();
  const month = current.getMonth();
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let date = `${
    monthNames[month]
  } ${current.getDate()}, ${current.getFullYear()}`;

  return (
    <div className="CurrentDate">
      <p>Current date is</p>
      <p>{date}</p>
    </div>
  );
}

export default CurrentDate;
