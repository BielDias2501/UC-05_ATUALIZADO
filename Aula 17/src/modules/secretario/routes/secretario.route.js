const express = require('express')
const router = express.Router();
const AlunoController = require ('../controllers/aluno.controller')

// Listar alunos http://localhost:3000/secretario/listar-alunos 
router.get('/secretario/listar-alunos',AlunoController.listarAlunos)

// Listar aluno por matricula http://localhost:3000/secretario/listar-aluno/:matricula/a985475
router.get('/secretario/listar-aluno/:matricula',AlunoController.listarAlunoPorMatricula)


router.post('/secretario/criar-aluno',AlunoController.criarAluno)

router.put('/secretario/editar-aluno', AlunoController.editarAluno)

router.delete('/secretario/excluir-aluno/:matricula', AlunoController.deletarAlunoPorMatricula)

router.delete('/secretario/excluir-alunos', AlunoController.deletarTodososAlunos)

module.exports = router