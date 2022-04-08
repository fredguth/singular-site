<script>
	import { Icon, Chat, LocationMarker, Phone } from 'svelte-hero-icons';
	export let tagline;
	export let title;
	export let text;
</script>

<section class="px-4 pt-16 sm:px-6 lg:px-8">
	<div class="max-w-screen-xl mx-auto lg:grid lg:grid-cols-12 lg:gap-8">
		<div class="flex flex-col items-center justify-center lg:items-start lg:col-span-6">
			<div>
				<span
					class="inline-block px-4 py-2 font-medium text-purple-700 bg-purple-200 rounded-full shadow-md -rotate-1"
				>
					{tagline}
				</span>
			</div>
			<h1
				class="max-w-xl mt-4 text-center text-purple-900 sm:mt-5 lg:text-left h1 lg:max-w-none"
			>
				{title}
			</h1>
			<p class="max-w-2xl mt-3 text-xl leading-loose text-center text-purple-800 lg:text-left">
				{text}
			</p>
			<div class="flex flex-col items-center mt-8 overflow-hidden sm:flex-row">
				<a
					href="#time"
					class="text-lg font-semibold text-purple-900 bg-yellow-500 relative leading-normal inline-flex items-center justify-center px-8 py-3 duration-300 ease-in-out rounded-full outline-none px-8 py-3.5 hover:bg-yellow-600 group"
				>
					Conheça o time
				</a>
			</div>
		</div>
	</div>
</section>

