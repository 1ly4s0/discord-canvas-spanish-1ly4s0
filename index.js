const Canvas = require("canvas");
// Register Bold font
Canvas.registerFont(`${__dirname}/assets/fonts/theboldfont.ttf`, { family: "Bold" });
// Register SketchMatch font
Canvas.registerFont(`${__dirname}/assets/fonts/SketchMatch.ttf`, { family: "SketchMatch" });
// Register SketchMatch font
Canvas.registerFont(`${__dirname}/assets/fonts/LuckiestGuy-Regular.ttf`, { family: "luckiest guy" });
// Register KeepCalm font
Canvas.registerFont(`${__dirname}/assets/fonts/KeepCalm-Medium.ttf`, { family: "KeepCalm" });
// Register Carnevalee
Canvas.registerFont(`${__dirname}/assets/fonts/Carnevalee Freakshow.ttf`, { family: "Carnevalee" });
Canvas.registerFont(`${__dirname}/assets/fonts/FredokaOne-Regular.ttf`, { family: "Fredoka" });
Canvas.registerFont(`${__dirname}/assets/fonts/Kerata.ttf`, { family: "Kerata" });

module.exports.Base = require('./src/greetings/Base');
module.exports.Base2 = require('./src/greetings/Base2');
module.exports.Base3 = require('./src/greetings/Base3');
module.exports.Base4 = require('./src/greetings/Base4');
module.exports.Welcome = require('./src/greetings/Welcome');
module.exports.Goodbye = require('./src/greetings/Goodbye');
module.exports.Promote = require('./src/greetings/Promote');
module.exports.Demote = require('./src/greetings/Demote');
module.exports.FortniteShop = require('./src/fortnite/Shop');
module.exports.FortniteStats = require('./src/fortnite/Stats');
module.exports.RankCard = require('./src/rank/Rank');
