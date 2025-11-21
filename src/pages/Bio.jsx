import Layout from '../components/Layout'

function Bio() {
  return (
    <Layout>
      <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6">Character Bio</h2>
      <div className="prose prose-invert max-w-3xl">
        <p className="text-white/90 leading-relaxed text-lg">
          The Southern Sinner Colt Johnson walks into every arena like he owns the place. He talks fast, hits hard, and reminds everyone you stand in his yard. He fights with sharp strikes and blunt force. He tells crowds you are watching someone above your level. He points to his record and his toughness to prove it. With unmatched promo ability, he tells rivals they lack his strength, skill, and attitude. He backs it up with wins, loud confidence that shuts people up.
        </p>
      </div>
    </Layout>
  )
}

export default Bio
