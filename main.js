const myLibrary = [new Book("bird", "were the birds go", "100"), new Book("blind", "scramblers", "200")]

function Book(author, title, pages) {
    //object constructor 
    // author, title, number of pages
    this.author = author;
    this.title = title;
    this.pages = pages;
}

function addBookToLibrary() {
    //do stuff here
  
}
function displayBooks() {
    //display books on site
    const table = document.querySelector('table');
    //wanted to see how to load element when page loads so did h1 
    //what I want 
    //const document.createElement('table');
    
    // code to loop through books step 3
    //want books to display in table so I want to put everything into table and then load it into dom
    myLibrary.forEach(book => {
        const BookRow = document.createElement('tr');
        for(const property in book) {
            const BookData = document.createElement('td');
            BookData.textContent = book[property]
            console.log(BookData)
            BookRow.append(BookData)
        }
        /*
        const BookAuthor = book.author;
        const BookTitle = book.title;
        const BookPages = book.pages;
        */
        table.append(BookRow)
    });

    }
displayBooks();
const openbtn = document.querySelector("#new_book");
const dialog = document.querySelector("dialog");
const closebtn = document.querySelector("dialog > button");
openbtn.addEventListener("click", () => {
    dialog.showModal()
});
closebtn.addEventListener("click", () => {
    dialog.close()
});