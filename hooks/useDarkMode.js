import { useState, useEffect } from 'react';
import { getSunrise, getSunset } from "sunrise-sunset-js";
import Cookies from 'js-cookie';

const NYC_LAT = 40.73;
const NYC_LONG = -73.93;

const useDarkMode = () => {
  const [darkMode, setDarkMode] = useState(null);

  const toggleDarkMode = () => {
    document.body.className = !darkMode ? 'dark' : '';
    Cookies.set('darkMode', !darkMode)
    setDarkMode(!darkMode)
  };

  useEffect(() => {
    if (Cookies.get('darkMode')) {
      setDarkMode(Cookies.get('darkMode') === 'true')
    } else {
      const now = new Date().getHours();
      const sunrise = getSunrise(NYC_LAT, NYC_LONG).getHours();
      const sunset = getSunset(NYC_LAT, NYC_LONG).getHours();
      setDarkMode(sunrise >= now || now >= sunset)
    }
  });

  return { darkMode, toggleDarkMode }
};

export default useDarkMode;
