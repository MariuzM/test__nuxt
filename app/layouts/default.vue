<script setup lang="ts">
console.log('Layout /')
</script>

<template>
	<div class="bg-blue-200">
		Default Layout
		<nav class="bg-green-200">
			Nav Links:
			<div class="flex gap-4">
				<NuxtLink active-class="bg-slate-400" to="/">Home</NuxtLink>
				<NuxtLink active-class="bg-slate-400" to="/about">About</NuxtLink>
				<NuxtLink active-class="bg-slate-400" to="/admin">Admin/Home</NuxtLink>
				<NuxtLink active-class="bg-slate-400" to="/admin/about">Admin/About</NuxtLink>
			</div>
		</nav>
		<slot />
	</div>
</template>
