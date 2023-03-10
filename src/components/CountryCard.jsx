import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { LinkContainer } from "react-router-bootstrap";
import { useDispatch, useSelector } from "react-redux";

const CountryCard = ({ country, addFavourite, removeFavourite }) => {
  const favouritesList = useSelector((state) => state.favourites.favourites);
  const dispatch = useDispatch();

  return (
    <>
      <LinkContainer
        to={`/countries/${country.name.common}`}
        state={{ country: country }}
      >
        <Card className="h-100">
          {favouritesList.includes(country.name.common) ? (
            <i
              className="bi bi-heart-fill text-danger m-1 p-1"
              onClick={() => dispatch(removeFavourite(country.name.common))}
            ></i>
          ) : (
            <i
              className="bi bi-heart text-danger m-2 p-2"
              onClick={() => dispatch(addFavourite(country.name.common))}
            ></i>
          )}
          <Card.Img
            src={country.flags.svg}
            variant="top"
            className="rounded h-50"
            style={{
              objectFit: "cover",
              minHeight: "250px",
              maxHeight: "250px",
            }}
          />
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
    </>
  );
};

export default CountryCard;
