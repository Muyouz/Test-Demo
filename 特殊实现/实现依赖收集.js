const a = reactive({name: 'a'})
watch(() => console.log(a.name))
a.name = 'b'


function reactive (target) {
    return new Proxy(target,{
        get(target, key) {
            track(target, key)
            return target[key]
        },
        set(target, key, value) {
            target[key] = value
            trigger(target, key)
            return true
        }
    })
}

let effectFunc = null
let effectList = new Map()

function track (target, key) {
    if (effectFunc) {
        let realObj = effectList.get(target)
        if (!realObj) {
            effectList.set(target, (realObj= new Map()))
        }
        let realSet = realObj.get(key)
        if (!realSet) {
            realObj.set(key,(realSet = new Set()))
        }
        realSet.add(effectFunc)
    }
}

function trigger (target, key) {
    let realObj = effectList.get(target)
    if (realObj) {
        let realSet = realObj.get(key)
        if (realSet) {
            realSet.forEach(cb => {
                cb()
            });
        }
    }
}

function watch (ck) {
    effectFunc = ck
    ck()
    effectFunc = null
}