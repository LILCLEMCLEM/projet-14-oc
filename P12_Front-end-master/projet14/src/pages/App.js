import { useState } from "react";
import "../styles/App.css";
import { State } from "../utils/data";
import { selectEmployee } from "../utils/EmployeeSlice";
import Datepicker from "@lilclemclem/light-date-picker/dist/lib/components/Datepicker";
import { useDispatch } from "react-redux";
import { sendForms } from "../utils/EmployeeSlice";
import { Navigate } from "react-router";

function App() {
  const dispatch = useDispatch();
  const [firstname, setFN] = useState("");
  const [lastname, setLN] = useState("");
  const [birthday, setBD] = useState("");
  const [startDate, setSD] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [department, setDP] = useState("");
  const [c, SetC] = useState(false);
  const [counter, setCounter] = useState(0);

  const handle = (y, m, d) => {
    return `${y} - ${m} - ${d}`;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const ObjetEmployee = {
      id: counter,
      Firstname: firstname,
      LastName: lastname,
      Birthday: birthday,
      startDate: startDate,
      Department: department,
      Address: [
        {
          street: street,
          city: city,
          state: state,
          zipcode: zip,
        },
      ],
    };
    e.stopPropagation();
    console.log(ObjetEmployee);
    dispatch(sendForms(ObjetEmployee));
    setCounter(counter + 1);
  };
  if (c === true) {
    return <Navigate to={"/employee"} />;
  }

  return (
    <div className="App">
      <p className="GotoTable" onClick={(e) => SetC(true)}>
        Aller au employée
      </p>

      <form onSubmit={handleSubmit} id="create-employee">
        <label htmlFor="first-name">First Name</label>
        <input
          type="text"
          id="first-name"
          onChange={(e) => setFN(e.target.value)}
        />

        <label htmlFor="last-name">Last Name</label>
        <input
          type="text"
          id="last-name"
          onChange={(e) => setLN(e.target.value)}
        />
        <label htmlFor="birthday">Birthday</label>
        <Datepicker setDate={setBD} />

        <label htmlFor="start-date">Start Date</label>
        <input
          id="start-date"
          type="text"
          onChange={(e) => setSD(e.target.value)}
        />

        <fieldset className="address">
          <legend>Address</legend>

          <label htmlFor="street">Street</label>
          <input
            id="street"
            type="text"
            onChange={(e) => setStreet(e.target.value)}
          />
          <label htmlFor="city">City</label>
          <input
            id="city"
            type="text"
            onChange={(e) => {
              setCity(e.target.value);
            }}
          />

          <label htmlFor="state-button">State</label>
          <select
            name="state"
            id="state"
            onChange={(e) => setState(e.target.value)}
          >
            {State.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </select>

          <label htmlFor="zip-code">Zip Code</label>
          <input
            id="zip-code"
            type="number"
            onChange={(e) => setZip(e.target.value)}
          />
        </fieldset>

        <label htmlFor="department-button">Department</label>
        <select
          name="department"
          id="department"
          onChange={(e) => setDP(e.target.value)}
        >
          <option>Sales</option>
          <option>Marketing</option>
          <option>Engineering</option>
          <option>Human Resources</option>
          <option>Legal</option>
        </select>
        <span
          tabIndex="0"
          id="department-button"
          aria-expanded="false"
          aria-autocomplete="list"
          aria-owns="department-menu"
          aria-haspopup="true"
        >
          <button className="Submit" type="submit">
            Save
          </button>
        </span>
      </form>
    </div>
  );
}

export default App;
