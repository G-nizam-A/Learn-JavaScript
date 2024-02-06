function formatDate(date) {
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  return `${year}-${month}-${day}`;
}

const givenDateString = "2024-02-05";
const givenDate = new Date(givenDateString);

// Current date
const currentDate = new Date();
const formattedCurrentDate = new Date(formatDate(currentDate));

// Compare dates
if (givenDate > formattedCurrentDate) {
  console.log("The given date is upcoming.");
} else if (givenDate < formattedCurrentDate) {
  console.log("The given date is older.");
} else {
  console.log("The given date is today.");
}