import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Image from 'next/image'

const teamMembers = [
  {
    name: 'Nathanael Pribady',
    role: 'MS student in Learning Analytics',
    image: '/placeholder.svg?height=200&width=200',
  },
  {
    name: 'Xaviera Xu',
    role: 'MS student in Learning Analytics',
    image: '/placeholder.svg?height=200&width=200',
  },
  {
    name: 'Janice Joe',
    role: 'BS student in Mathematics and Computer Science',
    image: '/placeholder.svg?height=200&width=200',
  },
]

export default function Team() {
  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-gradient-primary">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="text-center transition-all hover:shadow-lg hover:scale-105 bg-white">
              <CardHeader>
                <Image
                  src={member.image}
                  alt={member.name}
                  width={200}
                  height={200}
                  className="rounded-full mx-auto mb-4"
                />
                <CardTitle className="text-xl font-semibold text-blue-600">{member.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">{member.role}</p>
                <p className="text-sm text-gray-600">Columbia University</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

