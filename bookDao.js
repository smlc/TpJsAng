'use strict'

var BookDao = (function(){
    var books = [];
    var increment = 1;

    var create = function(book){
        book.id = increment;
        increment ++;
        books.push(book);
        return book;
    };

    var findAll = function(){
        return books;
    };

    var remove = function(book){
        
        for (var i = 0; i < books.length; ++i) {
            if(books[i].id === book.id) {
                books.splice(i, 1);
                break;
            }
        }
    };

    return {
        create : create,
        findAll: findAll,
        remove: remove
    }

})();