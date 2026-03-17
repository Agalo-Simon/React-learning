import React, { useEffect, useState } from "react";

const DataFetcher = () => {
  const [dataStar, setDataStar] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://swapi.dev/api/people/2")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch the data");
        }
        return response.json();
      })
      .then((data) => {
        setDataStar(data);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading....</p>;
  return (
    <div>
      <p style={{ color: "White"}}>{JSON.stringify(dataStar, null, 2)}</p>
    </div>
  );
};

export default DataFetcher;
