import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Card from '../components/Card'
import Pagination from '../components/Pagination'
import { fetchPosts } from '../redux/postSlice'
const Home = () => {
    const { items, loading, currentPage, perPage } = useSelector(state => state.posts)
    const dispatch = useDispatch()
    const [showLoading, setShowLoading] = useState(true)

    useEffect(() => {
        dispatch(fetchPosts())
        setTimeout(() => { setShowLoading(false) }, 5000)
    }, [dispatch])
    if (showLoading) return <div className='text-center '>Loading...</div>
    const startIndex = (currentPage - 1) * perPage
    const visiblePosts = items.slice(startIndex, startIndex + perPage)

    return (
        <div className='p-6'>
            <div className='grid grid-cols-3 gap-6 '>
                {visiblePosts.map(item => (
                    <Card key={item.id}
                        post={item}
                    />
                ))}
            </div>

            <Pagination />
        </div>
    )
}

export default Home
