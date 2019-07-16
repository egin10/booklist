import React, {useContext} from 'react';
import { BookContext } from '../contexts/BookContext';

// pada component ini kita menerima sebuah props, untuk lebih sederhananya kita menggunakan destruksi untuk menggunakan
// yang kita perlukan saja, disini kita hanya mengunakan props.book maka cukup dengan menuliskan {book} pada parameter yang
// diterima oleh component sebagai props.
const BookDetails = ({book}) => {
    // disini kita menggunakan fungsi removeBook pada BookContext, maka kita harus memanggil BookContext agar dapat menggunakan
    // fungsi tersebut.
    // const {removeBook} = useContext(BookContext);

    // karena fungsi removeBook telah kita deklarasikan pada dispatch di reducer, maka cukup dispatch yg kita gunakan disini
    const {dispatch} = useContext(BookContext);
    return (
        // disini kita menggunakan removeBook untuk menghapus data pada state di Context ketika list di klik.
        <li onClick={() => dispatch({type: "REMOVE_BOOK", id: book.id})}>
            <div className="title">{book.title}</div>
            <div className="author">{book.author}</div>
        </li>
    );
}
 
export default BookDetails;