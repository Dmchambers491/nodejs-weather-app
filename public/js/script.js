console.log('Client side javascript file is loaded!')

const weatherForm = document.querySelector('form')
const searchValue = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

weatherForm.addEventListener('submit', (event) => {
	event.preventDefault()
	const location = searchValue.value

	messageOne.textContent = 'Loading....'
	messageTwo.textContent = ''

	fetch('/weather?address=' + location).then((response) => {
		response.json().then((data) => {
			if(data.error) {
				return messageOne.textContent = data.error
			}
			messageOne.textContent = data.location
			messageTwo.textContent = data.forecast
		})
	})
})