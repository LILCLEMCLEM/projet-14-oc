import "../styles/App.css";
import { State } from "../utils/data";
function App() {
  return (
    <div className="App">
      <form action="#" id="create-employee">
        <label for="first-name">First Name</label>
        <input type="text" id="first-name" />

        <label for="last-name">Last Name</label>
        <input type="text" id="last-name" />

        <label for="date-of-birth">Date of Birth</label>
        <input id="date-of-birth" type="text" />

        <label for="start-date">Start Date</label>
        <input id="start-date" type="text" />

        <fieldset class="address">
          <legend>Address</legend>

          <label for="street">Street</label>
          <input id="street" type="text" />

          <label for="city">City</label>
          <input id="city" type="text" />

          <label for="state-button">State</label>
          <select name="state" id="state">
            {State.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </select>
          <span
            tabindex="0"
            id="state-button"
            aria-expanded="false"
            aria-autocomplete="list"
            aria-owns="state-menu"
            aria-haspopup="true"
          ></span>

          <label for="zip-code">Zip Code</label>
          <input id="zip-code" type="number" />
        </fieldset>

        <label for="department-button">Department</label>
        <select name="department" id="department">
          <option>Sales</option>
          <option>Marketing</option>
          <option>Engineering</option>
          <option>Human Resources</option>
          <option>Legal</option>
        </select>
        <span
          tabindex="0"
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
