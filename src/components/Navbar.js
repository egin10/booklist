import React, {useContext} from 'react';
import { BookContext } from '../contexts/BookContext';

const Navbar = () => {
    // memanggil BookContext menggunakan hooks useContext sebagai pengganti BookContext.Consumer
    // dan melakukan destruksi value yang diterima dari BookContext.Provider dengan hanya mengambil data yang diperlukan
    // saat ini data yang kita perlukan adalah array books pada BookContext yang telah dibuat.
    const { books } = useContext(BookContext);
    return ( 
        <div className="navbar">
            <h1>Daftar Buku Bacaan</h1>
            <p>Daftar buku yang tersedia saat ini adalah {books.length}</p>
        </div>
    );
}
 
export default Navbar;