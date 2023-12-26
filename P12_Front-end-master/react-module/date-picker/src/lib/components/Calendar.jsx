import { useEffect, useState } from "react";
import styles from "../styles.module.css";

function Calendar() {
  let d = new Date();
  const [year, setYear] = useState();
  const [month, setMonth] = useState();

  useEffect(() => {
    setYear(d.getYear() + 1900);
  }, []);

  const day = ["lu", "ma", "me", "je", "ve", "sa", "di"];

  return (
    <div className={styles.wrapper}>
      <div className={styles.year}> 
        <p onClick={(e) => setYear(year - 1)}>pre</p>
        <p>{year}</p>
        <p onClick={(e) => setYear(year + 1)}>sui</p>
      </div>
      <div className={styles.month}>
        {day.map((item, index) => (
          <p className={styles.Day} key={index}>
            {item}
          </p>
        ))}
      </div>
    </div>
  );
}

export default Calendar;
