import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-800 py-8 text-white">
      <div className="container mx-auto text-center">
        <p className="text-sm mb-4">
          © {new Date().getFullYear()} Engaged App. All rights reserved.
        </p>
        <nav className="space-x-4">
          <Link href="#" className="text-sm hover:text-blue-400 transition-colors">
            Privacy Policy
          </Link>
          <Link href="#" className="text-sm hover:text-blue-400 transition-colors">
            Terms of Service
          </Link>
          <Link href="#" className="text-sm hover:text-blue-400 transition-colors">
            Contact Us
          </Link>
        </nav>
      </div>
    </footer>
  )
}

