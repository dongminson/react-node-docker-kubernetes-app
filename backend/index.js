const keys = require('./keys');
const redis = require('redis');
const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const redisClient = redis.createClient({
    host: keys.redisHost,
    port: keys.redisPort,
    retry_strategy: () => 1000
});

const options = {
    useNewUrlParser: true,
};

const url = `mongodb://${keys.mongoHostname}:${keys.mongoPort}/${keys.mongoDb}`;

app.get('/redis', (req, res) => {
    let result = {};
    redisClient.get("key", function(err) {
        if (err) {
            result['redis'] = false;
        } else {
            result['redis'] = true;
        }
        res.send(result);
    });

});

app.get('/mongo', (req, res) => {
    let result = {};
    mongoose.connect(url, options).then(function() {
        result['mongo'] = true;
        res.send(result);
    }).catch( function(err) {
        result['mongo'] = false;
        res.send(result);
    });
});

app.listen(5000, err => {
    console.log('backend running on port 5000');
});