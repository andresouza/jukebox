import toSeconds from './index'

test('convert 0:00 to 0 seconds', () => {
  expect(toSeconds('0:00')).toBe(0)
})

test('convert 0:45 to 45 seconds', () => {
  expect(toSeconds('0:45')).toBe(45)
})

test('convert 2:10 to 130 seconds', () => {
  expect(toSeconds('2:10')).toBe(130)
})
