import React, { useState, useEffect } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import { Button, Spinner } from "react-bootstrap";
import { BsHeartFill, BsHeart } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { initialiseCountries } from "../features/countries/countriesSlice";
import FavouriteCard from "./CountryCard";
import { clearFavourites } from "../features/countries/favoriteSlice";

const Favourites = () => {
  const dispatch = useDispatch();
  let countriesList = useSelector((state) => state.countries.countries);
  const loading = useSelector((state) => state.countries.isLoading);
  const [search, setSearch] = useState("");
  const favouritesList = useSelector((state) => state.favourites.favourites);

  if (favouritesList !== null) {
    countriesList = countriesList.filter((country) =>
      favouritesList.includes(country.name.common)
    );
  } else {
    countriesList = [];
  }

  useEffect(() => {
    dispatch(initialiseCountries());
  }, [dispatch]);

  if (loading) {
    return (
      <Col className="text-center m-5">
        <Spinner
          animation="border"
          role="status"
          className="center"
          variant="info"
        >
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </Col>
    );
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

      <Row xs={2} md={3} lg={4} className=" g-3">
        <Button
          onClick={() => {
            dispatch(clearFavourites());
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
            <Col className="mt-5" key={country.name.common}>
              <FavouriteCard country={country} />
            </Col>
          ))}
      </Row>
    </Container>
  );
};

export default Favourites;
