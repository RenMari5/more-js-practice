"use strict";

const runnerTimes = [
  { name: "Jeff", time: 20, fastestTime: false },
  { name: "Amber", time: 10, fastestTime: true },
  { name: "Greg", time: 6, fastestTime: true },
  { name: "Sarah", time: 15, fastestTime: false },
  { name: "Tom", time: 25, fastestTime: false },
];

// Push a new runnerTime into the array

const addRunnerTime = (array, newName, newTime, newFastestTime) => {
  const newRunnerTime = {
    name: newName,
    time: newTime,
    fastestTime: newTime > 10 ? true : false,
  };
  array.push(newRunnerTime);
};

// Removing an object using splice method

function deleteRunnerTimeByIndex(array, index) {
  array.splice(index, 1);
}

deleteRunnerTimeByIndex(runnerTimes, 2);

// Remove object from the array that has the given name. Incorporate the findIndex method and splice method

const deleteRunnerTimeByName = function (array, name) {
  const index = array.findIndex(
    (runnerTimeObject) => runnerTimeObject.name === name
  );
  array.splice(index, 1);
};

// Use conditional statments to set value for the fastestTime property to less than or equal to 10 and false otherwise (plus spread operator)

function editRunnerTime(array, indes, time) {
  array[index].time = time;
  array[index].fastestTime = time <= 10 ? true : false;
}
