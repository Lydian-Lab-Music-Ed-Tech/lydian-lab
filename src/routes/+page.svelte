<script>
	import Title from '../components/Title.svelte';
</script>

<main>
	<div class="z-[-1] my-8">
		<Title />
	</div>
	<div id="section-list">
		<section id="about" class="bg-primary94 py-4">
			<h1 class="text-4xl text-center py-8">About</h1>
			<div class="w-1/2 mx-auto">
				<p>
					We are a small web development agency specializing in building custom solutions for our
					clients' online needs. Our focus is on crafting user-friendly applications with modern
					technologies for clients in music education.<br />
					<br />We recently partnered with an acclaimed jazz camp to develop a web application
					enabling prospective students to take their music theory placement exams online. Building
					features for musicians and music educators is our specialty.<br />
					<br />Our main tech stack relies on TypeScript, Next.js, Firebase, and Tailwind CSS to
					rapidly develop secure, scalable websites and apps. We are also experienced in
					incorporating third-party API integrations, authentication, databases, and other business
					logic. We work closely with each client to deeply understand their needs before
					architecting customized solutions. Bottom line, we deliver. Get in touch to transform your
					music education web goals into reality.
				</p>
				<div class="revealing-image relative grid place-items-center py-8">
					<img
						class="object-cover z-[2] max-h-[45vh]"
						src={'images/Kasey-Knudsen-Preferred.jpg'}
						alt="Kasey Knudsen profile headshot"
					/>
				</div>
			</div>
		</section>
		<section id="services" class="bg-primary97 py-4">
			<h1 class="text-4xl text-center py-8">Services</h1>
			<div class="w-1/2 mx-auto">
				<p>
					It is important to take care of the patient, to be followed by the patient, but it will
					happen at such a time that there is a lot of work and pain. I hate that the easy way out
					is the mass of life. I don't want to invest my time in revenge. It would be nice to have
					two, but that's a bad thing for developers. At the target, it was an advantage for the
					students. No vehicles from the arc. The price that has suspended in is before the. It is
					convenient, but it needs to be taken care of. Laughter, but the hatred of, for it flatters
					the life of the poor. I am free now that the result is sometimes a lot of real estate. Eu
					ugly needs the price of a large bronze quiver and invests the vestibule. The earth does
					not flatter the employee now, for neither does the god now. My yard needs more lawns. The
					pot is not just a cartoon. He wanted the chocolate in the said not to be followed by a
					was. Hate is easy to be surprised by the mass of life's torture sauce. Sometimes the lake
					hangs in the throat.
				</p>
			</div>
		</section>
		<section id="contact" class="bg-primary94 py-4">
			<h1 class="text-4xl text-center py-8">Contact</h1>
			<div class="w-1/2 mx-auto">
				<p>
					It is important to take care of the patient, to be followed by the patient, but it will
					happen at such a time that there is a lot of work and pain. I hate that the easy way out
					is the mass of life. I don't want to invest my time in revenge. It would be nice to have
					two, but that's a bad thing for developers. At the target, it was an advantage for the
					students. No vehicles from the arc. The price that has suspended in is before the. It is
					convenient, but it needs to be taken care of. Laughter, but the hatred of, for it flatters
					the life of the poor. I am free now that the result is sometimes a lot of real estate. Eu
					ugly needs the price of a large bronze quiver and invests the vestibule. The earth does
					not flatter the employee now, for neither does the god now. My yard needs more lawns. The
					pot is not just a cartoon. He wanted the chocolate in the said not to be followed by a
					was. Hate is easy to be surprised by the mass of life's torture sauce. Sometimes the lake
					hangs in the throat.
				</p>
			</div>
		</section>
	</div>
</main>

<style>
	#section-list section {
		animation: linear animate-in-and-out;
		animation-timeline: view();
	}

	.revealing-image {
		view-timeline-name: --revealing-image;
		view-timeline-axis: block;
		animation: linear reveal both;
		animation-timeline: --revealing-image;
		animation-range: entry 25% cover 50%;
	}

	@keyframes animate-in-and-out {
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
</style>
