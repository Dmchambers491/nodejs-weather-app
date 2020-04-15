const chalk = require('chalk')
const request = require('request')

const geocode = (address, callback) => {
	const mapUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiZGNoYW1iZXJzNDIiLCJhIjoiY2s4bnF2YjZwMHdjZjNmbzRyaThrdTY2dSJ9.4SWYgsXIjazBuKYN3J7eEw&limit=1'

	request({url: mapUrl, json: true}, (error, {body}) => {
		if(error){
			callback(chalk.red.bold('ERROR: Unable to connect to weather service'), undefined)
		}else if(body.message){
			callback(chalk.red.bold('ERROR: ' + body.message), undefined)
		}else if(body.features.length === 0){
			callback(chalk.red.bold('ERROR: Unable to find location'), undefined)
		}else{
			callback(undefined, {
				latitude: body.features[0].center[1],
				longitude: body.features[0].center[0],
				location: body.features[0].place_name
			})
		}
	})
}

module.exports = geocode