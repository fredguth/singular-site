<script>
	import { Icon, Chat, LocationMarker, Phone } from 'svelte-hero-icons';
	export let address;
	export let phone;
	export let whatsapp;
	export let vertical=false;
	$:vclass=(vertical ? 'flex-col' : '')
	let via = {
		address: [LocationMarker, 'Endereço'],
		phone: [Phone, 'Tel'],
		whatsapp: [Chat, 'WhatsApp']
	};
	let colors = ['bg-rose-200', 'bg-yellow-200', 'bg-green-200'];
  $: values = [address, phone, whatsapp]

</script>
<ul class="flex {vclass} m-8 ">
	{#each Object.entries(via) as [p, v], index}
		<li class="flex flex-shrink max-w-xs m-2">
			<div>
				<span class="flex items-center justify-center {colors[index]} rounded-2xl w-11 h-11">
					<Icon src={v[0]} class="w-6 h-6 text-purple-700" />
				</span>
			</div>
			<div class="flex-1 ml-3 xl:ml-4">
				<h5 class="flex items-center text-base font-semibold text-purple-900">
					{v[1]}
				</h5>
				<p class="mt-0.5 text-sm text-purple-800 leading-relaxed text-opacity-90">
					{values[index]}
				</p>
			</div>
		</li>
	{/each}
</ul>
