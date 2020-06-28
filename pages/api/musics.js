export default (req, res) => {
  res.status(200).json([
    { id: 'one', name: 'Punch Bag', duration: '2:10' },
    { id: 'two', name: 'Headlock', duration: '1:40' },
    { id: 'three', name: 'Legendary', duration: '2:15' },
    { id: 'four', name: "Can't Stop", duration: '2:00' },
    { id: 'five', name: 'The Runner', duration: '2:21' },
    { id: 'six', name: 'Jumpsuit', duration: '1:55' },
    { id: 'seven', name: 'Glory', duration: '1:59' },
    { id: 'eight', name: 'Play God', duration: '2:05' }
  ])
}
