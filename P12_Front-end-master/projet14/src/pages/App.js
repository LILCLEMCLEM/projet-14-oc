import { useState } from "react";
import "../styles/App.css";
import { Dep, State } from "../utils/data";
import { selectCount, selectEmployee } from "../utils/EmployeeSlice";
import Datepicker from "@lilclemclem/light-date-picker/dist/lib/components/Datepicker";
import { useDispatch, useSelector } from "react-redux";
import { sendForms } from "../utils/EmployeeSlice";
import { Navigate } from "react-router";
import { Box, IconButton, Modal } from "@mui/material";
import ModalComp from "../Components/modals";
import SelectMenu from "../Components/SelectMenu";
import { StateOPT } from "../utils/data";
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
  const [counter, setCounter] = useState(useSelector(selectCount));

  const [open, setOpen] = useState(false);
  const CheckError = () => {
    if (
      firstname === "" ||
      lastname === "" ||
      birthday === "" ||
      startDate === "" ||
      street === "" ||
      city === "" ||
      state === "" ||
      zip === "" ||
      department === ""
    ) {
      return true;
    }
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handle = (y, m, d) => {
    return `${y} - ${m} - ${d}`;
  };
  const handleSubmit = (e) => {
    e.stopPropagation();
    e.preventDefault();
    let error = CheckError();
    if (error) {
      alert("champ(s) vide(s)");
      return;
    }
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

    console.log(ObjetEmployee);
    dispatch(sendForms(ObjetEmployee));
    setCounter(counter + 1);
    setOpen(true);
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
          <SelectMenu List={StateOPT} handleChange={setState} />

          <label htmlFor="zip-code">Zip Code</label>
          <input
            id="zip-code"
            type="number"
            onChange={(e) => setZip(e.target.value)}
          />
        </fieldset>

        <label htmlFor="department-button">Department</label>
        <SelectMenu List={Dep} handleChange={setDP} />

        <button className="Submit" type="submit">
          Save
        </button>
      </form>
      {open === true ? (
        <ModalComp open={open} handleClose={handleClose} />
      ) : null}
    </div>
  );
}

export default App;
