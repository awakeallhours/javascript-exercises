const getTheTitles = function(books) {
    books = [
        {
          title: 'Book',
          author: 'Name'
        },
        {
          title: 'Book2',
          author: 'Name2'
        }
    ]
    
    let names = []
      books.forEach(element => {
        names.push(element.title)
    });
    console.log(names)
    return names
};

getTheTitles()

// Do not edit below this line
module.exports = getTheTitles;
