"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PIXI = require("pixi.js");
const ball_1 = require("./ball");
let gameWidth = 600;
let gameHeight = 800;
//サイズを指定してPIXI.Appricationを呼ぶ
const app = new PIXI.Application({ width: gameWidth, height: gameHeight });
// index.htmlのbody部にappを追加(append)する (app.viewはcanvasのdom要素)
document.body.appendChild(app.view);
// canvasの周りを点線枠で囲う (canvasの位置がわかりやすいので入れている)
app.renderer.view.style.border = "2px dashed black";
// canvasの背景色
app.renderer.backgroundColor = 0xa0a0a0;
// 画像"GrayBall.jpg"の読み込み
PIXI.Loader.shared.add("resources/GrayBall.png");
PIXI.Loader.shared.load((loader, resources) => {
    const ball = new ball_1.Ball();
    ball.sprite = new PIXI.Sprite(resources["resources/GrayBall.png"].texture);
    ball.xSpeed = 1;
    ball.ySpeed = 1;
    ball.heightSize = 100;
    ball.widthSize = 100;
    // ゲーム用のシーンを生成
    const gameScene = new PIXI.Container();
    // ゲームシーンを画面に追加
    app.stage.addChild(gameScene);
    gameScene.addChild(ball.sprite); // ボールをシーンに追加
    function gameLoop() {
        ball.sprite.x += ball.xSpeed;
        ball.sprite.y += ball.ySpeed;
        //画面縁当たり判定
        if (ball.sprite.y + ball.heightSize >= gameHeight
            || ball.sprite.y <= 0) {
            ball.ySpeed = -ball.ySpeed;
        }
        if (ball.sprite.x + ball.widthSize >= gameWidth
            || ball.sprite.x <= 0) {
            ball.xSpeed = -ball.xSpeed;
        }
    }
    app.ticker.add(gameLoop);
});
//# sourceMappingURL=script.js.map