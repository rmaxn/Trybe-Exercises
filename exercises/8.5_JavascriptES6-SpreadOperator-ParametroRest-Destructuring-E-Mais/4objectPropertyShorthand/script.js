// Para Fixar
// Agora é hora de praticar: altere a função getPosition utilizando a property shorthand .
/* const getPosition = (latitude, longitude) => ({
  latitude: latitude,
  longitude: longitude}); */


const getPosition = (latitude, longitude) => {
  return {
    latitude,
    longitude,
  }
}
console.log(getPosition(-19.8157, -43.9542));
