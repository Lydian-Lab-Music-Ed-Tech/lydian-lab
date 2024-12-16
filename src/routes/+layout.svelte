<script>
	import '../app.css';
	import Header from '../components/Header.svelte';
	let y = 0;
	let currentYear = new Date().getFullYear();
</script>

<Header {y} />
<slot />
<p id="copyright" class="text-xs text-center text-primary48 py-10">
	Copyright © {currentYear} LydianLab Music Education Technology
</p>

<svelte:window bind:scrollY={y} />
