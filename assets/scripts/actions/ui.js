const store = require('../store')
const jobsPageTemplate = require('../templates/helpers/job-page.handlebars')
const updateJobPageTemplate = require('../templates/helpers/update-job-page.handlebars')
const oneJobPageTemplate = require('../templates/helpers/one-job-page.handlebars')

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
  $('#job-list-body').html(jobsPageHtml)
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

const onViewJobSuccess = (responseData) => {
  console.log('success in onViewJobSuccess')
  $('#update-job-form').html('')
  const data = responseData
  const updateJobPageHtml = updateJobPageTemplate({
    job: data.job})
  $('#update-job-form').html(updateJobPageHtml)
}

const onViewJobFailure = () => {
  console.log('failure onViewJob')
}

const onUpdateJobSuccess = () => {
  console.log('successfully Updated job')
}

const onUpdateJobFailure = () => {
  console.log('failed to Updated job')
}

const onViewOneJobSuccess = (responseData) => {
  console.log('success')
  $('#job-list-body').html('')
  const data = responseData
  console.log(data)
  const oneJobPageHtml = oneJobPageTemplate({ job: data.job })
  $('#job-list-body').html(oneJobPageHtml)
}

const onViewOneJobFailure = () => {
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
  onDeleteJobFailure,
  onViewJobSuccess,
  onViewJobFailure,
  onUpdateJobSuccess,
  onUpdateJobFailure,
  onViewOneJobSuccess,
  onViewOneJobFailure
}
