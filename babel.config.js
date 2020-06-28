module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current'
        }
      }
    ],
    [
      'next/babel',
      {
        'transform-runtime': {
          useESModules: false
        }
      }
    ]
  ]
}
