const passwordValidator = require('password-validator');

const passwordModel = new passwordValidator();

passwordModel
.is().min(8)                                    
.is().max(64)                                  
.has().uppercase()                              
.has().lowercase()                             
.has().digits()                                
.has().not().spaces()                    

module.exports = passwordModel;