import { useEffect, useState } from "react";
import "../styles/date.css";

const DateTime = () => {
  const [date, setDate] = useState(new Date());

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

  useEffect(() => {
    let timer = setInterval(() => setDate(new Date()), 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <h1 className="date">
        {monthNames[date.getMonth()]} {date.getDate()}, {date.getFullYear()}
      </h1>
    </div>
  );
};

export default DateTime;
