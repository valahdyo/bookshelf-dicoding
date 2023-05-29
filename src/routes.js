const {
  addBook, getBooks, getBook, editBook, deleteBook
} = require('./handler') 

const routes = [
  {
    method: 'GET',
    path: '/',
    handler: (request, h) => {
      return `Health Check ${new Date()}`;
  }},
  {
    method: 'POST',
    path: '/books',
    handler: addBook,
  },
  {
    method: 'GET',
    path: '/books',
    handler: getBooks,
  },
  {
    method: 'GET',
    path: '/books/{bookId}',
    handler: getBook,
  },
  {
    method: 'PUT',
    path: '/books/{bookId}',
    handler: editBook,
  },
  {
    method: 'DELETE',
    path: '/books/{bookId}',
    handler: deleteBook,
  } 
];

module.exports = routes;