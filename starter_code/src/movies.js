/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arr) {
  let sArr = [...arr];
  return sArr.sort((movie1, movie2) => movie1.year > movie2.year ? 1 : -1);
}
// Iteration 2:  Spielberg. The best? - How many drama movies did  SPIELBERG direct
function howManyMovies(arr) {
  spielbergMovies = arr.filter(movie => movie.director === "Steven Spielberg");
  spielbergDramas = spielbergMovies.filter(movie => movie.genre.includes("Drama"));
  return spielbergDramas.length;
}
// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arr) {
  let clonedArr = [...arr]
  let sortedArr = clonedArr.sort(function (a, b) {
    if (a.title < b.title) { return -1; }
    if (a.title > b.title) { return 1; }
    return 0;
  })
  let sortedArrTitles = sortedArr.map(movie => movie.title);
  if (sortedArrTitles.length > 20) {
    let firstTwenty = [];
    for (i = 0; i < 20; i++) {
      firstTwenty.push(sortedArrTitles[i]);
    }
    return firstTwenty;
  }
  return sortedArrTitles;
}
// Iteration 4: All rates average - Get the average of all rates with 2 decimals

// Iteration 5: Drama movies - Get the average of Drama Movies

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average
