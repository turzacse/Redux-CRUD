import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBook } from './BookSlice';
import { useNavigate } from 'react-router-dom';

const AddBooks = () => {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("")

    const numberOfBooks = useSelector((state) => state.bookReducer.books.length);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = e => {
        e.preventDefault();
        const book = {
            id: numberOfBooks+1,
            title,
            author
        };
        dispatch(addBook(book));
        navigate('/books')
    }
    return (
        <div>
            Add a book
            <form 
            onSubmit={handleSubmit}
            className="card-body w-1/2 mx-auto bg-yellow-200 shadow-2xl rounded-3xl">
                <h2 className='text-3xl text-center font-medium shadow-2xl mb-4 w-52 rounded-xl py-2 bg-orange-400 mx-auto'>Add A Book</h2>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Title</span>
                    </label>
                    <input 
                    onChange={(e) => setTitle(e.target.value)}
                    type="text" 
                    placeholder="title" 
                    name="title" 
                    className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Author</span>
                    </label>
                    <input 
                    onChange={(e) => setAuthor(e.target.value)}
                    type="text" 
                    placeholder="author"  
                    name="author" 
                    className="input input-bordered" required />
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-warning">Add Book</button>
                </div>
            </form>
        </div>
    );
};

export default AddBooks;