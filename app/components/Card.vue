<template>
	<div
		ref="card"
		class="relative h-64 w-64 transform rounded-lg bg-blue-500 shadow-lg transition-all duration-300 ease-out hover:scale-105"
		:style="cardStyle"
		@mousemove="handleMouseMove"
		@mouseleave="handleMouseLeave"
	>
		<div
			class="pointer-events-none absolute inset-0 rounded-lg bg-gradient-to-br from-blue-400 to-blue-700 opacity-50"
		></div>
	</div>
</template>

<script setup>
import { reactive, ref } from 'vue'

const card = ref(null)
const cardStyle = reactive({
	filter: 'brightness(100%)',
	transform: 'translate(0px, 0px)',
})

const handleMouseMove = (event) => {
	const { offsetX, offsetY, target } = event
	const { clientWidth, clientHeight } = target

	// Calculate distance from the center
	const xDist = (offsetX - clientWidth / 2) / clientWidth
	const yDist = (offsetY - clientHeight / 2) / clientHeight
	const dist = Math.sqrt(xDist * xDist + yDist * yDist)

	// Adjust brightness and movement based on distance
	const brightness = 150 - dist * 100
	const translateX = xDist * 10
	const translateY = yDist * 10

	cardStyle.filter = `brightness(${brightness}%)`
	cardStyle.transform = `translate(${translateX}px, ${translateY}px)`
}

const handleMouseLeave = () => {
	cardStyle.filter = 'brightness(100%)'
	cardStyle.transform = 'translate(0px, 0px)'
}
</script>

<style scoped>
.card {
	transition:
		filter 0.2s,
		transform 0.2s;
}
</style>
