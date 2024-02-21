const getBreweriesController = require("../controllers/getBreweriesController");
const getBreweriesByIdController = require('../controllers/getBreweriesByIdController');


module.exports = async (req,res) => {
    try {
        const id = +req.params.id;

        if (!id){
            response = await getBreweriesController();
            return res.status(200).json(response);
        };
        response = await getBreweriesByIdController(id);
        return res.status(200).json(response);

        // throw new Error('Id not found');
    } catch (error) {
        if (error instanceof Error){
            res.status(404).json({error : error.message});
        }
    }
}