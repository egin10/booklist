import React, {createContext, useReducer} from 'react';
import { bookReducer } from '../reducers/bookReducer';
// import uuid from 'uuid/v1';

// membuat Context untuk Book
export const BookContext = createContext();

const BookContextProvider = (props) => {
    // membuat State Books
    // [nama_state, func_untuk_handle_state] = useState(data_sebuah_state)
    // const [books, setBooks] = useState([
    //     {title: 'name of the wind', author: 'patrick rothfuss', id: 1},
    //     {title: 'the final empire', author: 'brandon sanderson', id: 2},
    // ]);

    // karena kita akan menggunakan useReducer sebagai dispatch untuk memanipulasi data pada state
    // maka kita akan membuat state lagi dengan menggunakan useReducer(reducer, state)
    const [books, dispatch] = useReducer(bookReducer, [
        {title: 'name of the wind', author: 'patrick rothfuss', id: 1},
        {title: 'the final empire', author: 'brandon sanderson', id: 2},
    ]);

    // fungsi untuk menambah data baru ke dalam state
    // dengan cara membuat data baru di state
    // dengan melakukan copy data [...books] array yg lama
    // dan membuat array baru yg berisi [data_array_lama, data_baru]
    // const addBook = (title, author) => {
    //     setBooks([...books, {title, author, id : uuid() }]);
    // };

    // fungsi untuk menghapus data yang ada didalam state
    // dengan cara mengubah state yang ada dengan data state baru
    // dengan menggunakan filter() untuk menghasilkan data array baru sesuai kondisi
    // yaitu hanya data yang tidak sama dengan ID maka akan disimpan kedalam state yang baru diubah.
    // const removeBook = (id) => {
    //     setBooks(books.filter(book => book.id !== id));
    // };

    return (
        // membuat context provider untuk mengirim state dan fungsi yang telah dibuat sebagai value dan dalam bentuk objek
        // agar state dan fungsi pada context dapat digunakan oleh context consumer

        // karena kita sudah mambuat fungsi pada reducer unutk melakukan manipulasi data, dalam hal ini untuk menambah dan menghapus data
        // maka yg kita kirim pada provider disini untuk ke consumer adalah dispatch, dimana dispatch disini adalah reducer yg kita buat tadi.
        <BookContext.Provider value={{books, dispatch}}>
            {props.children}
        </BookContext.Provider>
    );
}
 

export default BookContextProvider;