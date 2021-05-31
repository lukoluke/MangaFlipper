const books = [
["Romance- \nHigh School Debut", "url('High_School_Debut.jpeg')"], 
["Horror- \nUzumaki", "url('uzumaki.png')"], 
["Supernatural- \nVampire Knight", "url('vampireknight.jpeg')"], 
["Comedy- \nGanbare! Nakamura-kun!", "url('nakamura.jpeg')"],
["Slice of Life- \nMy Brother's husband", "url('My_Brothers_Husband.jpeg')"]]

const btn = document.getElementById("btn");
const book = document.querySelector(".book");

btn.addEventListener("click", function () {
  const randomNumber = getRandomNumber();
  // console.log(randomNumber);

  document.body.style.backgroundImage = books[randomNumber][1];
  book.textContent = books[randomNumber][0];
});

function getRandomNumber() {
  return Math.floor(Math.random() * books.length);
}


