let books = [];
let editIndex = null;

document.getElementById("bookForm").addEventListener("submit", function(e) {
  e.preventDefault();
  
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const year = document.getElementById("year").value;

  const book = { title, author, year };

  if (editIndex === null) {
    books.push(book); // Create
  } else {
    books[editIndex] = book; // Update
    editIndex = null;
  }

  this.reset();
  renderBooks();
});

function renderBooks() {
  const tbody = document.querySelector("#bookTable tbody");
  tbody.innerHTML = "";

  books.forEach((book, index) => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.year}</td>
      <td>
        <button class="edit" onclick="editBook(${index})">Edit</button>
        <button class="delete" onclick="deleteBook(${index})">Delete</button>
      </td>
    `;

    tbody.appendChild(row);
  });
}

function editBook(index) {
  const book = books[index];
  document.getElementById("title").value = book.title;
  document.getElementById("author").value = book.author;
  document.getElementById("year").value = book.year;
  editIndex = index;
}

function deleteBook(index) {
  books.splice(index, 1);
  renderBooks();
}