class SceneTitle {
    constructor (game){
        this.game = game
        this.maps = window.boxMaps
        this.paused = false
    }
    // 场景初始化
    init (){
        // 加载场景
        log('sceneTitle init')
        this.load()
        // 添加监听事件
        window.addEventListener('keydown', (event) => {
            let k = event.key
            if (!this.paused){
                if (k == 's'){
                    let scene = new SceneMain(this.game)
                    scene.init()
                }
            }
        })
    }
    load (){
        let canvas = this.game.canvas
        this.game.context.clearRect(0, 0, canvas.width, canvas.height)
        this.drawMap ()
    }
    drawMap (){
        for (let i = 0; i < this.maps[0].length; i++){
            for (let j = 0; j < this.maps[0][i].length; j++){
                this.drawItem (j, i, 'block')
            }
        }
        let canvas = this.game.canvas
        let context = this.game.context
        context.font = '26px "Microsoft YaHei"'
        context.fillStyle = '#F44336'
        context.textAlign = 'center'
        context.fillText("按's'开始游戏！", canvas.width/2, 150)
    }
    drawItem (x, y, item){
        let w = CONFIG.blockWidth
        let img = this.game.images[item]
        let context = this.game.context
        context.drawImage(img, x * w, y * w, w, w)
    }
}