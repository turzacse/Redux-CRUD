import { useDispatch, useSelector } from "react-redux";
import { deleteBook } from "./BookSlice";

const ViewBooks = () => {
    const books = useSelector((state) => state.bookReducer.books);
    // console.log(books); 
    const dispatch = useDispatch();
    const handleDelete = (id) => {
        dispatch(deleteBook(id));
    }
    return (
        <div>
            All Books
            <div className="text-center">
                <table className="table border">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Author</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            books && books.map (book => <tr key={book.id}>
                                <td>{book.id}</td>
                                <td>{book.title}</td>
                                <td>{book.author}</td>
                                <td>
                                    <button className="btn bg-green-600">Edit</button>
                                    <button
                                    onClick={() => handleDelete(book.id)}
                                    className="btn bg-red-600">Delete</button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ViewBooks;