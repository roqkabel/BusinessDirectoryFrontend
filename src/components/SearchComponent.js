import { CategorySvg } from "@/components/SvgComponents";
import { BiCaretDown } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";
import GooglePlacesAutocomplete, {geocodeByAddress} from "react-google-places-autocomplete";
import { GOOGLE_MAP_API_KEY } from "@/constants/global";
import { useState } from "react";
import { useRouter } from "next/router";
import { DIRECTORIES_PAGE } from "@/constants/routes";
const SearchComponent = () => {
  const [value, setValue] = useState(null);

  const router = useRouter();
  // let place_id = route.query.id;

  const handleSelect = async value => {
    // router.push(DIRECTORIES_PAGE + '/' + value?.place_id)
  };
  return (
    <div className="search-container">
      {/* <div className="category-container">
              <div className="d-flex align-items-center">
                  <CategorySvg style={{ fontSize: 10 }}/>
                  <span className="mx-2">Category</span>
                  <BiCaretDown className="mt-1"/>
              </div>
            </div> */}
      <div className="search-box d-flex pl-5">
        <span className="search-icon">
          <BsSearch />
        </span>
        <div
          style={{
            width: "100%"
          }}
        >
          <GooglePlacesAutocomplete
            apiKey={`${GOOGLE_MAP_API_KEY}`}
            selectProps={{
              placeholder: "Search",
              value,
              onChange: setValue,
              onSelect: handleSelect(value),
            }}
          />
        </div>
        <input className="ml-2" type="submit" value="Search" />
      </div>
    </div>
  );
};

export default SearchComponent;
