import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "Firstname", headerName: "First name", width: 130 },
  { field: "LastName", headerName: "Last name", width: 130 },
  { field: "Birthday", headerName: "Birthday", width: 130 },
  { field: "startDate", headerName: "start date", width: 130 },
  { field: "Department", headerName: "Department", width: 130 },
  {
    field: "Address",
    headerName: "Address",
    width: 360,
    sortable: false,
    valueGetter: (params) =>
      `${params.row.Address[0].street || ""} ${
        params.row.Address[0].city || ""
      } ${params.row.Address[0].state || ""} ${
        params.row.Address[0].zipcode || ""
      }`,
  },
];

export default function DataTable({ data }) {
  return (
    <div style={{ height: "100%", width: "100%" }}>
      <DataGrid
        rows={data}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 15 },
          },
        }}
        pageSizeOptions={[15, 25]}
      />
    </div>
  );
}
