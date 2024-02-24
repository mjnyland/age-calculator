let dayText = document.getElementById("day-result");
let monthText = document.getElementById("month-result");
let yearText = document.getElementById("year-result");

let dayValue = 0;
let monthValue = 0;
let yearValue = 0;

const now = new Date();

const form = document.querySelector("form");

function showResults(date) {
  const ageDiff = now.getTime() - date.getTime();
  const ageDate = new Date(ageDiff);
  yearText.textContent = Math.abs(ageDate.getUTCFullYear() - 1970).toString();
  monthText.textContent = ageDate.getUTCMonth().toString();
  let dayRes = ageDate.getUTCDate() - 1;
  dayText.textContent = dayRes.toString();
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  dayValue = parseInt(form.children[0].children[1].value);
  monthValue = parseInt(form.children[1].children[1].value);
  yearValue = parseInt(form.children[2].children[1].value);

  console.log(dayValue, monthValue, yearValue);
  const pastDate = new Date(yearValue, monthValue - 1, dayValue);

  showResults(pastDate);
});
