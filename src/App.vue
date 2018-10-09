<template>
	<div id="app">
		<b-navbar toggleable type="dark" variant="dark" class="mb-3">
			<b-navbar-toggle target="nav_text_collapse"></b-navbar-toggle>
			<b-navbar-brand>BootstrapVue</b-navbar-brand>
			<b-collapse is-nav id="nav_text_collapse">
				<b-navbar-nav class="ml-auto">
					<b-nav-item to="/">Home</b-nav-item>
					<b-nav-item to="/signatures">Signatures</b-nav-item>
				</b-navbar-nav>
			</b-collapse>
		</b-navbar>

		<b-container>
			<router-view/>
		</b-container>
	</div>
</template>
