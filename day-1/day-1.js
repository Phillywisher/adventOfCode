const fs = require("fs");
const input = fs.readFileSync("day-1/input.txt", "utf-8");

const getLists = (data) => {
  const allData = data.match(/[0-9]+/g);
  const lists = [[], []];
  allData.forEach((number, index) => {
    lists[index % 2].push(number);
  });
  return lists;
};

const totalDiff = (arr) => {
  let count = 0;
  const listOne = arr[0].sort((a, b) => a - b);
  const listTwo = arr[1].sort((a, b) => a - b);

  for (let i = 0; i < listOne.length; i++) {
    count += Math.abs(listOne[i] - listTwo[i]);
  }

  return count;
};

const similarScore = (arr) => {
  const map = arr[1].reduce((map, num) => {
    map[num] = (map[num] || 0) + 1;
    return map;
  }, {});

  const simScore = arr[0].reduce((acc, currVal) => {
    return acc + currVal * (map[currVal] || 0);
  }, 0);
  return simScore;
};

const solution = (data) => {
  const dataArr = getLists(data);
  return totalDiff(dataArr);
};

const solutionP2 = (data) => {
  const dataArr = getLists(data);
  return similarScore(dataArr);
};
console.log(solution(input));
console.log(solutionP2(input));

module.exports = { solution, solutionP2, totalDiff, getLists, similarScore };
