'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const events = require('./actions/events.js')

function formatNumber (n) {
  // format number 1000000 to 1,234,567
  return n.replace(/\D/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

function formatCurrency (input, blur) {
  // appends $ to value, validates decimal side
  // and puts cursor back in right position.

  // get input value
  let inputValue = input.val()

  // don't validate empty input
  if (inputValue === '') { return }

  // original length
  const originalLength = inputValue.length

  // initial caret position
  let caretPosition = input.prop('selectionStart')

  // check for decimal
  if (inputValue.indexOf('.') >= 0) {
    // get position of first decimal
    // this prevents multiple decimals from
    // being entered
    const decimalPosition = inputValue.indexOf('.')

    // split number by decimal point
    let leftSide = inputValue.substring(0, decimalPosition)
    let rightSide = inputValue.substring(decimalPosition)

    // add commas to left side of number
    leftSide = formatNumber(leftSide)

    // validate right side
    rightSide = formatNumber(rightSide)

    // On blur make sure 2 numbers after decimal
    if (blur === 'blur') {
      rightSide += '00'
    }

    // Limit decimal to only 2 digits
    rightSide = rightSide.substring(0, 2)

    // join number by .
    inputValue = '$' + leftSide + '.' + rightSide
  } else {
    // no decimal entered
    // add commas to number
    // remove all non-digits
    inputValue = formatNumber(inputValue)
    inputValue = '$' + inputValue

    // final formatting
    if (blur === 'blur') {
      inputValue += '.00'
    }
  }

  // send updated string to input
  input.val(inputValue)

  // put caret back in the right position
  const updatedLength = inputValue.length
  caretPosition = updatedLength - originalLength + caretPosition
  input[0].setSelectionRange(caretPosition, caretPosition)
}

$(() => {
  // your JS code goes here
  $('#sign-up').on('submit', events.onSignUp)
  $('#sign-in').on('submit', events.onSignIn)
  $('#change-password').on('submit', events.onChangePassword)
  $('#sign-out').on('click', events.onSignOut)
  $('#create-job').on('submit', events.onCreateJob)
  $('#view-jobs').on('click', events.onViewJobs)
  $('#job-list-body').on('click', '#delete-button', events.onDeleteJob)
  $('#job-list-body').on('click', '#edit-button', events.onEditJob)
  $("input[data-type='currency']").on({
    keyup: function () {
      formatCurrency($(this))
    },
    blur: function () {
      formatCurrency($(this), 'blur')
    }
  })
})
