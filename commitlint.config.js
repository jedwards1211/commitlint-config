module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'scope-case': [0, 'always', ['lowerCase']],
    'subject-case': [2, 'never', ['upper-case', 'camel-case', 'pascal-case', 'snake-case']],
  },
}
