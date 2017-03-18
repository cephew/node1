var express = require('express');
var route = express.Router();
var Organization = require('../models/organization');

router.get('/:id/', function(req,res,next){
	var idOrganizations = req.params.id; // parametro GET, POST req.body.<variable>
	Organizations.find(),function(err,organizations){
      if(err){
      res.send({
        status:0,
        mensaje: 'Ocurrio un error',
        err: err,
      });
    }else{
      res.send({
        status:1,        
        data: user,
      });
    }

  /*res
		.status(200)
		.send('Has solicitado el usuario ' + idUser);	*/
};
});

router.post('/:id/', function(req,res,next){
	 // parametro GET, POST req.body.<variable>
	Organizations.create(),function(err,organizations){
      if(err){
      res.send({
        status:0,
        mensaje: 'Ocurrio un error',
        err: err,
      });
    }else{
      res.send({
        status:1,        
        data: user,
      });
    }

  /*res
		.status(200)
		.send('Has solicitado el usuario ' + idUser);	*/
};
});

router.get('/:id/', function(req,res,next){
	var idUser = req.params.id; // parametro GET, POST req.body.<variable>
	Organizations.findById(idOrganizations)
  .select('nombre apellido')
    .exec(function(err,user){
      if(err){
      res.send({
        status:0,
        mensaje: 'Ocurrio un error',
        err: err,
      });
    }else{
      res.send({
        status:1,        
        data: user,
      });
    }

  /*res
		.status(200)
		.send('Has solicitado el usuario ' + idUser);	*/
});
});

module.exports = route;