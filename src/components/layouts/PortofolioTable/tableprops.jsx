import React from "react";
import Image from "next/image";

const TableProps = ({ Project_name, image, description, id, index }) => {
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
                <Image
                  src={`/images/${image}`}
                  alt={Project_name}
                  width={20} // Replace with the desired width (e.g., 10 pixels)
                  height={20} // Replace with the desired height (e.g., 10 pixels)
                  className="h-10" // Maintain the same CSS class name
                />
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
};

export default TableProps;
