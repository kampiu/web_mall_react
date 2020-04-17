import {
	Home,
	Article
} from './Modules/Index'


const routes = [
	{
		url: '/home',
		component: Home,
		text: '首页',
		isToggleFooter:true,
		isShowHeaderAndFooter: true
	},
	{
		url: '/article',
		component: Article,
		text: '笔记',
		isToggleFooter:true,
		isShowHeaderAndFooter:true
	}
]

export default routes
