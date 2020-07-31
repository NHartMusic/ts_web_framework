import { UserForm } from './views/UserForm'
import { User } from './models/User'

const user = User.buildUser({ name: 'RATMAN', age: 420 })

const root = document.getElementById('root')

if (root) {
    const userForm = new UserForm(root, user)

    userForm.render()
} else {
    throw new Error('root element was not found, u little bitch')
}





