var express = require('express');
var router = express.Router();
var Users = require('../models/user');

/* GET users listing. */
router.get('/', function(req, res, next) {
  User
    .find({})
    .select('-edad -_id')
    .exec(function(err,users){
      if(err){
      res.send({
        status:0,
        mensaje: 'Ocurrio un error',
        err: err,
      });
    }else{
      res.send({
        status:1,        
        data: users,
      });
    }
    })
 /* res.send({
  	status: 1,
  	data:[
  		{id: 1, nombre: 'Carlos', apellido: 'Perez' },
  		{id: 2, nombre: 'Jose', apellido: 'Maldonado' },
  		{id: 3, nombre: 'Maria', apellido: 'Castro' },
  		{id: 4, nombre: 'Vicky', apellido: 'Rojas' }
  	]
  });*/
});

router.get('/aldia',function(req,res,next){
	res.send('Usuarios al dia');
});


//user/1
router.get('/:id/', function(req,res,next){
	var idUser = req.params.id; // parametro GET, POST req.body.<variable>
	User.findById(idUser)
  .select('nombre apellido empresa')
  .populate({
    path: 'empresa',
    select: 'razonc ruc _id'
  })
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

router.post('/', function(req,res,next){
	console.log(req.body);
  User.create(req.body, function(err,user){
    if(err){
      res.send({
        status:0,
        mensaje: 'Ocurrio un error',
        err: err,
      });
    }else{
      res.send({
        status:1,
        mensaje: 'Usuario Creado',
        data: user,
      });
    } 
    });
  });
	//res.send('1 Enviaste variable post');
//});
//PUT
//modelo.findByIdAndUpdate(ID, parametros,{new:true}, function(err,result){})
router.put('/:id', function(req,res,next){
  User.findByIdAndUpdate(
    req.params.id,req.body,
    {new: true},
    function(err,result){
      if(err){
      res.send({
        status:0,
        mensaje: 'Ocurrio un error',
        err: err,
      });
    }else{
      res.send({
        status:1,
        mensaje: 'Usuario Actualizado',
        data: user,
      });
    }
  });
});
module.exports = router;
