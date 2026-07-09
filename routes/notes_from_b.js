var express = require('express');
var router = express.Router();
const cors = require('cors'); // corsミドルウェアを追加


// 接続情報を設定
const { MongoClient } = require("mongodb");
const uri = "mongodb://cu2401325019:b6dZS9r_n@ac-qgqdnl5-shard-00-00.cw69zcu.mongodb.net:27017,ac-qgqdnl5-shard-00-01.cw69zcu.mongodb.net:27017,ac-qgqdnl5-shard-00-02.cw69zcu.mongodb.net:27017/?ssl=true&replicaSet=atlas-ivz1c0-shard-0&authSource=admin&appName=Cluster0";
const client = new MongoClient(uri);

// corsミドルウェアを使用
router.use(cors());

router.get('/', async (req, res) => {
// データベース、コレクションを指定
const database = client.db('notes');
const notes = database.collection('notes');


// 全てのドキュメントを取得
const note = await notes.find({}).toArray();

res.json(note);
})

module.exports = router;