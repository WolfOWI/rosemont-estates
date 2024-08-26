// IMPORT
// -----------------------------------------------------------
// React & Hooks
import { useState, useEffect } from "react";

// Services
// -

// Utility Functions
// -

// Third-Party Components
import { Input, Select, IconButton } from "@chakra-ui/react";
import { SearchOutlined } from "@mui/icons-material";

// Internal Components
// -

// Imagery
// -

// -----------------------------------------------------------

function SearchBar({ searchChange, selectChange }) {
  return (
    <div className="flex items-center relative w-full">
      <div className="flex items-center bg-beige-P2 rounded-xl transition border-2 hover:border-thorn-0 w-[100%] h-[80px]">
        <Input
          variant="searchbar"
          type="text"
          placeholder="Search for a Suburb, City, Province or Zip Code"
          width="full"
          onChange={(e) => searchChange(e.target.value)}
        />
        <Select variant="filled" margin={4} w="25%" onChange={(e) => selectChange(e.target.value)}>
          <option value="all">All</option>
          <option value="sell">For Sale</option>
          <option value="rent">To Rent</option>
        </Select>
      </div>
      <IconButton icon={<SearchOutlined fontSize="large" />} height="80px" width="80px" ml={2} />
    </div>
  );
}

export default SearchBar;
