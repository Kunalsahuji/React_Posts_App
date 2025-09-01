import { useDispatch } from "react-redux"
import { removePost } from '../redux/postSlice'
const Card = ({ post }) => {
    const dispatch = useDispatch()

    return (
        <div className="
        w-full h-full
        ">
            <div className="relative w-full bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 px-8 py-5 gap-3">
                <button className="absolute top-2 right-4 text-red-500 hover:text-red-500 text-lg hover:scale-125 transition-transform duration-200"
                    onClick={() => dispatch(removePost(post.id))}>
                    x
                </button>
                <h3 className="font-semibold text-gray-800 text-lg leading-tight">{post.title.slice(0, 30)}...</h3>
                <p className="text-gray-600 text-sm mt-1">{post.body.slice(0, 50)}...</p>
                <p className="text-xs text-gray-400 mt-1">Mon, 21 Dec 2025 14.57 GMT</p>
                <img className="w-full h-50 object-cover rounded-b-2xl mt-1"
                    src={`https://picsum.photos/400/300?random=${post.id}`}
                    alt={`Post ${post.id}`} />
            </div>
        </div>
    )
}

export default Card
