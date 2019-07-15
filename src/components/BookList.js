import React, {useContext} from 'react';
import { BookContext } from '../contexts/BookContext';
import BookDetails from './BookDetails';

const BookList = () => {
    const {books} = useContext(BookContext);
    
    // melakukan pengecekan state books pada BookContext, apakah terdapat data didalamnya ataukah kosong
    // jika terdapat data didalamnya maka data akan ditampilakn pada dengan menggunakan component BookDetails
    // jika tidak ada data maka akan menampilkan pesan "Tidak ada daftar buku yang tersedia".
    return books.length ? (
        <div className="book-list">
            <ul>
                {
                    books.map(book => {
                        return (<BookDetails book={book} key={book.id} />)
                    })
                }
            </ul>
        </div>
    ) : (
        <div className="empty">Tidak ada daftar buku yang tersedia :).</div>
    );
}
 
export default BookList;