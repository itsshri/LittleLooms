import React, { useState } from 'react';
import '../admin/Edit.css';
import Sidebar from './Sidebar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Edit = () => {
    const [books, setBooks] = useState([
        { id: 1, name: 'Heidi', price: '$100' },
        { id: 2, name: 'Tom and Jerry', price: '$150' },
        { id: 3, name: 'Angry Birds', price: '$200' },
        { id: 4, name: 'Oggy and the Cockroaches', price: '$300' },
        { id: 5, name: 'Science', price: '$470' },
        { id: 6, name: 'General Knowledge', price: '$100' },
        { id: 7, name: 'Social', price: '$570' },
        { id: 8, name: 'Moral Science', price: '$600' },
        { id: 9, name: 'Cartoon', price: '$800' },
        // { id: 8, name: 'Book 3', price: '$20' },
    ]);

    // Edit book details
    const handleEdit = (id) => {
        const newName = prompt('Enter new name for the book:');
        const newPrice = prompt('Enter new price for the book:');
        if (newName && newPrice) {
            setBooks(books.map(book =>
                book.id === id ? { ...book, name: newName, price: newPrice } : book
            ));
        }
    };
    
    // Delete a book
    const handleDelete = (id) => {
        setBooks(books.filter(book => book.id !== id));
    };
    
    // Add to cart
    const handleAddToCart = (id) => {
        const book = books.find(book => book.id === id);
        if (book) {
            toast.success(`Added to cart: ${book.name} - ${book.price}`);
            // You can expand this to add the book to a cart state or API call
        }
    };
    
    // Discard a book
    const handleDiscard = (id) => {
        setBooks(books.filter(book => book.id !== id));
        toast.info('Book discarded');
    };
  
    return (
        <div className="container">
            <Sidebar />
            <div className="main-content">
                <table className="wishlist-table">
                    <thead>
                {/* <h1>My Wishlist</h1> */}
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Actions</th>
                            <th>Manage</th>
                        </tr>
                    </thead>
                    <tbody>
                        {books.map(book => (
                            <tr key={book.id}>
                                <td>{book.name}</td>
                                <td>{book.price}</td>
                                <td>
                                    <button className="edit-button" onClick={() => handleEdit(book.id)}>Edit</button>
                                    <button className="delete-button" onClick={() => handleDelete(book.id)}>Delete</button>
                                </td>
                                <td>
                                    <button className="add-to-cart-button" onClick={() => handleAddToCart(book.id)}>Add to Cart</button>
                                    <button className="discard-button" onClick={() => handleDiscard(book.id)}>Discard</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <ToastContainer />
            </div>
        </div>
    );
};

export default Edit;
