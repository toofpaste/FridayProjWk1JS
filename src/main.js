import SpaceCalc from './SpaceAge.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {
    $("#birthdate").submit(function(event){
        //shows in year-month-day
       let birthday = $("#bDate").val()
        let dateHold = birthday.split("-");
        let year = dateHold[0];
        let month = dateHold[1];
        let day = dateHold[2];
        let ageCount = new SpaceCalc(year, month, day);
        console.log(year);
        console.log(month);
        console.log(day);
       event.preventDefault();
    });
});
