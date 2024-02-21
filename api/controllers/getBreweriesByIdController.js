const getBreweriesHelper = require("../helpers/getBreweriesHelper");

module.exports = async (id) => {
    const response = await getBreweriesHelper(id);
    return response;
}