const model = require('../models/alunoModel');

class AlunoController {
    selectAll(req, res) {
        const result = model.selectAll();
        result
        .then(r => res.status(200).json(r))
        .catch(r => res.status(400).json(r));
    }
    
    selectOne(req, res) {
        const { id } = req.params;
        const result = model.selectOne(id);
        result
        .then(r => res.status(200).json(r))
        .catch(r => res.status(400).json(r));
    }

    create(req, res) {
        const aluno = req.body;
        const result = model.create(aluno);
        result
        .then(r => res.status(200).json(r))
        .catch(r => res.status(400).json(r));
    }

    update(req, res) {
        const aluno = req.body, { id } = req.params;
        const result = model.update(aluno, id);
        result
        .then(r => res.status(200).json(r))
        .catch(r => res.status(400).json(r));
    }

    delete(req, res) {
        const { id } = req.params;
        const result = model.delete(id);
        result
        .then(r => res.status(200).json(r))
        .catch(r => res.status(400).json(r));
    }
}

module.exports = new AlunoController();