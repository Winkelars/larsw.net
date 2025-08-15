import './App.css'

const emojiCSS = "flex flex-col items-center animate-spring"
const itemCSS = "min-h-dvh cursor-pointer not-hover:opacity-80 content-center"
function App() {
  return (
    <nav className="w-screen grid grid-cols-3 content-center">
      <a href="#AboutMe" class={itemCSS}>
            <div className={emojiCSS}
                style={{ animationDelay: '0.1s' }}>
                <span className="text-6xl">👨‍💻</span>
                <span className="text-xl">About Me</span>
            </div>
      </a>

      <a href="#Projekte" class={itemCSS}>
            <div className={emojiCSS}
                style={{ animationDelay: '0.25s' }}>
                <span className="text-6xl">💻</span>
                <span className="text-xl">Projekte</span>
            </div>
      </a>

      <a href="#Kontakt" class={itemCSS}>
            <div className={emojiCSS}
                style={{ animationDelay: '0.40s' }}>
                <span className="text-6xl">📧</span>
                <span className="text-xl">Kontakt</span>
            </div>
      </a>
    </nav>
  )
}

            
            

export default App