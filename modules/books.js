let books;
const getBook = () => {
  if ((localStorage.getItem('books'))) {
    books = JSON.parse(localStorage.getItem('books'));
  } else {
    const book1 = { title: 'Oromay', author: 'Bealu Girma', id: 'id1' };
    const book2 = { title: 'Oromay', author: 'Bealu Girma', id: 'id1' };
    const book3 = { title: 'Oromay', author: 'Bealu Girma', id: 'id1' };
    const book4 = { title: 'Oromay', author: 'Bealu Girma', id: 'id1' };
    books = [book1, book2, book3, book4];
    localStorage.setItem('books', JSON.stringify(books));
  }
  return books;
};
class Books {
  constructor(title, author, id) {
    this.title = title;
    this.author = author;
    this.id = id;
  }

  savedBooks =(id) => {
    localStorage.setItem('books', JSON.stringify(id));
    return this;
  }

  addBooks =() => {
    const retrieveBooks = getBook();
    const newTitle = document.querySelector('.new-title').value;
    const newAuthor = document.querySelector('.new-author').value;
    const id = `${new Date().getTime()}`;
    const book = new Books(newTitle, newAuthor, id);
    retrieveBooks.push(book);
    this.savedBooks(retrieveBooks);
  }

  removeBooks =(idToDelete) => {
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

export { Books, getBook };