import { useEffect, useState } from "react";
import styles from "./CountryList.module.css";
import Spinner from "./Spinner";
import CountryItem from "./CountryItem";
import { useCities } from "../context/CitiesContext";
function CountryList() {
  const { cities, isLoading } = useCities()
  const [countries, setCountries] = useState([]);
  useEffect(
    function () {
      const countriesArray = cities.reduce((prev, curr) => {
        return (prev.map(item => item.country)).includes(curr.country)
          ? [...prev]
          : [...prev, {country: curr.country, emoji: curr.emoji}];
      }, []);
      setCountries(countriesArray);
    },
    [cities]
  );
  return isLoading ? <Spinner /> : <ul className={styles.countryList}>
    {countries.map(c => <CountryItem country={c} key={c.country}/>)}
  </ul>;
}

export default CountryList;
