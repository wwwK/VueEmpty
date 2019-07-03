import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
//import xxx from  '@/components/xxx' 中的@表示src
// 因为webpack.base.conf中别名这样写了==> alias: {'@': resolve('src')}
import ViewTwo from '@/components/ViewTwo' //引入ViewTwo组件
import notFind from '@/components/notFind' //引入notFind组件

Vue.use(Router) //这句别忘记了

export default new Router({
	//mode:'history',  //使用history防止url中出现#
	routes: [{
		path: '/',
		name: 'HelloWorld',
		component: HelloWorld
	}, {
		path: '/Two',
		name: 'ViewTwo',
		component: ViewTwo
	}, {
		path: '*',
		name: 'notFind',
		component: notFind
	}]
})
