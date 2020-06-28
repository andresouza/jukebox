const formatTime = (min = 0, sec = 0) => {
  return `${min}:${sec < 10 ? `0${sec}` : sec}`
}

export default formatTime
