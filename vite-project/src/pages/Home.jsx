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
        <div className='w-full min-h-screen bg-[#e9f0f5] px-4 sm:px-6 lg:px-12 py-3'>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
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
