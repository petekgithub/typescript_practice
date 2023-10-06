// Write the Movie type alias to make the following two vairables properly typed
// Make sure that "originalTitle" is optional and "title" is readonly

type Movie = {
  readonly title: string;
  originalTitle?: string;
  director: string;
  releaseYear: number;
  boxOffice: {
    budget: number;
    grossUS: number;
    grossWorldWide: number;
  };
};

const dune: Movie = {
  title: "Dune",
  originalTitle: "Dune Part One",
  director: "Denis Villeneuve",
  releaseYear: 2021,
  boxOffice: {
    budget: 165000000,
    grossUS: 108327830,
    grossWorldWide: 400671789,
  },
};

const cats: Movie = {
  title: "Cats",
  director: "Tom Hooper",
  releaseYear: 2019,
  boxOffice: {
    budget: 165000000,
    grossUS: 108327830,
    grossWorldWide: 400671789,
  },
};

// Write a function called getProfit that accepts a single Movie object
// It should return the movie's worldwide gross minus its budget

// For ex..
// getProfit(cats) => -211212

// --1
// function getProfit (movie: Movie): number {
//   movie.boxOffice.grossWorldWide - movie.boxOffice.budget;
// };

// --2
// function getProfit(movie: Movie): number {
//   const { grossWorldWide, budget } = movie.boxOffice;
//   return grossWorldWide - budget;
// }

// --3
function getProfit({ boxOffice: { grossWorldWide, budget } }: Movie): number {
  return grossWorldWide - budget;
}

//console.log(getProfit(dune));
console.log(getProfit(cats));
