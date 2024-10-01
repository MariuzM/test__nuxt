<script setup lang="ts">
console.log('Layout /')
</script>

<template>
	<div class="bg-blue-200">
		Default Layout
		<nav class="bg-green-200">
			Nav Links:
			<div class="flex gap-4">
				<NuxtLink class="text-blue-700" active-class="text-red-600" to="/">Home</NuxtLink>
				<NuxtLink class="text-blue-700" active-class="text-red-600" to="/about">About</NuxtLink>
				<NuxtLink class="text-red-600" active-class="text-red-600" to="/admin">Admin/Home</NuxtLink>
				<NuxtLink class="text-red-600" active-class="text-red-600" to="/admin/about"
					>Admin/About</NuxtLink
				>
			</div>
		</nav>
		<slot />
	</div>
</template>
