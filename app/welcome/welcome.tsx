export function Welcome() {
  return (
    <main className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <nav className="p-3 w-screen">
        <ol className="flex justify-around items-center">
          {/* Jedes Element bekommt eine eigene Animationsverzögerung */}
          <li className="flex flex-col items-center opacity-100 md:opacity-40 md:hover:opacity-100 cursor-pointer animate-spring"
              style={{ animationDelay: '0.1s' }}>
            <a href="#About_me" className="text-6xl">👨‍💻</a>
            <a href="#About_me" className="text-xl">About Me</a>
          </li>
          
          <li className="flex flex-col items-center opacity-100 md:opacity-40 md:hover:opacity-100 cursor-pointer animate-spring"
              style={{ animationDelay: '0.25s' }}>
            <a href="#Projekte" className="text-6xl">💻</a>
            <a href="#Projekte" className="text-xl">Projekte</a>
            <ol>
              <li><a href="#0" className="hidden">Work In Progress..</a></li>
              <li><a href="#0" className="hidden">Work In Progress..</a></li>
              <li><a href="#0" className="hidden">Work In Progress..</a></li>
            </ol>
          </li>
          
          <li className="flex flex-col items-center opacity-100 md:opacity-40 md:hover:opacity-100 cursor-pointer animate-spring"
              style={{ animationDelay: '0.40s' }}>
            <a href="#Kontakt" className="text-6xl">📧</a>
            <a href="#Kontakt" className="text-xl">Kontakt</a>
            <ol>
              <li><a href="#0" className="hidden">E-Mail</a></li>
              <li><a href="#0" className="hidden">Mobil</a></li>
              <li><a href="#0" className="hidden">Linkedin</a></li>
              <li><a href="#0" className="hidden">GitHub</a></li>
            </ol>
          </li>
        </ol>
      </nav>
    </main>
  );
}