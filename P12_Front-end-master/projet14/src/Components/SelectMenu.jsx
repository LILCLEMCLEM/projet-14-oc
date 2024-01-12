import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useState } from "react";

function SelectMenu({ List, handleChange }) {
  const [V, setV] = useState("");
  const Handler = (e) => {
    handleChange(e.target.value);
    setV(e.target.value);
  };
  let data = [];
  List.map((item) => {
    return data.push(item);
  });
  return (
    <div>
      <Box sx={{ width: 170 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Department</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={V}
            label="Department"
            onChange={Handler}
          >
            {data.map((item) => (
              <MenuItem value={item}>{item}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    </div>
  );
}

export default SelectMenu;
