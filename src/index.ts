import express from 'express'
const app = express()

let normalResponse: any = {
    msg: 'App running.'
}
let exceptionalResponse: any = {
    msg: 'Wow! you\'re a deep digger'
}
app.use('/', (req, res) => {
    res.json(normalResponse)
})

app.use('*', (req, res) => {
    
    res.json(exceptionalResponse)
})

app.listen('3003', () => {
    console.info('3003')
})