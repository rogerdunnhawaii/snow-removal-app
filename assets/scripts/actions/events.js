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
  $('form').trigger('reset')
  api.signIn(data)
    .then(ui.onSignInSuccess)
    .catch(ui.onSignInFailure)
}

const onChangePassword = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(data)
  $('form').trigger('reset')
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
  $('form').trigger('reset')
  api.createJob(data)
    .then(ui.onCreateJobSuccess)
    .catch(ui.onCreateJobFailure)
}

const onViewJobs = (event) => {
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

const onEditJob = (event) => {
  event.preventDefault()
  // const data = getFormFields(event.target)
  const id = event.target.dataset.id
  console.log('id is:', id)
  $('form').trigger('reset')
  // console.log('data is:', data)
  api.viewJob(id)
    .then(ui.onViewJobSuccess)
    .catch(ui.onViewJobFailure)
}

const onViewOneJob = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(data)
  $('form').trigger('reset')
  const id = data.job.id
  console.log(id)
  api.viewJob(id)
    .then(ui.onViewOneJobSuccess)
    .catch(ui.onViewOneJobFailure)
}

const onUpdateJob = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(data)
  const id = event.target.dataset.id
  console.log('id is:', id)
  api.editJob(id, data)
    .then(() => {
      ui.onUpdateJobSuccess()
      onViewJobs()
    })
    .catch(ui.onUpdateJobFailure)
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  onCreateJob,
  onViewJobs,
  onDeleteJob,
  onEditJob,
  onViewOneJob,
  onUpdateJob
}
