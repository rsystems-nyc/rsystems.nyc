import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Story — RSystems",
  alternates: { canonical: "https://rsystems.nyc/about/our-story" },
  description:
    "The story behind the name RSystems — a personal account of calculating a custom pulsar map, the mathematics behind it, and the philosophy of precision it represents.",
};

export default function OurStoryPage() {
  return (
    <main className="flex-1">

      {/* Hero */}
      <section className="bg-[#0F1117] text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <Link
            href="/about"
            className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-widest text-[#FE6305] mb-6 hover:text-[#FE6305]/75 transition-colors"
          >
            <span aria-hidden="true">←</span> About
          </Link>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight max-w-3xl">
            Our Origins: How Precision Became Our Philosophy
          </h1>
          <p className="mt-5 text-lg text-white/50 max-w-xl leading-relaxed">
            A story about precision, verification, and the cosmic perspective that informs everything we build.
          </p>
        </div>
      </section>

      {/* Essay Body */}
      <section className="bg-[#F4F2EF]">

        {/* Pulsar Map Image — top of story, no background */}
        <div className="mx-auto max-w-[60rem] px-4 sm:px-6">
          <Image
            src="/assets/Orig_Pulsar_Map_Art_tight_crop.svg"
            alt="The pulsar map calculated to pinpoint a birth moment in 1990"
            width={3346}
            height={3880}
            className="w-full h-auto"
          />
        </div>

        <div className="mx-auto max-w-2xl px-4 sm:px-6 pt-10 pb-16 lg:pb-24">

          <p className="text-base text-[#1A1A1A]/70 leading-relaxed">
            In 2014, I was at a hockey game with a friend Devin, talking about the Voyager
            spacecraft and Carl Sagan — someone I&apos;ve admired my entire life. He casually
            mentioned: &ldquo;I always thought it&apos;d be cool to get a tattoo of the pulsar map.&rdquo;
          </p>
          <p className="mt-5 text-base text-[#1A1A1A]/70 leading-relaxed">
            I&apos;d never considered it before. But the idea took off.
          </p>
          <p className="mt-5 text-base text-[#1A1A1A]/70 leading-relaxed">
            Weeks later, I asked if I could steal the idea. But I didn&apos;t want to just get
            the same pulsar map that Sagan and NASA had sent into the cosmos in 1977. I wanted
            to make it mine. More unique. More ambitious. A real challenge that would force me
            to learn new mathematics, do actual science, and push myself further than I&apos;d
            ever pushed before.
          </p>
          <p className="mt-5 text-base text-[#1A1A1A]/70 leading-relaxed">
            So I set out to calculate my own pulsar map — one that would pinpoint exactly where
            I was born, down to within hours or days, using the same principles that made the
            Voyager map a cosmic message for the future. A map that would remind me, every
            single day, of my exact place in space and time. A coordinate in the universe.
          </p>

          {/* The Math */}
          <h2 className="mt-16 text-xl sm:text-2xl font-bold text-[#1A1A1A] tracking-tight">
            The Math
          </h2>
          <p className="mt-5 text-base text-[#1A1A1A]/70 leading-relaxed">
            The foundation is the pulsar timing equation — a differential equation that
            describes how a pulsar&apos;s frequency changes over time:
          </p>
          <div className="mt-6 bg-[#0F1117] rounded-xl px-6 py-5 border border-white/[0.06]">
            <p className="font-mono text-sm text-white/75 leading-relaxed">
              f(t) = f₀ + ḟ·t + (1/2)f̈·t² + ...
            </p>
          </div>
          <p className="mt-5 text-sm text-[#1A1A1A]/50 leading-relaxed">
            Where f₀ is the baseline frequency, ḟ is the spin-down rate (how fast the pulsar
            is slowing), and t is time. Each pulsar decays at its own rate. That decay rate
            is constant — which means a given combination of pulsar frequencies can only occur
            at one moment in time. It&apos;s a cosmic timestamp.
          </p>
          <p className="mt-5 text-base text-[#1A1A1A]/70 leading-relaxed">
            The inverse problem is elegant: if I knew the exact frequencies of 14 pulsars at
            my birth moment, I could encode them into a map. That map would be unique to that
            moment. No other time in the universe would produce that exact combination of
            frequencies.
          </p>
          <p className="mt-5 text-base text-[#1A1A1A]/70 leading-relaxed">
            The challenge: I needed precision. Lots of it.
          </p>

          {/* The Data Problem */}
          <h2 className="mt-16 text-xl sm:text-2xl font-bold text-[#1A1A1A] tracking-tight">
            The Data Problem
          </h2>
          <p className="mt-5 text-base text-[#1A1A1A]/70 leading-relaxed">
            The original Drake/Voyager pulsar map used observational data from the 1970s. That
            data had limited significant figures — enough to pinpoint the launch within months,
            but not days. For my map, I wanted to do better, a lot better.
          </p>
          <p className="mt-5 text-base text-[#1A1A1A]/70 leading-relaxed">
            More significant figures in the pulsar data meant tighter constraints in my
            calculations. So I needed contemporary observational data, not 40-year-old archives.
          </p>
          <p className="mt-5 text-base text-[#1A1A1A]/70 leading-relaxed">
            I started with the 1990 Astronomical Almanac, which the US Navy published for
            celestial navigation. Better precision than the 70s, but when I ran the numbers,
            it still wasn&apos;t enough. The significant figures were insufficient. I was back to
            square one.
          </p>
          <p className="mt-5 text-base text-[#1A1A1A]/70 leading-relaxed">
            Then I found the Parkes Observatory in Australia — one of the world&apos;s leading
            pulsar research facilities. They maintain a publicly accessible database with
            high-precision timing data from active radio telescope observations. Real
            contemporary measurements with the decimal-place accuracy I needed.
          </p>
          <p className="mt-5 text-base text-[#1A1A1A]/70 leading-relaxed">
            I pulled data for the 14 pulsars from the Drake map, measurements taken on dates
            near my birth in 1990. Parkes didn&apos;t have a data point exactly on my birthday,
            but they had many nearby dates. I used statistical analysis across multiple
            observation dates to extrapolate backwards and forwards, quantifying the error
            bounds in each calculation. The result: a pulsar frequency fingerprint for my
            birth moment, accurate to within ±2 days.
          </p>
          <p className="mt-5 text-base text-[#1A1A1A]/70 leading-relaxed">
            But I still needed verification.
          </p>

          {/* The Verification */}
          <h2 className="mt-16 text-xl sm:text-2xl font-bold text-[#1A1A1A] tracking-tight">
            The Verification
          </h2>
          <p className="mt-5 text-base text-[#1A1A1A]/70 leading-relaxed">
            I wrote to every member of Columbia University&apos;s Astrophysics Department. I also
            reached out to scientists at the American Museum of Natural History and the Hayden
            Planetarium. Radio silence across the board. Six weeks of repeatedly unanswered
            emails. Then finally, the Columbia department chair responded: &ldquo;Office hours
            Tuesday 4–5. Come over and we&apos;ll do the math.&rdquo;
          </p>
          <p className="mt-5 text-base text-[#1A1A1A]/70 leading-relaxed">
            I brought him a bottle of bourbon and asked him to check my work. He refused —
            but offered something better. He said he&apos;d rederive the problem from scratch on
            the chalkboard, independently solving it to see if he arrived at the same answer.
          </p>
          <p className="mt-5 text-base text-[#1A1A1A]/70 leading-relaxed">
            We put up the differential equations. Started working through each term. Then I
            caught something: &ldquo;Shouldn&apos;t there be an f₀ term here?&rdquo;
          </p>
          <p className="mt-5 text-base text-[#1A1A1A]/70 leading-relaxed">
            He paused. &ldquo;No, that&apos;s accounted for —&rdquo; Then he stopped. &ldquo;Wait. Actually,
            you&apos;re right. There should be. Yes. There&apos;s the f₀ term.&rdquo;
          </p>

          <blockquote className="mt-8 border-l-2 border-[#FE6305] pl-6">
            <p className="text-base text-[#1A1A1A] leading-relaxed">
              That moment was everything. I wasn&apos;t just following along. I was contributing.
              I&apos;d mastered this enough to catch an astrophysicist&apos;s mistake. I understood
              the physics.
            </p>
          </blockquote>

          <p className="mt-8 text-base text-[#1A1A1A]/70 leading-relaxed">
            As we finished, his colleague walked by, poked his head in, and asked what we
            were working on. The chair explained. The colleague said, &ldquo;Oh, I actually have
            a program on my computer that calculates what those pulsars were flashing at any
            given time.&rdquo;
          </p>
          <p className="mt-5 text-base text-[#1A1A1A]/70 leading-relaxed">
            He ran the calculation, and sent me back the frequencies. They aligned perfectly
            with my results. Independent verification: my math was correct.
          </p>

          {/* The Art */}
          <h2 className="mt-16 text-xl sm:text-2xl font-bold text-[#1A1A1A] tracking-tight">
            The Art
          </h2>
          <p className="mt-5 text-base text-[#1A1A1A]/70 leading-relaxed">
            Now I had numbers. But I needed to visualize them.
          </p>
          <p className="mt-5 text-base text-[#1A1A1A]/70 leading-relaxed">
            I found a programmer in Florida who&apos;d built a tool that takes pulsar data, plots
            it as a map, and converts the frequencies to binary — using the hydrogen line
            frequency (~1420 MHz) as the scale reference. The hydrogen frequency is a
            universal constant, something any advanced civilization anywhere in the universe
            would recognize. It&apos;s the Rosetta Stone of cosmic messaging.
          </p>
          <p className="mt-5 text-base text-[#1A1A1A]/70 leading-relaxed">
            My friend Eri — an amazing artist — took the PNG output and recreated it in
            Illustrator as a vector image. Precise, scalable lines that could survive the
            translation to skin.
          </p>
          <p className="mt-5 text-base text-[#1A1A1A]/70 leading-relaxed">
            Then I started searching for a tattoo artist who specialized in fine linework.
            The first one I found turned me down flat. &ldquo;We know all about pulsar maps,&rdquo;
            they said. &ldquo;We do art, not science. And this is too small. It needs to be bigger.&rdquo;
          </p>
          <p className="mt-5 text-base text-[#1A1A1A]/70 leading-relaxed">
            They were right. I found a second artist who agreed to take it on, and we moved
            the placement from my bicep to my thigh — a bigger canvas, enough space to render
            the fine detail work properly.
          </p>
          <p className="mt-5 text-base text-[#1A1A1A]/70 leading-relaxed">
            After months of calculation, validation, art direction, and refinement — three
            hours of needle work — it was made permanent.
          </p>

          {/* Why It Matters */}
          <h2 className="mt-16 text-xl sm:text-2xl font-bold text-[#1A1A1A] tracking-tight">
            Why It Matters
          </h2>
          <p className="mt-5 text-base text-[#1A1A1A]/70 leading-relaxed">
            Every day I look at this tattoo running down my leg, I&apos;m reminded of something
            Carl Sagan understood better than almost anyone: we are made of star stuff,
            orbiting an unremarkable star in an unremarkable galaxy in an incomprehensibly
            vast universe. We are brief. We are small. And that brevity — that scarcity of
            time — makes every moment matter.
          </p>

          <blockquote className="mt-8 border-l-2 border-[#FE6305] pl-6">
            <p className="text-base text-[#1A1A1A] leading-relaxed">
              This is how I approach my work at RSystems. Not just the technical details,
              but the entire practice of engineering with intention. Rigor. Ownership.
              Getting it right.
            </p>
          </blockquote>

          <p className="mt-8 text-base text-[#1A1A1A]/70 leading-relaxed">
            I don&apos;t cut corners. I verify my work. I ask hard questions upfront. I push past
            the obvious solution to find the right one. I care about precision not as an
            aesthetic, but as a moral commitment — to the work, to the client, to doing
            something the way it deserves to be done.
          </p>
          <p className="mt-5 text-base text-[#1A1A1A]/70 leading-relaxed">
            Every project gets this same attention. Every decision is deliberate. Every
            system is built with the understanding that precision reflects character. That
            attention to detail is not a luxury — it&apos;s foundational.
          </p>
          <p className="mt-5 text-base text-[#1A1A1A]/70 leading-relaxed">
            Because time is finite. Our window to do meaningful work is small. We don&apos;t
            get to squander it on half-measures or compromises. We get to build things that
            matter, with the same rigor and intention that goes into mapping your place in
            the cosmos.
          </p>

          {/* Closing statement */}
          <div className="mt-12 bg-[#0F1117] text-white rounded-2xl px-8 py-8 sm:py-10">
            <p className="text-base sm:text-lg leading-relaxed text-white/75">
              Your infrastructure should be as precisely engineered as a pulsar map. It
              should be designed with intention. It should reflect the care and discipline
              of the people building it.
            </p>
            <p className="mt-5 text-xl sm:text-2xl font-bold text-white">
              That&apos;s RSystems.
            </p>
          </div>

          {/* CTA */}
          <div className="mt-14 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            <Link
              href="/prospective-client"
              className="inline-block text-sm font-medium bg-[#FE6305] text-white px-6 py-3 rounded hover:bg-[#FE6305]/85 transition-colors"
            >
              Work With Us
            </Link>
            <Link
              href="/about"
              className="inline-block text-sm text-[#1A1A1A]/40 hover:text-[#1A1A1A] transition-colors"
            >
              ← Back to About
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
