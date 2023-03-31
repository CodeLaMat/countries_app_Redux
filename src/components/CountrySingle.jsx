import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Container, Row, Col, Image, Spinner, Button } from "react-bootstrap";
import classes from "./styles/CountrySingle.module.css";

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

  const getBorderCountry = (code) => {
    const result = country.filter((c) => c.cioc === code);
    return result[0];
    console.log(result[0]);
  };

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
          <div className={classes.country_info_container}>
            <div>
              <h2 className="display-4">{country.name.common}</h2>
              <h6>Capital: {country.capital}</h6>
              <h6>
                Lat/Lng: {country.latlng[0]}, {country.latlng[1]}
              </h6>
              <h6>
                Population:{" "}
                {Intl.NumberFormat("de-DE").format(country.population)} mln.
              </h6>
              <h6>
                Area: {Intl.NumberFormat("de-DE").format(country.area)} km2
              </h6>
              <h6>
                Timezones:{" "}
                {country.timezones
                  ? Object.values(country.timezones).join(",")
                  : "--"}
              </h6>
              <h6>Continent: {country.continents}</h6>
              <h6>
                Languages:{" "}
                {country.languages
                  ? Object.values(country.languages).join(",")
                  : "--"}
              </h6>
              <h6>Car signs: {country.car.signs[0]}</h6>
            </div>
            <div>
              {country.coatOfArms.svg ? (
                <Image
                  thumbnail
                  src={country.coatOfArms.svg}
                  style={{ width: "190px", float: "right" }}
                />
              ) : (
                ""
              )}
            </div>{" "}
            {!error && weather && (
              <div>
                <p>Weather now:</p>{" "}
                <img
                  src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                  alt={weather.weather[0].description}
                ></img>
                It is now{" "}
                <strong>{parseInt((weather.main.temp - 273.15) / 1.8)} </strong>
                °C in {country.capital} and {weather.weather[0].description}{" "}
                <div>
                  <h4>Bordering countries:</h4>
                  <h6>
                    {" "}
                    {country.borders === undefined ? (
                      <p>Bordering countries are not found.</p>
                    ) : (
                      ""
                    )}
                    {Object.values(country.borders || {}).map((border) => {
                      const borderObject = getBorderCountry(border);
                      const borderName = borderObject.name.common;
                      return (
                        <span key={borderName}>
                          <Button>
                            <Link
                              to={`/countries/${border}`}
                              state={{
                                countries: country,
                                country: getBorderCountry(border),
                              }}
                            >
                              {getBorderCountry(border).name.common}
                            </Link>
                          </Button>
                        </span>
                      );
                    })}
                  </h6>
                </div>
              </div>
            )}{" "}
          </div>{" "}
        </Col>{" "}
        <Col></Col>{" "}
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
