import formatTime from './index'

test('format empty to 0:00', () => {
  expect(formatTime(0, 0)).toBe('0:00')
})

test('format 1 minute and 5 seconds to 1:05', () => {
  expect(formatTime(1, 5)).toBe('1:05')
})

test('format 0 minute and 45 seconds to 0:45', () => {
  expect(formatTime(0, 45)).toBe('0:45')
})
