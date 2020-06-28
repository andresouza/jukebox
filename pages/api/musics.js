export default (req, res) => {
  res.status(200).json([
    { id: 'one', name: 'One', duration: '2:10' },
    { id: 'two', name: 'Two', duration: '1:40' },
    { id: 'three', name: 'Three', duration: '2:15' },
    { id: 'four', name: 'Four', duration: '2:00' },
    { id: 'five', name: 'Five', duration: '2:21' },
    { id: 'six', name: 'Six', duration: '1:55' },
    { id: 'seven', name: 'Seven', duration: '1:59' },
    { id: 'eight', name: 'Eight', duration: '2:05' }
  ])
}
