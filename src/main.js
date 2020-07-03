import { CurrencyService } from "./currency-service.js";
import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

let newResponse = null;
let movieService = new CurrencyService();

$(document).ready(function () {
  $("#movie-form").submit(function (event) {
    event.preventDefault();
    let movie = $("#movieSearch").val();
    $("#movieSearch").val("");
    $("#list").show();
    $("#faveList").hide();
    

    (async () => {
      // console.log("this should contain all movies up to this point that we've added: " + movieService.movieArray);
      const response = await movieService.getMovieSelection(movie);
      getElements(response, movie);
    })();

    function getElements(response, movie) {
      if (response) {
        newResponse = response;
        // console.log(response)

        $("#list").html(`<li> Here is your movie: ${movie} The official title is: ${response.results[0].title} ${response.results[0].overview}<br> <img src=https://image.tmdb.org/t/p/w500${response.results[0].poster_path} ></li>`);
        
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
    movieService.addMovieSelection(newResponse);
    console.log("This is the whole movie response: " + newResponse)
    $("#faveList").show();
    $("#list").hide();
    $("#faveList").append(`<li>${newResponse.results[0].title}</li>`)
    // $("#faveList").append(movieService.movieArray);
    // console.log("This is the title of the newResponse: "
    //   + newResponse.results[0].title);
  });
});
