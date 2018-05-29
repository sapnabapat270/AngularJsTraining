var Book=function(bookName,price){
    this.bookName=bookName;
    this.price=price;
}


function displayBookInfo(book){
    console.log(book);
}



var book=new Book("Shiva triology","2000");

displayBookInfo(book);