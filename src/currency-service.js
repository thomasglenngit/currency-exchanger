export class CurrencyService {

  constructor() {
  this.currencyArray = [];
  }

  async getCurrencySelection(currency) {
    try {
      let response = await fetch(
        `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/${currency}`
        // `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${movie}`
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


  addCurrencySelection(newResponse) {
    if (!newResponse) {
      return;
    } else {
      // console.log("new:" + newResponse);
      this.currencyArray.push();
      console.log(newResponse.conversion_rates.currency);
      // console.log(this.movieArray);
      // console.log(newResponse.conversion_rates.currency);
    }
  }
}
