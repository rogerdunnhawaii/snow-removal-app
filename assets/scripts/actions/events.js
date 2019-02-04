// required files to make this file Work

const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

// actions which happen on clicking the sign up buttton, grabbing data from the form inputs and then passing data to api and then displaying response data on the UI
const onSignUp = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signUp(data)
    .then(ui.onSignUpSuccess)
    .catch(ui.onSignUpFailure)
}

// actions which happen on clicking the sign in buttton, grabbing data from the form inputs and then passing data to api and then displaying response data on the UI
const onSignIn = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  $('form').trigger('reset')
  api.signIn(data)
    .then(ui.onSignInSuccess)
    .catch(ui.onSignInFailure)
}

// actions which happen on clicking the change password buttton, grabbing data from the form inputs and then passing data to api and then displaying response data on the UI
const onChangePassword = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  // clears out the form
  $('form').trigger('reset')
  api.changePassword(data)
    .then(ui.onChangePasswordSuccess)
    .catch(ui.onChangePasswordFailure)
}

// actions which happen on clicking the sign out buttton, grabbing data from the form inputs and then passing data to api and then displaying response data on the UI
const onSignOut = () => {
  event.preventDefault()
  api.signOut()
    .then(ui.onSignOutSuccess)
    .catch(ui.onSignOutFailure)
}

// actions which happen on clicking the create job buttton, grabbing data from the form inputs and then passing data to api and then displaying response data on the UI
const onCreateJob = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  // clears out the form
  $('form').trigger('reset')
  api.createJob(data)
    .then(ui.onCreateJobSuccess)
    .catch(ui.onCreateJobFailure)
}

// actions which happen on clicking the view job buttton, displaying response data on the UI
const onViewJobs = (event) => {
  api.viewJobs()
    .then(ui.onViewJobsSuccess)
    .catch(ui.onViewJobsFailure)
}

const onViewJobsAfterDelete = () => {
  api.viewJobs()
    .then(ui.onViewJobsAfterDeleteSuccess)
    .catch(ui.onViewJobsAfterDeleteFailure)
}

// actions which happen on clicking the delete job buttton, grabbing data id from the event target and then passing data id to api and then displaying all jobs left after deletion
const onDeleteJob = (event) => {
  event.preventDefault()
  const id = event.target.dataset.id
  api.deleteJob(id)
    .then(() => onViewJobsAfterDelete(event))
    .catch(ui.onDeleteJobFailure)
}

const onEditJob = (event) => {
  event.preventDefault()
  // const data = getFormFields(event.target)
  const id = event.target.dataset.id
  $('form').trigger('reset')
  api.viewJob(id)
    .then(ui.onViewJobSuccess)
    .catch(ui.onViewJobFailure)
}

const onViewOneJob = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  $('form').trigger('reset')
  const id = data.job.id
  api.viewJob(id)
    .then(ui.onViewOneJobSuccess)
    .catch(ui.onViewOneJobFailure)
}

const onUpdateJob = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  const id = event.target.dataset.id
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
