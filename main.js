'use strict';

(function(){
    var author = new Author('Victor', 'Hugo');

    var book = new Book('Les miserables', 'Livre trop long', new Date(), author, 'http://images.google.fr/imgres?imgurl=http%3A%2F%2Fwww.lastminute.com%2Fc%2Fcontent%2Fdam%2Fsite_gb%2FTheatre%2Fshows%2Fles-miserable%2F400x300.jpg&imgrefurl=http%3A%2F%2Fwww.lastminute.com%2Fentertainment%2Ftheatre%2Fles-miserables&h=300&w=400&tbnid=OmYRqmorVcgVLM%3A&docid=quEirFX-VHaIxM&ei=Ykb_V9B50NRpt-mkkAE&tbm=isch&iact=rc&uact=3&dur=409&page=0&start=0&ndsp=21&ved=0ahUKEwjQstT9rtfPAhVQahoKHbc0CRIQMwg2KAMwAw&bih=726&biw=1280');

    console.log(book);
    console.log(author);

    //Créer un book avec un id
    book = BookDao.create(book);
    console.log(book.id);

    var books = BookDao.findAll();
    console.log(books);

    BookDao.remove(book);

    books = BookDao.findAll();
    console.log(books);

})();


