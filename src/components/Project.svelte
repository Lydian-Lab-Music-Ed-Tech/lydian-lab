<script lang="ts">
	export let project;
	export let index;
</script>

<div class="grid grid-cols-1 p-8 gap-12 md:grid-cols-[25%_40%_35%]">
	<div class="w-full h-auto border border-primary68 rounded-xl p-[5%] md:p-[10%]">
		<div class="w-full h-full relative flex items-center justify-center">
			<p class="absolute top-0 left-0 text-primary60">0{index + 1}.</p>
			<h3
				class="font-light text-xs text-center text-primary70 sm:text-sm md:text-md lg:text-base xl:text-lg"
			>
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
			class="p-4 sm:p-6 md:p-8 aspect-auto flex flex-col gap-4 rounded-xl border border-solid border-primary68 group cursor-pointer hover:border-primary100 duration-200"
			aria-label={`Link to ${project.name}`}
		>
			<p class="text-primary98 sm:text-xs md:text-sm">{project.description}</p>
			<div>
				<p class="text-primary78">tech-stack:</p>
				<strong class="text-primary78">{project.technologies}</strong>
			</div>
			<div class="flex justify-between">
				<div class="button-div">
					<p class="relative z-4">View code</p>
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
		color: var(--primary100);
		font-weight: 600;
	}

	.button-div:hover::after {
		transform: translateX(100%);
	}
</style>
