import { createAsyncThunk } from "@reduxjs/toolkit"
import { useDispatch, useSelector } from "react-redux"
import { setPage } from "../redux/postSlice"

const Pagination = () => {
    const { items, perPage, currentPage } = useSelector(state => state.posts)
    const dispatch = useDispatch()
    const totalPages = Math.ceil(items.length / perPage)

    return (
        <div className="flex justify-center mt-5 space-x-3 ">
            <button className="" onClick={() => dispatch(setPage(currentPage - 1))} disabled={currentPage === 1}>
                Previous
            </button>
            {[...Array(totalPages)].map((_, index) => (
                <button key={index} className={`px-2 ${currentPage === index + 1 ? 'font-bold' : 'bg-gray-200'}`}
                    onClick={() =>
                        dispatch(setPage(index + 1))}
                    disabled={currentPage === index + 1}>
                    {index + 1}
                </button>
            ))}
            <button className="" onClick={() => dispatch(setPage(currentPage + 1))} disabled={currentPage === totalPages}>
                Next
            </button>        </div>
    )
}

export default Pagination
