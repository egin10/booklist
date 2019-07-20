import React, {useContext, useState} from 'react';
import { BookContext } from '../contexts/BookContext';

const BookForm = () => {
    // disini kita menggunakan fungsi addBook untuk menambhakan data baru pada state books di BookContext
    // const {addBook} = useContext(BookContext);

    // karena kita sudah membuat sebuah reducer maka yg kita ambil adalah dispatch, dimana dispatch adalah kumpulan fungsi
    // yg telah kita buat barusan untuk melakukan manipulasi state pada Context.
    const {dispatch} = useContext(BookContext);

    // karena kita membutuhkan state untuk mendapatkan title dan author pada form, maka kita menggunakan useState untuk membuat
    // state pada component berikut ini.
    const [title, setTitle] = useState(''); // title adalah sebuah string
    const [author, setAuthor] = useState(''); // author juga sebuah string

    //disini kita membuat sebuah fungsi untuk melakukan penambahan data baru ke books pada BookContext
    const handleSubmit = e => {
        e.preventDefault();
        
        // disini kita mengirimkan data title dan author baru untuk ditambahkan pada state books di BookContext
        // addBook(title, author);

        // karena tadi kita telah membuat fungsi untuk menambah data di reducer, maka kita dapat menambah data dengan cara berikut
        dispatch({ type: "ADD_BOOK", book: {title,author} })

        // setelah melakukan penambahan data baru pada state di BookContext, kita melakukan reset value title dan author menjadi string kosong kembali
        // agar form menjadi kosong kembali.
        setTitle('');
        setAuthor('');
    }

    return (
        // ketika form berikut di submit maka akan memanggil fungsi handleSubmit untuk menambahkan data yg telah diinput ke form
        <form onSubmit={handleSubmit}>
            {/* pada element input dibawah ini akan selalu melakukan perubahan pada state title dan author setiap kali diberikan inputan berupa text */}
            <input type="text" value={title} placeholder="Book Title" onChange={e => setTitle(e.target.value)} />
            <input type="text" value={author} placeholder="Book Author" onChange={e => setAuthor(e.target.value)} />
            <input type="submit" value="Add Book"/>
        </form>
    );
}
 
export default BookForm;