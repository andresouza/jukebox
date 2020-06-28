import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import useInterval from '../hooks/use-interval'
import formatTime from '../utils/format-time'
import toSeconds from '../utils/to-seconds'

const Player = ({ music, play }) => {
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)
  const [progress, setProgress] = useState(0)
  const [ended, setEnded] = useState(false)

  useInterval(
    () => {
      if (seconds < 59) {
        setSeconds(seconds + 1)
      } else {
        setSeconds(0)
        setMinutes(minutes + 1)
      }
      setProgress(minutes * 60 + seconds + 1)
    },
    play && !ended ? 1000 : null
  )

  useEffect(() => {
    setSeconds(0)
    setMinutes(0)
    setProgress(0)
    setEnded(false)
  }, [music])

  useEffect(() => {
    if (music.duration) {
      const total = toSeconds(music.duration)
      const elapsed = toSeconds(formatTime(minutes, seconds))

      if (total <= elapsed) {
        setEnded(true)
      }
    }
  }, [setEnded, music, minutes, seconds])

  const Progress = styled.div`
    height: 20px;
    width: 90%;
    border-radius: 10px;
    background-color: gray;
    overflow: hidden;

    div {
      background-color: #ccc;
      width: ${music.duration
        ? (progress / toSeconds(music.duration)) * 100
        : 0}%;
      height: 100%;
      transition: width 1s;
    }
  `

  return (
    <Content>
      <Duration>{formatTime(minutes, seconds)}</Duration>
      <Progress>
        <div></div>
      </Progress>
      <Duration>{music.duration || '0:00'}</Duration>
    </Content>
  )
}

const Content = styled.div`
  background-color: black;
  height: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5px;
`

const Duration = styled.span`
  color: #fff;
  width: 40px;
  text-align: center;
`

Player.propTypes = {
  music: PropTypes.object,
  play: PropTypes.bool
}

Player.defaultProps = {
  music: {},
  play: true
}

export default Player
