import { Card, CardContent } from '@/components/ui/card'
import { BookOpen, FileText, FileSpreadsheet, PresentationIcon as PresentationChart, Mic, BarChart3, PlusCircle, LayoutTemplate } from 'lucide-react'

const features = [
  { title: 'Create New Material', icon: PlusCircle, description: 'Easily create engaging content' },
  { title: 'Create Lesson Plan', icon: LayoutTemplate, description: 'Design comprehensive plans' },
  { title: 'Transform PDF Pre-reading', icon: FileText, description: 'Convert PDFs to interactive lessons' },
  { title: 'Slide Reviewer', icon: PresentationChart, description: 'Get AI-powered slide feedback' },
  { title: 'Live Class Transcription', icon: Mic, description: 'Real-time lecture transcription' },
  { title: 'Engagement Monitoring', icon: BarChart3, description: 'Track student engagement' },
  { title: 'Data-Driven Evaluation', icon: FileSpreadsheet, description: 'Gain post-class insights' },
  { title: 'Interactive Lessons', icon: BookOpen, description: 'Create engaging learning experiences' },
]

export default function Features() {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-gradient-primary">Our Features</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {features.map((feature, index) => (
            <Card key={index} className="transition-all hover:shadow-md hover:scale-105 bg-white">
              <CardContent className="p-4 flex flex-col items-center text-center">
                <feature.icon className="w-8 h-8 text-blue-600 mb-2" />
                <h3 className="text-sm font-semibold text-gray-800 mb-1">{feature.title}</h3>
                <p className="text-xs text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

