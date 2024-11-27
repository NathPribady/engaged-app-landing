import { Button } from "@/components/ui/button"
import { ArrowRight} from 'lucide-react'

export default function Hero() {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            Empower Your Teaching with Engaged App
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 leading-relaxed">
            Enhance classroom engagement through data-driven analytics and ethical AI, powered by peer-reviewed research.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8">
              Start Engaging Your Students
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline">
              Watch Demo
            </Button>
          </div>
          
          {/* <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">500+</div>
              <div className="text-sm text-gray-600">Active Teachers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">50K+</div>
              <div className="text-sm text-gray-600">Students Engaged</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-indigo-600">98%</div>
              <div className="text-sm text-gray-600">Satisfaction Rate</div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  )
}

