import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Header() {
  return (
    <header className="py-4 px-6 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-gradient-primary">
          Engaged App
        </Link>
        <nav className="space-x-4">
          {/* <Link href="#features" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            Features
          </Link>
          <Link href="#prototype" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            Prototype
          </Link>
          <Link href="#team" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            Team
          </Link> */}
          <Button variant="default" className="bg-gradient-primary text-white hover:opacity-90 transition-opacity">Get Started</Button>
        </nav>
      </div>
    </header>
  )
}

