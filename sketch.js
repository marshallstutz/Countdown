function setup() {
  createCanvas(300, 500);
}

function draw() {
  background(255);
  textAlign(LEFT, CENTER);
  let months = 5 - month() - 1;
  let days = getDaysInMonth() - day() - 1;
  let hours = 24 - hour() - 1;
  let minutes = 60 - minute() - 1;
  let seconds = 60 - second() - 1;
  let fullDate = months + " months " + days + " days " + hours + " hours " + minutes + " minutes and " + seconds + " seconds";
  fill(0);
  noStroke();
  textSize(50);
  text(months + " months", 0, 50);
  text(days + " days", 0, 100);
  text(hours + " hours", 0, 150);
  text(minutes + " minutes", 0, 200);
  text(seconds + " seconds", 0, 250);

}

function getDaysInMonth(){
   switch(month()){
     case 1:
     case 3:
       return 31;
     case 2:
       return 29;
     case 4:
       return 30;

   }
}
