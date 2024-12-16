<script lang="ts">
	export let project;
	export let index;
</script>

<div class="grid grid-cols-1 p-8 gap-16 md:gap-12 lg:grid-cols-[25%_40%_35%]">
	<div class="w-full h-full lg:h-1/2 border border-primary68 rounded-xl p-[5%] md:p-[10%]">
		<div class="w-full h-full relative flex items-center justify-center">
			<p class="opacity-0 sm:opacity-100 absolute top-0 left-0 text-primary60">0{index + 1}.</p>
			<h3 class="font-light text-sm text-center text-primary70 sm:text-md lg:text-base xl:text-lg">
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
			class="p-4 sm:p-6 md:p-8 aspect-auto flex flex-col gap-4 rounded-xl border border-solid border-primary68 group cursor-pointer hover:border-primary38 dark:hover:border-primary100 duration-200"
			aria-label={`Link to ${project.name}`}
		>
			<p class="text-primary98 sm:text-xs md:text-sm">{project.description}</p>
			<div>
				<p class="text-primary18 dark:text-primary78">tech-stack:</p>
				<strong class="text-primary38 dark:text-primary78">{project.technologies}</strong>
			</div>
			<div class="flex justify-between">
				<div
					class="text-primary08 dark:text-primary78 ml-auto p-3 font-bold text-sm hover:text-primary48 dark:hover:text-primary100 duration-200"
				>
					<p class="relative z-4">View code</p>
				</div>
			</div>
		</a>
	</div>
</div>
