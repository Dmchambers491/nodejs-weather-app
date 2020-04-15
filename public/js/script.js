console.log('Client side javascript file is loaded!')

// fetch('http://localhost:3000/weather?address=Asheboro').then((response) => {
// 	response.json().then((data) => {
// 		if(data.error) {
// 			return console.log(data.error)
// 		}
// 		console.log(data.location + '\n' + data.forecast)
// 	})
// })

const weatherForm = document.querySelector('form')
const searchValue = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

weatherForm.addEventListener('submit', (event) => {
	event.preventDefault()
	const location = searchValue.value

	messageOne.textContent = 'Loading....'
	messageTwo.textContent = ''

	fetch('http://localhost:3000/weather?address=' + location).then((response) => {
		response.json().then((data) => {
			if(data.error) {
				return messageOne.textContent = data.error
			}
			messageOne.textContent = data.location
			messageTwo.textContent = data.forecast
		})
	})
})