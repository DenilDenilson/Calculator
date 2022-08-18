export default function Sreen() {
  const number = parseInt('51254125')
  let number_display = number.toLocaleString('en-US')
  return (
    <div className="text-White bg-VDDB_screen_background h-[4.5rem] font-sans my-4 rounded-lg flex items-center justify-end text-3xl p-5">
      {number_display}
    </div>
  )
}