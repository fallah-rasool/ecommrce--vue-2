import Home from '../pages/Home.vue'
import About from '../pages/About.vue'
import Category from '../pages/Category.vue'
import Product from '../pages/Product.vue'
import Login from '../pages/Login.vue'
import Register from '../pages/Register.vue'
import Resetpass from '../pages/Resetpass.vue'
import Cart from '../pages/Cart.vue'

const routes= [
        { path: '/' , component: Home,name: 'Home' },
        { path: '/about' , component: About ,name: 'About'},
        { path: '/category' , component: Category ,name: 'Category'},
        { path: '/product/:id' , component: Product ,name: 'Product'},
        { path: '/login' , component: Login ,name: 'Login'},
        { path: '/register' , component: Register ,name: 'Register'},
        { path: '/resetpass' , component: Resetpass ,name: 'Resetpass'},
        { path: '/cart' , component: Cart ,name: 'Cart'}
]
export default routes