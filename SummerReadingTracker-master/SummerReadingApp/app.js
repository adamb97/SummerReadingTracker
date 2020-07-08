class Book {
  constructor(name, author, pages) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = false;
  }

}

let book1 = new Book("the handmaidens tails", "Author Suzie", 320);
let book2 = new Book("Harry Potter", "JK Rowling", 780);
let book3 = new Book("Gossip Girl", "Coleman Harrison", 220);

let booksArr = [book1, book2, book3];
let addBtn = document.getElementById("addBtn");
let completeBtn = document.querySelector("#completeBtn");
let list = document.querySelector("#inprogressList");
let pageTracker = document.querySelector('.pageTrackerWrapper');

function addBook() {
  let title = document.getElementById("title-input").value;
  let author = document.getElementById("author-input").value;
  let pages = document.getElementById("pages-input").value;
  let pagesNum = parseInt(pages);
  let newBook = new Book(title, author, pagesNum);

  let bookNode = document.createElement("LI");
  let imgNode = document.createElement('img');
  let imgSrc = '/SummerReadingApp/img/book-flat.png';
  imgNode.setAttribute('src', imgSrc);
  bookNode.appendChild(imgNode);
  let textNode = document.createTextNode(` ${title} By ${author}: ${pagesNum} `);
  bookNode.appendChild(textNode);

  booksArr.push(newBook);
  list.appendChild(bookNode);
  bookNode.addEventListener("click", addChecked);
  console.log(booksArr);
}

function markCopmleted() {
  let liTags = list.getElementsByTagName("li");
  for (let i = 0; i < liTags.length; i++) {
    if (liTags[i].classList.contains("checked")) {
      liTags[i].classList.remove();
      booksArr[i].read = true;
      liTags[i].classList.add('read');
    }
  }
}

addBtn.addEventListener("click", addBook);

function addChecked(e) {
  for (let i = 0; i < list.children.length; i++) {
    if (list.children[i].classList.contains("checked")) {
      list.children[i].classList.remove("checked");
    }
  }
  if (e.target.classList.contains("checked")) {
    e.target.classList.remove("checked");
  } else {
    e.target.classList.add("checked");
  }
}

for (let i = 0; i < list.getElementsByTagName("li").length; i++) {
  list.getElementsByTagName("li")[i].addEventListener("click", addChecked);
}

function showPageTotal() {
  let total = 0;
  let pagesNum = document.querySelector(".pagesNum");
  for (let i = 0; i < booksArr.length; i++) {
    if (booksArr[i].read == true) {
      total += booksArr[i].pages;
    }
  }

  pagesNum.innerHTML = `${total}`;

}

completeBtn.addEventListener("click", markCopmleted);

completeBtn.addEventListener("click", showPageTotal);