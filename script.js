const titleInput = document.getElementById('title');
const authorInput = document.getElementById('author');
const isbnInput = document.getElementById('isbn');
const button = document.getElementById('submit');
const bookList = document.getElementById('book-list');

button.addEventListener('click',(event)=>{
	 event.preventDefault();

const title = titleInput.value;
const author = authorInput.value;
const isbn = isbnInput.value;

	if(title === "" || author === "" || isbn=== ""){
		alert("Please fill all the fields");
          return;
	}

	const row = document.createElement("tr");

        row.innerHTML = `
		<td>${title}</td>
		<td>${author}</td>
		<td>${isbn}</td>
		<td><button class="delete">X</button></td>
		`;

        bookList.appendChild(row);

        titleInput.value = "";
        authorInput.value = "";
        isbnInput.value = "";

        bookList.addEventListener("click", (e) => {
          if (e.target.classList.contains("delete")) {
            if (confirm("Are you sure you want to remove this book?")) {
              const row = e.target.parentElement.parentElement;
              bookList.removeChild(row);
            }
          }
			
        });

	
});
