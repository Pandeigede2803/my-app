import React, { useEffect, useState } from "react";

import Image from "next/image";

function PortfolioTable() {
  const [portfolioItems, setPortfolioItems] = useState([]);

  const handleDelete = async (id) => {
    console.log(`Deleting item with ID ${id}`);

    try {
      const response = await fetch(`http://localhost:5000/api/projects/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        // Remove the deleted item from the state
        setPortfolioItems((prevItems) =>
          prevItems.filter((item) => item._id !== id)
        );

        console.log(`Item with ID ${id} deleted successfully`);
      } else {
        console.error("Error deleting item:", response.statusText);
      }
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/projects");
        if (response.ok) {
          const data = await response.json();
          setPortfolioItems(data);
        } else {
          console.error("Error fetching data:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="mx-auto">
    <h1 className="text-3xl font-semibold mb-4">Portfolio Items</h1>
    <div className="rounded-2xl overflow-x-auto">
      <table className="min-w-full">
        <thead>
          <tr>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
              No
            </th>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
              Project Name
            </th>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
              Image
            </th>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
              Description
            </th>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
              Categories
            </th>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
              URL
            </th> {/* Add the URL column header */}
            <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white min-w-full mx-auto">
          {portfolioItems.map((item, index) => (
            <tr key={item._id}>
              <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-900">
                {index + 1}
              </td>
              <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-900">
                {item.ProjectTitle}
              </td>
              <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-900">
                <img
                  src={`/images/${item.Image}`}
                  alt={item.ProjectTitle}
                  className="h-auto w-20"
                />
              </td>
              <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-900">
                {item.Description}
              </td>
              <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-900">
                {item.Categories}
              </td>
              <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-900">
                <a href={item.URL} target="_blank" rel="noopener noreferrer">
                  {item.URL}
                </a>
              </td> {/* Add the URL data cell */}
              <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-900">
                <button
                  onClick={() => handleDelete(item._id)}
                  className="text-red-500 hover:text-red-700"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
  );
}

export default PortfolioTable;
