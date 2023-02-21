let books;

class Books {
  constructor(title, author, id) {
    this.title = title;
    this.author = author;
    this.id = id;
  }

  savedBooks(id) {
    localStorage.setItem('books', JSON.stringify(id));
    return this;
  }

  addBooks() {
    const retrieveBooks = getBook();
    const newTitle = document.querySelector('.new-title').value;
    const newAuthor = document.querySelector('.new-author').value;
    const id = `${new Date().getTime()}`;
    const book = new Books(newTitle, newAuthor, id);
    retrieveBooks.push(book);
    this.savedBooks(retrieveBooks);
  }

  removeBooks(idToDelete) {
    let newBooks = getBook();
    newBooks = newBooks.filter((book) => {
      if (book.id === idToDelete) {
        return false;
      }
      return true;
    });
    this.savedBooks(newBooks);
  }
}
export function getBook() {
  if ((localStorage.getItem('books'))) {
    books = JSON.parse(localStorage.getItem('books'));
  } else {
    const book1 = new Books('Oromay', 'Bealu Girma', 'id1');
    const book2 = new Books('Fikir Esike mekabir', 'Dr. Hadis Alemayehu', 'id2');
    const book3 = new Books('Dertogada', "Yisma'eke worku", 'id3');
    const book4 = new Books('Emegua', 'Dr. Alemayehu Wase', 'id4');
    books = [book1, book2, book3, book4];
    localStorage.setItem('books', JSON.stringify(books));
  }
  return books;
}

export { books, Books };