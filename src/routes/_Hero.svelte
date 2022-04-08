<script>
	import { Icon, Chat, LocationMarker, Phone } from 'svelte-hero-icons';
	export let tagline;
	export let title;
	export let text;
</script>

<section class="px-4 pt-16 pb-16 sm:px-6 lg:px-8">
	<div class="max-w-screen-xl mx-auto lg:grid lg:grid-cols-12 lg:gap-8">
		<div class="flex flex-col items-center justify-center lg:items-start lg:col-span-6">
			<span
				class="inline-block px-4 py-2 font-medium text-purple-700 bg-purple-200 rounded-full shadow-md -rotate-1"
			>
				{tagline}
			</span>
			<h1
			class="max-w-xl mt-4 text-center text-purple-900 sm:mt-5 lg:text-left h1 lg:max-w-none sm:text-6xl xl:text-7xl leading-snug sm:leading-tight xl:leading-tighter"
		>
			{title}
		</h1>
		<p class="max-w-2xl mt-3 text-xl leading-loose text-center text-purple-800 lg:text-left">
			{text}
		</p>
		</div>
	<div class="flex flex-col justify-center max-w-3xl mx-auto mt-16 lg:mt-0 lg:max-w-none lg:col-span-6">
		<img class="w-full h-auto" src="hero1.png" alt="Um time singular" />
	</div>
</section>
