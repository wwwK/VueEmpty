<template>
	<div id="app">
		<img src="./assets/logo.png" />
		<!-- ![](./assets/logo.png) -->
		<h1>我是src/app.vue的h1</h1>
		<router-link to="/">点击进入hello首页</router-link>
		<br />
		<br />
		<router-link to="/Two">点击进入ViewTwo</router-link>
		<br />
		<router-link to="/h">点击进入不存在的路径</router-link>
		<br />
		<router-view />
	</div>
</template>

<script>
export default {
	name: 'App'
};
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>
