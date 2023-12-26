import React, { useState } from "react";
import Calendar from "./Calendar";

function DatePicker() {
  const [isfocus, setFocus] = useState(false);
  return (
    <div>
      <input
        type="input"
        
        onFocus={(e) => setFocus(true)}
      />
      {isfocus === false ? (
        ""
      ) : (
        <div>
          <Calendar />
        </div>
      )}
    </div>
  );
}

export default DatePicker;
