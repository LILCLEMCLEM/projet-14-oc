import { GetCalendar } from "../utils/ExportDay";
import styles from "../styles.module.css";
function DayRender({ month, year, SetDay }) {
  let Cal = GetCalendar(year, month);

  return (
    <div className={styles.calWrapper}>
      <div className="cal-col1">
        {Cal["dim"].map((item) => (
          <div>
            {item !== " " ? (
              <p onClick={(e) => SetDay(item)}>{item}</p>
            ) : (
              <p>{item}</p>
            )}
          </div>
        ))}
      </div>
      <div className="cal-col2">
        {Cal["lu"].map((item) => (
          <div>
            {item !== " " ? (
              <p onClick={(e) => SetDay(item)}>{item}</p>
            ) : (
              <p>{item}</p>
            )}
          </div>
        ))}
      </div>
      <div className="cal-col3">
        {Cal["mar"].map((item) => (
          <div>
            {item !== " " ? (
              <p onClick={(e) => SetDay(item)}>{item}</p>
            ) : (
              <p>{item}</p>
            )}
          </div>
        ))}
      </div>
      <div className="cal-col4">
        {Cal["mer"].map((item) => (
          <div>
            {item !== " " ? (
              <p onClick={(e) => SetDay(item)}>{item}</p>
            ) : (
              <p>{item}</p>
            )}
          </div>
        ))}
      </div>
      <div className="cal-col5">
        {Cal["jeu"].map((item) => (
          <div>
            {item !== " " ? (
              <p onClick={(e) => SetDay(item)}>{item}</p>
            ) : (
              <p>{item}</p>
            )}
          </div>
        ))}
      </div>
      <div className="cal-col6">
        {Cal["ven"].map((item) => (
          <div>
            {item !== " " ? (
              <p onClick={(e) => SetDay(item)}>{item}</p>
            ) : (
              <p>{item}</p>
            )}
          </div>
        ))}
      </div>
      <div className="cal-col7">
        {Cal["sam"].map((item) => (
          <div>
            {item !== " " ? (
              <p onClick={(e) => SetDay(item)}>{item}</p>
            ) : (
              <p>{item}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default DayRender;
