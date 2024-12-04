<script>
	import Title from '../components/Title.svelte';
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
					class="w-full h-full min-h-[700px] bg-primary94 dark:bg-primary48 skewed-background-about"
				></div>
			</div>

			<!-- Content with working animations -->
			<div class="relative z-10">
				<h1 class="text-xl font-medium tracking-wider text-center py-8">ABOUT US</h1>
				<div class="w-3/4 mx-auto">
					<div class="flex justify-between gap-24">
						<p class="text-base font-bold tracking-wide leading-7">
							Hello, we are LydianLab.<br />
							<br />A web development agency specializing in building music exam web applications.
						</p>

						<p class="text-sm font-normal tracking-normal leading-7">
							Our focus is on crafting user-friendly applications with modern technologies for
							clients in music education.<br />
							<br />We recently partnered with an acclaimed jazz camp to develop a web application
							enabling prospective students to take their music theory placement exams online.
							Building features for musicians and music educators is our specialty.<br />
							<br />Our main tech stack relies on TypeScript, Next.js, Firebase, and Tailwind CSS to
							rapidly develop secure, scalable websites and apps. We are also experienced in
							incorporating third-party API integrations, authentication, databases, and other
							business logic. We work closely with each client to deeply understand their needs
							before architecting customized solutions. Get in touch to transform your music
							education web goals into reality.
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
		<section id="services" class="relative overflow-hidden py-24 h-[700px]">
			<div class="absolute inset-0">
				<div
					class="w-full h-full min-h-[700px] bg-primary97 dark:bg-primary48 skewed-background-services"
				></div>
			</div>
			<div class="relative">
				<div class="w-1/4 mx-auto">
					<h1 class="text-xl font-medium tracking-wider py-10">SERVICES</h1>
					<p class="text-base font-normal tracking-wide leading-7">
						We build custom music exam web applications. If you are a music educator or a small
						business owner who needs this type of service, please reach out to us for a custom order
						and quote.
					</p>
				</div>
			</div>
		</section>
		<section id="contact" class="relative overflow-hidden py-24 h-[700px]">
			<div class="absolute inset-0">
				<div
					class="w-full h-full min-h-[700px] bg-primary94 dark:bg-primary48 skewed-background-contact"
				></div>
			</div>
			<div class="relative">
				<div class="w-1/4 mx-auto">
					<h1 class="text-xl font-medium tracking-wider py-10">CONTACT</h1>
					<p class="text-base font-normal tracking-wide leading-7">
						lydianlabstech [at] gmail [dot] com
					</p>
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
		clip-path: polygon(0 0%, 100% 5%, 100% 100%, 0% 95%);
		margin-top: 400px;
	}
	/* #section-list section {
		animation: linear animate-in-and-out;
		animation-timeline: view();
	} */

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

	/* @keyframes animate-in-and-out {
		entry 0% {
			opacity: 0;
			transform: translateY(100%);
		}
		entry 100% {
			opacity: 1;
			transform: translateY(0);
		}

		exit 0% {
			opacity: 1;
			transform: translateY(0);
		}
		exit 100% {
			opacity: 0;
			transform: translateY(-100%);
		}
	} */
</style>
