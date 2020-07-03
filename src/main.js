import { CurrencyService } from "./../src/currency-service.js";
import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

let newResponse = null;
let currencyService = new CurrencyService();

$(document).ready(function () {
  $("#currency-form").submit(function(event) {
    event.preventDefault();
    let number = parseInt($("#numberSearch").val());
    $("#numberSearch").val("");
    let currency = $("#currencySearch").val();
    $("#currencySearch").val("");
    $("#list").show();
    $("#currencyList").hide();

    
    (async () => {     
      let response = await currencyService.getCurrencySelection(currency);
      getElements(response, currency);
    })();

    function getElements(response, currency) {
      if (response) {
        // newResponse = response;
       
        console.log(response);
        
        $("#list").html(`<li> Your currency is: ${currency} The converted rate is: ${response.conversion_rates.USD}, and your new foreign currency total is: ${response.conversion_rates.USD *= number} <br></li>`);
        console.log(currency, number);
        
      } else {
        newResponse =  null;
        $("#list").html(`"<li>" No money for you!"</li>"`);
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
    $("#currencyList").append(currencyService.currencyArray);

  });
});
