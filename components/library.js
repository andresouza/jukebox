import React from 'react'
import Link from 'next/link'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Library = ({ musics, onPlay, onPause, current }) => {
  const leftList = musics.slice(0, musics.length / 2)
  const rightList = musics.slice(musics.length / 2, musics.length)

  return (
    <Content>
      <LeftList>
        {leftList.map((music) => (
          <li key={music.id}>
            <Link href="/[id]" as={`/${music.id}`}>
              <a aria-selected={music.id === current}>
                <p>{music.duration}</p>
                <p>{music.name}</p>
              </a>
            </Link>
          </li>
        ))}
      </LeftList>
      <Buttons>
        <a onClick={onPlay}>
          <img src="/play.png" alt="Play" />
        </a>
        <a onClick={onPause}>
          <img src="/pause.png" alt="Pause" />
        </a>
        <Link href="/" as="/">
          <a>
            <img src="/stop.png" alt="Stop" />
          </a>
        </Link>
      </Buttons>
      <RightList>
        {rightList.map((music) => (
          <li key={music.id}>
            <Link href="/[id]" as={`/${music.id}`}>
              <a aria-selected={music.id === current}>
                <p>{music.name}</p>
                <p>{music.duration}</p>
              </a>
            </Link>
          </li>
        ))}
      </RightList>
    </Content>
  )
}

const Content = styled.div`
  display: flex;
  justify-content: between;
`

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  flex-grow: 1;

  li {
    a {
      display: flex;
      text-decoration: none;

      p {
        margin: 0;
        padding: 10px;
        background: rgb(251, 106, 255);
        background: linear-gradient(
          0deg,
          rgba(251, 106, 255, 1) 0%,
          rgba(237, 186, 232, 1) 80%
        );
      }

      &:active,
      &[aria-selected='true'] {
        p {
          background: rgb(237, 172, 226);
          background: linear-gradient(
            0deg,
            rgba(237, 172, 226, 1) 0%,
            rgba(208, 99, 188, 1) 80%
          );
        }
      }
    }
  }
`

const LeftList = styled(List)`
  li {
    p:nth-child(1) {
      width: 30%;
    }

    p:nth-child(2) {
      width: 70%;
      text-align: right;
    }
  }
`

const RightList = styled(List)`
  li {
    p:nth-child(1) {
      width: 70%;
    }

    p:nth-child(2) {
      width: 30%;
      text-align: right;
    }
  }
`

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
  background: rgb(245, 222, 86);
  background: linear-gradient(
    124deg,
    rgba(245, 222, 86, 1) 0%,
    rgba(247, 183, 2, 1) 80%
  );

  a {
    padding: 7px;
    margin: 3px 0;
    text-align: center;
    color: #fff;
    text-decoration: none;
    border-radius: 50%;
    background: rgb(246, 162, 162);
    background: linear-gradient(
      124deg,
      rgba(246, 162, 162, 1) 0%,
      rgba(247, 2, 2, 1) 80%
    );
    cursor: pointer;

    &:active {
      background: rgb(246, 162, 162);
      background: linear-gradient(
        124deg,
        rgba(247, 2, 2, 1) 0%,
        rgba(246, 162, 162, 1) 80%
      );
    }

    img {
      display: block;
      width: 24px;
    }
  }
`

Library.propTypes = {
  musics: PropTypes.array,
  onPlay: PropTypes.func.isRequired,
  onPause: PropTypes.func.isRequired,
  current: PropTypes.string
}

Library.defaultProps = {
  musics: [],
  current: ''
}

export default Library
