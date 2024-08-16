const myLibrary = [];
var bookID = 0;

function Book(title, author, pages, bookRead) {
  // the constructor...
  this.id = incrementID();
  this.title = title;
  this.author = author;
  this.pages = pages;

  if (bookRead === "Yes") {
    this.read = "Read";
  } else {
    this.read = "Unread";
  }
}

function addBookToLibrary(myLibrary) {
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  const readBookOption = document.querySelector(
    'input[name="readBook"]:checked'
  );

  let readBookSelected = readBookOption.value;

  console.log(title);
  console.log(author);
  console.log(pages);
  console.log(readBookSelected);

  myLibrary.push(new Book(title, author, pages, readBookSelected));

  console.log(myLibrary);
}

function incrementID() {
  bookID++;
  return bookID;
}

function displayLibrary(myLibrary) {
  const libraryContainer = document.getElementById("library-container");
  libraryContainer.querySelectorAll("div.book").forEach((div) => div.remove());

  myLibrary.forEach((element) => {
    console.log(element.id);
    var div = document.createElement("div");
    div.classList.add("book-tile", "book");

    div.id = `${element.id}`;

    div.innerHTML = `<h2>${element.title}</h2>
    <p>by <strong>${element.author}</strong></p>
    <p>${element.pages} pages</p>
    <button class="read-status" id=${element.read}>${element.read}</button>
    <button class="remove-button" id=${element.id} onclick=removeBook(this.id)>Remove Book</button>
    `;
    libraryContainer.appendChild(div);
  });
}

function handleAddBook(event) {
  event.preventDefault();

  addBookToLibrary(myLibrary);
  displayLibrary(myLibrary);
  alert("Book Added!");
}

function removeBook(id) {
  console.log(typeof id);
  console.log(typeof parseInt(id));
  console.log(myLibrary);
  const index = myLibrary.findIndex((element) => element.id === parseInt(id));
  if (index !== -1) {
    myLibrary.splice(index, 1);
  }
  displayLibrary(myLibrary);
}