<script>
	import Title from '../components/Title.svelte';
	import Project from '../components/Project.svelte';
	import projects from '$lib/projects';
	import { faGithub } from '@fortawesome/free-brands-svg-icons';
</script>

<main>
	<div class="flex items-end my-8">
		<Title />
	</div>
	<div id="section-list" class="flex flex-col -space-y-16 text-primary00 dark:text-primary94">
		<section id="about" class="relative py-24">
			<!-- Skewed background with contained overflow -->
			<div class="absolute inset-0 overflow-hidden">
				<div
					class="w-full h-full min-h-[700px] bg-primary88 dark:bg-primary48 skewed-background-about"
				></div>
			</div>

			<!-- Content with working animations -->
			<div class="relative z-10">
				<h1 class="text-xl font-medium tracking-wider text-center py-8">ABOUT US</h1>
				<div class="w-3/4 mx-auto">
					<div class="flex flex-col md:flex-row justify-between gap-12 md:gap-24">
						<p class="text-base font-bold tracking-wide leading-7">
							Hello, we are LydianLab.<br />
							<br />A web development agency specializing in building music exam web applications.
						</p>

						<p class="text-sm font-normal tracking-normal leading-7">
							At LydianLab, our focus is on crafting user-friendly custom web applications with
							modern technologies for clients in music education.<br />
							<br />Our current tech stack utilizes TypeScript, Next.js, Firebase, and Tailwind CSS
							to rapidly develop secure, scalable websites and apps. We are also experienced in
							incorporating third-party API integrations, authentication, databases, and other
							business logic. We work closely with each client to deeply understand their needs
							before architecting tailored solutions.<br />
							<br />Kasey Knudsen is a San Francisco-based software developer, saxophonist, composer
							& educator. She earned her Bachelor of Arts in Jazz Composition from Berklee College
							of Music in 2002. You can learn more about her background as a musician
							<a
								href="https://kaseyknudsenmusic.com/"
								class="text-primary98 underline font-bold hover:text-primary68 duration-200"
								target="_blank">here</a
							>.<br />
							<br />Brett Eastman is a San Francisco-based software developer, drummer, & composer.
							He earned his Bachelor of Music in Composition from San Francisco State University in
							2006. You can learn more about his background as a musician
							<a
								href="https://brettaustineastman.com"
								class="text-primary98 underline font-bold hover:text-primary68 duration-200"
								target="_blank">here</a
							>
							and his background as a software developer
							<a
								href="https://bretteastman.dev"
								class="text-primary98 underline font-bold hover:text-primary68 duration-200"
								target="_blank">here</a
							>.
						</p>
					</div>
					<div class="revealing-image relative grid place-items-center py-8">
						<img
							class="object-cover max-h-[45vh]"
							src={'images/Kasey-Knudsen-Preferred-BW.jpeg'}
							alt="Kasey Knudsen profile headshot"
						/>
					</div>
					<div class="revealing-image relative grid place-items-center py-8">
						<img
							class="object-cover max-h-[45vh]"
							src={'images/Brett-Potrero-BW.jpeg'}
							alt="Brett Eastman profile headshot"
						/>
					</div>
				</div>
			</div>
		</section>
		<section id="projects" class="relative overflow-hidden py-24 h-full">
			<div class="absolute inset-0">
				<div
					class="w-full h-full min-h-[700px] bg-primary88 dark:bg-primary48 skewed-background-services"
				></div>
			</div>
			<div class="relative">
				<div class="w-3/4 sm:w-2/3 lg:w-1/2 xl:w-1/3 mx-auto">
					<h1 class="text-xl font-medium tracking-wider py-10 text-center">PROJECTS</h1>
					<p class="text-xs sm:text-sm lg:text-md font-light tracking-wide leading-7">
						At LydianLab, we build custom music exam web applications. Get in touch to transform
						your music education web goals into reality.
					</p>
				</div>
				<div class="w-full mx-auto">
					{#each projects as project, index}
						<Project {project} {index} />
					{/each}
				</div>
			</div>
		</section>
		<section id="contact" class="relative overflow-hidden py-24 min-h-[500px]">
			<div class="absolute inset-0">
				<div
					class="w-full h-full min-h-[700px] bg-primary88 dark:bg-primary48 skewed-background-contact"
				></div>
			</div>
			<div class="relative">
				<div class="w-3/4 sm:w-1/2 lg:w-1/3 xl:w-1/4 mx-auto">
					<h1 class="text-xl font-medium tracking-wider py-10 text-center">CONTACT</h1>
					<div class="text-base text-center font-normal tracking-wide leading-7">
						lydianlabstech
						<p class="font-bold text-primary38">[at]</p>
						gmail
						<p class="font-bold text-primary38">[dot]</p>
						com
						<div class="mt-8">
							<a
								href="https://github.com/Lydian-Lab-Music-Ed-Tech"
								target="_blank"
								rel="noopener noreferrer"
								class="inline-block hover:text-primary68 duration-200"
								aria-label="Github icon"
							>
								<svg class="w-8 h-8" viewBox="0 0 496 512"
									><path fill="currentColor" d={faGithub.icon[4].toString()}></path></svg
								>
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	</div>
</main>

<style>
	.skewed-background-about {
		clip-path: polygon(0 0%, 100% 5%, 100% 100%, 0% 95%);
	}

	.skewed-background-services {
		clip-path: polygon(0 0%, 100% 5%, 100% 100%, 0% 95%);
		margin-top: 400px;
	}

	.skewed-background-contact {
		clip-path: polygon(0 8%, 100% 0%, 100% 100%, 0% 100%);
		margin-top: 250px;
	}

	.revealing-image {
		view-timeline-name: --revealing-image;
		view-timeline-axis: block;
		animation: linear reveal both;
		animation-timeline: --revealing-image;
		animation-range: entry 25% cover 40%;
	}

	@keyframes reveal {
		from {
			opacity: 0;
			clip-path: inset(40% 20% 40% 20%);
		}
		to {
			opacity: 1;
			clip-path: inset(0% 0% 0% 0%);
		}
	}

	#section-list section {
		animation: linear animate-in-and-out;
		animation-timeline: view();
	}

	@keyframes animate-in-and-out {
		entry 0% {
			opacity: 0;
			transform: translateY(50%);
		}
		entry 100% {
			opacity: 1;
			transform: translateY(0);
		}

		/* exit 0% {
			opacity: 1;
			transform: translateY(0);
		}
		exit 100% {
			opacity: 0;
			transform: translateY(-100%);
		} */
	}
</style>
