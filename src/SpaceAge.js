export class SpaceCalc{
  constructor(year, month, day, mf, life) {
    this.year = year;
    this.month = month;
    this.day = day;
    this.mf = mf;
    this.life = life;
  }
  getLife(age){
    if(age >= this.life){
      return "You have outlived your countries life expectancy by " + (age - this.life) + " years. Age expectancy in your country is " + this.life + " years";
    }else return "You have " + (this.life - age) + " years left to live. Age expectancy in your country is " + this.life + " years";
  }
  getDays(){
    const currentDay = 31;
    const currentMonth = 5;
    if(((currentDay - this.day) >= 0) && ((currentMonth - this.month) >= 0)) {
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
  printAgeMer(age){
    age = parseInt(age/0.24);
    return ("You Are " + age + " years old on Mercury");
  }
  printAgeVenus(age){
    age = parseInt(age/0.62);
    return ("You Are " + age + " years old on Venus");
  }
  printAgeMars(age){
    age = parseInt(age/1.88);
    return ("You Are " + age + " years old on Mars");
  }
  printAgeJupiter(age){
    age = parseInt(age/11.86);
    return ("You Are " + age + " years old on Jupiter");
  }

}


