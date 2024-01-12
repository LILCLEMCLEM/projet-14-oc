import { selectEmployee } from "../utils/EmployeeSlice";
import { useSelector } from "react-redux";
import DataTable from "../Components/table";
import { useState } from "react";
import { Navigate } from "react-router";
import "../styles/App.css";

function filterObjectsByText(text, data) {
  const searchText = text.toLowerCase();

  const filteredObjects = data.filter((employee) => {
    for (const key in employee) {
      if (
        typeof employee[key] === "string" &&
        employee[key].toLowerCase().includes(searchText)
      ) {
        return true;
      }

      if (Array.isArray(employee[key])) {
        for (const address of employee[key]) {
          for (const addressKey in address) {
            if (
              typeof address[addressKey] === "string" &&
              address[addressKey].toLowerCase().includes(searchText)
            ) {
              return true;
            }
          }
        }
      }
    }
    return false;
  });

  return filteredObjects;
}

function EmployeeList() {
  let [search, setSearch] = useState("");
  let [C, setC] = useState(false);
  let data = useSelector(selectEmployee);

  console.log(data);
  data = filterObjectsByText(search, data);
  if (C === true) {
    return <Navigate to={"/"} />;
  }
  return (
    <div>
      <div className="Search">
        <p> search</p>
        <input type="text" onChange={(e) => setSearch(e.target.value)} />
      </div>
      {data.length > 0 ? (
        <DataTable data={data} />
      ) : (
        <p className="Error" onClick={(e) => setC(true)}>
          Aucune données a afficher
        </p>
      )}

      <p className="Back" onClick={(e) => setC(true)}>
        retourner au formulaire
      </p>
    </div>
  );
}

export default EmployeeList;
