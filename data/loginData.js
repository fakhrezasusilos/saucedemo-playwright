
module.exports = [
  { username: 'standard_user', password: 'secret_sauce', expected: 'success' },
  { username: 'locked_out_user', password: 'secret_sauce', expected: 'locked' },
  { username: 'problem_user', password: 'secret_sauce', expected: 'success' },
  { username: 'invalid_user', password: 'wrong_pass', expected: 'error' },
];
