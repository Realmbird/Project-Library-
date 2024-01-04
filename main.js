const myLibrary = [];

function Book() {
    //object constructor 

}

function addBookToLibrary() {
    //do stuff here
}

function displayBooks() {
    //display books on site
    const title = document.querySelector('.title');
    const table = document.createElement('h1');
    //wanted to see how to load element when page loads so did h1 
    //what I want 
    //const document.createElement('table');
    table.textContent = "HI"
    title.append(table);
    // code to loop through books step 3
    //want books to display in table so I want to put everything into table and then load it into dom
    myLibrary.forEach(book => {
        const Lbook = document.createElement('td')
        Lbook.textContent = book
        
    });

}
displayBooks();