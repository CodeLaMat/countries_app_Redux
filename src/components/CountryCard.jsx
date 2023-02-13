import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { LinkContainer } from "react-router-bootstrap";
import { CardImg } from "react-bootstrap";

const CountryCard = ({ country, dispatch, addFavourites }) => {
  return (
    <div>
      <LinkContainer
        to={`/countries/${country.name.common}`}
        state={{ country: country }}
      >
        <Card className="h-100">
          <i
            class="bi bi-heart"
            onClick={() => dispatch(addFavourites(country.name))}
          ></i>
          <CardImg /> <img src={country.flags.png} alt="flagImage" />
          <Card.Body className="d-flex flex-column">
            <Card.Title>{country.name.common}</Card.Title>
            <Card.Subtitle className="mb-5 text-muted">
              {country.name.official}
            </Card.Subtitle>
            <ListGroup
              variant="flush"
              className="flex-grow-1 justify-content-end"
            >
              <ListGroup.Item>
                <i className="bi bi-translate me-2"></i>
                {country.languages
                  ? Object.values(country.languages).join(",")
                  : "--"}
              </ListGroup.Item>
              <ListGroup.Item>
                {Object.values(country.currencies || {}).map((currency) => (
                  <div key={currency.name}>
                    {currency.symbol} {} {currency.name}
                  </div>
                ))}
              </ListGroup.Item>
              <ListGroup.Item>
                <i className="bi bi-people me-2"></i>
                {Intl.NumberFormat("de-DE").format(country.population)}
              </ListGroup.Item>
            </ListGroup>
          </Card.Body>
        </Card>
      </LinkContainer>{" "}
    </div>
  );
};

export default CountryCard;
