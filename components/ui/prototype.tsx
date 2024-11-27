import { Card, CardContent } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import Image from 'next/image'

const prototypeImages = [
  { name: 'Dashboard', src: 'https://ibb.co/9nZHBfB' },
  { name: 'Lesson Creator', src: 'https://ibb.co/pdx52TT' },
  { name: 'Analytics', src: 'https://ibb.co/NsdBSL6' },
]

export default function Prototype() {
  return (
    <section id="prototype" className="py-20 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-gradient-primary">Prototype Preview</h2>
        <Tabs defaultValue={prototypeImages[0].name.toLowerCase()} className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            {prototypeImages.map((image) => (
              <TabsTrigger key={image.name} value={image.name.toLowerCase()} className="text-sm font-medium">
                {image.name}
              </TabsTrigger>
            ))}
          </TabsList>
          {prototypeImages.map((image) => (
            <TabsContent key={image.name} value={image.name.toLowerCase()}>
              <Card>
                <CardContent className="p-0">
                  <Image
                    src={image.src}
                    alt={`${image.name} prototype`}
                    width={600}
                    height={400}
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}

