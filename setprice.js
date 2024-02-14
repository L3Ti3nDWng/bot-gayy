const db = require('./database');
try {
    db.set('nitroboost1m', '90k');
    db.set('nitroboost1y', '899k');
    db.set('nitrobasic1m', '35k');
    db.set('nitrobasic1y', '350k')
    db.set('boost1m', '80k');
    db.set('boost3m', '150k');
    db.set('spotify1m', '15k');
    db.set('spotify3m', '40k');
    db.set('youtube', '40k');
    db.set('netflix', '50k');
    db.set('followfb', '5k');
    db.set('tiktok', '40k - 100k');

    db.set('nitroimg', 'http://google.com/');
    db.set('boostimg', 'http://google.com/');
    db.set('spotifyimg', 'http://google.com/');
    db.set('youtubeimg', 'http://google.com/');
    db.set('netfliximg','http://google.com/');
    db.set('tiktokimg', 'http://google.com/');
    db.set('fbimg','http://google.com/');

    console.log('set successfully')
} catch (error) {
    console.log(error);
}
