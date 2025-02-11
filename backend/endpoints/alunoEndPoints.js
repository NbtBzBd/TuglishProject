const endpoints = require('express').Router();
const controller = require('../controllers/alunoController');

endpoints.get('/api/alunos', controller.selectAll);

endpoints.get('/api/aluno', controller.selectOne);

endpoints.post('/api/aluno', controller.create);

endpoints.put('/api/aluno/:id', controller.update);

endpoints.delete('/api/aluno/:id', controller.delete);

module.exports = endpoints;