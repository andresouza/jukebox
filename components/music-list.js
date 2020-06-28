import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import useSWR from 'swr'
import Layout from '../components/layout'
import Player from '../components/player'
import Library from '../components/library'

const MusicList = ({ selectedMusic }) => {
  const [play, setPlay] = useState(false)

  const { data, error } = useSWR('/api/musics', (url) =>
    fetch(url).then((res) => res.json())
  )

  useEffect(() => {
    if (selectedMusic) {
      setPlay(true)
    }
  }, [selectedMusic])

  if (error) return <div>Failed to load musics, try again</div>
  if (!data) return <div>Loading...</div>

  return (
    <Layout>
      <Head>
        <title>Jukebox</title>
      </Head>
      <div>
        <Player
          music={data.find((music) => music.id === selectedMusic)}
          play={play}
        />
        <Library
          current={selectedMusic}
          musics={data}
          onPlay={() => selectedMusic && setPlay(true)}
          onPause={() => setPlay(false)}
        />
      </div>
    </Layout>
  )
}

MusicList.propTypes = {
  selectedMusic: PropTypes.string
}

MusicList.defaultProps = {
  selectedMusic: ''
}

export default MusicList
