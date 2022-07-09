import { useState } from "react";
import Cookies from "universal-cookie";
const cookies = new Cookies();
export const useLocalStorage = (keyName, defaultValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const value = cookies.get(keyName, { doNotParse: true });
      console.log("cookie", value, typeof value);
      if (value) {
        return JSON.parse(value);
      } else {
        cookies.set(keyName, JSON.stringify(defaultValue));
        return defaultValue;
      }
    } catch (err) {
      return defaultValue;
    }
  });
  const setValue = (newValue) => {
    try {
      cookies.set(keyName, JSON.stringify(newValue));
    } catch (err) {
      console.log("error in setting cookie data");
    }
    setStoredValue(newValue);
  };
  return [storedValue, setValue];
};
