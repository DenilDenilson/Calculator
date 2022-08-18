import Theme from "./Theme"

export default function NavBar({ marca }) {
  return (
    <nav className="flex justify-between items-center mb-2">
      <div className="text-White font-sans text-3xl">{marca}</div>
      <Theme>

      </Theme>
    </nav>
  )
}