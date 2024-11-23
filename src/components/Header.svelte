<script lang="ts">
	export let y = 0;

	let tabs = [
		{ name: 'ABOUT', link: '#about' },
		{ name: 'SERVICES', link: '#services' },
		{ name: 'CONTACT', link: '#contact' }
	];
</script>

<header
	class={'sticky top-0 duration-200 px-6 flex justify-evenly items-center bg-transparent sm:justify-start' +
		(y > 0 ? ' pt-4 opacity-15' : ' pt-6 opacity-100')}
>
	<div class="flex gap-8 sm:gap-12">
		{#each tabs as tab, index}
			<a href={tab.link} class="duration-200 hover:text-primary28">
				<p>{tab.name}</p>
			</a>
		{/each}
	</div>
</header>
