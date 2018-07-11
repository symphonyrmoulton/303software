/**
 * Main request endpoint. Contains all external api requests for the exercise.
 */
const Book = require('../models/book');

module.exports.create = function(req, res) {
    request = req.body;
    Book.create(request).then(book => {
        res.status(200).send(book);
        return;    
    });
};


module.exports.getOne = function(req, res) {
    Book.findOne().then(book => {
        res.status(200).send(book);
        return;
      });
};


module.exports.getAll = function(req, res) {
    Book.findAll().then(books => {
        res.status(200).send(books);
        return;
      })
};


module.exports.update = function(req, res) {
    var request = req.body;
    Book.update(
        { 
            title: request.title,
            author: request.author,
            content: request.content,
        },
        { where: { _id: request.id } }
      )
        .then(result => function () {
            res.status(200).send(result)
            return;        
        })
        .catch(err => function () {

            res.status(400).send(err)
            return;        
        })

};


module.exports.delete = function(req, res) {
    var request = req.body;
    Book.delete(request.id).then(deletedBOok => {
        res.status(200).send(deletedBOok);
        return;
    })

};
