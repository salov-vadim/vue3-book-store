const apiBase = "https://www.googleapis.com/books/v1/volumes?q=";
const _notImage =
  "https://us.123rf.com/450wm/urfandadashov/urfandadashov1805/urfandadashov180500070/100957966-photo-not-available-icon-isolated-on-white-background-vector-illustration.jpg?ver=6";

const getTransformBooks = (books) => {
  return books.map((book) => _transformBook(book));
};

const _transformBook = (book) => {
  return {
    id: book.id,
    title: book.volumeInfo.title,
    image: book.volumeInfo.imageLinks?.thumbnail || _notImage,
    authors: book.volumeInfo.authors?.join(", "),
    publishedDate: book.volumeInfo.publishedDate
      ?.split("-")
      .reverse()
      .join("."),
    description: book.volumeInfo.description,
    price: book.saleInfo.listPrice?.amount || 0,
    currency: book.saleInfo.listPrice?.currencyCode || "UAH",
  };
};

export { getTransformBooks, apiBase };
