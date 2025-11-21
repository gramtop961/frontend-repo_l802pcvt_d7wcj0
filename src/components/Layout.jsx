import Header from './Header'

function Layout({ children }) {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_10%,rgba(59,130,246,0.15),transparent_30%),radial-gradient(circle_at_80%_20%,rgba(236,72,153,0.12),transparent_30%),radial-gradient(circle_at_50%_80%,rgba(234,179,8,0.12),transparent_30%)]" />
      <Header />
      <main className="max-w-6xl mx-auto px-4 py-10">{children}</main>
      <footer className="mt-16 border-t border-white/10 py-8 text-center text-sm text-white/70">
        © {new Date().getFullYear()} Colt Johnson. All Rights Reserved.
      </footer>
    </div>
  )
}

export default Layout
