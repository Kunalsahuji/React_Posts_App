import { useDispatch } from "react-redux"
import { removePost } from '../redux/postSlice'
const Card = ({ post }) => {
    const dispatch = useDispatch()

    return (
        <div className="shadow-md p-4 rounded-lg bg-white relative">
            <button className="absolute top-2 right-2 text-xl text-red-500"
                onClick={() => dispatch(removePost(post.id))}>
                x
            </button>
            <h3 className="font-bold text-lg">{post.title.slice(0, 30)}...</h3>
            <p className="text-sm">{post.body.slice(0, 50)}...</p>
            <p className="text-sm text-gray-500">Mon, 21 Dec 2025 14.57 GMT</p>
            <img className="mt-2 w-full h-32 object-cover rounded" src={`https://www.postplanner.com/hubfs/what-to-post-on-instagram.png?random=${post.id}`} alt={`Post ${post.id}`} />
        </div>
    )
}

export default Card
