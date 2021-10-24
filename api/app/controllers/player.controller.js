const db = require("../models");
const Player = db.players;
const Op = db.Sequelize.Op;

const LEVEL_BAR = 1000;

// Create new player
exports.create = (req, res) => {
  if (!req.body.username || !req.body.email || !req.body.password) {
    res.status(400).json({
      result: "FAILED",
      message: "username atau email atau password tidak boleh kosong."
    });
    return;
  }

  const player = {
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    experience: req.body.exp ? req.body.exp : 0,
    lvl: req.body.exp ? Math.floor(req.body.exp / LEVEL_BAR) : 0
  };

  Player.create(player)
    .then(data => {
      res.status(201).json({
        result: "SUCCESS",
        message: data
      });
    })
    .catch(err => {
      res.status(500).json({
        result: "FAILED",
        message: err.message || "Terjadi keselahan ketika membuat player baru."
      });
    });
};

// get all players (with query parameters)
exports.findAll = (req, res) => {
  let conditions = []
  if (req.query.username) {
    conditions.push({
      username: req.query.username
    });
  }
  if (req.query.email) {
    conditions.push({
      email: req.query.email
    });
  }
  if (req.query.experience) {
    conditions.push({
      experience: req.query.experience
    });
  }
  if (req.query.lvl) {
    conditions.push({
      lvl: req.query.lvl
    });
  }

  Player.findAll({
      where: {
        [Op.and]: conditions
      }
    })
    .then(data => {
      res.status(200).json({
        result: "SUCCESS",
        message: data
      });
    })
    .catch(err => {
      res.status(500).json({
        message: err.message || "Terjadi kesalahan saat mengambil player."
      });
    });
};

// Find a single Player with an id
exports.findById = (req, res) => {
  const id = req.params.id;

  Player.findByPk(id)
    .then(data => {
      res.status(200).json({
        result: "SUCCESS",
        message: data
      });
    })
    .catch(err => {
      res.status(500).json({
        result: "FAILED",
        message: "Terjadi kesalah saat mengabil id palyer ini:" + id
      });
    });
};

exports.getExperience = (req, res) => {
  if (!req.body.exp) {
    res.status(400).json({
      result: "FAILED",
      message: "Kolom pengalaman tidak boleh kosong!"
    });
    return;
  }

  const id = req.params.id;

  Player.findByPk(id)
    .then(player => {
      let expValue = player.experience + parseInt(req.body.exp);
      let lvlValue = (Math.floor(expValue / LEVEL_BAR) == player.lvl) ? player.lvl : player.lvl + 1;
      Player.update({
          experience: expValue,
          lvl: lvlValue
        }, {
          where: {
            id: id
          }
        })
        .then(num => {
          if (num == 1) {
            res.status(200).json({
              result: "SUCCESS",
              message: `Player dengan id:${id} memiliki pengalaman lebih.`
            });
          } else {
            res.status(400).json({
              result: "FAILED",
              message: `Tidak dapat mengupdate player dengan id:${id}!`
            });
          }
        });
    })
    .catch(err => {
      res.status(500).json({
        result: "FAILED",
        message: "Terjadi kesalahan saat mengupdate pengalaman Player dengan id:" + id
      });
    });
};

// Update a Player by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Player.update(req.body, {
      where: {
        id: id
      }
    })
    .then(num => {
      if (num == 1) {
        res.status(200).json({
          result: "SUCCESS",
          message: "Berhasil mengupdate player."
        });
      } else {
        res.status(400).json({
          result: "FAILED",
          message: `Tidak dapat mengupdate player dengan id:${id}. Mungkin player tidak ditemukan or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).json({
        result: "FAILED",
        message: "Terjadi kesalahan saat mengupdate player dengan id:" + id
      });
    });
};

// Delete a Player with id
exports.delete = (req, res) => {
  const id = req.params.id;

  Player.destroy({
      where: {
        id: id
      }
    })
    .then(num => {
      if (num == 1) {
        res.status(200).json({
          result: "SUCCESS",
          message: "Player berhasil dihapus!"
        });
      } else {
        res.status(400).json({
          result: "FAILED",
          message: `Tidak dapat menghapus player dengan id:${id}. Player tidak dapat ditemukan!`
        });
      }
    })
    .catch(err => {
      res.status(500).json({
        result: "FAILED",
        message: "Tidak dapat menghapus player dengan id:" + id
      });
    });
};