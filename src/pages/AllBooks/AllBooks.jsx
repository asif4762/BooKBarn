import { Helmet } from "react-helmet-async";
import Books from "../Shared/Books/Books";

const AllBooks = () => {
    return (
        <div>
            <Helmet><title>BookBarn | All Books</title></Helmet>
            <Books></Books>
        </div>
    )
}

export default AllBooks;