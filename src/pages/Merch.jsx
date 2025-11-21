import Layout from '../components/Layout'

const merchUrl = 'https://brainbustertees.com/wrestlers/colt-johnson/'

function Merch() {
  return (
    <Layout>
      <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6">Merchandise</h2>
      <div className="p-6 rounded-xl border border-[#EC4899]/30 bg-[#EC4899]/10 max-w-3xl">
        <p className="text-white/90 mb-4">Official Colt Johnson apparel and accessories.</p>
        <a
          href={merchUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-block px-6 py-3 rounded-md font-semibold bg-[#EAB308] text-black hover:brightness-110 transition"
        >
          Browse Merch
        </a>
      </div>
    </Layout>
  )
}

export default Merch
