import React, { useState, useEffect } from "react";

/**
 * @param {String} key The key to set in localStorage
 * @param {Object} defaultValue The value to use if it is not already in localStorage
 * @returns state & setState method to update the state (like useState hook)
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

/*********************************** USAGE ***********************************/

// import { useLocalStorageState } from './useLocalStorageState'

/*
 Import and use it like normal useState react hook with key and defaultValue,
 it will create key in browser's localstorage, and if there is any state update
 using setState(), it will update the localstorage with the new value.
*/

// const [name, setName] = useLocalStorageState('myname', 'vasu')
