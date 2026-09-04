import { useState } from 'react'

function MobileMenu() {
  const [open, setOpen] = useState(false)

  return (
    <div className="md:hidden">

      <button
        onClick={() => setOpen(!open)}
        className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center text-xl"
        aria-label="Toggle menu"
      >
        {open ? '✕' : '☰'}
      </button>

      {open && (
        <div className="absolute top-20 left-0 right-0 bg-[#f8f6f1] border-b border-black/10 shadow-lg">
          
          <div className="px-6 py-6 space-y-4">

            <a
              href="#about"
              onClick={() => setOpen(false)}
              className="block font-semibold"
            >
              About
            </a>

            <a
              href="#skills"
              onClick={() => setOpen(false)}
              className="block font-semibold"
            >
              Skills
            </a>

            <a
              href="#projects"
              onClick={() => setOpen(false)}
              className="block font-semibold"
            >
              Projects
            </a>

            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="block font-semibold"
            >
              Contact
            </a>

          </div>

        </div>
      )}

    </div>
  )
}

export default MobileMenu