'use strict';

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
let https = require('https');

app.use(bodyParser.json());

app.post('/search?', async (req, res) => {
        function getData() {
            const { name } = req.query;

            let subscriptionKey = 'e7147321671c4e6f9a5f1cccc5707815';

            let host = 'api.cognitive.microsoft.com';
            let path = '/bing/v7.0/images/search';

            let term = name;

            function bing_web_search(search) {
                return new Promise((resolve,reject)=>{
                    console.log('Searching the Web for: ' + term);

                    let request_params = {
                        method: 'GET',
                        hostname: host,
                        path: path + '?q=' + encodeURIComponent(search) + '&count=1',
                        headers: {
                            'Ocp-Apim-Subscription-Key': subscriptionKey,
                        }
                    };
                    let req = https.request(request_params, (response) => {
                        let body = '';
                        response.on('data', function (d) {
                            body += d;
                        });
                        response.on('end', () => {
                            body = JSON.stringify(JSON.parse(body), null, '  ');
                            console.log(body)
                            resolve(JSON.parse(body).value[0].thumbnailUrl);
                        });
                        response.on('error', function (e) {
                            console.log('Error: ' + e.message);
                        });
                    });
                    req.end();
                })
            }

            if (subscriptionKey.length === 32) {
                bing_web_search(term).then((data)=>{
                    res.send(data);
                    console.log('BING WEB SEARCH: ', data);
                })
            } else {
                console.log('Invalid Bing Search API subscription key!');
                console.log('Please paste yours into the source code.');
            }
        }
        getData();
    })

app.listen(3000, () => console.log('listening on port: 3000'));
