import React, { useId } from 'react';

const SortFilter = () => {
  let searchFieldID = useId();
  let sortOptions = [
    { id: useId(), label: 'Sort by A-Z', value: 'azsort' },
    { id: useId(), label: 'Sort by Z-A', value: 'zasort' },
    { id: useId(), label: 'Sort by Asc UserId', value: 'ascuserid' },
    { id: useId(), label: 'Sort by Desc UserId', value: 'ascuserid' },
  ];
  return (
    <div className='flex flex-col gap-4 w-auto'>
      <label className="font-bold text-lg uppercase" htmlFor={searchFieldID}>
        Sorting Filter
      </label>
      <div className="relative">
        <select
          id={searchFieldID}
          className="px-4 py-3 min-w-28 min-h-16 border border-zinc-900 rounded-lg text-lg focus:outline-blue-600 focus:outline-2 hover:outline-blue-400 hover:outline-2 shadow-none"
        >
          {sortOptions?.map((option) => {
            return <option value={option.value}>{option.label}</option>;
          })}
        </select>
      </div>
    </div>
  );
};

export default SortFilter;
