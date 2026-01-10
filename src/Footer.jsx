export function Footer() {
  return (
    <footer className="bg-pm-black text-pm-white py-8">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="font-bebas text-2xl md:text-3xl mb-2">Joaquín Marraccini | Director de Fotografía</h2>
        <p className="text-sm md:text-base text-pm-gray">
          Instagram:{' '}
          <a href="https://www.instagram.com/joaco_marra/" target="_blank" rel="noopener noreferrer" className="underline hover:text-pm-white ml-1">
            @joaco_marra
          </a>
        </p>
        <p className="text-sm md:text-base mt-1">
          <a href="mailto:marraccinijoaquin@gmail.com" className="underline hover:text-pm-white">marraccinijoaquin@gmail.com</a>
        </p>
        <p className="text-xs text-pm-gray mt-4">© 2025 | Desarrollo & Diseño por{' '}
          <a href="https://github.com/Maty910" target="_blank" rel="noopener noreferrer" className="underline hover:text-pm-white">@Maty910</a>
        </p>
      </div>
    </footer>
  )
}

export default Footer