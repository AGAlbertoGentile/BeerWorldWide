const getBreweriesController = require("../controllers/getBreweriesController");

module.exports = async (req,res) => {
    try {
        console.log('2')
        const {id} = req.params;
        const response = id ? await getBreweriesController(id) : await getBreweriesController();
        return res.status(200).json(response);

    } catch (error) {
        res.status(400).json({error : error.message});
    }
}