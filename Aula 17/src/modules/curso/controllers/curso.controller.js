const CursoModel = require("../../curso/models/curso.model");

class CursoController {
  static async criarCurso(req, res) {
    try {
      const { cod_curso, nome, descricao } = req.body;
      if (!cod_curso || !nome || !descricao) {
        return res
          .status(400)
          .json({ msg: "Todos os campos devem serem preenchidos!" });
      }
      const Curso = await CursoModel.create({
        cod_curso,
        nome,
        descricao,
      });
      res.status(201).json(Curso);
    } catch (error) {
      res
        .status(500)
        .json({ msg: "Erro interno do servidor. Por favor, tente mais tarde" });
    }
  }
  static async listarCursos(req, res) {
    try {
      const cursos = await CursoModel.findAll();
      if (cursos.length === 0) {
        return res.status(200).json({ msg: "Não há Cursos a serem exibidos!" });
      }
      res.status(200).json(cursos);
    } catch (error) {
      res
        .status(500)
        .json({ msg: "Erro interno do servidor. Por favor, tente mais tarde" });
    }
  }
  static async listarCursoPorCodigo(req, res) {
    try {
      const codigo = req.params.codigo;
      const curso = await CursoModel.findByPk(codigo);
      if (!curso) {
        return res.status(404).json({ msg: "Curso não encontrado!" });
      }
      res.status(200).json(curso);
    } catch (error) {
      res
        .status(500)
        .json({ msg: "Erro interno do servidor. Por favor, tente mais tarde" });
    }
  }
  static async editarCurso(req, res) {
    try {
      const codigo = req.params.codigo;
      const {nome, descricao } = req.body;
      if (!nome || !descricao) {
        return res.status(400).json({
          msg: "Os campos cod_curso, nome, descricao devem serem preenchidos!",
        });
      }
      const cursoAtualizado = await CursoModel.update(
        { cod_curso: cod_curso, nome: nome, descricao: descricao },
        {where: { codigo: codigo }}
      );
      if (cursoAtualizado.length === 0) {
        return res.status(404).json({ msg: "Curso não encontrado!" });
      }
      res.status(200).json(cursoAtualizado);
    } catch (error) {
      res
        .status(500)
        .json({ msg: "Erro interno do servidor. Por favor, tente mais tarde" });
    }
  }
  static async deletarCursoPorcodigo(req, res) {
    try {
      const codigo = req.params.codigo;
      const curso = await CursoModel.findByPk( codigo );
      if (!curso) {
        return res.status(404).json({ msg: "Curso não encontrado!" });
      }
      await CursoModel.destroy({
        where: {
          codigo: codigo,
        },
      });
      res.status(200).json({ msg: "Curso excluido com sucesso!" });
    } catch (error) {
      res
        .status(500)
        .json({ msg: "Erro interno do servidor. Por favor, tente mais tarde" });
    }
  }
  static async deletarTodososCursos(){
    try {
      await CursoModel.destroy(
        {where: {}}
      )
      res.status(200).json({ msg: "Cursos excluido com sucesso!" });
    } catch (error) {
      res
      .status(500)
      .json({ msg: "Erro interno do servidor. Por favor, tente mais tarde" });
    }
  }
}

module.exports = CursoController