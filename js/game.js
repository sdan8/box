class Game {
    constructor (canvas){
        this.images = null
        this.canvas = canvas
        this.context = canvas.getContext('2d')
        this.sceneFactory = this.sceneFactory || new SceneFactory(this)
    }
    // 游戏初始化
    init (){
        // 将game作为参数传入场景中
        let scene = this.sceneFactory.getSceneTitleInstance()
        scene.init()
    }
}