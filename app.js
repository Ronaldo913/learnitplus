const dotenv = require('dotenv');
dotenv.config();
const mongoose = require('mongoose');
const urlMongo = "mongodb+srv://ronaldo913:0p0pl9l9w@cluster0.ixewhzj.mongodb.net/learnitplus?retryWrites=true&w=majority";
console.log(urlMongo)
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

mongoose.connect(urlMongo, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const dbConnection = mongoose.connection;

dbConnection.on("error", console.error.bind(console, "Erro na conexão ao MongoDB."));

//base
var indexRouter = require('./routes/base/index');
var opcoesRouter = require('./routes/base/opcoes');
var jsonRouter = require('./routes/base/json');
//postagens
var postagensRouter = require('./routes/postagens/postagens');
var publicationsRouter = require('./routes/postagens/publications');
var visualizarPostagensRouter = require('./routes/postagens/visualizarPostagens');
//sobre
var aboutsRouter = require('./routes/sobre/abouts');
var sobreRouter = require('./routes/sobre/sobre');
var visualizarSobreRouter = require('./routes/sobre/visualizarSobre');
//pacotes
var pacotesRouter = require('./routes/pacotes/pacotes');
var packagesRouter = require('./routes/pacotes/packages');
var visualizarPacotesRouter = require('./routes/pacotes/visualizarPacotes');
//usuarios
var usersRouter = require('./routes/usuarios/users');
var usuariosRouter = require('./routes/usuarios/usuarios');
var visualizarUsuariosRouter = require('./routes/usuarios/visualizarUsuarios');
//questoes
var questionsRouter = require('./routes/questoes/questions');
var questoesRouter = require('./routes/questoes/questoes');
var visualizarQuestoesRouter = require('./routes/questoes/visualizarQuestoes');
//cronogramas
var timelinesRouter = require('./routes/cronograma/timelines');
var cronogramasRouter = require('./routes/cronograma/cronogramas');
var visualizarCronogramasRouter = require('./routes/cronograma/visualizarCronogramas');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/opcoes', opcoesRouter);
app.use('/json', jsonRouter);
//postagens
app.use('/postagens', postagensRouter);
app.use('/visualizarPostagens', visualizarPostagensRouter);
app.use('/publications', publicationsRouter);
//usuarios
app.use('/visualizarUsuarios', visualizarUsuariosRouter);
app.use('/users', usersRouter);
app.use('/usuarios', usuariosRouter);
//pacotes
app.use('/pacotes', pacotesRouter);
app.use('/packages', packagesRouter);
app.use('/visualizarPacotes', visualizarPacotesRouter);
//sobre
app.use('/visualizarSobre', visualizarSobreRouter);
app.use('/sobre', sobreRouter);
app.use('/abouts', aboutsRouter);
//questoes
app.use('/visualizarQuestoes', visualizarQuestoesRouter);
app.use('/questoes', questoesRouter);
app.use('/questions', questionsRouter);
//cronogramas
app.use('/cronogramas', cronogramasRouter);
app.use('/timelines', timelinesRouter);
app.use('/visualizarCronogramas', visualizarCronogramasRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
