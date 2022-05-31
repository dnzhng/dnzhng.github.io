import { getSunrise, getSunset } from "sunrise-sunset-js";

const NYC_LAT = 40.73;
const NYC_LONG = -73.93;

const useDarkMode = () => {
  const now = new Date().getHours();
  const sunrise = getSunrise(NYC_LAT, NYC_LONG).getHours();
  const sunset = getSunset(NYC_LAT, NYC_LONG).getHours();
  return sunrise >= now || now >= sunset
};

export default useDarkMode;
