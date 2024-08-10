import { Input, Select, IconButton } from "@chakra-ui/react";
import { SearchOutlined } from "@mui/icons-material";

function SearchBar() {
  return (
    <div className="flex items-center relative w-full">
      <div className="flex items-center bg-beige-P2 rounded-xl transition border-2 hover:border-thorn-0 w-[100%] h-[80px]">
        <Input
          variant="searchbar"
          type="text"
          placeholder="Search for a City, Suburb, Province or Zip Code"
          width="full"
        />
        <Select variant="filled" margin={4} w="25%">
          <option value="forSale">For Sale</option>
          <option value="toRent">To Rent</option>
          <option value="both">All</option>
        </Select>
      </div>
      <IconButton icon={<SearchOutlined fontSize="large" />} height="80px" width="80px" ml={2} />
    </div>
  );
}

export default SearchBar;
