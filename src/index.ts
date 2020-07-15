import { User } from './models/User'

const user = new User({ name: 'Nick', age: 27 })

user.on('change', () => {
    console.log('hell yeah')
})
user.on('change', () => {
    console.log('FTGD')
})
user.on('cowboy', () => {
    console.log('oh boy!')
})

user.trigger('cowboy')

