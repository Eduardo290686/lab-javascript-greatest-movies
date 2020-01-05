/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  let clonedMovies = [...movies];
  return clonedMovies.sort((movie1, movie2) => movie1.year > movie2.year ? 1 : -1);
}
// Iteration 2:  Spielberg. The best? - How many drama movies did  SPIELBERG direct
function howManyMovies(movies) {
  spielbergMovies = movies.filter(movie => movie.director === "Steven Spielberg");
  spielbergDramas = spielbergMovies.filter(movie => movie.genre.includes("Drama"));
  return spielbergDramas.length;
}
// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  let clonedMovies = [...movies];
  let sortedMovies = clonedMovies.sort(function (a, b) {
    if (a.title < b.title) { return -1; }
    if (a.title > b.title) { return 1; }
    return 0;
  })
  let sortedMoviesTitles = sortedMovies.map(movie => movie.title);
  if (sortedMoviesTitles.length > 20) {
    let firstTwenty = [];
    for (i = 0; i < 20; i++) {
      firstTwenty.push(sortedMoviesTitles[i]);
    }
    return firstTwenty;
  }
  return sortedMoviesTitles;
}
// Iteration 4: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(movies) {
  if (movies.length === 0) {
    return 0;
  }
  let rates = movies.map(movie => {
    if (movie.rate === "" || movie.rate === undefined) {
      return 0;
    }
    return movie.rate
  })
  console.log(rates);
  return parseFloat((rates.reduce((acc, element) => acc + element) / movies.length).toFixed(2));
}
// Iteration 5: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(movies) {
  let dramaMovies = movies.filter(movie => movie.genre.includes("Drama"));
  if (dramaMovies.length === 0) {
    return 0;
  }
  let moviesRatings = dramaMovies.map(movie => movie.rate);
  let dramaAverage = parseFloat(((moviesRatings.reduce((acc, rate) => acc + rate)) / moviesRatings.length).toFixed(2));
  return dramaAverage;
}
// Iteration 6: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies) {
  let newMoviesArr = JSON.parse(JSON.stringify(movies));
  let durations = newMoviesArr.map(movie => movie.duration);
  let hoursToMinutes = durations.map(duration => {
    let durationString = duration.split("");
    if (!durationString.includes('h')) {
      return 0;
    }
    return duration.split('h')[0] * 60;
  });
  let minutes = durations.map(duration => {
    let durationString = duration.split("");
    if (!durationString.includes('h')) {
      return parseInt(duration.split('min')[0]);
    } else if (!durationString.includes('m')) {
      return 0;
    }
    let minutesWithMin = duration.split('h ')[1];
    return parseInt(minutesWithMin.split('min')[0]);
  })
  let durationsInMinutes = [];
  for (let i = 0; i < newMoviesArr.length; i++) {
    let movieDuration = hoursToMinutes[i] + minutes[i];
    durationsInMinutes.push(movieDuration);
  }
  for (let i = 0; i < newMoviesArr.length; i++) {
    newMoviesArr[i].duration = durationsInMinutes[i];
  }
  return newMoviesArr;
}
// BONUS Iteration: Best yearly rate average - Best yearly rate average
function bestYearAvg(movies) {
  if (movies.length === 0) {
    return null;
  }
  let yearsArr = movies.map(movie => movie.year);
  let sortedYears = yearsArr.sort((a, b) => a - b);
  let firstYear = sortedYears[0];
  let lastYear = sortedYears[sortedYears.length - 1];
  let years = []
  for (let i = firstYear; i <= lastYear; i++) {
    years.push(i);
  }
  let yearsObjects = []
  years.forEach(eachYear => yearsObjects.push(
    {
      year: eachYear,
      rates: [],
      average: 0
    }
  ));
  movies.forEach(movie => {
    let movieYear = movie.year;
    let movieRate = movie.rate;
    for (let i = 0; i < yearsObjects.length; i++) {
      if (yearsObjects[i].year === movieYear) {
        yearsObjects[i].rates.push(movieRate);
      }
    }
  })
  yearsObjects.forEach(object => {
    if (object.rates.length != 0) {
      object.average = parseFloat((object.rates.reduce((acc, rate) => acc + rate) / object.rates.length).toFixed(1));
    }
  });
  sortedYearsObjects = yearsObjects.sort((a, b) => b.average - a.average);
  return `The best year was ${sortedYearsObjects[0].year} with an average rate of ${sortedYearsObjects[0].average}`;
}
