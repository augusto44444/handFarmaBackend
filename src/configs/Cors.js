module.exports = function(req, response, next) {
    response.setHeader("Access-Control-Allow-Origin", "*");    
    response.setHeader("Access-Control-Allow-Credentials", "true");
    
    //response.setHeader("Access-Control-Allow-Headers:", "Content-Type");
    response.setHeader("Access-Control-Allow-Methods", "GET,HEAD,POST,PUT,DELETE,PATCH,OPTIONS");

    response.setHeader("Access-Control-Allow-Headers", "Authorization, Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
    next()
}