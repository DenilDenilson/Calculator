import Theme from "./Theme"

export default function NavBar({ marca }) {
  return (
    <nav className="flex justify-between">
      <div className="text-White font-sans">{marca}</div>
      <Theme>

      </Theme>
    </nav>
  )
}