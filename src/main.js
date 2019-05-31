import {SpaceCalc} from './SpaceAge.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {
  $("#birthdate").submit(function(event){
    //shows in year-month-day
    let birthday = $("#bDate").val();
    let dateHold = birthday.split("-");
    let year = parseInt(dateHold[0]);
    let month = parseInt(dateHold[1]);
    let day = parseInt(dateHold[2]);
    let ageCount = new SpaceCalc(year, month, day);
    let dayCount = ageCount.getDays();
    let monthCount = ageCount.getMonth();
    let yearCount = ageCount.getYear();
    let trueAge = ageCount.getAge(dayCount, monthCount, yearCount);
    $("#result").text(ageCount.printAge(trueAge));
    $("#result1").text(ageCount.printAgeMer(trueAge));
    $("#result2").text(ageCount.printAgeVenus(trueAge));
    $("#result3").text(ageCount.printAgeMars(trueAge));
    $("#result4").text(ageCount.printAgeJupiter(trueAge));

    event.preventDefault();
  });
});
