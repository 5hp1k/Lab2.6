export default function httpGet (url) {
    return new Promise((resolve, reject) => {setTimeout(() => {
        console.log('(3) Page retrieved: ' + url)
        resolve()
    }, Math.floor(Math.random() * 1000))})
}