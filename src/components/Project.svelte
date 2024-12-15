<script lang="ts">
	export let project;
	export let index;
</script>

<div class="grid grid-cols-1 p-8 gap-12 md:grid-cols-[20%_30%_40%]">
	<div class="w-full border border-primary20 rounded-xl max-h-64 p-[5%] md:p-[10%]">
		<div class="w-1/2 h-1/2 relative flex items-center justify-center">
			<p class="absolute top-0 left-0 text-primary60">0{index + 1}.</p>
			<h3 class="font-light text-xs text-center text-primary70 sm:text-sm md:text-base lg:text-lg">
				{project.name}
			</h3>
		</div>
	</div>
	<a
		href={project.url}
		target="_blank"
		class="hover:scale-110 duration-200"
		aria-label={project.url}
	>
		<img
			class="object-cover rounded-xl"
			src={project.image}
			alt={project.name}
			aria-label={`Cover image of ${project.name}`}
		/>
	</a>
	<div>
		<a
			href={project.href}
			target="_blank"
			class="p-4 sm:p-6 md:p-8 aspect-auto flex flex-col gap-4 rounded-xl border border-solid border-primary28 group cursor-pointer hover:border-primary48 duration-200"
			aria-label={`Link to ${project.name}`}
		>
			<div
				class="bg-primary08 grid place-items-center px-4 text-5xl md:text-6xl -mt-10 sm:-mt-12 md:-mt-14 lg:-mt-16 mx-auto duration-200"
			>
				<i class={project.icon}></i>
			</div>

			<p class="text-primary68 sm:text-xs md:text-sm">{project.description}</p>
			<div>
				<p class="text-primary38">tech-stack:</p>
				<strong class="text-primary68">{project.technologies}</strong>
			</div>
			<div class="flex justify-between">
				<div class="button-div">
					<p class="relative z-4">View code &rarr;</p>
				</div>
			</div>
		</a>
	</div>
</div>

<style>
	.button-div {
		margin-left: auto;
		padding: 0.75rem;
		border-radius: 0.75rem;
		cursor: pointer;
		transition-duration: 200ms;
		position: relative;
		overflow: hidden;
	}

	.button-div::after {
		content: '';
		position: absolute;
		top: 0;
		height: 100%;
		right: 100%;
		width: 102%;
		background-color: var(--primary68);
		transition-duration: 300ms;
		z-index: -1;
	}

	.button-div:hover {
		color: var(--primary18);
		font-weight: 600;
	}

	.button-div:hover::after {
		transform: translateX(100%);
	}
</style>
