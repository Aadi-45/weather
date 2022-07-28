const request=require('request')

const forecast=(latitude,longitude,callback)=>{
    const url='http://api.weatherstack.com/current?access_key=c9f9b8ed0ee57bc076f05c233e9431ad&query=' + latitude + ',' + longitude + '&units=f'

    request({url:url,json:true},(error,{body})=>{
        if(error){
            callback('Unable to connect to weather service',undefined)
        }else if(body.error){
            callback('Unable to find location',undefined)
        }else{
            callback(undefined,body.current.weather_descriptions[0]+ ". It is currently "+body.current.temperature +" but is feels like "+ body.current.feelslike)
        }
    })

}

module.exports=forecast