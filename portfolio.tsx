"use client"

import { Inter } from "next/font/google"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  ArrowRight,
  Code,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
  CreditCard,
  Download,
  Star,
  Quote,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export default function Portfolio() {
  return (
    <div className={`min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 ${inter.variable} font-sans`}>
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-md border-b border-blue-500/30 z-50 shadow-2xl">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="text-xl font-bold text-white neumorphic-text">Mareo Manoj</div>
            <div className="hidden md:flex space-x-6">
              <Link href="#about" className="text-gray-300 hover:text-blue-400 transition-colors font-medium">
                About
              </Link>
              <Link href="#projects" className="text-gray-300 hover:text-blue-400 transition-colors font-medium">
                Projects
              </Link>
              <Link href="#skills" className="text-gray-300 hover:text-blue-400 transition-colors font-medium">
                Skills
              </Link>
              <Link href="#testimonials" className="text-gray-300 hover:text-blue-400 transition-colors font-medium">
                Testimonials
              </Link>
              <Link href="#contact" className="text-gray-300 hover:text-blue-400 transition-colors font-medium">
                Contact
              </Link>
            </div>
            <Button
              className="neumorphic-button bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white border-0"
              asChild
            >
              <Link href="#contact">Get In Touch</Link>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-blue-800/10 opacity-30"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <div className="neumorphic-avatar mx-auto mb-6">
                <Image
                  src="/placeholder.svg?height=150&width=150"
                  alt="Mareo Manoj - luc-ifer-66"
                  width={150}
                  height={150}
                  className="rounded-lg"
                />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Hi, I'm{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 neumorphic-text">
                Mareo Manoj
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 font-medium">
              Frontend Developer crafting exceptional digital experiences
            </p>
            <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
              I transform ideas into stunning, user-friendly websites and applications. With expertise in modern
              frontend technologies, I help businesses establish a powerful online presence that drives results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="neumorphic-button bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white border-0"
                asChild
              >
                <Link href="#projects">
                  View My Work <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="neumorphic-button-outline border-blue-500 text-blue-400 hover:text-white hover:border-blue-400 hover:bg-blue-500/10"
                asChild
              >
                <Link href="#contact">Let's Talk</Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="neumorphic-button-outline border-gray-600 text-gray-300 hover:text-white hover:border-gray-400 hover:bg-gray-500/10"
                asChild
              >
                <Link href="/resume.pdf" download>
                  <Download className="mr-2 h-4 w-4" />
                  Resume
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white neumorphic-text">About Me</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="neumorphic-card p-8">
                <h3 className="text-2xl font-semibold mb-4 text-white">Passionate Frontend Developer</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  I specialize in creating responsive, accessible, and performant web applications that not only look
                  great but also provide exceptional user experiences. My focus is on writing clean, maintainable code
                  that scales with your business needs.
                </p>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Whether you're a startup looking to establish your digital presence or an established business wanting
                  to modernize your web platform, I bring the technical expertise and creative vision to make your
                  project a success.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge className="neumorphic-badge bg-gradient-to-r from-blue-600/20 to-blue-800/20 text-blue-300 border-blue-500/30">
                    React
                  </Badge>
                  <Badge className="neumorphic-badge bg-gradient-to-r from-blue-600/20 to-blue-800/20 text-blue-300 border-blue-500/30">
                    Next.js
                  </Badge>
                  <Badge className="neumorphic-badge bg-gradient-to-r from-blue-600/20 to-blue-800/20 text-blue-300 border-blue-500/30">
                    TypeScript
                  </Badge>
                  <Badge className="neumorphic-badge bg-gradient-to-r from-blue-600/20 to-blue-800/20 text-blue-300 border-blue-500/30">
                    Tailwind CSS
                  </Badge>
                </div>
              </div>
              <div className="space-y-6">
                <div className="neumorphic-feature-card p-6">
                  <div className="flex items-center space-x-4">
                    <div className="neumorphic-icon">
                      <Code className="h-8 w-8 text-blue-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Clean Code</h4>
                      <p className="text-sm text-gray-400">Writing maintainable, scalable code</p>
                    </div>
                  </div>
                </div>
                <div className="neumorphic-feature-card p-6">
                  <div className="flex items-center space-x-4">
                    <div className="neumorphic-icon">
                      <ExternalLink className="h-8 w-8 text-blue-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">User Experience</h4>
                      <p className="text-sm text-gray-400">Creating intuitive, engaging interfaces</p>
                    </div>
                  </div>
                </div>
                <div className="neumorphic-feature-card p-6">
                  <div className="flex items-center space-x-4">
                    <div className="neumorphic-icon">
                      <ArrowRight className="h-8 w-8 text-blue-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Performance</h4>
                      <p className="text-sm text-gray-400">Optimized for speed and efficiency</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white neumorphic-text">
              Featured Projects
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="neumorphic-project-card overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-blue-600 to-blue-800 relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/20"></div>
                  <Image
                    src="/placeholder.svg?height=300&width=500"
                    alt="KSU CET Hostel Finder"
                    width={500}
                    height={300}
                    className="object-cover w-full h-full opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">KSU CET Hostel Finder</h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    A comprehensive platform helping students find suitable hostel accommodations near KSU CET campus
                    with advanced filtering and booking features.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge className="neumorphic-tech-badge">React</Badge>
                    <Badge className="neumorphic-tech-badge">Node.js</Badge>
                    <Badge className="neumorphic-tech-badge">MongoDB</Badge>
                    <Badge className="neumorphic-tech-badge">Maps API</Badge>
                  </div>
                  <div className="flex space-x-4">
                    <Button
                      variant="outline"
                      size="sm"
                      className="neumorphic-button-outline border-blue-500 text-blue-400 hover:text-white hover:border-blue-400 hover:bg-blue-500/10"
                      asChild
                    >
                      <Link href="https://github.com/luc-ifer-66/ksu-cet-hostel-finder" target="_blank">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </Link>
                    </Button>
                    <Button
                      size="sm"
                      className="neumorphic-button bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white border-0"
                      asChild
                    >
                      <Link href="https://ksu-cet-hostel-finder.vercel.app" target="_blank">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>

              <div className="neumorphic-project-card overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-blue-700 to-blue-900 relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/20"></div>
                  <Image
                    src="/placeholder.svg?height=300&width=500"
                    alt="KSU CET Student Assist Cell Website"
                    width={500}
                    height={300}
                    className="object-cover w-full h-full opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">KSU CET Student Assist Cell Website</h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    Official website for the Student Assist Cell providing resources, support services, and
                    communication channels for KSU CET students.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge className="neumorphic-tech-badge">Next.js</Badge>
                    <Badge className="neumorphic-tech-badge">TypeScript</Badge>
                    <Badge className="neumorphic-tech-badge">Tailwind CSS</Badge>
                    <Badge className="neumorphic-tech-badge">CMS</Badge>
                  </div>
                  <div className="flex space-x-4">
                    <Button
                      variant="outline"
                      size="sm"
                      className="neumorphic-button-outline border-blue-500 text-blue-400 hover:text-white hover:border-blue-400 hover:bg-blue-500/10"
                      asChild
                    >
                      <Link href="https://github.com/luc-ifer-66/ksu-cet-student-assist" target="_blank">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </Link>
                    </Button>
                    <Button
                      size="sm"
                      className="neumorphic-button bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white border-0"
                      asChild
                    >
                      <Link href="https://ksu-cet-student-assist.vercel.app" target="_blank">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white neumorphic-text">
              Skills & Technologies
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="neumorphic-skill-card p-6">
                <h3 className="text-xl font-bold text-white mb-4">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge className="neumorphic-skill-badge">React</Badge>
                  <Badge className="neumorphic-skill-badge">Next.js</Badge>
                  <Badge className="neumorphic-skill-badge">TypeScript</Badge>
                  <Badge className="neumorphic-skill-badge">JavaScript</Badge>
                  <Badge className="neumorphic-skill-badge">HTML5</Badge>
                  <Badge className="neumorphic-skill-badge">CSS3</Badge>
                  <Badge className="neumorphic-skill-badge">Tailwind CSS</Badge>
                  <Badge className="neumorphic-skill-badge">SASS</Badge>
                </div>
              </div>

              <div className="neumorphic-skill-card p-6">
                <h3 className="text-xl font-bold text-white mb-4">Tools & Platforms</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge className="neumorphic-skill-badge">Git</Badge>
                  <Badge className="neumorphic-skill-badge">GitHub</Badge>
                  <Badge className="neumorphic-skill-badge">Vercel</Badge>
                  <Badge className="neumorphic-skill-badge">Netlify</Badge>
                  <Badge className="neumorphic-skill-badge">Figma</Badge>
                  <Badge className="neumorphic-skill-badge">VS Code</Badge>
                  <Badge className="neumorphic-skill-badge">npm/yarn</Badge>
                  <Badge className="neumorphic-skill-badge">Webpack</Badge>
                </div>
              </div>

              <div className="neumorphic-skill-card p-6">
                <h3 className="text-xl font-bold text-white mb-4">Backend & Database</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge className="neumorphic-skill-badge">Node.js</Badge>
                  <Badge className="neumorphic-skill-badge">Express</Badge>
                  <Badge className="neumorphic-skill-badge">MongoDB</Badge>
                  <Badge className="neumorphic-skill-badge">PostgreSQL</Badge>
                  <Badge className="neumorphic-skill-badge">REST APIs</Badge>
                  <Badge className="neumorphic-skill-badge">GraphQL</Badge>
                  <Badge className="neumorphic-skill-badge">Firebase</Badge>
                  <Badge className="neumorphic-skill-badge">Supabase</Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white neumorphic-text">
              What Clients Say
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="neumorphic-testimonial-card p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                </div>
                <Quote className="h-8 w-8 text-blue-400 mb-4" />
                <p className="text-gray-300 mb-4 leading-relaxed">
                  "Mareo delivered an exceptional website that exceeded our expectations. His attention to detail and
                  technical expertise made the entire process smooth and professional."
                </p>
                <div className="flex items-center">
                  <Image
                    src="/placeholder.svg?height=40&width=40"
                    alt="Client"
                    width={40}
                    height={40}
                    className="rounded-full mr-3"
                  />
                  <div>
                    <h4 className="text-white font-semibold">Sarah Johnson</h4>
                    <p className="text-gray-400 text-sm">CEO, TechStart</p>
                  </div>
                </div>
              </div>

              <div className="neumorphic-testimonial-card p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                </div>
                <Quote className="h-8 w-8 text-blue-400 mb-4" />
                <p className="text-gray-300 mb-4 leading-relaxed">
                  "Working with Mareo was a game-changer for our business. He transformed our outdated website into a
                  modern, responsive platform that our customers love."
                </p>
                <div className="flex items-center">
                  <Image
                    src="/placeholder.svg?height=40&width=40"
                    alt="Client"
                    width={40}
                    height={40}
                    className="rounded-full mr-3"
                  />
                  <div>
                    <h4 className="text-white font-semibold">Michael Chen</h4>
                    <p className="text-gray-400 text-sm">Founder, EduTech Solutions</p>
                  </div>
                </div>
              </div>

              <div className="neumorphic-testimonial-card p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                </div>
                <Quote className="h-8 w-8 text-blue-400 mb-4" />
                <p className="text-gray-300 mb-4 leading-relaxed">
                  "Mareo's expertise in React and modern web technologies helped us launch our product ahead of
                  schedule. Highly recommended for any frontend development needs."
                </p>
                <div className="flex items-center">
                  <Image
                    src="/placeholder.svg?height=40&width=40"
                    alt="Client"
                    width={40}
                    height={40}
                    className="rounded-full mr-3"
                  />
                  <div>
                    <h4 className="text-white font-semibold">Emily Rodriguez</h4>
                    <p className="text-gray-400 text-sm">CTO, InnovateLab</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white neumorphic-text">
              Let's Work Together
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="neumorphic-card p-8">
                <h3 className="text-2xl font-semibold mb-6 text-white">Ready to bring your project to life?</h3>
                <p className="text-gray-300 mb-8 leading-relaxed">
                  I'm always excited to work on new projects and help businesses achieve their goals. Whether you need a
                  complete website overhaul, a new web application, or just want to discuss your ideas, I'd love to hear
                  from you.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center space-x-3">
                    <div className="neumorphic-contact-icon">
                      <Mail className="h-5 w-5 text-blue-400" />
                    </div>
                    <span className="text-gray-300">mareomanoj7@gmail.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="neumorphic-contact-icon">
                      <Phone className="h-5 w-5 text-blue-400" />
                    </div>
                    <span className="text-gray-300">+91 7025458339</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="neumorphic-contact-icon">
                      <MapPin className="h-5 w-5 text-blue-400" />
                    </div>
                    <span className="text-gray-300">Kerala, India</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-4 mb-6">
                  <Button variant="outline" size="icon" className="neumorphic-social-button" asChild>
                    <Link href="https://github.com/luc-ifer-66" target="_blank">
                      <Github className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="icon" className="neumorphic-social-button" asChild>
                    <Link href="https://linkedin.com/in/mareo-manoj" target="_blank">
                      <Linkedin className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="icon" className="neumorphic-social-button" asChild>
                    <Link href="https://twitter.com/mareo_manoj" target="_blank">
                      <Twitter className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
                <div className="space-y-3">
                  <Button
                    className="neumorphic-button bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 text-white border-0 w-full"
                    asChild
                  >
                    <Link href="https://paypal.me/mareomanoj?country.x=IN&locale.x=en_GB" target="_blank">
                      <CreditCard className="h-4 w-4 mr-2" />
                      Support via PayPal
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    className="neumorphic-button-outline border-gray-600 text-gray-300 hover:text-white hover:border-gray-400 hover:bg-gray-500/10 w-full"
                    asChild
                  >
                    <Link href="/resume.pdf" download>
                      <Download className="h-4 w-4 mr-2" />
                      Download Resume
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="neumorphic-card p-6">
                <h3 className="text-xl font-bold text-white mb-2">Send me a message</h3>
                <p className="text-gray-400 mb-6">I'll get back to you within 24 hours</p>
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <Input
                      placeholder="First Name"
                      className="neumorphic-input bg-gray-800/50 border-gray-600 text-white placeholder:text-gray-400"
                    />
                    <Input
                      placeholder="Last Name"
                      className="neumorphic-input bg-gray-800/50 border-gray-600 text-white placeholder:text-gray-400"
                    />
                  </div>
                  <Input
                    placeholder="Email"
                    type="email"
                    className="neumorphic-input bg-gray-800/50 border-gray-600 text-white placeholder:text-gray-400"
                  />
                  <Input
                    placeholder="Subject"
                    className="neumorphic-input bg-gray-800/50 border-gray-600 text-white placeholder:text-gray-400"
                  />
                  <Textarea
                    placeholder="Your message..."
                    rows={4}
                    className="neumorphic-input bg-gray-800/50 border-gray-600 text-white placeholder:text-gray-400"
                  />
                  <Button className="neumorphic-button bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white border-0 w-full">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/50 py-8 border-t border-blue-500/30">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-gray-400">© {new Date().getFullYear()} Mareo Manoj. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
