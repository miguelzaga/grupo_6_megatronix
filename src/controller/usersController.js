const controller={
    processRegister : (req, res) =>{
        return res.send({
            body: req.body,
            file: req.file
        })
    }
}

module.exports = controller;