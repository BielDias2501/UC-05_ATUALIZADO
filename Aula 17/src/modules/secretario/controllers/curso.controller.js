const CursoService = require('../services/curso.service');

class CursoController {
    async getAllCursos(req, res) {
        try {
            const cursos = await CursoService.getAllCursos();
            res.status(200).json(cursos);
        } catch (error) {
            res.status(500).json({ message: 'Erro ao buscar cursos', error });
        }
    }

    async getCursoById(req, res) {
        try {
            const { id } = req.params;
            const curso = await CursoService.getCursoById(id);
            if (!curso) {
                return res.status(404).json({ message: 'Curso não encontrado' });
            }
            res.status(200).json(curso);
        } catch (error) {
            res.status(500).json({ message: 'Erro ao buscar curso', error });
        }
    }

    async createCurso(req, res) {
        try {
            const novoCurso = req.body;
            const cursoCriado = await CursoService.createCurso(novoCurso);
            res.status(201).json(cursoCriado);
        } catch (error) {
            res.status(500).json({ message: 'Erro ao criar curso', error });
        }
    }

    async updateCurso(req, res) {
        try {
            const { id } = req.params;
            const dadosAtualizados = req.body;
            const cursoAtualizado = await CursoService.updateCurso(id, dadosAtualizados);
            if (!cursoAtualizado) {
                return res.status(404).json({ message: 'Curso não encontrado' });
            }
            res.status(200).json(cursoAtualizado);
        } catch (error) {
            res.status(500).json({ message: 'Erro ao atualizar curso', error });
        }
    }

    async deleteCurso(req, res) {
        try {
            const { id } = req.params;
            const cursoDeletado = await CursoService.deleteCurso(id);
            if (!cursoDeletado) {
                return res.status(404).json({ message: 'Curso não encontrado' });
            }
            res.status(200).json({ message: 'Curso deletado com sucesso' });
        } catch (error) {
            res.status(500).json({ message: 'Erro ao deletar curso', error });
        }
    }
}

module.exports = new CursoController();