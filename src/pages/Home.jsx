import Layout from '../components/Layout'

function Home() {
  return (
    <Layout>
      <section className="text-center">
        <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">
          <span className="text-white">The</span>{' '}
          <span className="text-[#EAB308]">Southern Sinner</span>{' '}
          <span className="text-white">Has Arrived</span>
        </h2>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-white/80">
          Fast talk. Heavy hits. Unshakable confidence. Welcome to the yard of Colt Johnson.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="/matches" className="px-6 py-3 rounded-md font-semibold bg-[#60A5FA] text-black hover:brightness-110 transition">Watch Matches</a>
          <a href="/merch" className="px-6 py-3 rounded-md font-semibold bg-[#EC4899] text-black hover:brightness-110 transition">Shop Merch</a>
        </div>
      </section>

      <section className="mt-16 grid md:grid-cols-3 gap-6">
        <div className="p-6 rounded-xl border border-white/10 bg-white/5">
          <h3 className="text-xl font-bold text-[#60A5FA] mb-2">Sharp Strikes</h3>
          <p className="text-white/80">Speed and precision that split defenses and leave rivals guessing.</p>
        </div>
        <div className="p-6 rounded-xl border border-white/10 bg-white/5">
          <h3 className="text-xl font-bold text-[#EAB308] mb-2">Blunt Force</h3>
          <p className="text-white/80">Power that silences crowds and puts opponents on the mat.</p>
        </div>
        <div className="p-6 rounded-xl border border-white/10 bg-white/5">
          <h3 className="text-xl font-bold text-[#EC4899] mb-2">Elite Presence</h3>
          <p className="text-white/80">A voice on the mic and a record in the ring that proves the point.</p>
        </div>
      </section>
    </Layout>
  )
}

export default Home
