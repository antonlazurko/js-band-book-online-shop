import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import booksOperations from '../../redux/books/books-operations';
import booksActions from '../../redux/books/books-actions';
import selectors from '../../redux/books/selectors';
import Card from '../../components/Card/Card';

const CatalogView = () => {
  const dispatch = useDispatch();
  const token = useSelector(selectors.getTokenSelector);
  useEffect(() => {
    dispatch(booksOperations.getBooks(token));
  }, []);
  const filtredBooks = useSelector(selectors.getFiltredBooks);
  const [filterValue, setFilterValue] = useState('');
  const [selectValue, setSelectValue] = useState('');
  const [booksByPrice, setBooksByPrice] = useState(filtredBooks);
  useEffect(() => {
    dispatch(booksActions.changeFilter(filterValue));
  }, [filterValue]);
  useEffect(() => {
    switch (selectValue) {
      case '':
        setBooksByPrice(filtredBooks);
        break;
      case '0':
        setBooksByPrice(filtredBooks.filter((book) => book.price <= 25));
        break;
      case '1':
        setBooksByPrice(
          filtredBooks.filter((book) => book.price > 25 && book.price <= 50),
        );
        break;
      case '2':
        setBooksByPrice(filtredBooks.filter((book) => book.price > 50));
        break;
      default:
        setBooksByPrice(filtredBooks);
        break;
    }
  }, [selectValue, filtredBooks]);

  return (
    <>
      {booksByPrice && (
        <>
          <div className="filtres">
            <input
              value={filterValue}
              type="text"
              autoComplete="off"
              onChange={(e) => setFilterValue(e.target.value)}
            />
            <form
              method="post"
              onChange={(e) => setSelectValue(e.target.value)}
            >
              <select size="3" name="price">
                <option defaultValue="">Price</option>
                <option value="0">0 &lt; price &lt; 25</option>
                <option value="1">25 &lt; price &lt; 50</option>
                <option value="2">50 &gt;</option>
              </select>
            </form>
          </div>
          <ul>
            {booksByPrice.map((book) => (
              <Card book={book} key={book.id} />
            ))}
          </ul>
        </>
      )}
    </>
  );
};

export default CatalogView;