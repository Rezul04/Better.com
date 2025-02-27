import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Check, Star } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-white">
        <div className="container mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              A simpler way to buy and refinance your home
            </h1>
            <p className="text-lg mb-8 text-gray-700">Get pre-approved in as little as 3 minutes</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Get pre-approved
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                Refinance
              </Button>
            </div>
            <div className="mt-8 flex items-center">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="ml-2 text-sm text-gray-600">Over 12,000 5-star reviews</p>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <Image
              src="/placeholder.svg?height=500&width=600"
              alt="Happy family in new home"
              width={600}
              height={500}
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why choose Better?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "100% online",
                description: "Apply online and track your application from anywhere, on any device.",
              },
              {
                title: "No commissions",
                description: "Our loan officers don't work on commission, so they're focused on you.",
              },
              {
                title: "Close faster",
                description: "Close on your new home in as little as 14 days with our streamlined process.",
              },
            ].map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Check className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How it works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Get pre-approved",
                description: "Answer a few questions and get a pre-approval letter in as little as 3 minutes.",
              },
              {
                step: "2",
                title: "Find your home",
                description: "Shop with confidence knowing exactly what you can afford.",
              },
              {
                step: "3",
                title: "Close your loan",
                description: "Our team will guide you through every step of the closing process.",
              },
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">{step.step}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Get started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What our customers say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "Better made the entire mortgage process so easy. I was able to do everything online and close in just 21 days.",
                author: "Sarah T.",
              },
              {
                quote:
                  "I saved thousands on my refinance with Better compared to other lenders. The online process was seamless.",
                author: "Michael R.",
              },
              {
                quote:
                  "As a first-time homebuyer, I was nervous about the process. Better's team guided me every step of the way.",
                author: "Jessica L.",
              },
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm">
                <div className="flex mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">"{testimonial.quote}"</p>
                <p className="font-semibold">{testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to get started?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Get pre-approved in as little as 3 minutes and start your home buying journey today.
          </p>
          <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100">
            Get pre-approved now
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>
    </div>
  )
}

