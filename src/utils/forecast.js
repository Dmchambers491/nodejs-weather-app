const chalk = require('chalk')
const request = require('request')

const forecast = (longitude, latitude, callback) => {
	const url = 'http://api.weatherstack.com/current?access_key=70e814646a37c9645cc58a44a95cc2d8&query=' + longitude + ', ' + latitude + '&units=f'

	request({url: url, json: true}, (error, {body}) => {
		if(error){
			callback(chalk.red.bold('ERROR: Unable to connect to weather service'), undefined)
		}else if(body.error){
			callback(chalk.red.bold('ERROR: ' + body.error.type), undefined)
		}else{
			callback(undefined, 'It is currently ' + body.current.weather_descriptions[0] + ' and ' + body.current.temperature + ' degrees out. There is currently a wind speed of ' +  body.current.wind_speed + 'mph.')
		}
	})
}

module.exports = forecast