const store = require('../store')
const jobsPageTemplate = require('../templates/helpers/job-page.handlebars')
const updateJobPageTemplate = require('../templates/helpers/update-job-page.handlebars')
const oneJobPageTemplate = require('../templates/helpers/one-job-page.handlebars')

const onSignUpSuccess = () => {
  $('h2').html('you have successfully signed up')
  $('#sign-up').fadeOut(500)
}

const onSignUpFailure = () => {
  $('h2').html('you have UNsuccessfully signed up')
}

const onSignInSuccess = (responseData) => {
  $('h2').html('you have successfully signed IN')
  store.user = responseData.user
  store.user.token = responseData.user.token
  $('.bottom-buttons').show(500)
  $('.button-div').show()

  $('.create-job-div').hide()
  $('#view-one-job').hide()
  $('.middle').fadeOut(500)
  $('#sign-up-button').fadeOut(500)
}

const onSignInFailure = () => {
  $('h2').html('you have UNsuccessfully signed IN')
}

const onChangePasswordSuccess = () => {
  $('h2').html('you have successfully changed password')
  $('#change-password').fadeOut(500)
  $('#change-pw-button').fadeIn(500)
}

const onChangePasswordFailure = () => {
  $('h2').html('you have UNsuccessfully changed password')
}

const onSignOutSuccess = () => {
  store.user = null
  $('h2').html('Successfully signed OUT')
  $('#sign-up-button').show()
  $('#sign-in-button').show()
  $('.bottom-buttons').fadeOut(500)
  $('.job-content').fadeOut(500)
  $('.button-div').fadeOut(500)
}

const onSignOutFailure = () => {
  $('h2').html('you have FAILED at signing out')
}

const onCreateJobSuccess = () => {
  $('h2').html('Successfully created job')
}

const onCreateJobFailure = () => {
  $('h2').html('UNsuccessfully created job')
}

const onViewJobsSuccess = (responseData) => {
  const data = responseData
  const jobsPageHtml = jobsPageTemplate({ jobs: data.jobs })
  $('#job-list-body').html(jobsPageHtml)
  console.log(jobsPageHtml)
  if (jobsPageHtml === '') {
    $('h2').html('No jobs created yet')
  } else {
    $('h2').html('Successfully able to VIEW Jobs')
  }
}

const onViewJobsFailure = () => {
  $('h2').html('Sadly UNable to view jobs')
}

const onViewJobsAfterDeleteSuccess = (data) => {
  const jobsPageHtml = jobsPageTemplate({ jobs: data.jobs })
  $('#job-list-body').html(jobsPageHtml)
  $('h2').html('Job successfully deleted')
}
const onViewJobsAfterDeleteJobFailure = () => {
  $('h2').html('Job is still around, UNsuccessful at deleting')
}

const onViewJobSuccess = (responseData) => {
  $('h2').html('You have now viewing the one job you asked for')
  $('#update-job-form').html('')
  const data = responseData
  const updateJobPageHtml = updateJobPageTemplate({
    job: data.job})
  $('#update-job-form').html(updateJobPageHtml)
}

const onViewJobFailure = () => {
  $('h2').html('Unable to locate the one job you were looking for')
}

const onUpdateJobSuccess = () => {
  $('h2').html('successfully Updated job')
  $('#update-job').fadeOut(500)
}

const onUpdateJobFailure = () => {
  $('h2').html('failed to Updated job')
}

const onViewOneJobSuccess = (responseData) => {
  $('h2').html('you are now looking at one job')
  $('#job-list-body').html('')
  const data = responseData
  const oneJobPageHtml = oneJobPageTemplate({ job: data.job })
  $('#job-list-body').html(oneJobPageHtml)
}

const onViewOneJobFailure = () => {
  $('h2').html('failed at viewing one job')
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
  onViewJobsAfterDeleteSuccess,
  onViewJobsAfterDeleteJobFailure,
  onViewJobSuccess,
  onViewJobFailure,
  onUpdateJobSuccess,
  onUpdateJobFailure,
  onViewOneJobSuccess,
  onViewOneJobFailure
}
