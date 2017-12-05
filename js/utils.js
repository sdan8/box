let log = console.log.bind('console')
var cloneObj = function(obj){
    let str, newobj = obj.constructor === Array ? [] : {}
    if(typeof obj !== 'object'){
        return
    } else if(window.JSON){
        str = JSON.stringify(obj) //系列化对象
        newobj = JSON.parse(str) //还原
    } else {
        for(let i in obj){
            newobj[i] = typeof obj[i] === 'object' ? 
            cloneObj(obj[i]) : obj[i]
        }
    }
    return newobj
}