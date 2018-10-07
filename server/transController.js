let translations=[
    {
        "id":1,
        "translated": "Hash yeri ray tih erinak’s zhavorsa?",
        "text": "Have you seen my lady’s dragon?",
        "language": "dothraki",
        "comments":"",
        
      },
    {
        "id":2,
        "translated": "Shieraki gori ha yeraan!",
        "text":"The stars are charging for you!",
        "language": "dothraki",
        "comments":""
    },
    {
        "id":3,
        "translated": "Fichas jahakes moon!",
        "text": "Get him! (Take his braid!)",
        "language": "dothraki",
        "comments":""
    },
    {
        "id":4,
        "translated": "Hash yer asti k’athijilari?",
        "text": "Are you speaking truthfully?",
        "language": "dothraki",
        "comments":""
    },
    {
        "id":5,
        "translated": "Anha efichisak haz yeroon!",
        "text": "I disagree!",
        "language": "dothraki",
        "comments":""
    },
    {
        "id":6,
        "translated": "Yer affesi anni",
        "text": "You make me itch. Used to indicate that you don't like someone or that they make you uncomfortable.",
        "language": "dothraki",
        "comments":""
    },
    {
        "id":7,
        "translated": "Me nem nesa",
        "text": "It is known",
        "language": "dothraki",
        "comments":""
    }
];
let pictures=
[{"id":1,"url":"https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/05/01/10/khal-drogo.jpg?w968h681"},
{"id":2,"url":"http://cdn.morleymedia.net/imgs/sea_310_533.jpg"},
{"id":3,"url":"https://pixel.nymag.com/imgs/daily/vulture/2017/07/18/game-of-thrones-characters/17-gilly.w710.h473.2x.jpg"},
{"id":4,"url":"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/grenn-1502923793.png?crop=1xw:1xh;center,top&resize=480:*"},
{"id":5,"url":"https://pixel.nymag.com/imgs/daily/vulture/2017/07/18/game-of-thrones-characters/17-daenerys.w710.h473.2x.jpg"},
{"id":6,"url":"https://pixel.nymag.com/imgs/daily/vulture/2017/07/18/game-of-thrones-characters/17-missandei.w710.h473.2x.jpg"},
{"id":7,"url":"https://pixel.nymag.com/imgs/daily/vulture/2017/07/18/game-of-thrones-characters/17-grey-worm.w710.h473.2x.jpg"},
{"id":8,"url":"https://pixel.nymag.com/imgs/daily/vulture/2017/07/18/game-of-thrones-characters/17-varys.w710.h473.2x.jpg"},
{"id":9,"url":"https://pixel.nymag.com/imgs/daily/vulture/2017/07/18/game-of-thrones-characters/17-tryion.w710.h473.2x.jpg"},
{"id":10,"url":"https://pixel.nymag.com/imgs/daily/vulture/2017/07/18/game-of-thrones-characters/17-cersei.w710.h473.2x.jpg"},
{"id":11,"url":"https://pixel.nymag.com/imgs/daily/vulture/2017/07/18/game-of-thrones-characters/17-jamie.w710.h473.2x.jpg"},
{"id":12,"url":"https://pixel.nymag.com/imgs/daily/vulture/2017/07/18/game-of-thrones-characters/17-theon-greyjoy.w710.h473.2x.jpg"},
{"id":13,"url":"https://pixel.nymag.com/imgs/daily/vulture/2017/07/18/game-of-thrones-characters/17-yara-greyjoy.w710.h473.2x.jpg"},
{"id":14,"url":"https://pixel.nymag.com/imgs/daily/vulture/2017/07/18/game-of-thrones-characters/17-euron-greyjoy.w710.h473.2x.jpg"},
{"id":15,"url":"https://pixel.nymag.com/imgs/daily/vulture/2017/07/18/game-of-thrones-characters/17-jon-snow.w710.h473.2x.jpg"},
{"id":16,"url":"https://pixel.nymag.com/imgs/daily/vulture/2017/07/18/game-of-thrones-characters/17-bran-stark-2.w710.h473.2x.jpg"},
{"id":17,"url":"https://pixel.nymag.com/imgs/daily/vulture/2017/07/18/18-arya-stark.w710.h473.2x.jpg"},
{"id":18,"url":"https://pixel.nymag.com/imgs/daily/vulture/2017/07/18/game-of-thrones-characters/17-sansa-stark.w710.h473.2x.jpg"},
{"id":19,"url":"https://pixel.nymag.com/imgs/daily/vulture/2017/07/18/game-of-thrones-characters/17-littlefinger.w710.h473.2x.jpg"},
{"id":20,"url":"https://pixel.nymag.com/imgs/daily/vulture/2017/07/18/game-of-thrones-characters/17-meera-reed.w710.h473.2x.jpg"},
{"id":21,"url":"https://pixel.nymag.com/imgs/daily/vulture/2017/07/18/game-of-thrones-characters/17-the-hound.w710.h473.2x.jpg"},
{"id":22,"url":"https://pixel.nymag.com/imgs/daily/vulture/2017/07/18/game-of-thrones-characters/17-gregor-clegane-2.w710.h473.2x.jpg"},
{"id":23,"url":"https://pixel.nymag.com/imgs/daily/vulture/2017/07/18/game-of-thrones-characters/17-thoros-of-myr.w710.h473.2x.jpg"},
{"id":24,"url":"https://pixel.nymag.com/imgs/daily/vulture/2017/07/18/game-of-thrones-characters/17-beric-dondarrion.w710.h473.2x.jpg"},
{"id":25,"url":"https://pixel.nymag.com/imgs/daily/vulture/2017/07/18/game-of-thrones-characters/17-davos-seaworth.w710.h473.2x.jpg"},
{"id":26,"url":"https://pixel.nymag.com/imgs/daily/vulture/2017/07/18/game-of-thrones-characters/17-brienne-of-tarth.w710.h473.2x.jpg"},
{"id":27,"url":"https://pixel.nymag.com/imgs/daily/vulture/2017/07/18/game-of-thrones-characters/17-olenna-tyrell.w710.h473.2x.jpg"},
{"id":28,"url":"https://pixel.nymag.com/imgs/daily/vulture/2017/07/18/game-of-thrones-characters/17-ellaria-sand.w710.h473.2x.jpg"},
{"id":29,"url":"https://pixel.nymag.com/imgs/daily/vulture/2017/07/18/game-of-thrones-characters/17-lyanna-mormont.w710.h473.2x.jpg"}];
let id = 30;
module.exports={
getTranslation: (req,res)=>{
    res.status(200).json(translations)
},
createUrl: (req,res)=>{
    let url = req.body.userInput; 
    let newUrl = {  id, url  }; 
    id++;
    pictures.push(newUrl);
    res.send(pictures); 
},
getURL:(req,res)=>{
    res.status(200).json(pictures)
},
updateTranslation: (req,res)=>{
    const translationId= req.params.id; //params.__ needs to equal an exact key
    const translationIndex=translations.findIndex(trans=>trans.id===parseInt(translationId));
    if (translationIndex===-1){
        res.status(404).send(`ERROR! A message with id ${translationId} doesn't exist!`)
    } else {
        translations[translationIndex]={
            id:translations[translationIndex].id, 
            translated:translations[translationIndex].translated,
            text:translations[translationIndex].text,
            language:translations[translationIndex].language,
            ...req.body
            };
        res.json(translations);
    }
},
deleteTranslation: (req,res)=>{
    const translationId= req.params.id; //params.__ needs to equal an exact key
    const translationIndex=translations.findIndex(trans=>trans.id===parseInt(translationId));
    if (translationIndex===-1){
        res.status(404).send(`ERROR! A message with id ${translationId} doesn't exist!`)
    } else {
        translations[translationIndex]={...req.body, id:translations[translationIndex].id};
        translations.splice(translationIndex,1);
        res.json(translations);
    }
}
}