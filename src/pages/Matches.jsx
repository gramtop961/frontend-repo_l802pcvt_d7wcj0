import Layout from '../components/Layout'

const matches = [
  'https://youtu.be/jAGf1OtL89w?si=egCFXYByfA4VgY_U',
  'https://youtu.be/95rpsCWJRww?si=KzE4o3s_C3c_thzM',
  'https://youtu.be/bnICOE0U-II?si=5BIrIU_1MFPdMwLt',
  'https://youtu.be/QxF046nC7A8?si=St7O1tX9HXmGnzf_',
  'https://youtu.be/64hAwwwNADk?si=AukkcHfczFVmI5KP',
]

function Matches() {
  return (
    <Layout>
      <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6">Matches</h2>
      <p className="text-white/80 mb-6 max-w-3xl">Dive into a selection of matches showcasing speed, power, and presence. Links open in a new tab.</p>
      <ul className="grid md:grid-cols-2 gap-4">
        {matches.map((url, i) => (
          <li key={i} className="p-4 rounded-lg border border-white/10 bg-white/5">
            <a
              href={url}
              target="_blank"
              rel="noreferrer"
              className="text-[#60A5FA] hover:underline break-all font-semibold"
            >
              Watch Match {i + 1}
            </a>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export default Matches
