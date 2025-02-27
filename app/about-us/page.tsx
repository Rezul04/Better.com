import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function AboutUs() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Better</h1>
          <p className="text-xl max-w-3xl mx-auto">
            We're making homeownership simpler, faster, and more accessible for all Americans.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
              <h2 className="text-3xl font-bold mb-6">Our mission</h2>
              <p className="text-lg mb-6 text-gray-700">
                Better was founded in 2016 after our CEO's frustrating experience getting a mortgage. We're here to make
                homeownership simpler, faster, and more accessible for all Americans.
              </p>
              <p className="text-lg mb-6 text-gray-700">
                By focusing on technology, we've been able to eliminate commissions, unnecessary fees, and paperwork.
                Our goal is to make the mortgage process transparent and efficient for everyone.
              </p>
            </div>
            <div className="md:w-1/2">
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="Better team working together"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Customer first",
                description:
                  "We put our customers at the center of everything we do, creating products and services that truly help them achieve their homeownership goals.",
              },
              {
                title: "Transparency",
                description:
                  "We believe in being open and honest about our process, pricing, and products. No hidden fees, no surprises.",
              },
              {
                title: "Innovation",
                description:
                  "We're constantly looking for ways to improve the mortgage experience through technology and creative problem-solving.",
              },
            ].map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our leadership</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                name: "Vishal Garg",
                title: "Founder & CEO",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "Kevin Ryan",
                title: "CFO",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "Sarah Smith",
                title: "CTO",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "Michael Johnson",
                title: "COO",
                image: "/placeholder.svg?height=300&width=300",
              },
            ].map((leader, index) => (
              <div key={index} className="text-center">
                <div className="mb-4 mx-auto rounded-full overflow-hidden w-40 h-40">
                  <Image
                    src={leader.image || "/placeholder.svg"}
                    alt={leader.name}
                    width={160}
                    height={160}
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-1">{leader.name}</h3>
                <p className="text-gray-600">{leader.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Press Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Press & recognition</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {[
              "/placeholder.svg?height=60&width=150",
              "/placeholder.svg?height=60&width=150",
              "/placeholder.svg?height=60&width=150",
              "/placeholder.svg?height=60&width=150",
            ].map((logo, index) => (
              <div key={index} className="flex justify-center">
                <Image
                  src={logo || "/placeholder.svg"}
                  alt={`Press logo ${index + 1}`}
                  width={150}
                  height={60}
                  className="opacity-70 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Join our team</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-gray-700">
            We're looking for passionate people to help us transform the homeownership experience. Check out our open
            positions.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            View careers
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>
    </div>
  )
}

