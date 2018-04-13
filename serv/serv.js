const express = require('express');
const bodyParser = require('body-parser');

const app = express();

let https = require('https');

app.use(bodyParser.json());

let imageUrl;

let subscriptionKey = 'e7147321671c4e6f9a5f1cccc5707815';

let host = 'api.cognitive.microsoft.com';
let path = '/bing/v7.0/images/search';
let body = '';

app.post('/search?', (req, res) => {
    const { name } = req.query;
    new Promise(((resolve, reject) => {
        let response_handler = function (response) {
            response.on('data', function (d) {
                body += d;
            });
            response.on('end', function () {
                for (var header in response.headers)
                    if (header.startsWith("bingapis-") || header.startsWith("x-msedge-"))
                        imageUrl = JSON.parse(body).value[0].contentUrl;
                    console.log('IMAGE URL: ', imageUrl);
                body = JSON.stringify(JSON.parse(body), null, '  ');
            });
            response.on('error', function (e) {
                reject(e)
                console.log('Error: ' + e.message);
            });
        };

        let bing_image_search = function (search) {
            let request_params = {
                method: 'GET',
                hostname: host,
                path: path + '?q=' + encodeURIComponent(search),
                headers: {
                    'Ocp-Apim-Subscription-Key': subscriptionKey,
                }
            };
            let req = https.request(request_params, response_handler);
            resolve(req.end());
        }
        if (subscriptionKey.length === 32) {
            bing_image_search(name);
        } else {
            console.log('Invalid Bing Search API subscription key!');
            console.log('Please paste yours into the source code.');
        }
    })).then((data) => {
        try {
            res.send(JSON.stringify(imageUrl));
        }
        catch (err) {
            console.log("ERRRROOOOOR", err);
        }
    }).catch((err)=>{
        console.log('eeeeeeeeeeeeRRRRRRRRRRR', err);
    })
})

app.listen(3000, () => console.log('listening on port: 3000'));

