import React, { useState } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { initialiseCountries } from "../features/countries/countriesSlice";
import CountryCard from "./CountryCard";
import {
  addFavourites,
  removeFavourites,
} from "../features/countries/favoriteSlice";

const Favourites = () => {
  const dispatch = useDispatch();
  let countriesList = useSelector((state) => state.countries.countries);
  const loading = useSelector((state) => state.countries.isLoading);
  const [search, setSearch] = useState("");
  const [favouritesList, setFavouriteList] = useState([]);

  if (favouritesList !== null) {
    countriesList = countriesList.filter((c) =>
      favouritesList.includes(c.name.common)
    );
  } else {
    countriesList = [];
  }

  useEffect(() => {
    dispatch(initialiseCountries());
    setFavouriteList(localStorage.getItem("Favourites"));
  }, [dispatch]);

  if (loading) {
    return <p>Loading...</p>;
  }
  return (
    <Container fluid>
      <Row>
        <Col className="mt-5 d-flex justify-content-center">
          <Form>
            <Form.Control
              style={{ width: "18rem" }}
              type="search"
              className="me-2 "
              placeholder="Search for countries"
              aria-label="Search"
              onChange={(e) => setSearch(e.target.value)}
            />
          </Form>
        </Col>
      </Row>
      <Row></Row>
      <Row xs={2} md={3} lg={4} className=" g-3">
        <Button
          onClick={() => {
            dispatch(removeFavourites());
          }}
        >
          Clear Favourites
        </Button>
      </Row>
      <Row xs={2} md={3} lg={4} className=" g-3">
        {countriesList
          .filter((country) => {
            if (
              country.name.common
                .toLowerCase()
                .includes(search.toLowerCase().trim()) ||
              country.name.official.toLowerCase().includes(search.toLowerCase())
            ) {
              return country;
            }
          })
          .map((country) => (
            <Col className="mt-5">
              <CountryCard
                country={country}
                dispatch={dispatch}
                addFavourites={addFavourites}
              />
            </Col>
          ))}
      </Row>
    </Container>
  );
};

export default Favourites;
