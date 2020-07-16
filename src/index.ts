import { User } from './models/User'

const user = new User({ name: 'Yungus', age: 700 })

user.events.on('change', () => {
    console.log('fuck jk rowling')
})

user.events.trigger('change')