<template>
	<div class="bg-blue-200">
		Main Layout
		<nav class="bg-green-200">
			Nav Links:
			<div class="flex gap-4">
				<router-link class="text-blue-700" to="/">Home</router-link>
				<router-link class="text-blue-700" to="/about">About</router-link>
				<router-link class="text-red-600" to="/admin">Admin/Home</router-link>
				<router-link class="text-red-600" to="/admin/about">Admin/About</router-link>
			</div>
		</nav>
		<NuxtPage />
	</div>
</template>
