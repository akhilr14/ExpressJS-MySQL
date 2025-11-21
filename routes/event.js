var express = require('express');
var router = express.Router();

const mysql = require('mysql');

const db = mysql.createConnection({
    host: '127.0.0.1',
    port: '3306',
    user: 'root',
    database: 'db'    
})


db.connect((err) => {
    if(err){
        console.log("Unable to connect\n" + err);
        return;
    } else{
        console.log("Connected to MySQL");
    }
});

function sqlPromise(sql, values=[]) {
    return new Promise((resolve, reject) => {
        db.query(sql, values, (err, result) => {
            if(err){
                console.log(err);
                reject(err);
            } else{
                console.log(result);
                resolve(result);
            }
        })
    });
};

/* GET Event listing. */
router.get('/', function(req, res, next) {
  res.send('Event says Hi');
});

router.post('/create-event', async (req, res) => {
  try{
    let { Title, Details, OnDate, Venue, RegistrationLink }= req.body;
    console.log(req.body);
    if (!Title || !Details || !Venue || !OnDate || !RegistrationLink){
      throw new Error("Mandatory field are not there");
    }
    const data = [Title, Details, OnDate, Venue, RegistrationLink];
    const SQL = "INSERT INTO events (Title, Details, Ondate, Venue, RegistrationLink) VALUES (?,?,?,?,?)"
    const result = await sqlPromise(SQL, data);
    console.log(result);
    res.status(201).json({msg: "Created", data: {result}});
  }catch(error){
    if(error){
      res.status(400).json({ message: error.message });
    }
  }
})

router.get('/event-active', async (req,res) => {
  try{
    const timestamp = new Date().toISOString();
    let data = timestamp;
    const SQL = "SELECT * FROM events WHERE OnDate > ?"

    const result = await sqlPromise(SQL, [data]);
    console.log("Fetched data");
    res.status(200).json({
      msg: "Fetched data",
      data: result
    });
  }catch(error){
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

router.get('/event-details/:id', async (req, res) => {
  try{
    console.log("Hi")
    let {id} = req.params;
    let SQL = 'SELECT * FROM events WHERE EventId = ?';
    const result = await sqlPromise(SQL, [id]);
    console.log("Fetched data");
    res.status(200).json({
      msg: "Fetched data",
      data: result
    });
  } catch(error){
    console.log(error);
    res.status(500).json({ error: "Server error" });
  }
});

router.get('/event-window/:first/:last', async (req, res) => {
  try{
    let first = req.params.first;
    let last = req.params.last;
    
    let data = [first, last];
    let SQL = "SELECT * FROM events WHERE OnDate BETWEEN ? AND ?";
    const result = await sqlPromise(SQL, data);

    console.log("Fetched data");
    res.status(200).json({
      msg: "Fetched data",
      data: result
    });
  } catch(error){
    console.log(error);
    res.status(500).json({ error: "Server error" });
  }
});

router.put('/event-update/:id', async (req, res) => {
  try{
    let id = req.params.id;
    let update = "www.dance.com";
    let data = [update, id];
    let SQL = "UPDATE events SET RegistrationLink = ? WHERE EventId = ?";
    const result = await sqlPromise(SQL, data);
    console.log("Updated data");
    res.status(200).json({
      msg: "Updated data",
      data: result
    });
  } catch(error){
    console.log(error);
    res.status(500).json({ error: "Server error" });
  }
});

router.delete('/event-delete/:id', async (req, res) => {
  try{
    let id = req.params.id;
    let data = [id];
    let SQL = "DELETE FROM events WHERE EventId = ?";
    const result = await sqlPromise(SQL, data);
    console.log("Deleted data");
    res.status(200).json({
      msg: "Deleted data",
      data: result
    });
  } catch(error){
    console.log(error);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;