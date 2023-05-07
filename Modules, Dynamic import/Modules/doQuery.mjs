export default function doQuery (statement) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        console.log('(2) SQL query executed: ' + statement)
        resolve()
    }, Math.floor(Math.random() * 1000))})
    
}