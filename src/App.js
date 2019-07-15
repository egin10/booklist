import React from 'react';
import Navbar from './components/Navbar';
import BookContextProvider from './contexts/BookContext';
import BookList from './components/BookList';
import NewBookForm from './components/NewBookForm';

function App() {
  return (
    <div className="App">
      {/* memanggil BookContextProvider agar state dan fungsi yang telah dibuat pada ./contexts/BookContext bisa digunakan oleh consumer */}
      <BookContextProvider>
        <Navbar/>
        <BookList/>
        <NewBookForm/>
      </BookContextProvider>
    </div>
  );
}

export default App;
