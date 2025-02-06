const connection = require('./connection');

class AlunoModel {

    exectQuery(query, params) {
        return new Promise((resolve, reject) => {
            connection.query(query, params, (error, result) => {
                if (error) {
                    reject(error);
                }
                resolve(result);
            }) 
        })
    }

    selectAll() {
        const query = 'SELECT * FROM alunos';
        return this.exectQuery(query, {});
    }

    selectOne(id) {
        const query = 'SELECT * FROM alunos WHERE id = ?';
        return this.exectQuery(query, id);
    }

    create(aluno) {
        const query = 'INSERT INTO alunos SET ?';
        return this.exectQuery(query, aluno);
    }

    update(aluno, id) {
        const query = 'UPDATE alunos SET ?';
        return this.exectQuery(query, [aluno, id]);
    }

    delete(id) {
        const query = 'DELETE FROM alunos WHERE id = ?';
        return this.exectQuery(query, id);
    }

}

module.exports = new AlunoModel();