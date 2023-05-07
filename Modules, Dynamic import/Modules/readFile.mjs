export default function readFile (path) {
    return new Promise((resolve, reject) => {setTimeout(() => {
        console.log('(4) Readme file from ' + path + ' loaded')
        resolve()
    }, Math.floor(Math.random() * 1000))})
}