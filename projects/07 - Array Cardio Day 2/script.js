// ## Array Cardio Day 2

const people = [
  { name: "Wes", year: 1988 },
  { name: "Kait", year: 1986 },
  { name: "Irv", year: 1970 },
  { name: "Lux", year: 2015 },
];

// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?
const ages = (arr) => {
  const getAges = arr.map((item) => 2025 - item.year);
  const result = getAges.some((ages) => ages >= 19);
  console.log(result);
};

ages(people);
// Array.prototype.every() // is everyone 19 or older?
const ages2 = (arr) => {
  const getAges = arr.map((item) => 2025 - item.year);
  const result = getAges.every((ages) => ages >= 19);
  console.log(result);
};

ages2(people);

const comments = [
  { text: "Love this!", id: 523423 },
  { text: "Super good", id: 823423 },
  { text: "You are the best", id: 2039842 },
  { text: "Ramen is my fav food ever", id: 123523 },
  { text: "Nice Nice Nice!", id: 542328 },
];
// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423
const findTheId = (arr) => {
  const items = arr.find((item) => item.id === 823423);
  console.log(items);
};

findTheId(comments);

// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423
const deleteTheId = (arr) => {
    const items = arr.find((item) => item.id === 823423);
    comments.splice(items, 1)
    console.log(comments);
    
};

deleteTheId(comments);