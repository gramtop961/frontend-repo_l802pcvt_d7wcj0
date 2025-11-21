import { Link, useLocation } from 'react-router-dom'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/bio', label: 'Bio' },
  { to: '/matches', label: 'Matches' },
  { to: '/merch', label: 'Merch' },
]

function Header() {
  const { pathname } = useLocation()

  return (
    <header className="w-full border-b border-[#EAB308]/30 bg-black/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="group">
          <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight">
            <span className="text-white">Colt</span>{' '}
            <span className="text-[#EAB308]">Johnson</span>
          </h1>
          <span className="sr-only">Colt Johnson</span>
        </Link>
        <nav className="flex items-center gap-2 md:gap-4">
          {navItems.map((item) => {
            const active = pathname === item.to
            return (
              <Link
                key={item.to}
                to={item.to}
                className={[
                  'px-3 py-2 rounded-md text-sm font-semibold transition-colors',
                  active
                    ? 'bg-[#EAB308] text-black'
                    : 'text-white/90 hover:text-white hover:bg-white/10',
                ].join(' ')}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>
      </div>
    </header>
  )
}

export default Header
