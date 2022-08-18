import Theme from "./Theme"

export default function NavBar({ marca }) {
  return (
    <nav className="flex justify-between items-center mb-2">
      <p className="text-White font-sans text-3xl">{marca}</p>
      <Theme>

      </Theme>
    </nav>
  )
}