#!/usr/bin/node
let argNumber = 0;

exports.logMe = function (item) {
  console.log(argNumber + ': ' + item);
  argNumber++;
};
