function getLivros(req, res){
    try{
        res.send("Olá Mundo")    
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

module.exports = {
    getLivros
}
