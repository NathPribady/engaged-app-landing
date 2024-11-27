import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { BookOpen, Mic, BarChart3, LayoutTemplate } from 'lucide-react'
import Image from 'next/image'
import { PrototypeSlider } from '@/components/ui/prototype-slider'
import Hero from '@/components/ui/hero'

const features = [
  // { title: 'Create New Material', icon: PlusCircle, description: 'Customize and generate educational content', color: 'bg-pink-100 text-pink-600' },
  { title: 'Create Lesson Plan', icon: LayoutTemplate, description: 'Design comprehensive lesson plans', color: 'bg-blue-100 text-blue-600' },
  // { title: 'Transform PDF Pre-reading', icon: FileText, description: 'Convert PDFs into bite-sized interactive lessons', color: 'bg-purple-100 text-purple-600' },
  // { title: 'Slide Reviewer', icon: PresentationIcon, description: 'Get AI-powered feedback on your slides', color: 'bg-yellow-100 text-yellow-600' },
  { title: 'Live Class Transcription', icon: Mic, description: 'Real-time transcription of your lectures', color: 'bg-green-100 text-green-600' },
  { title: 'Engagement Monitoring', icon: BarChart3, description: 'Track student engagement during classes', color: 'bg-red-100 text-red-600' },
  // { title: 'Data-Driven Evaluation', icon: FileSpreadsheet, description: 'Post-class analysis and insights', color: 'bg-indigo-100 text-indigo-600' },
  { title: 'Interactive Lessons', icon: BookOpen, description: 'Create engaging, interactive learning experiences', color: 'bg-orange-100 text-orange-600' },
]

const teamMembers = [
  { name: 'Nathanael Pribady', role: 'MS student in Learning Analytics', image: 'https://media.licdn.com/dms/image/v2/D5603AQFSbjgmE4J-wQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1729617994315?e=1738195200&v=beta&t=wTUxSj2CtatzFX_i7PbUY-kEkzRBeI67JVgOlHOjbFs' },
  { name: 'Xaviera Xu', role: 'MS student in Learning Analytics', image: 'https://media.licdn.com/dms/image/v2/D4E03AQGoRBkkHY59pQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1728576245601?e=1738195200&v=beta&t=Id1V-MvAqOA-gzL7MNcAC8Fk3CvZZABqggt9-S6RU0g' },
  { name: 'Janice Joe', role: 'BS student in Mathematics and Computer Science', image: 'https://media.licdn.com/dms/image/v2/D5603AQGg-dM-yyJv-A/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1726944048559?e=1738195200&v=beta&t=MbARaOdQyxQLWzhBhQszv2bepE6cLlyZH1pMEQnG1Ck' },
]

// const universities = [
//   { name: 'Stanford University', logo: '/placeholder.svg?height=100&width=200' },
//   { name: 'Columbia University', logo: '/placeholder.svg?height=100&width=200' },
//   { name: 'University of Oklahoma', logo: '/placeholder.svg?height=100&width=200' },
//   { name: 'Fordham University', logo: '/placeholder.svg?height=100&width=200' },
// ]

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm fixed top-0 left-0 right-0 z-10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold">Engaged App</span>
          </div>
          <nav>
            {/* <Button variant="ghost">Features</Button>
            <Button variant="ghost">Team</Button> */}
            <Button variant="default">Get Started</Button>
          </nav>
        </div>
      </header>

      <main className="pt-16">
        <Hero />

        <div className="container mx-auto px-4 py-12 space-y-16">
          <section className="bg-gray-50 py-12">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold mb-8 text-center">Our Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {features.map((feature) => (
                  <Card key={feature.title} className="hover:shadow-lg transition-shadow">
                    <CardHeader className="flex flex-row items-center space-x-4">
                      <div className={`w-12 h-12 rounded-full ${feature.color} flex items-center justify-center`}>
                        <feature.icon className="w-6 h-6" />
                      </div>
                      <CardTitle className="text-lg">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">{feature.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          <section className="py-12">
            <h2 className="text-3xl font-bold mb-8 text-center">Prototype Preview</h2>
            <PrototypeSlider />
          </section>

          <section className="bg-gray-50 py-12">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold mb-8 text-center">Our Team</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {teamMembers.map((member) => (
                  <Card key={member.name} className="text-center hover:shadow-lg transition-shadow">
                    <CardContent className="pt-6">
                      <Image
                        src={member.image}
                        alt={member.name}
                        width={120}
                        height={120}
                        className="rounded-full mx-auto mb-4"
                      />
                      <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                      <p className="text-gray-600">{member.role}</p>
                      <p className="text-gray-600">Columbia University</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* <section className="py-12">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold mb-8 text-center">Our Lecturers and Teachers Come From:</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
                {universities.map((university) => (
                  <div key={university.name} className="flex justify-center">
                    <Image
                      src={university.logo}
                      alt={university.name}
                      width={200}
                      height={100}
                      className="max-h-16 w-auto"
                    />
                  </div>
                ))}
              </div>
            </div>
          </section> */}
        </div>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">About Us</h3>
              <p className="text-gray-400">Empowering educators with AI-driven tools for enhanced classroom engagement.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <p className="text-gray-400">info@engagedapp.com</p>
              <p className="text-gray-400">+1 (555) 123-4567</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex justify-center space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">Twitter</a>
                <a href="#" className="text-gray-400 hover:text-white">LinkedIn</a>
                <a href="#" className="text-gray-400 hover:text-white">Facebook</a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8">
            <p>&copy; {new Date().getFullYear()} Engaged App. All rights reserved.</p>
            <div className="mt-4 space-x-4">
              <Button variant="link" className="text-gray-400 hover:text-white">Privacy Policy</Button>
              <Button variant="link" className="text-gray-400 hover:text-white">Terms of Service</Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

