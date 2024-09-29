<script setup lang="tsx">
const message = ref('Hello, World!')

const p = defineProps({
	test: { type: String, default: 'default value' },
})

const updateMessage = () => {
	message.value = 'Button' + ' ' + p.test
}
</script>

<template>
	<div>
		<p>{{ message }}</p>
		<p>{{ p.test }}</p>
		<button @click="updateMessage">Click me</button>
	</div>
</template>
