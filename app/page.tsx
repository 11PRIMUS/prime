"use client"

import { useState, type FormEvent, useEffect } from "react"
import { Github, Linkedin, Mail, X } from "lucide-react"

export default function Page() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [sending, setSending] = useState(false)
  const [sentStatus, setSentStatus] = useState<null | "success" | "error">(null)
  const [typedText, setTypedText] = useState("")
  const fullText = "whoami | experience.txt | projects.ls | contact_me.sh"

  // Typing animation effect
  useEffect(() => {
    if (typedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1))
      }, 100)
      return () => clearTimeout(timeout)
    }
  }, [typedText])

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setSending(true)
    
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      })
      
      if (response.ok) {
        setSentStatus("success")
        // Reset form fields
        setName("")
        setEmail("")
        setMessage("")
      } else {
        setSentStatus("error")
      }
    } catch (error) {
      setSentStatus("error")
      console.error('Failed to send message:', error)
    } finally {
      setSending(false)
      // Reset status after 5 seconds
      setTimeout(() => setSentStatus(null), 5000)
    }
  }

  return (
    <div className="min-h-screen bg-black text-green-400 font-mono">
      {/* Terminal window header */}
      <div className="bg-zinc-900 border-b border-zinc-700 p-2 flex items-center gap-2">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="flex-1 text-center text-sm text-zinc-400">PRIMUS@portfolio ~ /home/user</div>
      </div>

      <main className="p-4 md:p-8 max-w-2xl mx-auto">
        <div className="space-y-6">
          {/* Command input animation */}
          <div className="bg-zinc-900/50 p-4 rounded-md border border-zinc-800">
            <div className="flex items-center gap-2 text-purple-400">
              <span className="text-pink-500">$</span>
              <p className="typing-effect">{typedText}</p>
              <span className={`h-5 w-2 bg-cyan-400 inline-block ${typedText.length < fullText.length ? 'animate-pulse' : ''}`} />
            </div>
          </div>

          {/* Welcome section */}
          <section className="space-y-2 bg-zinc-900/30 p-4 rounded-md border border-cyan-900/50">
            <div className="flex items-center gap-2">
              <span className="text-cyan-500">$</span>
              <p className="text-cyan-300">whoami</p>
            </div>
            <div className="pl-5 space-y-1">
              <h1 className="text-yellow-300 text-xl">
                hi, i am <span className="underline">ALOK</span>!
              </h1>
              <p className="text-cyan-100">a second year undergrad, studying computer science.</p>
              <p className="text-cyan-200">mainly work in <span className="text-green-300">machine learning</span> and <span className="text-purple-300">AI Agents + LLM&apos;s</span> too (more and more gpu&apos;s)😕</p>
            </div>
          </section>

          {/* Experience section */}
          <section className="space-y-2 bg-zinc-900/30 p-4 rounded-md border border-green-900/50">
            <div className="flex items-center gap-2">
              <span className="text-green-600">$</span>
              <p className="text-green-300">cat experience.txt</p>
            </div>
            <div className="pl-5 space-y-1">
              <h2 className="text-green-300 text-lg">experience</h2>
              <ul className="space-y-1">
                <li className="border-l-2 border-green-600 pl-3 py-1 transition-all hover:border-l-4 hover:bg-green-900/20">
                  <span className="text-green-600">{">"}</span> AR Developer @ GDG KIET <span className="text-yellow-300">[jan 24&apos; - present]</span>
                </li>
                <li className="border-l-2 border-green-600 pl-3 py-1 transition-all hover:border-l-4 hover:bg-green-900/20">
                  <span className="text-green-600">{">"}</span> Intern @ TBI KIET <span className="text-yellow-300">[may 24&apos; - june 24&apos;]</span>
                </li>
                <li className="border-l-2 border-green-600 pl-3 py-1 transition-all hover:border-l-4 hover:bg-green-900/20">
                  <span className="text-green-600">{">"}</span> Gaudmire @ buildspace <span className="text-yellow-300">[may 24&apos; - july 24&apos;]</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Projects section */}
          <section className="space-y-2 bg-zinc-900/30 p-4 rounded-md border border-purple-900/50">
            <div className="flex items-center gap-2">
              <span className="text-purple-600">$</span>
              <p className="text-purple-300">ls -la projects/</p>
            </div>
            <div className="pl-5 space-y-1">
              <h2 className="text-purple-300 text-lg">projects</h2>
              <ul className="space-y-3">
                <li className="group">
                  <div className="flex items-start gap-2">
                    <span className="text-purple-600 mt-1">{">"}</span>
                    <div>
                      <a
                        href="https://github.com/codeEnthusiast21/BrightWalkHackTU"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline text-fuchsia-300 hover:text-fuchsia-200 transition-colors"
                      >
                        BrightWalk
                      </a>
                      <p className="text-zinc-300">Visual assistant for visually impaired person, It describes what it sees using SkunkworksAI BakLLaVA-1 model via llama.cpp and narrates the text using Web Speech API.</p>
                    </div>
                  </div>
                </li>
                <li className="group">
                  <div className="flex items-start gap-2">
                    <span className="text-purple-600 mt-1">{">"}</span>
                    <div>
                      <a
                        href="https://github.com/11PRIMUS/SAR-image-Colorization"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline text-fuchsia-300 hover:text-fuchsia-200 transition-colors"
                      >
                        SAR image Colorization
                      </a>
                      <p className="text-zinc-300">uses custom GAN&apos;s and GDAL to color the grayscale SAR image with reduced speckle noise and image distortion</p>
                    </div>
                  </div>
                </li>
                <li className="group">
                  <div className="flex items-start gap-2">
                    <span className="text-purple-600 mt-1">{">"}</span>
                    <div>
                      <a
                        href="https://github.com/11PRIMUS/Pratham"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline text-fuchsia-300 hover:text-fuchsia-200 transition-colors"
                      >
                        Pratham
                      </a>
                      <p className="text-zinc-300">converts 2D matrices into a 1D vector Output Layer to mimic the changes in healthy mri scans and by using cnn classifies the cancer(brain, breast, skin)</p>
                    </div>
                  </div>
                </li>
                <li className="group">
                  <div className="flex items-start gap-2">
                    <span className="text-purple-600 mt-1">{">"}</span>
                    <div>
                      <a
                        href="https://github.com/Avdhesh-Varshney/AI-Code"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline text-fuchsia-300 hover:text-fuchsia-200 transition-colors"
                      >
                        AI-Code
                      </a>
                      <p className="text-zinc-300">an open-source project designed to help individuals learn and understand fundamental code implementations of various AI algorithms</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </section>

          {/* Contact form section */}
          <section className="space-y-2 bg-zinc-900/30 p-4 rounded-md border border-green-900/50">
            <div className="flex items-center gap-2">
              <span className="text-green-500">$</span>
              <p className="text-green-300">sudo ./contact_me.sh</p>
            </div>
            <div className="pl-5 space-y-4">
              <h2 className="text-green-300 text-lg">Contact Me</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm text-green-200">
                    Name:
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    placeholder="John Doe"
                    className="w-full bg-zinc-800 border border-green-800 text-green-100 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm text-green-200">
                    Email:
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="john@example.com"
                    className="w-full bg-zinc-800 border border-green-800 text-green-100 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm text-green-200">
                    Message:
                  </label>
                  <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    placeholder="Your message here..."
                    className="w-full bg-zinc-800 border border-green-800 text-green-100 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    rows={4}
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={sending}
                  className={`bg-gradient-to-r from-green-600 to-light green-600 text-white px-4 py-2 rounded hover:from-green-500 hover:to-light green-500 transition-all ${sending ? 'cursor-not-allowed opacity-70' : ''}`}
                >
                  <div className="flex items-center justify-center">
                    {sending ? 'Sending...' : 'Send Message'}
                    {sending && <span className="ml-2 animate-pulse">⚙️</span>}
                  </div>
                </button>
                
                {sentStatus === "success" && (
                  <div className="bg-green-900/50 border border-green-500 text-green-200 px-4 py-2 rounded animate-fadeIn">
                    Message sent successfully! I&apos;ll get back to you soon.
                  </div>
                )}
                
                {sentStatus === "error" && (
                  <div className="bg-red-900/50 border border-red-500 text-red-200 px-4 py-2 rounded animate-fadeIn">
                    Failed to send message. Please try again or contact me directly via email.
                  </div>
                )}
              </form>
            </div>
          </section>

          {/* Footer with social links */}
          <footer className="pt-8 border-t border-zinc-800">
            <div className="flex justify-center space-x-6">
              <a
                href="https://github.com/11PRIMUS"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-green-400 transition-colors"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/11alok/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-blue-400 transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://x.com/the_neuralgeek"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-purple-400 transition-colors"
              >
                <X size={24} />
              </a>
              <a href="mailto:alok28pa@gmail.com" className="text-zinc-400 hover:text-red-400 transition-colors">
                <Mail size={24} />
              </a>
            </div>
            <p className="text-center text-zinc-500 mt-4 text-sm">© {new Date().getFullYear()} Alok • Built with Next.js</p>
          </footer>

          {/* Command prompt */}
          <div className="flex items-center gap-2 pt-4">
            <span className="text-pink-500">$</span>
            <span className="h-5 w-2 bg-green-400 inline-block animate-pulse" />
          </div>
        </div>
      </main>
    </div>
  )
}
