import { User } from './models/User'

const user = User.buildUser({ id: 2, name: 'ho' })

user.on('change', () => {
    console.log(user)
})

user.fetch()

user.isAdminUser()