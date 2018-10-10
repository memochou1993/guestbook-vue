<template>
	<div id="app">
		<b-navbar toggleable type="dark" variant="dark" class="mb-3">
			<b-navbar-toggle target="nav_text_collapse"></b-navbar-toggle>
			<b-navbar-brand>Guestbook</b-navbar-brand>
			<b-collapse is-nav id="nav_text_collapse">
				<b-navbar-nav class="ml-auto">
					<b-nav-item to="/" exact>Home</b-nav-item>
					<b-nav-item to="/signatures" exact>Signatures</b-nav-item>
					<b-nav-item to="/signatures/create" exact>Sign</b-nav-item>
				</b-navbar-nav>
			</b-collapse>
		</b-navbar>

		<b-container>
			<router-view></router-view>
		</b-container>
	</div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.hello, .home {
  text-align: center;
}
</style>
