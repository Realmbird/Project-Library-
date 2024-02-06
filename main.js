//refactored code to use class instead of plain constructors
class Book {
    constructor(author, title, pages, read) {
        this.author = author;
        this.title = title;
        this.pages = pages;
        this.read = read;
    }

    switch() {
        let prev = !(this.read);
        this.read = prev;
        displayBooks()
    }

}

let myLibrary = [new Book("bird", "were the birds go", 100, false), new Book("blind", "scramblers", 200, false)]

// function Book(author, title, pages, read) {
//     //object constructor 
//     // author, title, number of pages
//     this.author = author;
//     this.title = title;
//     this.pages = pages;
//     this.read = read;
// }
// //function gets scope as a method from book
// Book.prototype.switch = function() {
//     let prev = !(this.read);
//     this.read = prev;
//     displayBooks()
// }



function addBookToLibrary() {
    //do stuff here
    let author = document.getElementById("author");
    let title = document.getElementById("title");
    let pages = document.getElementById("pages");
    let read = document.getElementById("read");
    myLibrary.push(new Book (author.value, title.value, pages.value, read.checked));
    displayBooks()
}
function displayBooks() {
    //display books on site
    const table = document.querySelector('table');
    //rests the table not sure good solution
    table.innerHTML = '<tr><th>Author</th><th>Title</th><th>Pages</th><th>Read</th></tr>';
    //wanted to see how to load element when page loads so did h1 
    //what I want 
    //const document.createElement('table');
    
    // code to loop through books step 3
    //want books to display in table so I want to put everything into table and then load it into dom
    let index = 0;
    myLibrary.forEach(book => {
        const BookRow = document.createElement('tr');
        BookRow.classList.add('new'); 
         //Number
         const number = document.createElement('td');
         number.textContent = index
         BookRow.append(number);
        const rows = ["author", "title", "pages"];
        for(const property in book) {
            if (rows.includes(property)) {
                const BookData = document.createElement('td');
                BookData.textContent = book[property]
                console.log(BookData)
                BookRow.append(BookData)
            }
        }
        
        //Adds switch button
        const Rswitch = document.createElement('td');
        Rswitch.innerHTML = '<button class = "switch ' + book.read + '" value = "' + index + '">Read</button>'
        BookRow.append(Rswitch);


        //Adds delete button
        const BDelete = document.createElement('td');
        //BDelete.textContent = index;
        BDelete.innerHTML = '<button class = "remove" value = "' + index + '">Remove Book</button>'
        BookRow.append(BDelete);
        /*
        const BookAuthor = book.author;
        const BookTitle = book.title;
        const BookPages = book.pages;
        */
        table.append(BookRow)
        index++;
    });

    }
displayBooks();
const openbtn = document.querySelector("#new_book");
const dialog = document.querySelector("dialog");
const closebtn = document.querySelector(".close");
const submitbtn = document.querySelector(".submit");
const table = document.querySelector("table");

// javascript event delegation parent for remvoe
table.addEventListener("click", (event) => {
    const target = event.target;
    //checks if remove
    if (target.matches('.remove')){
        const button = event.target;
        let i = parseInt(button.value);
        // Perform the removal
        myLibrary.splice(i, 1); // goes to i and removes it
        displayBooks(); // Refresh the display
    }
})
// javascript event delegation for switch 
table.addEventListener("click", (event) => {
    const target = event.target;
    if(target.matches(".switch")){
        const button = event.target;
        let i = parseInt(button.value);
        myLibrary[i].switch();
        displayBooks();
    }
})

openbtn.addEventListener("click", () => {
    dialog.showModal()
});
closebtn.addEventListener("click", () => {
    dialog.close()
    event.preventDefault()
});
submitbtn.addEventListener("click", () => {
    dialog.close()
    event.preventDefault()
    addBookToLibrary()
})