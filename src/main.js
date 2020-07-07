import { CurrencyService } from "./../src/currency-service.js";
import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";


let currencyService = new CurrencyService();
let currency;

$(document).ready(function () {
  $("#currency-form").submit(function(event) {
    event.preventDefault();
    currency = $("#currencySearch").val();
    $("#currencySearch").val("");
    let inputNumber = parseInt($("#inputNumber").val());
    $("#inputNumber").val(""); 
    
    $("#list").show();
    $("#currencyList").hide();

    (async () => {     
      let response = await currencyService.getCurrencySelection(currency);
      getElements(response, currency);
    })();

    function getElements(response, currency) {
      if (response) {
        console.log("HERE IS THE RESPONSE: ",response)
        $("#list").html(`<li> Your currency is: ${currency} The converted rate is: ${response.conversion_rates[currency] *= inputNumber}<br></li>`);
      console.log(response.conversion_rates);

        //         $("#list").html(`<li> Your currency is: ${currency} The converted rate is: ${response.conversion_rates[currency]}<br></li>`);
        
      } else {
        response =  null;
        $("#list").html(`"<li>" No money for you!"</li>"`);
        $("#list").html(
          `<li> Please check your inputs and try again! </li>`
        );
      }
    }  
  });

  // $("#add").click(function () {
  //   currencyService.addCurrencySelection(newResponse);
  //   // console.log("This is the currency: " + newResponse)
  //   $("#currencyList").show();
  //   $("#list").hide();
  //   $("#currencyList").append(`<li>${newResponse.conversion_rates.currency}</li>`);
  //   $("#currencyList").append(currencyService.currencyArray);

  // });
});
