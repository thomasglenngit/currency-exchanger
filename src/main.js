import { CurrencyService } from "./../src/currency-service.js";
import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";


let newResponse = null;
let currencyService = new CurrencyService();

$(document).ready(function () {
  $("#currency-form").submit(function (event) {
    event.preventDefault();
    let currency = $("#currencySearch").val();
    $("#currencySearch").val("");
    $("#list").show();
    $("#currencyList").hide();

    
    (async () => {
      // console.log("this should contain all movies up to this point that we've added: " + movieService.movieArray);
      const response = await currencyService.getCurrencySelection(currency);
      getElements(response, currency);
    })();

    function getElements(response, currency) {
      if (response) {
        newResponse = response;
        
        console.log(response);

        $("#list").html(`<li> Your currency is: ${currency} The converted rate is: ${response.conversion_rates.currency}<br></li>`);
        

      } else {
        newResponse =  null;
        $("#list").html(`"<li>" No movies for you!"</li>"`);
        $("#list").html(
          `<li> Please check your inputs and try again! </li>`
        );
      }
    }  
  });

  $("#add").click(function () {
    currencyService.addCurrencySelection(newResponse);
    // console.log("This is the currency: " + newResponse)
    $("#currencyList").show();
    $("#list").hide();
    $("#currencyList").append(`<li>${newResponse.conversion_rates.currency}</li>`);
    // $("#faveList").append(movieService.movieArray);
    // console.log("This is the title of the newResponse: "
    //   + newResponse.results[0].title);
  });
});
