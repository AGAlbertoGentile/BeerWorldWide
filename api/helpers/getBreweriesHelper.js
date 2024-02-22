const axios = require('axios');
const baseUrl = 'https://api.openbrewerydb.org/v1/breweries'

module.exports = async (id) => {
    try {
        const url = id ? `${baseUrl}/${id}` : baseUrl;
        const breweries = await axios.get(url);
        return breweries.data;
    } catch (error) {
        throw new Error(error.message);
    }
}