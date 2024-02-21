const getBreweriesHelper = require('../helpers/getBreweriesHelper');

module.exports = async () => {
    const response = await getBreweriesHelper();
    console.log('1')
    return response;
}