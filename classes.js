
// Q1. 

class Car{
    constructor(make,model,year,isAvailable){
        this.make = make
        this.model = model
        this.year = year
        this.isAvailabble = isAvailable
    }

    toggleAvailable(){
        this.isAvailabble = !this.isAvailabble
console.log(`Is the car available: ${this.isAvailabble}`);
    }
}

class Rental{
    constructor(car,renterName,rentalStartDate,rentalEndDate){
        this.car = car
        this.renterName = renterName
        this.rentalStartDate = rentalEndDate
        this.rentalEndDate = rentalEndDate

    }

    calculateRentalDuration(){
        this.rentalStartDate = (new Date().getDay())
        this.rentalEndDate = (new Date().getDay())
        const duration = this.rentalEndDate - this.rentalStartDate

        console.log(`The rental duration is ${duration} days`);

        const durationInMilliseconds = this.rentalEndDate - this.rentalStartDate;
        const durationInDays = Math.ceil(durationInMilliseconds / (1000 * 60 * 60 * 24));
        return durationInDays;

    }

}

const car = new Car("Toyta","Camry",2020,true)
 
console.log(car);

car.toggleAvailable();

const rental = new Rental(car,"Latifa",(new Date().getDate()), (new Date().getDate()))

console.log({rental});

rental.calculateRentalDuration()


// Q2.

class Question{
    constructor(text,options,correctAnswer){
        this.text = text;
        this.options = options;
        this.correctAnswer = correctAnswer;
    }

    checkAnswer(answer){
if (answer === this.correctAnswer) {
    return true;
} else {
    return false
}

    }
}

class Quiz {
    constructor() {
      this.questions = [];
      this.currentQuestionIndex = 0;
      this.score = 0;
    }
  
    addQuestion(Question) {
      this.questions.push(Question);
    }
  
    nextQuestion() {
      (this.currentQuestionIndex)++;
      console.log((this.currentQuestionIndex)++);
    // }
  
    submitAnswer(Answer) {
      const currentQuestion = this.questions[this.currentQuestionIndex];
      if (currentQuestion.checkAnswer(Answer)) {
        this.score++;
      }
    }
  }
}

  const ask = new Question("Capital city of Rwanda",["Kampala","Pretoria","Kigali"],"Kigali")

  console.log(ask);
  console.log(ask.checkAnswer());

  const cat = new Quiz()

  console.log(cat);
  console.log(cat.submitAnswer());