export default function readConfig (name) {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
        console.log('(1) config from ' + name + ' loaded')
        resolve()
    }, Math.floor(Math.random() * 1000))
    })
}