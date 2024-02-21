const axios = require('axios');
const URL = 'https://api.openbrewerydb.org/breweries'

module.exports = async () => {
    try {
        const breweries = await axios.get(URL);
        console.log("Llamado a API externa realizando con exito");
        return breweries.data;
    } catch (error) {
        console.error('Error with api call')
        throw new Error(error.message);
    }
}