const store = require('../store')
const jobsPageTemplate = require('../templates/helpers/job-page.handlebars')

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

const onCreateJobSuccess = () => {
  console.log('success')
}

const onCreateJobFailure = () => {
  console.log('failure')
}

const onViewJobsSuccess = (responseData) => {
  console.log('success')
  $('#job-list-body').html('')
  const data = responseData
  console.log(data)
  const jobsPageHtml = jobsPageTemplate({ jobs: data.jobs })
  $('#job-list-body').append(jobsPageHtml)
}

const onViewJobsFailure = () => {
  console.log('failure')
}

const onDeleteJobSuccess = () => {
  console.log('success')
}
const onDeleteJobFailure = () => {
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
  onSignOutFailure,
  onCreateJobSuccess,
  onCreateJobFailure,
  onViewJobsSuccess,
  onViewJobsFailure,
  onDeleteJobSuccess,
  onDeleteJobFailure
}
