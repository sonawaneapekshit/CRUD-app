import { Search } from 'lucide-react';
import React, { useId } from 'react';
import PropTypes from 'prop-types';

const SearchFilter = ({ setFilterText }) => {
  let searchFieldID = useId();
  const handleFilter = (e) => {
    let filterValue = e.target.value;
    setFilterText(filterValue.trim());
    console.log(filterValue)
  };

  return (
    <div className="flex flex-col gap-4 w-1/2">
      <label className="font-bold text-lg uppercase" htmlFor={searchFieldID}>
        Search by ID/Title
      </label>
      <div className="field-icon-prefix relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2" />
        <input
          type="text"
          name="search"
          placeholder="Search by ID/Title"
          id={searchFieldID}
          className="pl-10 pr-4 py-4 border border-zinc-900 rounded-lg text-lg focus:outline-blue-600 focus:outline-2 hover:outline-blue-400 hover:outline-2 shadow-none"
          onChange={handleFilter}
        />
      </div>
    </div>
  );
};

SearchFilter.propTypes = {
  setFilterText: PropTypes.func
};

export default SearchFilter;
