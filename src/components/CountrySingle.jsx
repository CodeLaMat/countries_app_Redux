import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { Container, Row, Col, Image, Spinner, Button } from "react-bootstrap";

const CountrySingle = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const country = location.state.country;
  const [weather, setWeather] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const KEY = process.env.REACT_APP_OPENWEATHER_KEY;

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${country.capital}&appid=${KEY}`
      )
      .catch((error) => {
        console.log(error);
        setError(true);
      })
      .then((response) => setWeather(response.data));
    setLoading(false);
  }, [country.capital]);

  if (loading) {
    return (
      <Col>
        <Spinner
          animation="border"
          role="status"
          variant="info"
          className="center"
        >
          <span className="visually-hidden">Loading</span>
        </Spinner>
      </Col>
    );
  }
  return (
    <Container>
      <Row className="m-5">
        <Col>
          <Image
            thumbnail
            src={`https://source.unsplash.com/featured/1600x900?${country.capital}`}
          />
        </Col>
        <Col>
          <h2 className="display-4">{country.name.common}</h2>
          <h3>{country.capital}</h3>
          {!error && weather && (
            <div>
              <p>
                It is now <strong>{parseInt(weather.main.temp)} </strong>degrees
                in {country.capital} and {weather.weather[0].description}
              </p>{" "}
              <img
                src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                alt={weather.weather[0].description}
              ></img>
            </div>
          )}{" "}
        </Col>{" "}
      </Row>
      <Row>
        <Col>
          <Button variant="light" onClick={() => navigate("/countries")}>
            Back to Countries
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default CountrySingle;
