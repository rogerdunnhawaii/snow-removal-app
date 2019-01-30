const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

const onSignUp = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signUp(data)
    .then(ui.onSignUpSuccess)
    .catch(ui.onSignUpFailure)
}

const onSignIn = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(data)
  api.signIn(data)
    .then(ui.onSignInSuccess)
    .catch(ui.onSignInFailure)
}

const onChangePassword = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(data)
  api.changePassword(data)
    .then(ui.onChangePasswordSuccess)
    .catch(ui.onChangePasswordFailure)
}

const onSignOut = () => {
  api.signOut()
    .then(ui.onSignOutSuccess)
    .catch(ui.onSignOutFailure)
}

const onCreateJob = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(data)
  api.createJob(data)
    .then(ui.onCreateJobSuccess)
    .catch(ui.onCreateJobFailure)
}

const onViewJobs = (event) => {
  event.preventDefault()
  api.viewJobs()
    .then(ui.onViewJobsSuccess)
    .catch(ui.onViewJobsFailure)
}

const onDeleteJob = (event) => {
  event.preventDefault()
  console.log(event)
  const id = event.target.dataset.id
  console.log(id)
  api.deleteJob(id)
    .then(ui.onDeleteJobSuccess)
    .catch(ui.onDeleteJobFailure)
}
module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  onCreateJob,
  onViewJobs,
  onDeleteJob
}
