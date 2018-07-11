// @flow
function checkPassword(password: string) {
  let character = password.split('');
  if (password.length < 6) {
    return {
      success: false,
      alert: 'Poor password, required both lower and upper case character',
    };
  }
  if (
    isRequiredPass(character, 'a', 'z') &&
    isRequiredPass(character, 'A', 'Z')
  ) {
    return {success: true, alert: 'Good password'};
  }
  return {
    success: false,
    alert: 'Poor password, required both lower and upper case character ',
  };
}

function isRequiredPass(
  listChar: Array<string>,
  minBound: string,
  maxBound: string,
) {
  let minChar = minBound.charCodeAt(0);
  let maxChar = maxBound.charCodeAt(0);
  for (let char of listChar) {
    if (char.charCodeAt(0) >= minChar && char.charCodeAt(0) <= maxChar) {
      return true;
    }
  }
  return false;
}

it('should return 4', () => {
  expect(checkPassword('asdasdasd')).toEqual({
    success: false,
    alert: 'Poor password, required both lower and upper case character ',
  });
  expect(checkPassword('AsjsnaS')).toEqual({
    success: true,
    alert: 'Good password',
  });
});
