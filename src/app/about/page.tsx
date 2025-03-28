// src/app/about/page.tsx

export default function AboutPage() {
    return (
      <main className="space-y-14 mt-10">
        <section>
          <h2 className="text-2xl font-semibold mb-2">Intro</h2>
          <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">
            I'm Jaydee - a Liberian-born Canadian who's passionate about
            building digital and physical products to solve pressing problems.
            I've spent the past few years launching startups, traveling the
            world, and supporting founders with strategy, product thinking, and
            partnerships.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">Background</h2>
          <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">
            I studied Biology and Economics at the University of Windsor, where
            I became the first international student elected president of the
            student union. Since then, I’ve worked in education, publishing,
            nonprofit, and tech — across Canada, the US, and Africa.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">Travels</h2>
          <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">
            I’ve spent the last few years exploring markets across Kenya, Ghana,
            Nigeria, Rwanda, Uganda, and Liberia. My goal has always been to
            connect local insights to scalable solutions — from co-living and
            commerce to education and logistics.
          </p>
        </section>
      </main>
    );
}