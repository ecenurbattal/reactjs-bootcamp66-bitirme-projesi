import Home from '../screens/Home/Home';
import CharactersScreen from '../screens/CharactersScreen/CharactersScreen';
import CharacterDetailsScreen from '../screens/CharacterDetailScreen/CharacterDetailsScreen';
import Login from '../screens/Login/Login';
import ProductsScreen from '../screens/Products/ProductsScreen';
import Register from '../screens/Register/Register';
import AddProductScreen from '../screens/AddProductScreen/AddProductScreen';
import Checkout from '../components/Checkout/Checkout';

export const routes = [
    {
        path: '/',
        exact:true,
        component: () => <Home/>,
        title:'Ana Sayfa',
        isLink:true,
        isPrivate:false,
    },
    {
        path: '/characters',
        exact:true,
        component: () => <CharactersScreen/>,
        title:'Karakterler',
        isLink:true,
        isPrivate:false,
    },
    {
        path: '/characters/:characterId',
        component: () => <CharacterDetailsScreen/>,
        title:'Character Detail',
        isLink:false,
        isPrivate:true,
    },
    {
        path: '/products',
        exact:true,
        component: () => <ProductsScreen/>,
        title:'Ürünler',
        isLink:true,
        isPrivate:true,
    },
    {
        path: '/products/new',
        component: () => <AddProductScreen/>,
        title:'Add Product',
        isLink:false,
        isPrivate:true,
    },
    {
        path: '/login',
        component: () => <Login/>,
        title:'Login',
        isLink:false,
        isPrivate:false,
    },
    {
        path: '/register',
        component: () => <Register/>,
        title:'Register',
        isLink:false,
        isPrivate:false,
    },
    {
        path:'/checkout',
        component:() => <Checkout/>,
        title:'Checkout',
        isLink:false,
        isPrivate:true,
    }
]