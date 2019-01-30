const store = require('../store')

const onSignUpSuccess = () => {
  console.log('success')
}

const onSignUpFailure = () => {
  console.log('failure')
}

const onSignInSuccess = (responseData) => {
  console.log('success')
  store.user = responseData.user
}

const onSignInFailure = () => {
  console.log('failure')
}

const onChangePasswordSuccess = () => {
  console.log('success')
}

const onChangePasswordFailure = () => {
  console.log('failure')
}

const onSignOutSuccess = () => {
  store.user = null
  console.log('success')
}

const onSignOutFailure = () => {
  console.log('failure')
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure,
  onSignOutSuccess,
  onSignOutFailure
}
