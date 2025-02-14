<script lang="ts">
	import '../app.css';
	import Header from '../components/Header.svelte';
	import type { Snippet } from 'svelte';
	import Icon from '../components/Icon.svelte';

	interface Props {
		children?: Snippet;
	}

	let { children }: Props = $props();
	let y = $state(0);
	let currentYear = new Date().getFullYear();
</script>

<Header {y} />
{@render children?.()}
<div class="flex justify-between px-6">
	<div class="w-[24px]"></div>
	<p id="copyright" class="text-xs text-center text-primary48 py-10">
		Copyright © {currentYear} LydianLab Music Education Technology
	</p>
	<button
		class="text-xs text-primary48"
		onclick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
		><Icon name="arrow-up" className="fill-current" size="24" /></button
	>
</div>

<svelte:window bind:scrollY={y} />
