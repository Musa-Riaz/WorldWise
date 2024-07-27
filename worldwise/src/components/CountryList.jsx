import Spinner from "./Spinner";
import styles from "./CountryList.module.css";
import CityItem from "./CityItem";
import Message from "./Message";
const CountryList = ({ cities, loading }) => {
  if (loading) return <Spinner />;

  if(!cities.length) return <Message message="Add your first city by clicking on a city on the map"/>

  const countries = cities.reduce((acc, city) => {
    // Check if the current city's country is already in the accumulator array
    if (!acc.map((el) => el.country).includes(city.country)) {
        // If not, add the country to the accumulator array
        return [...acc, { country: city.country, emoji: city.emoji }];
    } else {
        // If it is, just return the accumulator array as is
        return acc;
    }
}, []);
  return (
    <ul className={styles.countryList}>
      {countries.map((country) => (
        <CityItem city={country} key={country.id} />
      ))}
    </ul>
  );
};

export default CountryList;
