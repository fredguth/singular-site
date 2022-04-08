<script>
	import Logo from './_Logo.svelte';
	import ContactUs from './_ContactUs.svelte';
	// import { Heart } from 'svelte-hero-icons';
</script>

<div class=" bg-yellow-100 ">
	<footer class="px-4 pt-8 space-y-8 divide-y sm:pt-8 sm:px-6 lg:px-8 divide-purple-400/20" />

	<div
		class="grid max-w-md mx-auto gap-y-8 sm:gapy-12 sm:gap-x-8 md:gap-x-12 sm:max-w-none lg:max-w-screen-2xl sm:grid-cols-2 lg:grid-cols-11 lg:gap-8 xl:gap-12"
	>
		<div class="flex flex-col lg:mx-auto lg:col-span-4">
			<Logo />
		</div>
		<div class="flex-shrink sm:order-3 lg:order-none lg:col-span-2"></div>
		<div class="flex-shrink sm:order-4 lg:order-none lg:col-span-2"></div>
		<div class="sm:order-2 lg:order-none lg:col-span-3 lg:mx-auto ">
			<h6 class="relative text-xl font-bold tracking-wide text-purple-900">
				<span class="relative z-20">Contact us</span>
				<span
					class="absolute left-0 z-10 w-12 h-1 rounded-lg bg-gradient-to-r from-yellow-400 to-yellow-500 -bottom-1"
				/>
			</h6>
			<ContactUs
				class="flex flex-col mt-6 space-y-5"
				vertical="true"
				horizontal="false"
				address="Liberty Mall, Torre B, Sala 807 - Asa Norte, Brasília - DF, 70712-903"
				phone="+55 (61) 3024-9058"
				whatsapp="+55 (61) 98241-9009"
			/>
		</div>
	</div>
	<div
		class="pl-8 pr-8 flex flex-col justify-between max-w-md py-8 mx-auto sm:flex-row sm:max-w-none lg:max-w-screen-2xl"
	>
		<span class="text-sm text-purple-800/90">
			© 2022 Singular Psiquiatria Personalizada Ltda. Todos os direitos reservados.
		</span>
		<p class="mt-0.5 flex items-center text-sm text-purple-800/90">Feito com amor para Bubu.</p>
	</div>
</div>
