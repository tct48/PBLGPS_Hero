const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../../models/user/user');

var accessToken = null;

// สมาชิกทั้งหมด
router.get('/', (req, res, next) => {
  if (!req.query["sp"] || !req.query["lp"]) {
    res.status(200).json({
      code: "Error !",
      message: "Missing request query parameter"
    })
  }

  var sp = Object.values(req.query["sp"]);
  var lp = Object.values(req.query["lp"]);
  var skip = sp * lp;

  const user = User.find({});

  user.then(result => {
    const totalItem = result.length;
    user.skip(Number(skip))
      .limit(Number(lp))
      .then(items => {
        return res.status(200).json({
          total_items: totalItem,
          items: items,
        })
      })
      .catch(err => {
        res.status(500).json({
          message: err.message
        })
      })
  })
})

// การล๊อกอิน
router.post('/login', (req, res, next) => {
  User.find({
      username: req.body.username
    })
    .exec()
    .then(user => {
      bcrypt.compare(req.body.password, user[0].password, (err, result) => {
        if (err) {
          return res.status(401).json({
            message: "อีเมล์ หรือพาสเวิร์ดไม่ถูกต้อง"
          })
        }

        if (result) {
          console.log("FFFFFF")
          const token = jwt.sign({
              username: user[0].username,
              userId: user[0]._id
            },
            process.env.JWT_KEY, {
              expiresIn: "24h"
            }
          );
          accessToken = token;
          return res.status(200).json({
            message: "Auth successful",
            _id: user[0]._id,
            accessToken: token
          })
        }

        res.status(401).json({
          message: "อีเมล์ หรือพาสเวิร์ดไม่ถูกต้อง"
        })
      })
    })
    .catch(err => {
      res.status(500).json({
        error: err.message
      });
    })
})

// การสมัครสมาชิก
router.post('/signup', (req, res, next) => {
  bcrypt.hash(req.body.password, 10, (err, hash) => {
    if (err) {
      return res.status(500).json({
        error: err.message
      })
    }

    const user = new User({
      _id: new mongoose.Types.ObjectId(),
      email: req.body.email,
      password: hash,
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      username: req.body.username,
      phone: req.body.phone
    });

    user.save()
      .then(result => {
        res.status(200).json({
          message: "สมัครสมาชิกเรียบร้อยแล้ว",
          created: result
        })
      })
  })
})

module.exports = router;