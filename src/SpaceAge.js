import $ from "jquery";

export class SpaceCalc{
    constructor(year, month, day) {
        this.year = year;
        this.month = month;
        this.day = day;
    }
    getDays(){
        const currentDay = 31;
        if((currentDay - this.day) >= 0) {
            return 1;
        }else return 0;
    }
    getMonth(){
        const currentMonth = 5;
        if((currentMonth - this.month) >= 0) {
            return 1;
        }else return 0;
    }
    getYear(){
        const currentYear = 2019;
        if((currentYear - this.year) >= 0){
            return currentYear - this.year;
        }else return 0;
    }
    getAge(bDay, bMonth, bYear){
        var countDay = bDay;
        var countMonth = bMonth;
        var countYear = bYear;
        if(countDay === 1 && countMonth === 1 && countYear >= 1){
            return countYear;
        }else if(countYear === 0){
            return 0;
        }else return countYear - 1;
    }
      printAge(age){
        return ("You Are " + age + " years old on Earth");
      }

}


