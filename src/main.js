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
    

    (async () => {     
      let response = await currencyService.getCurrencySelection(currency);
      getElements(response, currency);
    })();

    function getElements(response, currency) {
      if (response) {
        $("#list").html(`<li> Your currency is: ${currency}.<br></li> <li>The converted amount is: ${response.conversion_rates[currency] *= inputNumber}<br></li>`);        
      } else {
        response =  null;
        $("#list").html(`"<li>" No money for you!"</li>"`);
        $("#list").html(
          `<li> Please check your inputs and try again! </li>`
        );
      }
    }  
  });
});
