var quotes = ["Below the surface of the machine, the program moves. Without effort, it expands and contracts. In great harmony, electrons scatter and regroup. The forms on the monitor are but ripples on the water. The essence stays invisibly below.",
              
"And my heart glows bright red under my filmy, translucent skin and they have to administer 10cc of JavaScript to get me to come back. (I respond well to toxins in the blood.) Man, that stuff will kick the peaches right out your gills!",
              
"People think that computer science is the art of geniuses but the actual reality is the opposite, just many people doing things that build on each other, like a wall of mini stones.",
              
"On two occasions I have been asked, ‘Pray, Mr. Babbage, if you put into the machine wrong figures, will the right answers come out?’ [...] I am not able rightly to apprehend the kind of confusion of ideas that could provoke such a question."];

var authors = ["--Master Yuan-Ma, The Book of Programming",
               "--_why, Why's (Poignant) Guide to Ruby",
               "--Donald Knuth",
               "--Charles Babbage, Passages from the Life of a Philosopher (1864)"];

//global varaible to apply in different functions
var displayquotes;
var displayauthors;
var currentindext;
var index;

function getquotes(){
  do{
  index = Math.floor(Math.random() * quotes.length);
  }while (index === currentindext);
  
  displayquotes = quotes[index];
  displayauthor = authors[index];
  
  console.log(displayquotes);
  console.log(displayauthor);
  
  // use jQuery to communicate with one to another
  $(".quote").html(displayquotes).quotes;
  $(".authors").html(displayauthor).authors;
}

$(function(){
  getquotes();
  $("#generate").click(getquotes);
  // use jQuery to show quotes generate in twitter post 
  $("#tweet").on("click",function(){
    window.open("https://twitter.com/intent/tweet?text="+ displayquotes);
  });
});
