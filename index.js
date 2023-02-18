"use strict";

// Your task is to write a function which returns the time since midnight in milliseconds.
const convertToMill = (h, m, s) => {
  return h * 3600000 + m * 60000 + s * 1000;
};
