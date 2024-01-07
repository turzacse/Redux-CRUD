import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { updateBook } from './BookSlice';

const EditBooks = () => {
    const loaction = useLocation();

    const [id, setId] = useState(loaction.state.id);
    const [title, setTitle] = useState(loaction.state.title);
    const [author, setAuthor] = useState(loaction.state.author);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleupdate = (e) =>{
        e.preventDefault();
        dispatch(updateBook({id, title, author}));
        navigate('/books');
    }
    return (
        <div>
            Edit a book
            <form 
            onSubmit={handleupdate}
            className="card-body w-1/2 mx-auto bg-yellow-200 shadow-2xl rounded-3xl">
                <h2 className='text-3xl text-center font-medium shadow-2xl mb-4 w-52 rounded-xl py-2 bg-orange-400 mx-auto'>Update Book</h2>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Title</span>
                    </label>
                    <input 
                    onChange={(e) => setTitle(e.target.value)}
                    type="text" 
                    placeholder="title" 
                    name="title" 
                    value={title}
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
                    value={author}
                    className="input input-bordered" required />
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-warning">Update Book</button>
                </div>
            </form>
        </div>
    );
};

export default EditBooks;