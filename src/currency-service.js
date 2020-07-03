export class CurrencyService {

  constructor() {
  this.movieArray = [];
  }

  async getMovieSelection(movie) {
    try {
      let response = await fetch(
        `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/${currency}`
        `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${movie}`
      );
      // console.log("api run:" + response);
      let jsonifiedResponse;
      if (response.ok && response.status == 200) {
        jsonifiedResponse = await response.json();
      } else {
        jsonifiedResponse = false;
      }
      return jsonifiedResponse;
    } catch (error) {
      return false;
    }
  }


  addMovieSelection(newResponse) {
    if (!newResponse) {
      return;
    } else {
      // console.log("new:" + newResponse);
      this.movieArray.push(newResponse.conversion_rates.currency);
      console.log(newResponse.conversion_rates.currency);
      // console.log("This is our movie array as of the end of the addMovieSelection (it should contain all movies): " + this.movieArray);
      // console.log(newResponse.results[0].title);
    }
  }
}
