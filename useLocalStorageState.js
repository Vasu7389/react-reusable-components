import React, { useState, useEffect } from "react";

/**
 * @param {String} key The key to set in localStorage
 * @param {Object} defaultValue The value to use if it is not already in localStorage
 */
function useLocalStorageState(key, defaultValue = "") {
  const [state, setState] = useState(
    () => JSON.parse(window.localStorage.getItem(key)) || defaultValue
  );

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
}

export { useLocalStorageState };
