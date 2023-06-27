import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Loader from "../loader/Loading";
import TourList from "./TourList";

const TourCard = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    setIsLoading(true);
    fetch("https://course-api.com/react-tours-project")
      .then((response) => response.json())
      .then((jsonData) => {
        setData(jsonData);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log("Error fetching data:", error);
        setIsLoading(false);
      });
      // setIsLoading(false);
  };

  const handleDelete = (itemId) => {
    const updatedData = data.filter((item) => item.id !== itemId);
    setData(updatedData);
  };
  const handleRefetch = () => {
    fetchData();
  };
  return (
    <>
      {isLoading ? (
        <div>
          <Loader />
        </div>
      ) : (
        <Row>
          {data.map((item) => (
            <TourList
              id={item.id}
              image={item.image}
              name={item.name}
              info={item.info}
              handleDelete={handleDelete}
            />
          ))}
          {data.length === 0 && (
            <Button variant="primary" onClick={handleRefetch}>
              Refresh
            </Button>
          )}
        </Row>
      )}
    </>
  );
};

export default TourCard;
