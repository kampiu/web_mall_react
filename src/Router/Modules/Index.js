import Loadable from 'react-loadable'
import Loading from 'Components/Loading'
// import Home from 'view/Home'
// import Article from 'view/Article'

// const Home = () => import('view/Home')
// const Article = () => import('view/Article')
const Home = Loadable({
	loader: () => import('view/Home'),
	loading: Loading
})

const Article = Loadable({
	loader: () => import('view/Article'),
	loading: Loading
})

export {
	Home,
	Article
}
