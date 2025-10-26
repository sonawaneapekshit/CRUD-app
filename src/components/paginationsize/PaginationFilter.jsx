import React, { useId } from 'react';

const PaginationFilter = ({ classNamesWrapper, setpageSize }) => {
  let pageSizeOptions = [
    { id: useId(), label: '6', value: '6' },
    { id: useId(), label: '18', value: '18' },
    { id: useId(), label: '36', value: '36' },
  ];
  const handleChangePageSize = (e) => {
    setpageSize(e.target.value);
  };

  return (
    <div className={`flex flex-col gap-4 w-auto ${classNamesWrapper}`}>
      <label className="font-bold text-lg uppercase" htmlFor="pageSize">
        Page Size
      </label>
      <div className="field-icon-prefix relative">
        <select
          id="pageSize"
          onChange={handleChangePageSize}
          className="px-4 py-3 min-w-28 min-h-16 border border-zinc-900 rounded-lg text-lg focus:outline-blue-600 focus:outline-2 hover:outline-blue-400 hover:outline-2 shadow-none"
        >
          <option value="6">6</option>
          <option value="18">18</option>
          <option value="30">36</option>
        </select>
      </div>
    </div>
  );
};

export default PaginationFilter;
