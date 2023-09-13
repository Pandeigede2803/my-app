import React from 'react';

const TableProps =({Project_name,image,description,id,index}) => {
  return (
    <div>
      <div className="">
        <>
          <>
              <tr key={id}>
                <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-900">
                  {index + 1}
                </td>
                <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-900">
                  {id}
                </td>
                <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-900">
                  {Project_name}
                </td>
                <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-900">
                  <img src={`/images/${image}`}  alt={Project_name} className="h-10" />
                </td>
                <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-900">
                  {description}
                </td>
              </tr>
          </>
        </>
      </div>
    </div>
  );
}

export default TableProps;
