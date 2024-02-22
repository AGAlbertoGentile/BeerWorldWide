const getBreweriesHelper = require("../helpers/getBreweriesHelper");

module.exports = async (id) => {
    if(id) return await getBreweriesHelper(id);
    return await getBreweriesHelper();
}