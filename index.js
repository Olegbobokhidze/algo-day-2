"use strict";

// Your task is to write a function which returns the time since midnight in milliseconds.
const convertToMill = (h, m, s) => {
  return h * 3600000 + m * 60000 + s * 1000;
};

// find number of people, on last bus stop
const findPeopleInBus = (arr) => {
  let peopleIn = [];
  let peopleOut = [];
  arr.forEach((val) => {
    peopleIn.push(val[0]);
    peopleOut.push(val[1]);
  });
  const first = peopleIn.reduce((acc, curr) => acc + curr, 0);
  const second = peopleOut.reduce((acc, curr) => acc + curr, 0);
  return first - second;
};
