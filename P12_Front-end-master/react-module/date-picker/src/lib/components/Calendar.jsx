import { useEffect, useState } from "react";
import styles from "../styles.module.css";
import { MonthInt2Str } from "../utils/setmonth";
function Calendar() {
  let d = new Date();
  const [year, setYear] = useState();
  const [month, setMonth] = useState();

  useEffect(() => {
    setYear(d.getYear() + 1900);
    setMonth(d.getMonth());
  }, []);

  const day = ["lun", "mar", "mer", "jeu", "ven", "sam", "dim"];

  return (
    <div className={styles.wrapper}>
      <div className={styles.year}>
        <p onClick={(e) => setYear(year - 1)}>pre</p>
        <p>{year}</p>
        <p onClick={(e) => setYear(year + 1)}>sui</p>
      </div>
      <div className={styles.month}>
        <p>{MonthInt2Str(month)}</p>
      </div>
      <div className={styles.day}>
        {day.map((item, index) => (
          <p className={styles.day} key={index}>
            {item}
          </p>
        ))}
      </div>
    </div>
  );
}

export default Calendar;
