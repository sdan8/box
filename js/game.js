class Game {
    constructor (canvas){
        this.images = null
        this.canvas = canvas
        this.context = canvas.getContext('2d')
    }
    // 游戏初始化
    init (){
        // 将game作为参数传入场景中
        // let scene = new SceneMain(this)
        let scene = new SceneTitle(this)
        scene.init()
    }
}