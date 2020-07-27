import { User } from './models/User'

const user = new User({ name: 'Yungus', age: 700 })

user.on('change', () => {
    console.log('user was changed')
})