const getAllProducts = async (req,res) =>{
    res.status(200).json({
        msg:"I am getAll Products"
    });

};

const getAllProductsTesting = async (req,res) =>{
    res.status(200).json({
        msg:"I am getAllProductsTesting"
    });

};

module.exports = {getAllProducts,getAllProductsTesting};