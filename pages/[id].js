import React from 'react'
import { useRouter } from 'next/router'
import MusicList from '../components/music-list'

const Home = () => {
  const { query } = useRouter()
  return <MusicList selectedMusic={query.id} />
}

export default Home
