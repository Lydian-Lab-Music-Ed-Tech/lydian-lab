<script lang="ts">
	interface Props {
		y?: number;
	}

	let { y = 0 }: Props = $props();

	let tabs = [
		{ name: 'ABOUT', link: '#about' },
		{ name: 'PROJECTS', link: '#projects' },
		{ name: 'CONTACT', link: '#contact' }
	];
</script>

<header
	class={'sticky top-0 duration-200 px-6 flex justify-evenly items-center bg-transparent sm:justify-start' +
		(y > 0 ? ' pt-4 opacity-15' : ' pt-6 opacity-100')}
>
	<div class="flex gap-8 sm:gap-12">
		{#each tabs as tab, index}
			<a
				href={tab.link}
				class="text-sm md:text-md lg:text-lg text-primary18 font-medium tracking-wide duration-200 text-primary00 dark:text-primary94 hover:text-primary48"
			>
				<p>
					{tab.name}
				</p>
			</a>
		{/each}
	</div>
</header>
