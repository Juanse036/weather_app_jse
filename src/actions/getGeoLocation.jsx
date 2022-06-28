export default async function getGeoLocation(){

    return new Promise( (resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
            ({coords}) => {
                resolve({longitude: coords.longitude, latitude: coords.latitude})
            },
            (err) => {
                alert('No se pudo obtener la geolocalizacion')
                console.log(err);
                reject()
            }
        )
    })

}