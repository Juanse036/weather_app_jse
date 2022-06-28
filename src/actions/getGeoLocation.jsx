export default async function getGeoLocation(){

    return new Promise( (resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
            ({coords}) => {
                resolve({longitude: coords.longitude, latitude: coords.latitude, error:false})
            },
            (err) => {
                alert('No se pudo obtener la geolocalizacion')                
                resolve({longitude: '', latitude: '', error:true})
            }
        )
    })

}