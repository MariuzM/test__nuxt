<script setup lang="ts">
const p = defineProps(['id', 'slug'])
console.log(1)
watch(
	() => p,
	(newProps, oldProps) => {
		console.log('PropPass changed:', { newProps, oldProps })
	},
	{ deep: true },
)
</script>

<template>
	<div>
		<h1>{{ p.id }}</h1>
		<h1>{{ p.slug }}</h1>
	</div>
</template>
