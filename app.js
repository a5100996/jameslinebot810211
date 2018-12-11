// 引用linebot SDK
var linebot = require('linebot');

// 用於辨識Line Channel的資訊
var bot = linebot({
  channelId: '1629752874',
  channelSecret: '6134a03baf11f245c4e33ba11b6dff2f',
  channelAccessToken: 'UhDIX0FOXP6V5aznI+pc7VF0lvXqEwarFvD7CW9fTP53HfvpzkksYLn7jarVTFssg9ECkyOgTG40zhva3q76+qRAdOYdIdSjqq8yMMEkxeFOS98aS64cKNhuPiPPfDyASyENk4uhkR49F9aQMjQ04AdB04t89/1O/w1cDnyilFU='
});

// 當有人傳送訊息給Bot時
bot.on('message', function (event) {
    // event.message.text是使用者傳給bot的訊息
    // 準備要回傳的內容
    var replyMsg = `Hello你剛才說的是:${event.message.text}`;
    // 透過event.reply(要回傳的訊息)方法將訊息回傳給使用者
    event.reply(replyMsg).then(function (data) {
        // 當訊息成功回傳後的處理
    }).catch(function (error) {
        // 當訊息回傳失敗後的處理
    });
});

const app = express();
const linebotParser = bot.parser();
app.post('/', linebotParser);

//因為 express 預設走 port 3000，而 heroku 上預設卻不是，要透過下列程式轉換
var server = app.listen(process.env.PORT || 8080, function() {
  var port = server.address().port;
  console.log("App now running on port", port);
});