const sequelize = require('./index');
const Sequelize = require('sequelize');
const Book = sequelize.define('book', {
    title: {
      type: Sequelize.STRING,
      primaryKey: true,
    },
    id: {
        type: Sequelize.STRING
    },
    author: {
        type: Sequelize.STRING
    },
    content: {
      type: Sequelize.STRING
    }
  });
  
  // force: true will drop the table if it already exists
  Book.sync({force: true}).then(() => {
    // Table created
    return Book.create({
      title: 'John',
      id: '1',
      author: 'Ryan',
      content: 'awesome',
    });
  });

  module.exports = Book;