const express = require('express');
const router = express.Router();
const axios = require('axios')
var { fetchJson } = require('../lib/fetcher.js')
const path = require('path');
const { readFileTxt, readFileJson } = require('../lib/function');
const { ytMp4, ytMp3, ytPlay } = require('../lib/youtube');
const { cekKey, limitAdd, isLimit } = require('../database/db');
const { youtubePlay, youtubeMp4, youtubeMp3 } = require('../controllers/yt');
const { cakLontong, bijak, quotes, fakta, ptl, motivasi } = require('../controllers/randomtext');
const { photoOxy } = require('./oxy');
const  request  = require('request');
var zrapi = require("zrapi");
var creatorList = ['IdoGanz'];
var fetch = require('node-fetch');
var fs = require('fs');
var TikTokScraper = require('tiktok-scraper');
 var creator = creatorList[Math.floor(Math.random() * creatorList.length)];
 var download = function(uri, filename, callback){
  request.head(uri, function(err, res, body){
    console.log('content-type:', res.headers['content-type']);
    request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
  });
};
 _ = require('lodash')
__path = process.cwd();

async function Joox(query) {
    return new Promise((resolve, reject) => {
      const time = Math.floor(new Date() / 1000)
      axios.get('http://api.joox.com/web-fcgi-bin//web_search?lang=id&country=id&type=0&search_input=' + query + '&pn=1&sin=0&ein=29&_=' + time)
        .then(({
          data
        }) => {
          let result = []
          let hasil = []
          let promoses = []
          let ids = []
          data.itemlist.forEach(result => {
            ids.push(result.songid)
          });
          for (let i = 0; i < data.itemlist.length; i++) {
            const get = 'http://api.joox.com/web-fcgi-bin/web_get_songinfo?songid=' + ids[i]
            promoses.push(
              axios.get(get, {
                headers: {
                  Cookie: 'wmid=142420656; user_type=1; country=id; session_key=2a5d97d05dc8fe238150184eaf3519ad;'
                }
              })
              .then(({
                data
              }) => {
                const res = JSON.parse(data.replace('MusicInfoCallback(', '').replace('\n)', ''))
                hasil.push({
                  lagu: res.msong,
                  album: res.malbum,
                  penyanyi: res.msinger,
                  publish: res.public_time,
                  img: res.imgSrc,
                  mp3: res.mp3Url
                })
  
                axios.get('http://api.joox.com/web-fcgi-bin/web_lyric?musicid=' + ids[i] + '&lang=id&country=id&_=' + time)
                  .then(({
                    data
                  }) => {
                    const lirik = JSON.parse(data.replace('MusicJsonCallback(', '').replace('\n)', '')).lyric
                    const buff = new Buffer.from(lirik, 'base64')
                    const ash = buff.toString('utf-8')
                    result.push({
                      result: ash
                    })
                    Promise.all(promoses).then(() => resolve({status: 200, result: hasil}))
                  }).catch(reject)
              }).catch(reject)
            )
          }
        }).catch(reject)
    })
  }
loghandler = {
    nottext: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter text'
    },
    noemote: {
      status: false,
      creator: `${creator}`,
      code: 406,
      message: 'masukan parameter emot'
  },
      query: {
      status: false,
      creator: `${creator}`,
      code: 406,
      message: 'masukan parameter query'
  },
  nousername: {
    status: false,
    creator: `${creator}`,
    code: 406,
    message: 'masukan parameter username'
},
  notype: {
    status: false,
    creator: `${creator}`,
    code: 406,
    message: 'masukan parameter type'
},
    domain: {
      status: false,
      creator: `${creator}`,
      code: 406,
      message: 'masukan parameter domain'
  },
    nomor: {
      status: false,
      creator: `${creator}`,
      code: 406,
      message: 'masukan parameter nomor'
  },
    nottext2: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter text2'
    },
    error: {
        status: false,
        creator: `${creator}`,
        message: 'mungkin sedang dilakukan perbaikan'
    },
    img: {
      status: false,
      creator: `${creator}`,
      message: 'Silahkan Masukan Url Image'
  },
    nottheme: {
      status: false,
      creator: `${creator}`,
      code: 406,
      message: 'masukan parameter theme'
    },
    noname: {
      status: false,
      creator: `${creator}`,
      code: 406,
      message: 'masukan parameter nama'
    },
    noname2: {
      status: false,
      creator: `${creator}`,
      code: 406,
      message: 'masukan parameter nama2'
    },
    username: {
      status: false,
      creator: `${creator}`,
      code: 406,
      message: 'masukan parameter username'
    },
    mimpi: {
      status: false,
      creator: `${creator}`,
      code: 406,
      message: 'masukan parameter mimpi'
    },
    invalidlink: {
      status: false,
      creator: `${creator}`,
      message: 'error, mungkin link anda tidak valid.'
    },
    }
    const { 
      whois, 
      Tiktok,
      TiktokStalk,
      Github,
      Simi,
      WPUser,
      Emoji,
      KBBI,
      igStory,
      tebakGambar,
      otakuDesuOngoing,
      tiktokDown,
      emojiScraper,
      genPassword 
  } = require("../function/lainya");
    const { 
      igStalk, 
      igDownload 
  } = require("../function/ig");
    const { 
      artiNama, 
      artiMimpi, 
      ramalJodoh, 
      nomorHoki 
  } = require("../function/primbon");
   const { 
      twitterDown,
  } = require("../lib/ig");
  const { 
    GSMArena,
	zodiakMing,
	zodiakHar,
	Shoope,
	pinterest
  } = require("../lib/index");
  const { 
    yDonlod, 
    yPlay, 
    ySearch 
} = require("../function/yt");

router.get('/simsimi', async (req, res, next) => {
             const query = req.query.query
    const apikey = req.query.apikey;
    if (apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter apikey`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
      status: 403,
      message: `apikey ${apikey} not found, please register first!`
  });
  limitAdd(apikey);
    if(!query) return res.json(loghandler.query)
       fetch(encodeURI(`https://api.simsimi.net/v1/?text=${query}&lang=id&cf=true`))
        .then(response => response.json())
        .then(data => {
        var data = data;
             res.json({
             	status: `200`,        	
             	result: {
             		query: `${query}`,
             		answer: `${data.messages[0].response}`
             	},
             	Note: `Jangan Di Spam Ya Cok (emote batu)`
             })
         })
         .catch(e => {
         	res.sendFile(__path + '/docs/503.html')
})
})

router.get('/emoji', async(req, res, next) => {
  const emoji = req.query.emo
  const apikey = req.query.apikey;
        if (apikey === undefined) return res.status(404).send({
            status: 404,
            message: `Input Parameter apikey`
        });
        let limit = await isLimit(apikey);
        if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
        const check = await cekKey(apikey);
        if (!check) return res.status(403).send({
          status: 403,
          message: `apikey ${apikey} not found, please register first!`
      });
      limitAdd(apikey);
  if (!emoji) return res.json(loghandler.noemote)
  emojiScraper(emoji)
  .then(data =>{ res.send(data)})
  .catch(err=>{
  console.log(err)
  res.send('error')
  })
})

router.get('/otakudesu', async(req, res, next) => {
  const apikey = req.query.apikey;
        if (apikey === undefined) return res.status(404).send({
            status: 404,
            message: `Input Parameter apikey`
        });
        let limit = await isLimit(apikey);
        if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
        const check = await cekKey(apikey);
        if (!check) return res.status(403).send({
          status: 403,
          message: `apikey ${apikey} not found, please register first!`
      });
      limitAdd(apikey);
      otakuDesuOngoing()
  .then(data =>{ res.send(data)})
  .catch(err=>{
  console.log(err)
  res.send('error')
  })
})

router.get('/tebakgambar', async(req, res, next) => {
  const apikey = req.query.apikey;
        if (apikey === undefined) return res.status(404).send({
            status: 404,
            message: `Input Parameter apikey`
        });
        let limit = await isLimit(apikey);
        if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
        const check = await cekKey(apikey);
        if (!check) return res.status(403).send({
          status: 403,
          message: `apikey ${apikey} not found, please register first!`
      });
      limitAdd(apikey);
  tebakGambar()
  .then(data =>{ res.send(data)})
  .catch(err=>{
  console.log(err)
  res.send('error')
  })
})

router.get('/ttdl', async(req, res, next) => {
  const url = req.query.url
  const apikey = req.query.apikey;
        if (apikey === undefined) return res.status(404).send({
            status: 404,
            message: `Input Parameter apikey`
        });
        let limit = await isLimit(apikey);
        if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
        const check = await cekKey(apikey);
        if (!check) return res.status(403).send({
          status: 403,
          message: `apikey ${apikey} not found, please register first!`
      });
      limitAdd(apikey);
  if (!url) return res.json(loghandler.invalidlink)
  tiktokDown(url)
  .then(data =>{ res.send(data)})
  .catch(err=>{
  console.log(err)
  res.send('error')
  })
})
router.get('/kbbi', async(req, res, next) => {
  const apikey = req.query.apikey;
        if (apikey === undefined) return res.status(404).send({
            status: 404,
            message: `Input Parameter apikey`
        });
        let limit = await isLimit(apikey);
        if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
        const check = await cekKey(apikey);
        if (!check) return res.status(403).send({
          status: 403,
          message: `apikey ${apikey} not found, please register first!`
      });
      limitAdd(apikey);
  const kata = req.query.text || req.query.q;
  if (!kata) return res.json(loghandler.nottext);
  KBBI(kata)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send(err);
    });
});

router.get('/igstory', async(req, res, next) => {
  const username = req.query.username
  const apikey = req.query.apikey;
        if (apikey === undefined) return res.status(404).send({
            status: 404,
            message: `Input Parameter apikey`
        });
        let limit = await isLimit(apikey);
        if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
        const check = await cekKey(apikey);
        if (!check) return res.status(403).send({
          status: 403,
          message: `apikey ${apikey} not found, please register first!`
      });
      limitAdd(apikey);
  if (!username) return res.json(loghandler.nousername)
  igStory(username)
  .then(data =>{ res.send(data)})
  .catch(err=>{
  console.log(err)
  res.send('error')
  })
})

router.get('/githubstalk', async(req, res, next) => {
  const username = req.query.username
  const apikey = req.query.apikey;
        if (apikey === undefined) return res.status(404).send({
            status: 404,
            message: `Input Parameter apikey`
        });
        let limit = await isLimit(apikey);
        if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
        const check = await cekKey(apikey);
        if (!check) return res.status(403).send({
          status: 403,
          message: `apikey ${apikey} not found, please register first!`
      });
      limitAdd(apikey);
  if (!username) return res.json(loghandler.nousername)
fetch(encodeURI(`https://api.github.com/users/${username}`))
        .then(response => response.json())
        .then(data => {
    	var result = data;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
      });
    })
    .catch((err) => {
      res.json(err);
    });
    
});
router.get('/imgedit/gay', async(req, res, next) => {
  const url = req.query.url;
   const apikey = req.query.apikey;
        if (apikey === undefined) return res.status(404).send({
            status: 404,
            message: `Input Parameter apikey`
        });
        let limit = await isLimit(apikey);
        if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
        const check = await cekKey(apikey);
        if (!check) return res.status(403).send({
          status: 403,
          message: `apikey ${apikey} not found, please register first!`
      });
      limitAdd(apikey);
if (!url) return res.json(loghandler.invalidlink);
  let hasil = `https://some-random-api.ml/canvas/gay?avatar=${url}`
  data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/tod.png', data)
        res.sendFile(__path+'/tmp/tod.png')
});
router.get('/imgedit/gay2', async(req, res, next) => {
  const url = req.query.url;
   const apikey = req.query.apikey;
        if (apikey === undefined) return res.status(404).send({
            status: 404,
            message: `Input Parameter apikey`
        });
        let limit = await isLimit(apikey);
        if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
        const check = await cekKey(apikey);
        if (!check) return res.status(403).send({
          status: 403,
          message: `apikey ${apikey} not found, please register first!`
      });
      limitAdd(apikey);
if (!url) return res.json(loghandler.invalidlink);
  let hasil = `https://gatauajg.yogipw.repl.co/api/tembak/gay?img=${url}`
  data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/tod.png', data)
        res.sendFile(__path+'/tmp/tod.png')
});
router.get('/imgedit/komunis', async(req, res, next) => {
  const url = req.query.url;
  const apikey = req.query.apikey;
        if (apikey === undefined) return res.status(404).send({
            status: 404,
            message: `Input Parameter apikey`
        });
        let limit = await isLimit(apikey);
        if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
        const check = await cekKey(apikey);
        if (!check) return res.status(403).send({
          status: 403,
          message: `apikey ${apikey} not found, please register first!`
      });
      limitAdd(apikey);
if (!url) return res.json(loghandler.invalidlink);
  let hasil = `https://gatauajg.yogipw.repl.co/api/tembak/communism?img=${url}`
  data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/tod.png', data)
        res.sendFile(__path+'/tmp/tod.png')
});
router.get('/imgedit/hitler', async(req, res, next) => {
  const url = req.query.url;
   const apikey = req.query.apikey;
        if (apikey === undefined) return res.status(404).send({
            status: 404,
            message: `Input Parameter apikey`
        });
        let limit = await isLimit(apikey);
        if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
        const check = await cekKey(apikey);
        if (!check) return res.status(403).send({
          status: 403,
          message: `apikey ${apikey} not found, please register first!`
      });
      limitAdd(apikey);
if (!url) return res.json(loghandler.invalidlink);
  let hasil = `https://gatauajg.yogipw.repl.co/api/hitler?url=${url}`
  data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/tod.png', data)
        res.sendFile(__path+'/tmp/tod.png')
});
router.get('/imgedit/discordblack', async(req, res, next) => {
  const url = req.query.url;
   const apikey = req.query.apikey;
        if (apikey === undefined) return res.status(404).send({
            status: 404,
            message: `Input Parameter apikey`
        });
        let limit = await isLimit(apikey);
        if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
        const check = await cekKey(apikey);
        if (!check) return res.status(403).send({
          status: 403,
          message: `apikey ${apikey} not found, please register first!`
      });
      limitAdd(apikey);
if (!url) return res.json(loghandler.invalidlink);
  let hasil = `https://gatauajg.yogipw.repl.co/api/discordblack?url=${url}`
  data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/tod.png', data)
        res.sendFile(__path+'/tmp/tod.png')
});
router.get('/imgedit/discordblack', async(req, res, next) => {
  const url = req.query.url;
   const apikey = req.query.apikey;
        if (apikey === undefined) return res.status(404).send({
            status: 404,
            message: `Input Parameter apikey`
        });
        let limit = await isLimit(apikey);
        if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
        const check = await cekKey(apikey);
        if (!check) return res.status(403).send({
          status: 403,
          message: `apikey ${apikey} not found, please register first!`
      });
      limitAdd(apikey);
if (!url) return res.json(loghandler.invalidlink);
  let hasil = `https://gatauajg.yogipw.repl.co/api/discordblue?url=${url}`
  data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/tod.png', data)
        res.sendFile(__path+'/tmp/tod.png')
});
router.get('/imgedit/circle', async(req, res, next) => {
  const url = req.query.url;
   const apikey = req.query.apikey;
        if (apikey === undefined) return res.status(404).send({
            status: 404,
            message: `Input Parameter apikey`
        });
        let limit = await isLimit(apikey);
        if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
        const check = await cekKey(apikey);
        if (!check) return res.status(403).send({
          status: 403,
          message: `apikey ${apikey} not found, please register first!`
      });
      limitAdd(apikey);
if (!url) return res.json(loghandler.invalidlink);
  let hasil = `https://gatauajg.yogipw.repl.co/api/circle?url=${url}`
  data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/tod.png', data)
        res.sendFile(__path+'/tmp/tod.png')
});
router.get('/imgedit/captcha', async(req, res, next) => {
  const url = req.query.url;
   const apikey = req.query.apikey;
        if (apikey === undefined) return res.status(404).send({
            status: 404,
            message: `Input Parameter apikey`
        });
        let limit = await isLimit(apikey);
        if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
        const check = await cekKey(apikey);
        if (!check) return res.status(403).send({
          status: 403,
          message: `apikey ${apikey} not found, please register first!`
      });
      limitAdd(apikey);
if (!url) return res.json(loghandler.invalidlink);
  let hasil = `https://gatauajg.yogipw.repl.co/api/tembak/captcha?img=${url}`
  data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/tod.png', data)
        res.sendFile(__path+'/tmp/tod.png')
});
router.get('/imgedit/police', async(req, res, next) => {
  const url = req.query.url;
   const apikey = req.query.apikey;
        if (apikey === undefined) return res.status(404).send({
            status: 404,
            message: `Input Parameter apikey`
        });
        let limit = await isLimit(apikey);
        if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
        const check = await cekKey(apikey);
        if (!check) return res.status(403).send({
          status: 403,
          message: `apikey ${apikey} not found, please register first!`
      });
      limitAdd(apikey);
if (!url) return res.json(loghandler.invalidlink);
  let hasil = `https://gatauajg.yogipw.repl.co/api/tembak/police?img=${url}`
  data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/tod.png', data)
        res.sendFile(__path+'/tmp/tod.png')
});
router.get('/imgedit/continued', async(req, res, next) => {
  const url = req.query.url
  const apikey = req.query.apikey;
        if (apikey === undefined) return res.status(404).send({
            status: 404,
            message: `Input Parameter apikey`
        });
        let limit = await isLimit(apikey);
        if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
        const check = await cekKey(apikey);
        if (!check) return res.status(403).send({
          status: 403,
          message: `apikey ${apikey} not found, please register first!`
      });      
      limitAdd(apikey);
  if (!url) return res.json(loghandler.invalidlink);
  let hasil = `https://gatauajg.yogipw.repl.co/api/tembak/communism?img=${url}`
  data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/tod.png', data)
        res.sendFile(__path+'/tmp/tod.png')
});
router.get('/imgedit/putin', async(req, res, next) => {
  const url = req.query.url
  const apikey = req.query.apikey;
        if (apikey === undefined) return res.status(404).send({
            status: 404,
            message: `Input Parameter apikey`
        });
        let limit = await isLimit(apikey);
        if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
        const check = await cekKey(apikey);
        if (!check) return res.status(403).send({
          status: 403,
          message: `apikey ${apikey} not found, please register first!`
      });      
      limitAdd(apikey);
  if (!url) return res.json(loghandler.invalidlink);
  let hasil = `https://gatauajg.yogipw.repl.co/api/putin?url=${url}`
  data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/tod.png', data)
        res.sendFile(__path+'/tmp/tod.png')
});
router.get('/imgedit/petimati', async(req, res, next) => {
  const url = req.query.url;
   const apikey = req.query.apikey;
        if (apikey === undefined) return res.status(404).send({
            status: 404,
            message: `Input Parameter apikey`
        });
        let limit = await isLimit(apikey);
        if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
        const check = await cekKey(apikey);
        if (!check) return res.status(403).send({
          status: 403,
          message: `apikey ${apikey} not found, please register first!`
      });
      limitAdd(apikey);
if (!url) return res.json(loghandler.invalidlink);
  let hasil = `https://gatauajg.yogipw.repl.co/api/petimati?url=${url}`
  data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/tod.png', data)
        res.sendFile(__path+'/tmp/tod.png')
});
router.get('/imgedit/presentasi', async(req, res, next) => {
  const text = req.query.text;
   const apikey = req.query.apikey;
        if (apikey === undefined) return res.status(404).send({
            status: 404,
            message: `Input Parameter apikey`
        });
        let limit = await isLimit(apikey);
        if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
        const check = await cekKey(apikey);
        if (!check) return res.status(403).send({
          status: 403,
          message: `apikey ${apikey} not found, please register first!`
      });
      limitAdd(apikey);
  if(!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})
  let hasil = `https://gatauajg.yogipw.repl.co/api/lisapresentation?text=${text}`
  data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/tod.png', data)
        res.sendFile(__path+'/tmp/tod.png')
});
router.get('/imgedit/penjara', async(req, res, next) => {
  const url = req.query.text
  const apikey = req.query.apikey;
        if (apikey === undefined) return res.status(404).send({
            status: 404,
            message: `Input Parameter apikey`
        });
        let limit = await isLimit(apikey);
        if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
        const check = await cekKey(apikey);
        if (!check) return res.status(403).send({
          status: 403,
          message: `apikey ${apikey} not found, please register first!`
      });
      limitAdd(apikey);
  if (!url) return res.json(loghandler.invalidlink);
  let hasil = `https://gatauajg.yogipw.repl.co/api/jail?url=${url}`
  data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/tod.png', data)
        res.sendFile(__path+'/tmp/tod.png')
});
router.get('/imgedit/glass', async(req, res, next) => {
  const url = req.query.url
  const apikey = req.query.apikey;
        if (apikey === undefined) return res.status(404).send({
            status: 404,
            message: `Input Parameter apikey`
        });
        let limit = await isLimit(apikey);
        if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
        const check = await cekKey(apikey);
        if (!check) return res.status(403).send({
          status: 403,
          message: `apikey ${apikey} not found, please register first!`
      });
      limitAdd(apikey);
  if (!url) return res.json(loghandler.invalidlink);
  let hasil = `https://some-random-api.ml/canvas/glass?avatar=${url}`
  data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/glass.png', data)
        res.sendFile(__path+'/tmp/glass.png')
});
router.get('/imgedit/wasted', async(req, res, next) => {
  const url = req.query.url;
  const apikey = req.query.apikey;
        if (apikey === undefined) return res.status(404).send({
            status: 404,
            message: `Input Parameter apikey`
        });
        let limit = await isLimit(apikey);
        if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
        const check = await cekKey(apikey);
        if (!check) return res.status(403).send({
          status: 403,
          message: `apikey ${apikey} not found, please register first!`
      });
      limitAdd(apikey);
if (!url) return res.json(loghandler.invalidlink);
  let hasil = `https://some-random-api.ml/canvas/wasted?avatar=${url}`
  data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/wasted.png', data)
        res.sendFile(__path+'/tmp/wasted.png')
});

router.get('/imgedit/greyscale', async(req, res, next) => {
  const url = req.query.url
  const apikey = req.query.apikey;
        if (apikey === undefined) return res.status(404).send({
            status: 404,
            message: `Input Parameter apikey`
        });
        let limit = await isLimit(apikey);
        if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
        const check = await cekKey(apikey);
        if (!check) return res.status(403).send({
          status: 403,
          message: `apikey ${apikey} not found, please register first!`
      });
      limitAdd(apikey);
  if (!url) return res.json(loghandler.invalidlink);
  let hasil = `https://some-random-api.ml/canvas/greyscale?avatar=${url}`
  data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/gscale.png', data)
        res.sendFile(__path+'/tmp/gscale.png')
});
router.get('/imgedit/invert', async(req, res, next) => {
  const url = req.query.url
  const apikey = req.query.apikey;
        if (apikey === undefined) return res.status(404).send({
            status: 404,
            message: `Input Parameter apikey`
        });
        let limit = await isLimit(apikey);
        if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
        const check = await cekKey(apikey);
        if (!check) return res.status(403).send({
          status: 403,
          message: `apikey ${apikey} not found, please register first!`
      });
      limitAdd(apikey);
  if (!url) return res.json(loghandler.invalidlink);
  let hasil = `https://some-random-api.ml/canvas/invert?avatar=${url}`
  data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/invert.png', data)
        res.sendFile(__path+'/tmp/invert.png')
});
router.get('/imgedit/brightness', async(req, res, next) => {
  const url = req.query.url
  const apikey = req.query.apikey;
        if (apikey === undefined) return res.status(404).send({
            status: 404,
            message: `Input Parameter apikey`
        });
        let limit = await isLimit(apikey);
        if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
        const check = await cekKey(apikey);
        if (!check) return res.status(403).send({
          status: 403,
          message: `apikey ${apikey} not found, please register first!`
      });
      limitAdd(apikey);
  if (!url) return res.json(loghandler.invalidlink);
  let hasil = `https://some-random-api.ml/canvas/brightness?avatar=${url}`
  data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/cerah.png', data)
        res.sendFile(__path+'/tmp/cerah.png')
});
router.get('/imgedit/sepia', async(req, res, next) => {
 const url = req.query.url
  const apikey = req.query.apikey;
        if (apikey === undefined) return res.status(404).send({
            status: 404,
            message: `Input Parameter apikey`
        });
        let limit = await isLimit(apikey);
        if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
        const check = await cekKey(apikey);
        if (!check) return res.status(403).send({
          status: 403,
          message: `apikey ${apikey} not found, please register first!`
      });
      limitAdd(apikey);
  if (!url) return res.json(loghandler.invalidlink);
  let hasil = `https://some-random-api.ml/canvas/sepia?avatar=${url}`
  data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/sepia.png', data)
        res.sendFile(__path+'/tmp/sepia.png')
  
});
router.get('/imgedit/enhance', async (req, res) => {
    var img = req.query.img;
     const apikey = req.query.apikey;
        if (apikey === undefined) return res.status(404).send({
            status: 404,
            message: `Input Parameter apikey`
        });
        let limit = await isLimit(apikey);
        if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
        const check = await cekKey(apikey);
        if (!check) return res.status(403).send({
          status: 403,
          message: `apikey ${apikey} not found, please register first!`
      });
      limitAdd(apikey);
  if (!img) return res.json(loghandler.notimg)
  if (!img.startsWith('http')) return res.json(loghandler.invalidLink)
try {
     var media = await getBuffer(img)
     var body = new FormData
         body.append('image', media, 'image')
         var ress = await fetch('http://max-image-resolution-enhancer.codait-prod-41208c73af8fca213512856c7a09db52-0000.us-east.containers.appdomain.cloud/model/predict', {
            method: 'POST',
            body
            })
  if (ress.status !== 200) return await res.json(ress)
    await fs.writeFileSync(__path + '/tmp/hd.png', await ress.buffer())

    res.sendFile(__path + '/tmp/hd.png')
   } catch (e) {
	 console.log(e)
    res.sendFile(error)
  }
});
router.get('/tiktokdl', async(req, res, next) => {
  const url = req.query.url
  const apikey = req.query.apikey;
        if (apikey === undefined) return res.status(404).send({
            status: 404,
            message: `Input Parameter apikey`
        });
        let limit = await isLimit(apikey);
        if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
        const check = await cekKey(apikey);
        if (!check) return res.status(403).send({
          status: 403,
          message: `apikey ${apikey} not found, please register first!`
      });
      limitAdd(apikey);
  if (!url) return res.json(loghandler.invalidlink);
  Tiktok(url)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send(err);
    });
});
router.get('/cewe/thailand', async (req, res, next) => {
apikey = req.query.apikey;
          if (apikey === undefined) return res.status(404).send({
              status: 404,
              message: `Input Parameter apikey`
          });
          let limit = await isLimit(apikey);
          if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
          limitAdd(apikey);
          const check = await cekKey(apikey);
          if (!check) return res.status(403).send({
            status: 403,
            message: `apikey ${apikey} not found, please register first!`
        });
        
       fetch(encodeURI(`https://raw.githubusercontent.com/zeeoneofc/Asupan/main/cecan/thailand.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
});

});
router.get('/cewe/korea', async (req, res, next) => {
apikey = req.query.apikey;
          if (apikey === undefined) return res.status(404).send({
              status: 404,
              message: `Input Parameter apikey`
          });
          let limit = await isLimit(apikey);
          if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
          limitAdd(apikey);
          const check = await cekKey(apikey);
          if (!check) return res.status(403).send({
            status: 403,
            message: `apikey ${apikey} not found, please register first!`
        });
        
       fetch(encodeURI(`https://raw.githubusercontent.com/zeeoneofc/Asupan/main/cecan/korea.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
});

});
router.get('/cewe/indonesia', async (req, res, next) => {
apikey = req.query.apikey;
          if (apikey === undefined) return res.status(404).send({
              status: 404,
              message: `Input Parameter apikey`
          });
          let limit = await isLimit(apikey);
          if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
          limitAdd(apikey);
          const check = await cekKey(apikey);
          if (!check) return res.status(403).send({
            status: 403,
            message: `apikey ${apikey} not found, please register first!`
        });
        
       fetch(encodeURI(`https://raw.githubusercontent.com/zeeoneofc/Asupan/main/cecan/indonesia.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
});

});
router.get('/cewe/malaysia', async (req, res, next) => {
apikey = req.query.apikey;
          if (apikey === undefined) return res.status(404).send({
              status: 404,
              message: `Input Parameter apikey`
          });
          let limit = await isLimit(apikey);
          if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
          limitAdd(apikey);
          const check = await cekKey(apikey);
          if (!check) return res.status(403).send({
            status: 403,
            message: `apikey ${apikey} not found, please register first!`
        });
        
       fetch(encodeURI(`https://raw.githubusercontent.com/zeeoneofc/Asupan/main/cecan/malaysia.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
});

});
router.get('/cewe/china', async (req, res, next) => {
apikey = req.query.apikey;
          if (apikey === undefined) return res.status(404).send({
              status: 404,
              message: `Input Parameter apikey`
          });
          let limit = await isLimit(apikey);
          if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
          limitAdd(apikey);
          const check = await cekKey(apikey);
          if (!check) return res.status(403).send({
            status: 403,
            message: `apikey ${apikey} not found, please register first!`
        });
        
       fetch(encodeURI(`https://raw.githubusercontent.com/zeeoneofc/Asupan/main/cecan/china.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
});

});

router.get('/cewe/japan', async (req, res, next) => {
apikey = req.query.apikey;
          if (apikey === undefined) return res.status(404).send({
              status: 404,
              message: `Input Parameter apikey`
          });
          let limit = await isLimit(apikey);
          if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
          limitAdd(apikey);
          const check = await cekKey(apikey);
          if (!check) return res.status(403).send({
            status: 403,
            message: `apikey ${apikey} not found, please register first!`
        });
        
       fetch(encodeURI(`https://raw.githubusercontent.com/zeeoneofc/Asupan/main/cecan/japan.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
});

});

router.get('/cewe/coli', async (req, res, next) => {
apikey = req.query.apikey;
          if (apikey === undefined) return res.status(404).send({
              status: 404,
              message: `Input Parameter apikey`
          });
          let limit = await isLimit(apikey);
          if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
          limitAdd(apikey);
          const check = await cekKey(apikey);
          if (!check) return res.status(403).send({
            status: 403,
            message: `apikey ${apikey} not found, please register first!`
        });
        
       fetch(encodeURI(`https://raw.githubusercontent.com/Lampung-keras/Test/main/cecan/coli.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
});

});

router.get('/cewe/malaysia', async (req, res, next) => {
apikey = req.query.apikey;
          if (apikey === undefined) return res.status(404).send({
              status: 404,
              message: `Input Parameter apikey`
          });
          let limit = await isLimit(apikey);
          if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
          limitAdd(apikey);
          const check = await cekKey(apikey);
          if (!check) return res.status(403).send({
            status: 403,
            message: `apikey ${apikey} not found, please register first!`
        });
        
       fetch(encodeURI(`https://raw.githubusercontent.com/zeeoneofc/Asupan/main/cecan/malaysia.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
});

});

router.get('/twitter', async(req, res, next) => {
const url = req.query.url
  const apikey = req.query.apikey;
        if (apikey === undefined) return res.status(404).send({
            status: 404,
            message: `Input Parameter apikey`
        });
        let limit = await isLimit(apikey);
        if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
        const check = await cekKey(apikey);
        if (!check) return res.status(403).send({
          status: 403,
          message: `apikey ${apikey} not found, please register first!`
      });
      limitAdd(apikey);
  if (!url) return res.json(loghandler.invalidlink);
twitterDown(url)
    .then(data => {
        var result = data;
             res.json({
           status : true,
                 creator : `${creator}`,    
                 result                              
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
});
});

router.get('/asupan/hots', async (req, res, next) => {
apikey = req.query.apikey;
          if (apikey === undefined) return res.status(404).send({
              status: 404,
              message: `Input Parameter apikey`
          });
          let limit = await isLimit(apikey);
          if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
          limitAdd(apikey);
          const check = await cekKey(apikey);
          if (!check) return res.status(403).send({
            status: 403,
            message: `apikey ${apikey} not found, please register first!`
        });
        
       fetch(encodeURI(`https://raw.githubusercontent.com/Lampung-keras/Test/main/asupan.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
});

});

router.get('/asupan/bocil', async (req, res, next) => {
apikey = req.query.apikey;
          if (apikey === undefined) return res.status(404).send({
              status: 404,
              message: `Input Parameter apikey`
          });
          let limit = await isLimit(apikey);
          if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
          limitAdd(apikey);
          const check = await cekKey(apikey);
          if (!check) return res.status(403).send({
            status: 403,
            message: `apikey ${apikey} not found, please register first!`
        });
        
       fetch(encodeURI(`https://raw.githubusercontent.com/FznXSec404/warga62/master/bocil.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
});

});

router.get('/asupan/ukhty', async (req, res, next) => {
apikey = req.query.apikey;
          if (apikey === undefined) return res.status(404).send({
              status: 404,
              message: `Input Parameter apikey`
          });
          let limit = await isLimit(apikey);
          if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
          limitAdd(apikey);
          const check = await cekKey(apikey);
          if (!check) return res.status(403).send({
            status: 403,
            message: `apikey ${apikey} not found, please register first!`
        });
        
       fetch(encodeURI(`https://raw.githubusercontent.com/FznXSec404/warga62/master/ukhty.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
});

});

router.get('/stalk/pinterest', async (req, res, next) => {
const username = req.query.username
          const apikey = req.query.apikey;
          if (apikey === undefined) return res.status(404).send({
              status: 404,
              message: `Input Parameter apikey`
          });
          let limit = await isLimit(apikey);
          if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
          const check = await cekKey(apikey);
          if (!check) return res.status(403).send({
            status: 403,
            message: `apikey ${apikey} not found, please register first!`
        });
        limitAdd(apikey);
          if(!username) return res.json(loghandler.username)
fetch(encodeURI(`https://api.pinterest.com/v3/pidgets/users/${username}/pins/`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
 				result: {
 					location: `${result.data.user.location}`,
 					about: `${result.data.user.about}`,
 					username: `${result.data.user.full_name}`,
 					image_url: `${result.data.user.image_small_url}`,
 					pin_count: `${result.data.user.pin_count}`,
 					follower_count: `${result.data.user.follower_count}`,
 					profile_url: `${result.data.user.profile_url}`
 				},
 				message: `${result.status}`,
 				endpoint: `${result.endpoint_name}`,
 				status: `${result.status}`,
 				maintanied_by: `${creator}`
 				     })
         })
         .catch(e => {
         	res.json(loghandler.error)
});
});

router.get('/asupan/tiktok', async (req, res, next) => {
apikey = req.query.apikey;
          if (apikey === undefined) return res.status(404).send({
              status: 404,
              message: `Input Parameter apikey`
          });
          let limit = await isLimit(apikey);
          if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
          limitAdd(apikey);
          const check = await cekKey(apikey);
          if (!check) return res.status(403).send({
            status: 403,
            message: `apikey ${apikey} not found, please register first!`
        });
        
       fetch(encodeURI(`https://raw.githubusercontent.com/Lampung-keras/Test/main/tiktok.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
});

});

router.get('/asupan/ukhty2', async (req, res, next) => {
apikey = req.query.apikey;
          if (apikey === undefined) return res.status(404).send({
              status: 404,
              message: `Input Parameter apikey`
          });
          let limit = await isLimit(apikey);
          if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
          limitAdd(apikey);
          const check = await cekKey(apikey);
          if (!check) return res.status(403).send({
            status: 403,
            message: `apikey ${apikey} not found, please register first!`
        });
        
       fetch(encodeURI(`https://leyscoders-api.herokuapp.com/api/ppcouple?apikey=dappakntlll`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
});

});

router.get('/asupan/geayubi', async (req, res, next) => {
apikey = req.query.apikey;
          if (apikey === undefined) return res.status(404).send({
              status: 404,
              message: `Input Parameter apikey`
          });
          let limit = await isLimit(apikey);
          if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
          limitAdd(apikey);
          const check = await cekKey(apikey);
          if (!check) return res.status(403).send({
            status: 403,
            message: `apikey ${apikey} not found, please register first!`
        });
        
       fetch(encodeURI(`https://raw.githubusercontent.com/FznXSec404/warga62/master/geayubi.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
});

});

router.get('/kuis/caklontong', async (req, res, next) => {
apikey = req.query.apikey;
          if (apikey === undefined) return res.status(404).send({
              status: 404,
              message: `Input Parameter apikey`
          });
          let limit = await isLimit(apikey);
          if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
          limitAdd(apikey);
          const check = await cekKey(apikey);
          if (!check) return res.status(403).send({
            status: 403,
            message: `apikey ${apikey} not found, please register first!`
        });                
	
       fetch(encodeURI(`https://docs-api-zahirrr.herokuapp.com/api/quote?type=caklontong`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})

})
router.get('/kuis/math', async (req, res, next) => {
apikey = req.query.apikey;
          if (apikey === undefined) return res.status(404).send({
              status: 404,
              message: `Input Parameter apikey`
          });
          let limit = await isLimit(apikey);
          if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
          limitAdd(apikey);
          const check = await cekKey(apikey);
          if (!check) return res.status(403).send({
            status: 403,
            message: `apikey ${apikey} not found, please register first!`
        });
        
    bu = await fetch('https://salism3api.pythonanywhere.com/math').then(v => v.json())
  res.json({ status: true, soal: bu.image, jawaban: bu.answer})
});

router.get('/kuis/tebakGambar', async (req, res, next) => {
 apikey = req.query.apikey;
          if (apikey === undefined) return res.status(404).send({
              status: 404,
              message: `Input Parameter apikey`
          });
          let limit = await isLimit(apikey);
          if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
          limitAdd(apikey);
          const check = await cekKey(apikey);
          if (!check) return res.status(403).send({
            status: 403,
            message: `apikey ${apikey} not found, please register first!`
        });
        
   let result = await tebakGambar()
  if (result) {
    const hasil = {
      status: true,
      code: 200,
      
      image: result.img,
      jawaban: result.jawaban,
      clue: result.petunjuk
    }
    res.json(hasil)
  } else {
    return res.status(408).json({
      status: res.statusCode,
      error: 'Emror'
    })
  }
});
router.get('/kuis/tebakbendera', async (req, res, next) => {
  apikey = req.query.apikey;
          if (apikey === undefined) return res.status(404).send({
              status: 404,
              message: `Input Parameter apikey`
          });
          let limit = await isLimit(apikey);
          if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
          limitAdd(apikey);
          const check = await cekKey(apikey);
          if (!check) return res.status(403).send({
            status: 403,
            message: `apikey ${apikey} not found, please register first!`
        });
        
  const flag = JSON.parse(fs.readFileSync(__path +'/data/tebakbendera.json'));
  const tod = flag[Math.floor(Math.random() * flag.length)];
  var result = tod.result;
             res.json(result)
});
router.get('/kuis/tebaklirik', async (req, res, next) => {
 apikey = req.query.apikey;
          if (apikey === undefined) return res.status(404).send({
              status: 404,
              message: `Input Parameter apikey`
          });
          let limit = await isLimit(apikey);
          if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
          limitAdd(apikey);
          const check = await cekKey(apikey);
          if (!check) return res.status(403).send({
            status: 403,
            message: `apikey ${apikey} not found, please register first!`
        });
        
   const flag = JSON.parse(fs.readFileSync(__path +'/data/tebaklirik.json'));
  const tod = flag[Math.floor(Math.random() * flag.length)];
  var result = tod.result;
             res.json(result)
});
router.get('/kuis/tebakchara', async (req, res, next) => {
 apikey = req.query.apikey;
          if (apikey === undefined) return res.status(404).send({
              status: 404,
              message: `Input Parameter apikey`
          });
          let limit = await isLimit(apikey);
          if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
          limitAdd(apikey);
          const check = await cekKey(apikey);
          if (!check) return res.status(403).send({
            status: 403,
            message: `apikey ${apikey} not found, please register first!`
        });
        
   const flag = JSON.parse(fs.readFileSync(__path +'/data/tebakchara.json'));
  const tod = flag[Math.floor(Math.random() * flag.length)];
  var result = tod.result;
             res.json(result)
});
router.get('/kuis/tebakkimia', async (req, res, next) => {
  apikey = req.query.apikey;
          if (apikey === undefined) return res.status(404).send({
              status: 404,
              message: `Input Parameter apikey`
          });
          let limit = await isLimit(apikey);
          if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
          limitAdd(apikey);
          const check = await cekKey(apikey);
          if (!check) return res.status(403).send({
            status: 403,
            message: `apikey ${apikey} not found, please register first!`
        });
        
  const flag = JSON.parse(fs.readFileSync(__path +'/data/tebakkimia.json'));
  const tod = flag[Math.floor(Math.random() * flag.length)];
  var result = tod.result;
             res.json(result)
});
router.get('/kuis/tebakjenaka', async (req, res, next) => {
 apikey = req.query.apikey;
          if (apikey === undefined) return res.status(404).send({
              status: 404,
              message: `Input Parameter apikey`
          });
          let limit = await isLimit(apikey);
          if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
          limitAdd(apikey);
          const check = await cekKey(apikey);
          if (!check) return res.status(403).send({
            status: 403,
            message: `apikey ${apikey} not found, please register first!`
        });
        
   const flag = JSON.parse(fs.readFileSync(__path +'/data/tebakjenaka.json'));
  const tod = flag[Math.floor(Math.random() * flag.length)];
  var result = tod.result;
             res.json(result)
});
router.get('/kuis/family100', async (req, res, next) => {
   apikey = req.query.apikey;
          if (apikey === undefined) return res.status(404).send({
              status: 404,
              message: `Input Parameter apikey`
          });
          let limit = await isLimit(apikey);
          if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
          limitAdd(apikey);
          const check = await cekKey(apikey);
          if (!check) return res.status(403).send({
            status: 403,
            message: `apikey ${apikey} not found, please register first!`
        });
        
  const f = JSON.parse(fs.readFileSync(__path +'/data/family100.json'));
  const tod = f[Math.floor(Math.random() * f.lenght)];
  var result = tod.result;
             res.json(result)

});

router.get('/search/image', async(req, res, next) => {
const query = req.query.query
    const apikey = req.query.apikey;
    if (apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter apikey`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
      status: 403,
      message: `apikey ${apikey} not found, please register first!`
  });
  limitAdd(apikey);
    if(!query) return res.json(loghandler.query)
  
  
    try {
        var options = {
            url: `http://results.dogpile.com/serp?qc=images&q=${query}`,
            method: "GET",
            headers: {
                "Accept": "text/html",
                "User-Agent": "Chrome"
            }
        }
        request(options, function(error, response, responseBody) {
            if (error) return

            $ = cheerio.load(responseBody)
            var links = $(".image a.link")
            var cari = new Array(links.length).fill(0).map((v, i) => links.eq(i).attr("href"))
            if (!cari.length) return
            var hasil = cari[Math.floor(Math.random() * cari.length)]
        res.json({
              status: true,
              code: 200,
              
              result: hasil
            })
        })
    } catch (e) {}
  
});
router.get('/search/gsmarena', async (req, res, next) => {
const query = req.query.query
    const apikey = req.query.apikey;
    if (apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter apikey`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
      status: 403,
      message: `apikey ${apikey} not found, please register first!`
  });
  limitAdd(apikey);
    if(!query) return res.json(loghandler.query)
     GSMArena(query)
     .then((data) => {
     var result = data.result;
       res.json(result)
     })
    
})

router.get('/search/pinterest', async (req, res, next) => {
const query = req.query.query
    const apikey = req.query.apikey;
    if (apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter apikey`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
      status: 403,
      message: `apikey ${apikey} not found, please register first!`
  });
  limitAdd(apikey);
    if(!query) return res.json(loghandler.query)
     pinterest(query)
     .then((data) => {
     var result = data.result;
       res.json(result)
     });
    
});

router.get('/search/shopee', async (req, res, next) => {
    const query = req.query.query
    const apikey = req.query.apikey;
    if (apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter apikey`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
      status: 403,
      message: `apikey ${apikey} not found, please register first!`
  });
  limitAdd(apikey);
    if(!query) return res.json(loghandler.query)       
     Shoope(query, 50)
     .then((data) => {
       res.json(data)
     });
    
});
router.get('/wallpaper/cyberspace', async (req, res, next) => {
apikey = req.query.apikey;
          if (apikey === undefined) return res.status(404).send({
              status: 404,
              message: `Input Parameter apikey`
          });
          let limit = await isLimit(apikey);
          if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
          limitAdd(apikey);
          const check = await cekKey(apikey);
          if (!check) return res.status(403).send({
            status: 403,
            message: `apikey ${apikey} not found, please register first!`
        });
        
    Cc = JSON.parse(fs.readFileSync(__path +'/data/CyberSpace.json'));
  const randCc = Cc[Math.floor(Math.random() * Cc.length)]
  data = await fetch(randCc).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/CyberSpace.jpeg', data)
  res.sendFile(__path +'/tmp/CyberSpace.jpeg')

});


router.get('/wallpaper/teknologi', async (req, res, next) => {
        apikey = req.query.apikey;
          if (apikey === undefined) return res.status(404).send({
              status: 404,
              message: `Input Parameter apikey`
          });
          let limit = await isLimit(apikey);
          if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
          limitAdd(apikey);
          const check = await cekKey(apikey);
          if (!check) return res.status(403).send({
            status: 403,
            message: `apikey ${apikey} not found, please register first!`
        });
       
const Techno = JSON.parse(fs.readFileSync(__path +'/data/Technology.json'))
const randTech = Techno[Math.floor(Math.random() * Techno.length)]
data = await fetch(randTech).then(v => v.buffer())
await fs.writeFileSync(__path +'/tmp/techno.jpeg', data)
res.sendFile(__path +'/tmp/techno.jpeg')

});


router.get('/wallpaper/muslim', async (req, res, next) => {
  apikey = req.query.apikey;
          if (apikey === undefined) return res.status(404).send({
              status: 404,
              message: `Input Parameter apikey`
          });
          let limit = await isLimit(apikey);
          if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
          limitAdd(apikey);
          const check = await cekKey(apikey);
          if (!check) return res.status(403).send({
            status: 403,
            message: `apikey ${apikey} not found, please register first!`
        });
        
  const Muslim = JSON.parse(fs.readFileSync(__path +'/data/Islamic.json'));
  const randMuslim = Muslim[Math.floor(Math.random() * Muslim.length)];
  data = await fetch(randMuslim).then(v => v.buffer());
  await fs.writeFileSync(__path +'/tmp/muslim.jpeg', data)
  res.sendFile(__path +'/tmp/muslim.jpeg');

});


router.get('/wallpaper/programming', async (req, res, next) => {
  apikey = req.query.apikey;
          if (apikey === undefined) return res.status(404).send({
              status: 404,
              message: `Input Parameter apikey`
          });
          let limit = await isLimit(apikey);
          if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
          limitAdd(apikey);
          const check = await cekKey(apikey);
          if (!check) return res.status(403).send({
            status: 403,
            message: `apikey ${apikey} not found, please register first!`
        });
        
  const Progam = JSON.parse(fs.readFileSync(__path +'/data/Programming.json'));
  const randProgam = Progam[Math.floor(Math.random() * Progam.length)];
  data = await fetch(randProgam).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/Programming.jpeg', data)
  res.sendFile(__path +'/tmp/Programming.jpeg')

});


router.get('/wallpaper/pegunungan', async (req, res, next) => {
apikey = req.query.apikey;
          if (apikey === undefined) return res.status(404).send({
              status: 404,
              message: `Input Parameter apikey`
          });
          let limit = await isLimit(apikey);
          if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
          limitAdd(apikey);
          const check = await cekKey(apikey);
          if (!check) return res.status(403).send({
            status: 403,
            message: `apikey ${apikey} not found, please register first!`
        });
        
    const Mount = JSON.parse(fs.readFileSync(__path +'/data/Mountain.json'));
  const randMount = Mount[Math.floor(Math.random() * Mount.length)];
  data = await fetch(randMount).then(v => v.buffer());
  await fs.writeFileSync(__path +'/tmp/Mountain.jpeg', data)
  res.sendFile(__path+ '/tmp/Mountain.jpeg');

});
router.get('/nsfw/ahegao', async (req, res, next) => {
     apikey = req.query.apikey;
          if (apikey === undefined) return res.status(404).send({
              status: 404,
              message: `Input Parameter apikey`
          });
          let limit = await isLimit(apikey);
          if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
          limitAdd(apikey);
          const check = await cekKey(apikey);
          if (!check) return res.status(403).send({
            status: 403,
            message: `apikey ${apikey} not found, please register first!`
        });
        
         fetch(encodeURI(`https://raw.githubusercontent.com/jepribarus/JB-Api/main/nsfw/ahegao.json`))
        .then(response => response.json())
        .then(async data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
               result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
});

});
router.get('/nsfw/bdsm', async (req, res, next) => {
      apikey = req.query.apikey;
          if (apikey === undefined) return res.status(404).send({
              status: 404,
              message: `Input Parameter apikey`
          });
          let limit = await isLimit(apikey);
          if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
          limitAdd(apikey);
          const check = await cekKey(apikey);
          if (!check) return res.status(403).send({
            status: 403,
            message: `apikey ${apikey} not found, please register first!`
        });
        
        fetch(encodeURI(`https://raw.githubusercontent.com/jepribarus/JB-Api/main/nsfw/bdsm.json`))
        .then(response => response.json())
        .then(async data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
               result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
});

});
router.get('/nsfw/blowjob', async (req, res, next) => {
       apikey = req.query.apikey;
          if (apikey === undefined) return res.status(404).send({
              status: 404,
              message: `Input Parameter apikey`
          });
          let limit = await isLimit(apikey);
          if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
          limitAdd(apikey);
          const check = await cekKey(apikey);
          if (!check) return res.status(403).send({
            status: 403,
            message: `apikey ${apikey} not found, please register first!`
        });
        
       fetch(encodeURI(`https://raw.githubusercontent.com/jepribarus/JB-Api/main/nsfw/blowjob.json`))
        .then(response => response.json())
        .then(async data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
               result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
});

});
router.get('/nsfw/cuckold', async (req, res, next) => {
     apikey = req.query.apikey;
          if (apikey === undefined) return res.status(404).send({
              status: 404,
              message: `Input Parameter apikey`
          });
          let limit = await isLimit(apikey);
          if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
          limitAdd(apikey);
          const check = await cekKey(apikey);
          if (!check) return res.status(403).send({
            status: 403,
            message: `apikey ${apikey} not found, please register first!`
        });
        
         fetch(encodeURI(`https://raw.githubusercontent.com/jepribarus/JB-Api/main/nsfw/cuckold.json`))
        .then(response => response.json())
        .then(async data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
               result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
});

});
router.get('/nsfw/cum', async (req, res, next) => {
     apikey = req.query.apikey;
          if (apikey === undefined) return res.status(404).send({
              status: 404,
              message: `Input Parameter apikey`
          });
          let limit = await isLimit(apikey);
          if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
          limitAdd(apikey);
          const check = await cekKey(apikey);
          if (!check) return res.status(403).send({
            status: 403,
            message: `apikey ${apikey} not found, please register first!`
        });
        
         fetch(encodeURI(`https://raw.githubusercontent.com/jepribarus/JB-Api/main/nsfw/cum.json`))
        .then(response => response.json())
        .then(async data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
               result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
});

});
router.get('/nsfw/ero', async (req, res, next) => {
      apikey = req.query.apikey;
          if (apikey === undefined) return res.status(404).send({
              status: 404,
              message: `Input Parameter apikey`
          });
          let limit = await isLimit(apikey);
          if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
          limitAdd(apikey);
          const check = await cekKey(apikey);
          if (!check) return res.status(403).send({
            status: 403,
            message: `apikey ${apikey} not found, please register first!`
        });
        
        fetch(encodeURI(`https://raw.githubusercontent.com/jepribarus/JB-Api/main/nsfw/ero.json`))
        .then(response => response.json())
        .then(async data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
               result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
});

});
router.get('/nsfw/femdom', async (req, res, next) => {
      apikey = req.query.apikey;
          if (apikey === undefined) return res.status(404).send({
              status: 404,
              message: `Input Parameter apikey`
          });
          let limit = await isLimit(apikey);
          if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
          limitAdd(apikey);
          const check = await cekKey(apikey);
          if (!check) return res.status(403).send({
            status: 403,
            message: `apikey ${apikey} not found, please register first!`
        });
        
        fetch(encodeURI(`https://raw.githubusercontent.com/jepribarus/JB-Api/main/nsfw/femdom.json`))
        .then(response => response.json())
        .then(async data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
               result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
});

});
router.get('/nsfw/foot', async (req, res, next) => {
       fetch(encodeURI(`https://raw.githubusercontent.com/jepribarus/JB-Api/main/nsfw/foot.json`))
        .then(response => response.json())
        .then(async data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
               result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
});

});
router.get('/nsfw/gangbang', async (req, res, next) => {
      apikey = req.query.apikey;
          if (apikey === undefined) return res.status(404).send({
              status: 404,
              message: `Input Parameter apikey`
          });
          let limit = await isLimit(apikey);
          if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
          limitAdd(apikey);
          const check = await cekKey(apikey);
          if (!check) return res.status(403).send({
            status: 403,
            message: `apikey ${apikey} not found, please register first!`
        });
        
        fetch(encodeURI(`https://raw.githubusercontent.com/jepribarus/JB-Api/main/nsfw/gangbang.json`))
        .then(response => response.json())
        .then(async data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
               result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
});

});
router.get('/nsfw/glasses', async (req, res, next) => {
       apikey = req.query.apikey;
          if (apikey === undefined) return res.status(404).send({
              status: 404,
              message: `Input Parameter apikey`
          });
          let limit = await isLimit(apikey);
          if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
          limitAdd(apikey);
          const check = await cekKey(apikey);
          if (!check) return res.status(403).send({
            status: 403,
            message: `apikey ${apikey} not found, please register first!`
        });
        
       fetch(encodeURI(`https://raw.githubusercontent.com/jepribarus/JB-Api/main/nsfw/glasses.json`))
        .then(response => response.json())
        .then(async data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
               result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
});

});
router.get('/nsfw/hentai', async (req, res, next) => {
     apikey = req.query.apikey;
          if (apikey === undefined) return res.status(404).send({
              status: 404,
              message: `Input Parameter apikey`
          });
          let limit = await isLimit(apikey);
          if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
          limitAdd(apikey);
          const check = await cekKey(apikey);
          if (!check) return res.status(403).send({
            status: 403,
            message: `apikey ${apikey} not found, please register first!`
        });
        
         fetch(encodeURI(`https://raw.githubusercontent.com/jepribarus/JB-Api/main/nsfw/hentai.json`))
        .then(response => response.json())
        .then(async data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
               result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
});

});
router.get('/nsfw/hentaigif', async (req, res, next) => {
      apikey = req.query.apikey;
          if (apikey === undefined) return res.status(404).send({
              status: 404,
              message: `Input Parameter apikey`
          });
          let limit = await isLimit(apikey);
          if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
          limitAdd(apikey);
          const check = await cekKey(apikey);
          if (!check) return res.status(403).send({
            status: 403,
            message: `apikey ${apikey} not found, please register first!`
        });
        
        fetch(encodeURI(`https://raw.githubusercontent.com/jepribarus/JB-Api/main/nsfw/hnt_gifs.json`))
        .then(response => response.json())
        .then(async data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
               result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
});

});
router.get('/nsfw/jahy', async (req, res, next) => {
       apikey = req.query.apikey;
          if (apikey === undefined) return res.status(404).send({
              status: 404,
              message: `Input Parameter apikey`
          });
          let limit = await isLimit(apikey);
          if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
          limitAdd(apikey);
          const check = await cekKey(apikey);
          if (!check) return res.status(403).send({
            status: 403,
            message: `apikey ${apikey} not found, please register first!`
        });
        
       fetch(encodeURI(`https://raw.githubusercontent.com/jepribarus/JB-Api/main/nsfw/jahy.json`))
        .then(response => response.json())
        .then(async data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
               result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
});

});
router.get('/nsfw/masturbation', async (req, res, next) => {
       apikey = req.query.apikey;
          if (apikey === undefined) return res.status(404).send({
              status: 404,
              message: `Input Parameter apikey`
          });
          let limit = await isLimit(apikey);
          if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
          limitAdd(apikey);
          const check = await cekKey(apikey);
          if (!check) return res.status(403).send({
            status: 403,
            message: `apikey ${apikey} not found, please register first!`
        });
        
       fetch(encodeURI(`https://raw.githubusercontent.com/jepribarus/JB-Api/main/nsfw/masturbation.json`))
        .then(response => response.json())
        .then(async data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
               result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
});

});
router.get('/nsfw/nsfwNeko', async (req, res, next) => {
      apikey = req.query.apikey;
          if (apikey === undefined) return res.status(404).send({
              status: 404,
              message: `Input Parameter apikey`
          });
          let limit = await isLimit(apikey);
          if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
          limitAdd(apikey);
          const check = await cekKey(apikey);
          if (!check) return res.status(403).send({
            status: 403,
            message: `apikey ${apikey} not found, please register first!`
        });
        
        fetch(encodeURI(`https://raw.githubusercontent.com/jepribarus/JB-Api/main/nsfw/nsfwNeko.json`))
        .then(response => response.json())
        .then(async data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
               result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
});

});
router.get('/nsfw/orgy', async (req, res, next) => {
       apikey = req.query.apikey;
          if (apikey === undefined) return res.status(404).send({
              status: 404,
              message: `Input Parameter apikey`
          });
          let limit = await isLimit(apikey);
          if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
          limitAdd(apikey);
          const check = await cekKey(apikey);
          if (!check) return res.status(403).send({
            status: 403,
            message: `apikey ${apikey} not found, please register first!`
        });
        
       fetch(encodeURI(`https://raw.githubusercontent.com/jepribarus/JB-Api/main/nsfw/orgy.json`))
        .then(response => response.json())
        .then(async data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
               result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
});

});
router.get('/nsfw/panties', async (req, res, next) => {
      apikey = req.query.apikey;
          if (apikey === undefined) return res.status(404).send({
              status: 404,
              message: `Input Parameter apikey`
          });
          let limit = await isLimit(apikey);
          if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
          limitAdd(apikey);
          const check = await cekKey(apikey);
          if (!check) return res.status(403).send({
            status: 403,
            message: `apikey ${apikey} not found, please register first!`
        });
        
        fetch(encodeURI(`https://raw.githubusercontent.com/jepribarus/JB-Api/main/nsfw/panties.json`))
        .then(response => response.json())
        .then(async data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
               result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
});

});
router.get('/nsfw/pussy', async (req, res, next) => {
     apikey = req.query.apikey;
          if (apikey === undefined) return res.status(404).send({
              status: 404,
              message: `Input Parameter apikey`
          });
          let limit = await isLimit(apikey);
          if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
          limitAdd(apikey);
          const check = await cekKey(apikey);
          if (!check) return res.status(403).send({
            status: 403,
            message: `apikey ${apikey} not found, please register first!`
        });
        
         fetch(encodeURI(`https://raw.githubusercontent.com/jepribarus/JB-Api/main/nsfw/pussy.json`))
        .then(response => response.json())
        .then(async data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
               result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
});

});
router.get('/nsfw/thighs', async (req, res, next) => {
     apikey = req.query.apikey;
          if (apikey === undefined) return res.status(404).send({
              status: 404,
              message: `Input Parameter apikey`
          });
          let limit = await isLimit(apikey);
          if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
          limitAdd(apikey);
          const check = await cekKey(apikey);
          if (!check) return res.status(403).send({
            status: 403,
            message: `apikey ${apikey} not found, please register first!`
        });
        
         fetch(encodeURI(`https://raw.githubusercontent.com/jepribarus/JB-Api/main/nsfw/thighs.json`))
        .then(response => response.json())
        .then(async data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
               result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
});

});
router.get('/nsfw/yuri', async (req, res, next) => {
      apikey = req.query.apikey;
          if (apikey === undefined) return res.status(404).send({
              status: 404,
              message: `Input Parameter apikey`
          });
          let limit = await isLimit(apikey);
          if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
          limitAdd(apikey);
          const check = await cekKey(apikey);
          if (!check) return res.status(403).send({
            status: 403,
            message: `apikey ${apikey} not found, please register first!`
        });
        
        fetch(encodeURI(`https://raw.githubusercontent.com/jepribarus/JB-Api/main/nsfw/yuri.json`))
        .then(response => response.json())
        .then(async data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
               result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
});

});
router.get('/asupan/cecan', async (req, res, next) => {
apikey = req.query.apikey;
          if (apikey === undefined) return res.status(404).send({
              status: 404,
              message: `Input Parameter apikey`
          });
          let limit = await isLimit(apikey);
          if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
          limitAdd(apikey);
          const check = await cekKey(apikey);
          if (!check) return res.status(403).send({
            status: 403,
            message: `apikey ${apikey} not found, please register first!`
        });
        
       fetch(encodeURI(`https://raw.githubusercontent.com/FznXSec404/warga62/master/cecan.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
});

});

router.get('/asupan/hijab', async (req, res, next) => {
apikey = req.query.apikey;
          if (apikey === undefined) return res.status(404).send({
              status: 404,
              message: `Input Parameter apikey`
          });
          let limit = await isLimit(apikey);
          if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
          limitAdd(apikey);
          const check = await cekKey(apikey);
          if (!check) return res.status(403).send({
            status: 403,
            message: `apikey ${apikey} not found, please register first!`
        });
        
       fetch(encodeURI(`https://raw.githubusercontent.com/FznXSec404/warga62/master/hijaber.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
});

});

router.get('/asupan/ghea', async (req, res, next) => {
apikey = req.query.apikey;
          if (apikey === undefined) return res.status(404).send({
              status: 404,
              message: `Input Parameter apikey`
          });
          let limit = await isLimit(apikey);
          if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
          limitAdd(apikey);
          const check = await cekKey(apikey);
          if (!check) return res.status(403).send({
            status: 403,
            message: `apikey ${apikey} not found, please register first!`
        });
        
       fetch(encodeURI(`https://raw.githubusercontent.com/binjaicity/warga62/master/geayubi.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
});

});

router.get('/asupan/rikagusriani', async (req, res, next) => {
apikey = req.query.apikey;
          if (apikey === undefined) return res.status(404).send({
              status: 404,
              message: `Input Parameter apikey`
          });
          let limit = await isLimit(apikey);
          if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
          limitAdd(apikey);
          const check = await cekKey(apikey);
          if (!check) return res.status(403).send({
            status: 403,
            message: `apikey ${apikey} not found, please register first!`
        });
        
       fetch(encodeURI(`https://raw.githubusercontent.com/binjaicity/warga62/master/asupan/rikagusriani.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
});

});

router.get('/igstalkk', async(req, res, next) => {
          const username = req.query.username
          const apikey = req.query.apikey;
          if (apikey === undefined) return res.status(404).send({
              status: 404,
              message: `Input Parameter apikey`
          });
          let limit = await isLimit(apikey);
          if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
          const check = await cekKey(apikey);
          if (!check) return res.status(403).send({
            status: 403,
            message: `apikey ${apikey} not found, please register first!`
        });
        limitAdd(apikey);
          if(!username) return res.json(loghandler.username)
          fetch(encodeURI(`https://hardianto-chan.herokuapp.com/api//igstalk?username=${username}&apikey=hardianto`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
});
});

router.get('/snaptik', async(req, res, next) => {
const url = req.query.url
  const apikey = req.query.apikey;
        if (apikey === undefined) return res.status(404).send({
            status: 404,
            message: `Input Parameter apikey`
        });
        let limit = await isLimit(apikey);
        if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
        const check = await cekKey(apikey);
        if (!check) return res.status(403).send({
          status: 403,
          message: `apikey ${apikey} not found, please register first!`
      });
      limitAdd(apikey);
  if (!url) return res.json(loghandler.invalidlink);
fetch(encodeURI(`https://api.dapuhy.ga/api/socialmedia/nguteksnaptik?url=${url}&apikey=i`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({             
             status : true,
                 creator : `${creator}`,
                 result      
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
});
});
  router.get('/ytsearch', async(req, res, next) => {
    const query = req.query.query
    const apikey = req.query.apikey;
    if (apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter apikey`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
      status: 403,
      message: `apikey ${apikey} not found, please register first!`
  });
  limitAdd(apikey);
    if(!query) return res.json(loghandler.query)
    ySearch(query)
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.send(err);
        });
});
      router.get('/textpro/graffiti', async(req, res, next) => {
      const apikey = req.query.apikey;
 if (apikey === undefined) return res.status(404).send({
     status: 404,
     message: `Input Parameter apikey`
 });
 limitAdd(apikey);
 const check = await cekKey(apikey);
 if (!check) return res.status(403).send({
  status: 403,
  message: `apikey ${apikey} not found, please register first!`
});
  let limit = await isLimit(apikey);
  if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
        const text = req.query.text;
        const text2 = req.query.text2;
        if(!text) return res.json(loghandler.nottext)
        if(!text2) return res.json(loghandler.nottext2)
        {
          zrapi 
        .textpro("https://textpro.me/create-cool-wall-graffiti-text-effect-online-1009.html", [
          text, text2
        ])
        .then((data) => {
          var urlnya = data
          download(urlnya, './tmp/pubg.jpg', function(){
            res.sendFile(path.resolve('./tmp/pubg.jpg'))
        })
        })
          }
        })
        router.get('/ig/stalk', async(req, res, next) => {
          const username = req.query.username
          const apikey = req.query.apikey;
          if (apikey === undefined) return res.status(404).send({
              status: 404,
              message: `Input Parameter apikey`
          });
          let limit = await isLimit(apikey);
          if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
          const check = await cekKey(apikey);
          if (!check) return res.status(403).send({
            status: 403,
            message: `apikey ${apikey} not found, please register first!`
        });
        limitAdd(apikey);
          if(!username) return res.json(loghandler.username)
          igStalk(username)
              .then((data) => {
                  res.send(data);
              })
              .catch((err) => {
                  res.send(err);
              });
      });
       router.get('/tiktok/stalk', async(req, res, next) => {
          const username = req.query.username
          const apikey = req.query.apikey;
          if (apikey === undefined) return res.status(404).send({
              status: 404,
              message: `Input Parameter apikey`
          });
          let limit = await isLimit(apikey);
          if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
          const check = await cekKey(apikey);
          if (!check) return res.status(403).send({
            status: 403,
            message: `apikey ${apikey} not found, please register first!`
        });
        limitAdd(apikey);
          if(!username) return res.json(loghandler.username)
TikTokScraper.getUserProfileInfo(username)
        .then(user => {
            res.json({
                status : true,
                creator : `${creator}`,
                result : user
            })
        })
        .catch(e => {
             res.json({
                 status : false,
                 creator : `${creator}`,
                 message : "error, mungkin username anda tidak valid"
             });
         });
   
});
      router.get('/ig/dl', async(req, res, next) => {
        const url = req.query.url
        const apikey = req.query.apikey;
        if (apikey === undefined) return res.status(404).send({
            status: 404,
            message: `Input Parameter apikey`
        });
        let limit = await isLimit(apikey);
        if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
        const check = await cekKey(apikey);
        if (!check) return res.status(403).send({
          status: 403,
          message: `apikey ${apikey} not found, please register first!`
      });
      limitAdd(apikey);
        if(!url) return res.json(loghandler.invalidlink)
        igDownload(url)
            .then((data) => {
                res.send(data);
            })
            .catch((err) => {
                res.send(err);
            });
    });

    router.get('/whois', async(req, res, next) => {
      const domain = req.query.domain
      const apikey = req.query.apikey;
      if (apikey === undefined) return res.status(404).send({
          status: 404,
          message: `Input Parameter apikey`
      });
      let limit = await isLimit(apikey);
      if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
      const check = await cekKey(apikey);
      if (!check) return res.status(403).send({
        status: 403,
        message: `apikey ${apikey} not found, please register first!`
    });
    limitAdd(apikey);
      if(!domain) return res.json(loghandler.domain)
      whois(domain)
          .then((data) => {
              res.send(data);
          })
          .catch((err) => {
              res.send(err);
          });
  });

    router.get('/generatepw', async(req, res, next) => {
      const apikey = req.query.apikey;
      if (apikey === undefined) return res.status(404).send({
          status: 404,
          message: `Input Parameter apikey`
      });
      let limit = await isLimit(apikey);
      if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
      const check = await cekKey(apikey);
      if (!check) return res.status(403).send({
        status: 403,
        message: `apikey ${apikey} not found, please register first!`
    });
    limitAdd(apikey);
    genPassword()
          .then((data) => {
              res.send(data);
          })
          .catch((err) => {
              res.send(err);
          });
  });

 router.get('/artinama11', async(req, res, next) => {
 const apikey = req.query.apikey;
 if (apikey === undefined) return res.status(404).send({
     status: 404,
     message: `Input Parameter apikey`
 });
 limitAdd(apikey);
 const check = await cekKey(apikey);
 if (!check) return res.status(403).send({
  status: 403,
  message: `apikey ${apikey} not found, please register first!`
});
  let limit = await isLimit(apikey);
  if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
  const nama = req.query.nama;
  if(!nama) return res.json(loghandler.noname)
  artiNama(nama)
      .then((data) => {
          res.send(data);
      })
      .catch((error) => {
          res.send(error);
      });
});
router.get('/artinama', async (req, res, next) => {
          nama = req.query.nama
          apikey = req.query.apikey;
          if (apikey === undefined) return res.status(404).send({
              status: 404,
              message: `Input Parameter apikey`
          });
          let limit = await isLimit(apikey);
          if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
          limitAdd(apikey);
          const check = await cekKey(apikey);
          if (!check) return res.status(403).send({
            status: 403,
            message: `apikey ${apikey} not found, please register first!`
        });
        if (!nama) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter nama"})
        fetch(encodeURI(`https://ariarestapii.herokuapp.com/api/artinama11?nama=${nama}&apikey=aria`))
        .then(response => response.json())
        .then(data => {
        var result = data;
           res.json({
               status: 200,
               data
           })
        })
        .catch(e => {
         res.json(loghandler.error)
        })
        })
         router.get('/artimimpi', async (req, res, next) => {
          mimpi = req.query.mimpi
          apikey = req.query.apikey;
          if (apikey === undefined) return res.status(404).send({
              status: 404,
              message: `Input Parameter apikey`
          });
          let limit = await isLimit(apikey);
          if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
          limitAdd(apikey);
          const check = await cekKey(apikey);
          if (!check) return res.status(403).send({
            status: 403,
            message: `apikey ${apikey} not found, please register first!`
        });
        if (!mimpi) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter mimpi"})
        fetch(encodeURI(`https://ariarestapii.herokuapp.com/api/artimimpi11?mimpi=${mimpi}&apikey=aria`))
        .then(response => response.json())
        .then(data => {
        var result = data;
           res.json({
               data
           })
        })
        .catch(e => {
         res.json(loghandler.error)
        })
        })
router.get('/artimimpi11', async(req, res, next) => {
  const apikey = req.query.apikey;
 if (apikey === undefined) return res.status(404).send({
     status: 404,
     message: `Input Parameter apikey`
 });
 let limit = await isLimit(apikey);
 if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
 limitAdd(apikey);
 const check = await cekKey(apikey);
 if (!check) return res.status(403).send({
   status: 403,
   message: `apikey ${apikey} not found, please register first!`
});
 const mimpi = req.query.mimpi;
 if(!mimpi) return res.json(loghandler.nomimpi)
 artiMimpi(mimpi)
     .then((data) => {
         res.send(data);
     })
     .catch((error) => {
         res.send(error);
     });
});
router.get('/nomorhoki111111111111111111111', async(req, res, next) => {
  const apikey = req.query.apikey;
 if (apikey === undefined) return res.status(404).send({
     status: 404,
     message: `Input Parameter apikey`
 });
 let limit = await isLimit(apikey);
 if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
 limitAdd(apikey);
 const check = await cekKey(apikey);
 if (!check) return res.status(403).send({
   status: 403,
   message: `apikey ${apikey} not found, please register first!`
});
 const nomor = req.query.nomor;
 if(!nomor) return res.json(loghandler.nomor)
 nomorHoki(nomor)
     .then((data) => {
         res.send(data);
     })
     .catch((error) => {
         res.send(error);
     });
});
router.get('/jodo1h', async(req, res, next) => {
  const apikey = req.query.apikey;
 if (apikey === undefined) return res.status(404).send({
     status: 404,
     message: `Input Parameter apikey`
 });
 limitAdd(apikey);
 const check = await cekKey(apikey);
 if (!check) return res.status(403).send({
  status: 403,
  message: `apikey ${apikey} not found, please register first!`
});
  let limit = await isLimit(apikey);
  if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
 const nama1 = req.query.nama1;
 const nama2 = req.query.nama2;
 if(!nama1) return res.json(loghandler.noname)
 if(!nama2) return res.json(loghandler.noname2)
 ramalJodoh(nama1, nama2)
     .then((data) => {
         res.send(data);
     })
     .catch((error) => {
         res.send(error);
     });
});
router.get('/aesthetic', async (req, res, next) => {
   const apikey = req.query.apikey;
 if (apikey === undefined) return res.status(404).send({
     status: 404,
     message: `Input Parameter apikey`
 });
 limitAdd(apikey);
 const check = await cekKey(apikey);
 if (!check) return res.status(403).send({
  status: 403,
  message: `apikey ${apikey} not found, please register first!`
});
  let limit = await isLimit(apikey);
  if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
    hem = ''
 link = 'https://source.unsplash.com/random'
         axios.get(link).then(async (result) => {
             hem = result.request.res.responseUrl
             baper = await fetch(hem).then(v => v.buffer())
             res.type('png')
             res.send(baper)
         })
  })
        router.get('/wanted', async (req, res, next) => {
        const apikey = req.query.apikey;
 if (apikey === undefined) return res.status(404).send({
     status: 404,
     message: `Input Parameter apikey`
 });
 limitAdd(apikey);
 const check = await cekKey(apikey);
 if (!check) return res.status(403).send({
  status: 403,
  message: `apikey ${apikey} not found, please register first!`
});
  let limit = await isLimit(apikey);
  if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
          mim = req.query
          if (!mim.url) return res.json({ status: 404, msg: 'Masukkan Param Url'})
          try {
            canva = await require('canvacord').Canvas.wanted(mim.url)
            res.type('png')
            res.send(canva)
            
          } catch {
            res.json({ status: 404, msg: 'Server Error, Please Report To wa.me/6281215199447'})
          }
        })
        router.get('/google', async (req, res, next) => {
        const apikey = req.query.apikey;
 if (apikey === undefined) return res.status(404).send({
     status: 404,
     message: `Input Parameter apikey`
 });
 limitAdd(apikey);
 const check = await cekKey(apikey);
 if (!check) return res.status(403).send({
  status: 403,
  message: `apikey ${apikey} not found, please register first!`
});
  let limit = await isLimit(apikey);
  if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
          yt = require('google-it')
        if (!req.query.q) return res.json({ status: false, msg: 'Masukkan Parameter q'})
        ser = await yt({ query: req.query.q})
        res.json({ status: 'success', result: ser})
        })
        router.get('/darkjokes', async (req, res, next) => {
        const apikey = req.query.apikey;
 if (apikey === undefined) return res.status(404).send({
     status: 404,
     message: `Input Parameter apikey`
 });
 limitAdd(apikey);
 const check = await cekKey(apikey);
 if (!check) return res.status(403).send({
  status: 403,
  message: `apikey ${apikey} not found, please register first!`
});
  let limit = await isLimit(apikey);
  if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
          bdyyyy = await fetch('https://raw.githubusercontent.com/Caliph71/txt/main/darkjokes.txt')
       bdy = await bdyyyy.text()
        splitnix = bdy.split('\n')
              
         randomnix = splitnix[Math.floor(Math.random() * splitnix.length)]
         re = await fetch(randomnix).then(v => v.buffer())
         res.type('jpg')
         res.send(re)
})
        router.get('/wasted', async (req, res, next) => {
        const apikey = req.query.apikey;
 if (apikey === undefined) return res.status(404).send({
     status: 404,
     message: `Input Parameter apikey`
 });
 limitAdd(apikey);
 const check = await cekKey(apikey);
 if (!check) return res.status(403).send({
  status: 403,
  message: `apikey ${apikey} not found, please register first!`
});
  let limit = await isLimit(apikey);
  if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
          mim = req.query
          if (!mim.url) return res.json({ status: 404, msg: 'Masukkan Param Url'})
          try {
            canva = await require('canvacord').Canvas.wasted(mim.url)
            res.type('png')
            res.send(canva)
            
          } catch {
            res.json({ status: 404, msg: 'Server Error, Please Report To wa.me/6281215199447'})
          }
        })
        router.get('/trigger', async (req, res, next) => {
          mim = req.query
        const apikey = req.query.apikey;
 if (apikey === undefined) return res.status(404).send({
     status: 404,
     message: `Input Parameter apikey`
 });
 limitAdd(apikey);
 const check = await cekKey(apikey);
 if (!check) return res.status(403).send({
  status: 403,
  message: `apikey ${apikey} not found, please register first!`
});
  let limit = await isLimit(apikey);
  if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
          if (!mim.url) return res.json({ status: 404, msg: 'Masukkan Param Url'})
          try {
            canva = await require('canvacord').Canvas.trigger(mim.url)
            res.type('gif')
            res.send(canva)
            
          } catch {
            res.json({ status: 404, msg: 'Server Error'})
          }  
        })
        router.get('/megumin', async (req, res, next) => { 
          apikey = req.query.apikey;
          if (apikey === undefined) return res.status(404).send({
              status: 404,
              message: `Input Parameter apikey`
          });
          let limit = await isLimit(apikey);
          if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
          limitAdd(apikey);
          const check = await cekKey(apikey);
          if (!check) return res.status(403).send({
            status: 403,
            message: `apikey ${apikey} not found, please register first!`
        });
          data = await fetchJson('https://api.waifu.pics/sfw/megumin')
          buff = await fetch(data.url).then(v => v.buffer())
          res.type('png')
          res.send(buff)
          })

          router.get('/husbu', async (req, res, next) => { 
            apikey = req.query.apikey;
            if (apikey === undefined) return res.status(404).send({
                status: 404,
                message: `Input Parameter apikey`
            });
            let limit = await isLimit(apikey);
            if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
            limitAdd(apikey);
            const check = await cekKey(apikey);
            if (!check) return res.status(403).send({
              status: 403,
              message: `apikey ${apikey} not found, please register first!`
          });
            data = await fetchJson('https://memekgede.herokuapp.com/api/husbuando')
            buff = await fetch(data.image).then(v => v.buffer())
            res.type('png')
            res.send(buff)
            })

            router.get('/waifu', async (req, res, next) => { 
              apikey = req.query.apikey;
              if (apikey === undefined) return res.status(404).send({
                  status: 404,
                  message: `Input Parameter apikey`
              });
              let limit = await isLimit(apikey);
              if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
              limitAdd(apikey);
              const check = await cekKey(apikey);
              if (!check) return res.status(403).send({
                status: 403,
                message: `apikey ${apikey} not found, please register first!`
            });
              data = await fetchJson('https://api.waifu.pics/sfw/waifu')
              buff = await fetch(data.url).then(v => v.buffer())
              res.type('png')
              res.send(buff)
              })

            router.get('/poke', async (req, res, next) => { 
              apikey = req.query.apikey;
              if (apikey === undefined) return res.status(404).send({
                  status: 404,
                  message: `Input Parameter apikey`
              });
              let limit = await isLimit(apikey);
              if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
              limitAdd(apikey);
              const check = await cekKey(apikey);
              if (!check) return res.status(403).send({
                status: 403,
                message: `apikey ${apikey} not found, please register first!`
            });
              data = await fetchJson('https://api.waifu.pics/sfw/poke')
              buff = await fetch(data.url).then(v => v.buffer())
              res.type('gif')
              res.send(buff)
              })
  

        router.get('/spamcall', async (req, res, next) => {
       no = req.query.no
          apikey = req.query.apikey;
          if (apikey === undefined) return res.status(404).send({
              status: 404,
              message: `Input Parameter apikey`
          });
          let limit = await isLimit(apikey);
          if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
          limitAdd(apikey);
          const check = await cekKey(apikey);
          if (!check) return res.status(403).send({
            status: 403,
            message: `apikey ${apikey} not found, please register first!`
        });
      if (!no) return res.json({ status : false, creator : `${creator}`, message : "masukin nomernya"})

       fetch(encodeURI(`https://mhankbarbar.herokuapp.com/api/spamcall?no=${no}`))
      .then(response => response.json())
    .then(data => {
    var result = data;
     res.json({
     author: 'IdoGanz',
        result
   })
   })
 })
        router.get('/stalker', async (req, res, next) => {
          username = req.query.username
          apikey = req.query.apikey;
          if (apikey === undefined) return res.status(404).send({
              status: 404,
              message: `Input Parameter apikey`
          });
          let limit = await isLimit(apikey);
          if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
          limitAdd(apikey);
          const check = await cekKey(apikey);
          if (!check) return res.status(403).send({
            status: 403,
            message: `apikey ${apikey} not found, please register first!`
        });
        if (!username) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter username"})
        
        fetch(encodeURI(`https://mhankbarbar.herokuapp.com/api/stalk?username=${username}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
           res.json({
             author: 'IdoGanz',
               result
           })
        })
        .catch(e => {
         res.json(loghandler.error)
        })
        })
          router.get('/quotes', async (req, res, next) => {
          apikey = req.query.apikey;
          if (apikey === undefined) return res.status(404).send({
              status: 404,
              message: `Input Parameter apikey`
          });
          let limit = await isLimit(apikey);
          if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
          limitAdd(apikey);
          const check = await cekKey(apikey);
          if (!check) return res.status(403).send({
            status: 403,
            message: `apikey ${apikey} not found, please register first!`
        });      
        fetch(encodeURI(`https://ariarestapii.herokuapp.com/api/quotes1?apikey=aria`))
        .then(response => response.json())
        .then(data => {
        var result = data;
           res.json({
             author: 'IdoGanz',
               result
           })
        })
        .catch(e => {
         res.json(loghandler.error)
        })
        })
        router.get('/cersex', async (req, res, next) => {
          apikey = req.query.apikey;
          if (apikey === undefined) return res.status(404).send({
              status: 404,
              message: `Input Parameter apikey`
          });
          let limit = await isLimit(apikey);
          if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
          limitAdd(apikey);
          const check = await cekKey(apikey);
          if (!check) return res.status(403).send({
            status: 403,
            message: `apikey ${apikey} not found, please register first!`
        });
        
        fetch(encodeURI(`https://memekgede.herokuapp.com/api/cersex`))
        .then(response => response.json())
        .then(data => {
        var result = data;
           res.json({
             author: 'IdoGanz',
             status: 200,
             result
           })
        })
        .catch(e => {
         res.json(loghandler.error)
        })
        })
        router.get('/samehadaku', async (req, res, next) => {
          q = req.query.q
          apikey = req.query.apikey;
          if (apikey === undefined) return res.status(404).send({
              status: 404,
              message: `Input Parameter apikey`
          });
          let limit = await isLimit(apikey);
          if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
          limitAdd(apikey);
          const check = await cekKey(apikey);
          if (!check) return res.status(403).send({
            status: 403,
            message: `apikey ${apikey} not found, please register first!`
        });
        if (!q) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter q"})
        
        fetch(encodeURI(`https://memekgede.herokuapp.com/api/samehadaku?q=${q}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
           res.json({
             author: 'IdoGanz',
             status: 200,
             result
           })
        })
        .catch(e => {
         res.json(loghandler.error)
        })
        })
        router.get('/kusonime', async (req, res, next) => {
          q = req.query.q
          apikey = req.query.apikey;
          if (apikey === undefined) return res.status(404).send({
              status: 404,
              message: `Input Parameter apikey`
          });
          let limit = await isLimit(apikey);
          if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
          limitAdd(apikey);
          const check = await cekKey(apikey);
          if (!check) return res.status(403).send({
            status: 403,
            message: `apikey ${apikey} not found, please register first!`
        });
        if (!q) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter q"})
        
        fetch(encodeURI(`https://memekgede.herokuapp.com/api/kuso?q=${q}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
           res.json({
             author: 'IdoGanz',
             status: 200,
             result
           })
        })
        .catch(e => {
         res.json(loghandler.error)
        })
        })
        router.get('/getsticker', async (req, res, next) => {
          q = req.query.q
          apikey = req.query.apikey;
          if (apikey === undefined) return res.status(404).send({
              status: 404,
              message: `Input Parameter apikey`
          });
          let limit = await isLimit(apikey);
          if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
          limitAdd(apikey);
          const check = await cekKey(apikey);
          if (!check) return res.status(403).send({
            status: 403,
            message: `apikey ${apikey} not found, please register first!`
        });
        if (!q) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter q"})
        
        fetch(encodeURI(`https://memekgede.herokuapp.com/api/getsticker?q=${q}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
           res.json({
             author: 'IdoGanz',
             status: 200,
             result
           })
        })
        .catch(e => {
         res.json(loghandler.error)
        })
        })
          router.get('/mediafire2', async (req, res, next) => {
          url = req.query.url
          apikey = req.query.apikey;
          if (apikey === undefined) return res.status(404).send({
              status: 404,
              message: `Input Parameter apikey`
          });
          let limit = await isLimit(apikey);
          if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
          limitAdd(apikey);
          const check = await cekKey(apikey);
          if (!check) return res.status(403).send({
            status: 403,
            message: `apikey ${apikey} not found, please register first!`
        });
        if (!url) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter url"})
        
        fetch(encodeURI(`https://memekgede.herokuapp.com/api/mediafire?url=${url}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
           res.json({
             author: 'IdoGanz',
             result
           })
        })
        .catch(e => {
         res.json(loghandler.error)
        })
        })
        router.get('/nomorhoki', async (req, res, next) => {
          no = req.query.no
          apikey = req.query.apikey;
          if (apikey === undefined) return res.status(404).send({
              status: 404,
              message: `Input Parameter apikey`
          });
          let limit = await isLimit(apikey);
          if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
          limitAdd(apikey);
          const check = await cekKey(apikey);
          if (!check) return res.status(403).send({
            status: 403,
            message: `apikey ${apikey} not found, please register first!`
        });
        if (!no) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter no"})
        
        fetch(encodeURI(`https://memekgede.herokuapp.com/api/nomer_hoki?nomer=${no}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
           res.json({
             author: 'IdoGanz',
             result
           })
        })
        .catch(e => {
         res.json(loghandler.error)
        })
        })
         router.get('/jodoh', async (req, res, next) => {
          nama = req.query.nama
          nama2 = req.query.nama2
          apikey = req.query.apikey;
          if (apikey === undefined) return res.status(404).send({
              status: 404,
              message: `Input Parameter apikey`
          });
          let limit = await isLimit(apikey);
          if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
          limitAdd(apikey);
          const check = await cekKey(apikey);
          if (!check) return res.status(403).send({
            status: 403,
            message: `apikey ${apikey} not found, please register first!`
        });
        if (!nama) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter nama"})
         if(!nama2) return res.json(loghandler.noname2)
        fetch(encodeURI(`https://restapppp.herokuapp.com/primbon/jodoh?nama1=${nama}&nama2=${nama2}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
           res.json({
             author: 'IdoGanz',
               result
           })
        })
        .catch(e => {
         res.json(loghandler.error)
        })
        })
        router.get('/mediafire', async (req, res, next) => {
          if (!req.query.url) return res.send({ status: 500, msg : 'Masukkan Parameter url'})
          apikey = req.query.apikey;
        if (apikey === undefined) return res.status(404).send({
            status: 404,
            message: `Input Parameter apikey`
        });
        let limit = await isLimit(apikey);
        if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
        limitAdd(apikey);
        const check = await cekKey(apikey);
        if (!check) return res.status(403).send({
          status: 403,
          message: `apikey ${apikey} not found, please register first!`
      });
          try {
          f = require ('../lib/mediafire')
          res.json(await f(req.query.url))
          } catch {
           res.send('TerJadi Kesalahan, Mungkin Url Tidak Valid')
          }
          })
    router.get('/asupan', async (req, res, next) => {
        apikey = req.query.apikey;
        if (apikey === undefined) return res.status(404).send({
            status: 404,
            message: `Input Parameter apikey`
        });
        let limit = await isLimit(apikey);
        if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
        limitAdd(apikey);
        const check = await cekKey(apikey);
        if (!check) return res.status(403).send({
          status: 403,
          message: `apikey ${apikey} not found, please register first!`
      });
          const asupan = JSON.parse(fs.readFileSync(__path +'/lib/data/asupan.json'));
          const Asupan = asupan[Math.floor(Math.random() * asupan.length)];
          let hasil = Asupan.asupan;
          data = await fetch(hasil).then(v => v.buffer())
          await fs.writeFileSync(__path +'/tmp/asupan.mp4', data)
          res.sendFile(__path +'/tmp/asupan.mp4')
        })
        router.get('/brainly', async (req, res, next) => {
            yt = require('brainly-scraper')
            const q = req.query.q;
            const apikey = req.query.apikey;
            if (q === undefined || apikey === undefined) return res.status(404).send({
                status: 404,
                message: `Input Parameter q & apikey`
            });
            let limit = await isLimit(apikey);
            if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
            limitAdd(apikey);
            const check = await cekKey(apikey);
            if (!check) return res.status(403).send({
                status: 403,
                message: `apikey ${apikey} not found, please register first!`
            });
          ser = await yt(req.query.q)
          res.json(ser)
          })
          
    router.get("/memegen", async (req, res, next) => {
  
        apikey = req.query.apikey;
        if (apikey === undefined) return res.status(404).send({
            status: 404,
            message: `Input Parameter apikey`
        });
        let limit = await isLimit(apikey);
        if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
        limitAdd(apikey);
        const check = await cekKey(apikey);
        if (!check) return res.status(403).send({
          status: 403,
          message: `apikey ${apikey} not found, please register first!`
      });
        text = req.query.text;
        text2 = req.query.text2;
        img = req.query.img;
        if(!text) return res.json(loghandler.nottext)  
        if(!text2) return res.json(loghandler.nottext)
        if(!img) return res.json(loghandler.img)
              {
          let hasil = 'https://memekgede.herokuapp.com/api/meme-gen?top='+ text +'&bottom='+ text2 +'&img='+ img +'&apikey=ar'
          data = await fetch(hasil).then(v => v.buffer())
          await fs.writeFileSync(__path +'/tmp/meme-gen.jpg', data)
          res.sendFile(__path +'/tmp/meme-gen.jpg')
        }
      })
      router.get("/nulis", async (req, res, next) => {
  
        apikey = req.query.apikey;
        if (apikey === undefined) return res.status(404).send({
            status: 404,
            message: `Input Parameter apikey`
        });
        let limit = await isLimit(apikey);
        if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
        limitAdd(apikey);
        const check = await cekKey(apikey);
        if (!check) return res.status(403).send({
          status: 403,
          message: `apikey ${apikey} not found, please register first!`
      });
        text = req.query.text;
        
        if(!text) return res.json(loghandler.nottext)        
              {
          let hasil = 'https://api.zeks.xyz/api/nulis?text='+ text +'&apikey=AriaGanzTzy' 
          data = await fetch(hasil).then(v => v.buffer())
          await fs.writeFileSync(__path +'/tmp/nulis.jpeg', data)
          res.sendFile(__path +'/tmp/nulis.jpeg')
        }
      })
      router.get('/textpro/neon', async(req, res, next) => {
      const apikey = req.query.apikey;
 if (apikey === undefined) return res.status(404).send({
     status: 404,
     message: `Input Parameter apikey`
 });
 limitAdd(apikey);
 const check = await cekKey(apikey);
 if (!check) return res.status(403).send({
  status: 403,
  message: `apikey ${apikey} not found, please register first!`
});
  let limit = await isLimit(apikey);
  if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
        const text = req.query.text;
        if(!text) return res.json(loghandler.nottext)
        {
          zrapi 
        .textpro("https://textpro.me/create-3d-neon-light-text-effect-online-1028.html", [
          text,
        ])
        .then((data) => {
          var urlnya = data
          download(urlnya, './tmp/pubg.jpg', function(){
            res.sendFile(path.resolve('./tmp/pubg.jpg'))
        })
        })
          }
        })
router.get('/textpro/matrix', async(req, res, next) => {
   const apikey = req.query.apikey;
 if (apikey === undefined) return res.status(404).send({
     status: 404,
     message: `Input Parameter apikey`
 });
 limitAdd(apikey);
 const check = await cekKey(apikey);
 if (!check) return res.status(403).send({
  status: 403,
  message: `apikey ${apikey} not found, please register first!`
});
  let limit = await isLimit(apikey);
  if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
  const text = req.query.text;
  if(!text) return res.json(loghandler.nottext)
    {
    zrapi 
  .textpro("https://textpro.me/matrix-style-text-effect-online-884.html", [
    text,
  ])
  .then((data) => {
    var urlnya = data
    download(urlnya, './tmp/pubg.jpg', function(){
      res.sendFile(path.resolve('./tmp/pubg.jpg'))
  })
  })
    }
  })
      router.get('/textpro/joker', async(req, res, next) => {
      const apikey = req.query.apikey;
 if (apikey === undefined) return res.status(404).send({
     status: 404,
     message: `Input Parameter apikey`
 });
 limitAdd(apikey);
 const check = await cekKey(apikey);
 if (!check) return res.status(403).send({
  status: 403,
  message: `apikey ${apikey} not found, please register first!`
});
  let limit = await isLimit(apikey);
  if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
        const text = req.query.text;        
        if(!text) return res.json(loghandler.nottext)
        {
          zrapi 
        .textpro("https://textpro.me/create-logo-joker-online-934.html", [
          text,
        ])
        .then((data) => {
          var urlnya = data
          download(urlnya, './tmp/pubg.jpg', function(){
            res.sendFile(path.resolve('./tmp/pubg.jpg'))
        })
        })
          }
        })
        router.get('/textpro/devil', async(req, res, next) => {
          const apikey = req.query.apikey;
 if (apikey === undefined) return res.status(404).send({
     status: 404,
     message: `Input Parameter apikey`
 });
 limitAdd(apikey);
 const check = await cekKey(apikey);
 if (!check) return res.status(403).send({
  status: 403,
  message: `apikey ${apikey} not found, please register first!`
});
  let limit = await isLimit(apikey);
  if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
          const text = req.query.text;
          if(!text) return res.json(loghandler.nottext)
          {
            zrapi 
          .textpro("https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html", [
            text,
          ])
          .then((data) => {
            var urlnya = data
            download(urlnya, './tmp/pubg.jpg', function(){
              res.sendFile(path.resolve('./tmp/pubg.jpg'))
          })
          })
            }
          })
          router.get('/textpro/transformers', async(req, res, next) => {
             const apikey = req.query.apikey;
 if (apikey === undefined) return res.status(404).send({
     status: 404,
     message: `Input Parameter apikey`
 });
 limitAdd(apikey);
 const check = await cekKey(apikey);
 if (!check) return res.status(403).send({
  status: 403,
  message: `apikey ${apikey} not found, please register first!`
});
  let limit = await isLimit(apikey);
  if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
            const text = req.query.text;
            if(!text) return res.json(loghandler.nottext)
            {
              zrapi 
            .textpro("https://textpro.me/create-a-transformer-text-effect-online-1035.html", [
              text,
            ])
            .then((data) => {
              var urlnya = data
              download(urlnya, './tmp/pubg.jpg', function(){
                res.sendFile(path.resolve('./tmp/pubg.jpg'))
            })
            })
              }
            })    
            router.get('/textpro/thunder', async(req, res, next) => {
               const apikey = req.query.apikey;
 if (apikey === undefined) return res.status(404).send({
     status: 404,
     message: `Input Parameter apikey`
 });
 limitAdd(apikey);
 const check = await cekKey(apikey);
 if (!check) return res.status(403).send({
  status: 403,
  message: `apikey ${apikey} not found, please register first!`
});
  let limit = await isLimit(apikey);
  if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
              const text = req.query.text;
              if(!text) return res.json(loghandler.nottext)
              {
                zrapi 
              .textpro("https://textpro.me/online-thunder-text-effect-generator-1031.html", [
                text,
              ])
              .then((data) => {
                var urlnya = data
                download(urlnya, './tmp/pubg.jpg', function(){
                  res.sendFile(path.resolve('./tmp/pubg.jpg'))
              })
              })
                }
              })
     router.get('/textpro/harry', async(req, res, next) => {
          const apikey = req.query.apikey;
 if (apikey === undefined) return res.status(404).send({
     status: 404,
     message: `Input Parameter apikey`
 });
 limitAdd(apikey);
 const check = await cekKey(apikey);
 if (!check) return res.status(403).send({
  status: 403,
  message: `apikey ${apikey} not found, please register first!`
});
  let limit = await isLimit(apikey);
  if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
                const text = req.query.text;
                if(!text) return res.json(loghandler.nottext)
                {
                  zrapi 
                .textpro("https://textpro.me/create-harry-potter-text-effect-online-1025.html", [
                  text,
                ])
                .then((data) => {
                  var urlnya = data
                  download(urlnya, './tmp/pubg.jpg', function(){
                    res.sendFile(path.resolve('./tmp/pubg.jpg'))
                  })
               })
            }
        })
        router.get('/textpro/3d', async(req, res, next) => {
           const apikey = req.query.apikey;
 if (apikey === undefined) return res.status(404).send({
     status: 404,
     message: `Input Parameter apikey`
 });
 limitAdd(apikey);
 const check = await cekKey(apikey);
 if (!check) return res.status(403).send({
  status: 403,
  message: `apikey ${apikey} not found, please register first!`
});
  let limit = await isLimit(apikey);
  if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
                 const text = req.query.text;
                 if(!text) return res.json(loghandler.nottext)
                 {
                   zrapi 
                 .textpro("https://textpro.me/3d-gradient-text-effect-online-free-1002.html", [
                   text,
                 ])
                 .then((data) => {
                   var urlnya = data
                   download(urlnya, './tmp/pubg.jpg', function(){
                     res.sendFile(path.resolve('./tmp/pubg.jpg'))
                   })
                })
             }
         })
router.get('/textpro/blackpink', async(req, res, next) => {
   const apikey = req.query.apikey;
 if (apikey === undefined) return res.status(404).send({
     status: 404,
     message: `Input Parameter apikey`
 });
 limitAdd(apikey);
 const check = await cekKey(apikey);
 if (!check) return res.status(403).send({
  status: 403,
  message: `apikey ${apikey} not found, please register first!`
});
  let limit = await isLimit(apikey);
  if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
  const text = req.query.text;
  if(!text) return res.json(loghandler.nottext)
    {
    zrapi 
  .textpro("https://textpro.me/create-blackpink-logo-style-online-1001.html", [
    text,
  ])
  .then((data) => {
    var urlnya = data
    download(urlnya, './tmp/pubg.jpg', function(){
      res.sendFile(path.resolve('./tmp/pubg.jpg'))
  })
  })
    }
  })
  
      router.get('/tahta', async(req, res, next) => {
         const apikey = req.query.apikey;
 if (apikey === undefined) return res.status(404).send({
     status: 404,
     message: `Input Parameter apikey`
 });
 limitAdd(apikey);
 const check = await cekKey(apikey);
 if (!check) return res.status(403).send({
  status: 403,
  message: `apikey ${apikey} not found, please register first!`
});
  let limit = await isLimit(apikey);
  if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
        text = req.query.text;
        
        if(!text) return res.json(loghandler.nottext)        
              {
        let hasil = 'https://api.zeks.xyz/api/hartatahta?text='+ text +'&apikey=AriaGanzTzy' 
        data = await fetch(hasil).then(v => v.buffer())
        await fs.writeFileSync(__path +'/tmp/tahta.jpg', data)
        res.sendFile(__path +'/tmp/tahta.jpg')
        }
      })
      router.get("/magernulis", async (req, res, next) => {
  
        const apikey = req.query.apikey;
        if (apikey === undefined) return res.status(404).send({
            status: 404,
            message: `Input Parameter apikey`
        });
        limitAdd(apikey);
        const check = await cekKey(apikey);
        if (!check) return res.status(403).send({
         status: 403,
         message: `apikey ${apikey} not found, please register first!`
       });
         let limit = await isLimit(apikey);
         if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
        nama = req.query.nama;
        kelas = req.query.kelas;
        text = req.query.text
        tinta = req.query.tinta
        if(!text) return res.json(loghandler.nottext)        
              {
          let hasil = 'https://api.zeks.xyz/api/magernulis?nama='+ nama +'&kelas='+ kelas +'&text='+ text +'&tinta='+ tinta +'&apikey=AriaGnzTzy' 
          data = await fetch(hasil).then(v => v.buffer())
          await fs.writeFileSync(__path +'/tmp/magernulis.jpeg', data)
          res.sendFile(__path +'/tmp/magernulis.jpeg')
        }
      })
      
    
router.get('/checkkey', async (req, res) => {
  const apikey = req.query.apikey;
  if (apikey === undefined) return res.status(404).send({
      status: 404,
      message: `Input Parameter apikey`
  });
  limitAdd(apikey);
  const check = await cekKey(apikey);
  if (!check) return res.status(403).send({
   status: 403,
   message: `apikey ${apikey} not found, please register first!`
 });
   let limit = await isLimit(apikey);
   if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
    res.send({status: 200, image: 'https://i.ibb.co/3zmmT3p/flaming.jpg', apikey: apikey, limit: limit});
});

router.get('/google', async (req, res, next) => {
     const apikey = req.query.apikey;
 if (apikey === undefined) return res.status(404).send({
     status: 404,
     message: `Input Parameter apikey`
 });
 limitAdd(apikey);
 const check = await cekKey(apikey);
 if (!check) return res.status(403).send({
  status: 403,
  message: `apikey ${apikey} not found, please register first!`
});
  let limit = await isLimit(apikey);
  if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
    yt = require('google-it')
  if (!req.query.q) return res.json({ status: false, msg: 'Masukkan Parameter q'})
  ser = await yt({ query: req.query.q})
  res.json({ status: 'success', result: ser})
  })

  router.get('/tiny', async (req, res, next) => {
    const url = req.query.url;
    const apikey = req.query.apikey;
    if (url === undefined || apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter url & apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey ${apikey} not found, please register first!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
    limitAdd(apikey);
  request(`https://tinyurl.com/api-create.php?url=${url}`, function (error, response, body) {
     try {
         res.json({
             status : true,
             creator : `${creator}`,
             result : {
                 link : `${body}`,
             },
             message : `Jangan Lupa Bersyukur Hari Ini:)`
         })
     } catch (e) {
         console.log('Error :')
         res.json(loghandler.invalidlink)
     }
  })
  })

  router.get('/joox', async (req, res, next) => {
    const query = req.query.query;
    const apikey = req.query.apikey;
    if (query === undefined || apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter query & apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey ${apikey} not found, please register first!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
    limitAdd(apikey);
    res.json(await Joox(req.query.q))
    })

    router.get('/cerpen', async (req, res, next) => {
      const apikey = req.query.apikey;
      if (apikey === undefined) return res.status(404).send({
          status: 404,
          message: `Input Parameter query & apikey`
      });
      const check = await cekKey(apikey);
      if (!check) return res.status(403).send({
          status: 403,
          message: `apikey ${apikey} not found, please register first!`
      });
      let limit = await isLimit(apikey);
      if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
      limitAdd(apikey);

     fetch(encodeURI(`https://memekgede.herokuapp.com/api/cerpen`))
      .then(response => response.json())
      .then(data => {
      var result = data;
           res.json({
               creator : `${creator}`,
               result
           })
       })
       .catch(e => {
         res.json(loghandler.error)
})
})

router.get('/fml', async (req, res, next) => {
  const apikey = req.query.apikey;
  if (apikey === undefined) return res.status(404).send({
      status: 404,
      message: `Input Parameter apikey`
  });
  const check = await cekKey(apikey);
  if (!check) return res.status(403).send({
      status: 403,
      message: `apikey ${apikey} not found, please register first!`
  });
  let limit = await isLimit(apikey);
  if (limit) return res.status(403).send({status: 403, message: 'your limit is 0, reset every morning'});
  limitAdd(apikey);

 fetch(encodeURI(`https://memekgede.herokuapp.com/api/fml`))
  .then(response => response.json())
  .then(data => {
  var result = data;
       res.json({
           creator : `${creator}`,
           result
       })
   })
   .catch(e => {
     res.json(loghandler.error)
})
})

router.get('/ytplay', youtubePlay);

router.get('/ytmp4', youtubeMp4);

router.get('/ytmp3', youtubeMp3);

router.get('/caklontong', cakLontong);

router.get('/quotes1', quotes);

router.get('/fakta', fakta);

router.get('/bijak', bijak);

router.get('/motivasi', motivasi);

router.get('/oxy/:tema', photoOxy);

module.exports = router;