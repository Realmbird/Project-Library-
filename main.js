const myLibrary = ["bird", "are", "cool"];

function Book() {
    //object constructor 

}

function addBookToLibrary() {
    //do stuff here
}

function displayBooks() {
    //display books on site
    const title = document.querySelector('.title');
    const table = document.createElement('table');
    //wanted to see how to load element when page loads so did h1 
    //what I want 
    //const document.createElement('table');
    
    // code to loop through books step 3
    //want books to display in table so I want to put everything into table and then load it into dom
    myLibrary.forEach(book => {
        const Lbook = document.createElement('td')
        Lbook.textContent = book
        table.append(Lbook)
    });
    title.after(table);

    }
displayBooks();