import { createAsyncThunk } from "@reduxjs/toolkit"
import { useDispatch, useSelector } from "react-redux"
import { setPage } from "../redux/postSlice"

const Pagination = () => {
    const { items, perPage, currentPage } = useSelector(state => state.posts)
    const dispatch = useDispatch()
    const totalPages = Math.ceil(items.length / perPage)
    let startPage = currentPage - 1
    let endPage = currentPage + 1
    if (startPage < 1) {
        startPage = 1
        endPage = Math.min(3, totalPages)
    } else if (endPage > totalPages) {
        endPage = totalPages
        startPage = Math.max(totalPages - 2, 1)
    }
    const pages = []
    for (let i = startPage; i <= endPage; i++) {
        pages.push(i)
    }
    const isActive = pages === currentPage;

    return (
        <div className="flex justify-center items-center mt-6 space-x-3 mb-0">
            <button
                className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-gray-700 transition-all duration-300"

                onClick={() => dispatch(setPage(currentPage - 1))} disabled={currentPage === 1}>
                ◀
            </button>
            {
                pages.map(page => (
                    <button key={page}
                        className={`w-8 h-8 flex items-center justify-center rounded-full text-sm font-medium transition-all duration-300 ${isActive
                            ? "bg-white shadow-md text-gray-700 scale-110"
                            : "bg-gray-300 text-gray-600 hover:scale-110 hover:bg-gray-100"
                            }`}
                        onClick={() => dispatch(setPage(page))}
                    >
                        {page}
                    </button>
                ))
            }
            <button
                className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-gray-700 transition-all duration-300"

                onClick={() => dispatch(setPage(currentPage + 1))} disabled={currentPage === totalPages}>
                ▶
            </button>
        </div >
    )
}

export default Pagination
