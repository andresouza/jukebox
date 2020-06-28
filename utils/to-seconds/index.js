const toSeconds = (duration = '0:0') => {
  const min = Number(duration.split(':')[0]) * 60
  const sec = Number(duration.split(':')[1])
  return min + sec
}

export default toSeconds
