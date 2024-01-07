import { useSelector } from "react-redux";

const ViewBooks = () => {
    const books = useSelector((state) => state.bookReducer.books);
    console.log(books);    
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
                                    <button className="btn bg-red-600">Delete</button>
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