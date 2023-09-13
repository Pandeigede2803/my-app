import React, { useEffect, useState } from 'react';

function Portfolio() {
  const [portfolioItems, setPortfolioItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/getrequest'); // Make a request to your API route
        if (response.ok) {
          const data = await response.json();
          setPortfolioItems(data.data); // Assuming your API response structure has a 'data' property
        } else {
          console.error('Error fetching data:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {/* Render your portfolio items here */}
      <ul>
        {portfolioItems.map((item) => (
          <li key={item._id}>
            <h2>{item.Project_name}</h2>
            <img src={`/images/${item.image}`} alt={item.Project_name} />

            <p>{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Portfolio;
