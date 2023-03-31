import Card from "react-bootstrap/Card";
import { BsHeartFill, BsHeart } from "react-icons/bs";
import { LinkContainer } from "react-router-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import classes from "./styles/CountryCard.module.css";
const CountryCard = ({ country, addFavourite, removeFavourite }) => {
  const favouritesList = useSelector((state) => state.favourites.favourites);
  const dispatch = useDispatch();

  return (
    <div className={classes.cardContainer}>
      <div className={classes.heartContainer}>
        {favouritesList.includes(country.name.common) ? (
          <BsHeartFill
            style={{
              color: "red",
              margin: "5px",
              cursor: "pointer",
              display: "flex",
            }}
            onClick={() => dispatch(removeFavourite(country.name.common))}
          />
        ) : (
          <BsHeart
            style={{
              color: "red",
              margin: "5px",
              cursor: "pointer",
              display: "flex",
            }}
            onClick={() => dispatch(addFavourite(country.name.common))}
          />
        )}
      </div>
      <LinkContainer
        to={`/countries/${country.name.common}`}
        state={{ country: country }}
      >
        <Card className="h-100">
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
            <div className={classes.data_container}>
              <div className={classes.container_col}>
                <div className={classes.info_subsection}>
                  <p className={classes.info_heading}>
                    <i className="bi bi-translate"></i> Languages
                  </p>
                  <p className={classes.info_data}>
                    {country.languages
                      ? Object.values(country.languages).join(",")
                      : "--"}
                  </p>
                </div>
                <div className={classes.info_subsection}>
                  {" "}
                  <div className={classes.info_heading}>
                    <i className="bi bi-currency-dollar"></i> Currency:
                  </div>
                  {Object.values(country.currencies || {}).map((currency) => (
                    <div>
                      <div className={classes.info_data}>
                        {" "}
                        {currency.symbol} {""} {currency.name}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className={classes.container_col}>
                <div className={classes.info_subsection}>
                  <div className={classes.info_heading}>
                    <i className="bi bi-stopwatch me-2"></i>Timezone
                  </div>{" "}
                  <div className={classes.info_data}>
                    {" "}
                    {country.timezones[0]}
                  </div>
                  <div className={classes.info_data}>
                    {" "}
                    {country.timezones[1]}
                    {country.timezones?.[2] ? ",..." : ""}
                  </div>
                </div>
                <div className={classes.info_subsection}>
                  <div className={classes.info_heading}>
                    <i className="bi bi-people me-2"></i>Population
                  </div>{" "}
                  <div className={classes.info_data}>
                    {Intl.NumberFormat("de-DE").format(country.population)} mln.
                  </div>
                </div>
                <div>
                  {" "}
                  <div className={classes.info_heading}>
                    <i className="bi bi-map"></i> Area
                  </div>{" "}
                  <div className={classes.info_data}>
                    {Intl.NumberFormat("de-DE").format(country.area)} km2
                  </div>
                </div>
              </div>
              <div
                variant="horizontal"
                className="flex-grow-1 justify-content-left"
              >
                <div></div>
              </div>
            </div>
          </Card.Body>
        </Card>
      </LinkContainer>{" "}
    </div>
  );
};

export default CountryCard;
