'use client'

import * as React from 'react'
import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const prototypeSlides = [
  { title: 'Dashboard', description: 'Get an overview of your classes and upcoming tasks', image: 'https://i.postimg.cc/4d5QN42N/Screenshot-2024-11-26-at-8-14-04-PM.png' },
  { title: 'Lesson Creator', description: 'Design engaging lessons with our intuitive interface', image: 'https://i.postimg.cc/Wz16DRxm/Screenshot-2024-11-26-at-8-14-18-PM.png' },
  { title: 'Analytics', description: 'Gain insights into student performance and engagement', image: 'https://i.postimg.cc/Y0DNYnw5/Screenshot-2024-11-26-at-8-14-31-PM.png' },
]

export function PrototypeSlider() {
  const [currentSlide, setCurrentSlide] = React.useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % prototypeSlides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + prototypeSlides.length) % prototypeSlides.length)
  }

  return (
    <Card className="w-full max-w-6xl mx-auto overflow-hidden">
      <CardContent className="p-0">
        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {prototypeSlides.map((slide, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    width={1920}
                    height={1080}
                    className="w-full h-auto"
                  />
                </div>
              ))}
            </div>
          </div>
          <Button
            variant="outline"
            size="icon"
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white"
            onClick={nextSlide}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
        <div className="p-6 text-center">
          <h3 className="text-xl font-semibold mb-2">{prototypeSlides[currentSlide].title}</h3>
          <p className="text-gray-600">{prototypeSlides[currentSlide].description}</p>
        </div>
        <div className="flex justify-center pb-4">
          {prototypeSlides.map((_, index) => (
            <Button
              key={index}
              variant="ghost"
              size="sm"
              className={`w-2 h-2 rounded-full mx-1 p-0 ${
                index === currentSlide ? 'bg-blue-600' : 'bg-gray-300'
              }`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

