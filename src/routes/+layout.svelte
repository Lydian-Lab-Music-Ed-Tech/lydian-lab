<script>
	import '../app.css';
	import Header from '../components/Header.svelte';
	let y = 0;
</script>

<Header {y} />
<slot />

<svelte:window bind:scrollY={y} />
