<script setup lang="ts">
console.log('Layout /admin')
</script>

<template>
	<div class="bg-red-200">
		Admin Layout
		<nav class="bg-green-200">
			Nav Links:
			<div class="flex gap-4">
				<router-link class="text-blue-700" to="/">Home</router-link>
				<router-link class="text-blue-700" to="/about">About</router-link>
				<router-link class="text-red-600" to="/admin">Admin/Home</router-link>
				<router-link class="text-red-600" to="/admin/about">Admin/About</router-link>
			</div>
		</nav>
		<slot />
	</div>
</template>
