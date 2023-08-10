import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import "./Search.css";
import { GEO_API_URL, geoApiOptions } from "./Api";

const Search = ({ OnSearchChange }) => {
  const [search, setSearch] = useState(null);

  const loadOptions = (inputValue) => {
    return fetch(
      `${GEO_API_URL}/cities?minPopulation=1000&namePrefix=${inputValue}`,
      geoApiOptions
    )
      .then((response) => response.json())
      .then((response) => {
        return {
          options: response.data.map((city) => {
            return {
              value: `${city.latitude}${city.longitude}`,
              label: `${city.name},${city.countryCode}`,
            };
          }),
        };
      })
      .catch((err) => console.error(err));
  };

  //******************************************************** */
  //   try {
  // 	const response = await fetch(`${GEO_API_URL}/cities?minPopulation=1000&namePrefix=${inputValue}`,
  //     geoApiOptions);
  // 	const result = await response.text();
  // 	console.log(result);
  // } catch (error) {
  // 	console.error(error);
  // }
  //*********************************************************** */
  const handleOnchange = (searchData) => {
    setSearch(searchData);
    OnSearchChange(searchData);
  };

  return (
    <AsyncPaginate
      className="Search_block"
      placeholder="Search for city"
      debounceTimeout={600}
      value={search}
      onChange={handleOnchange}
      loadOptions={loadOptions}
    />
  );
};

export default Search;
