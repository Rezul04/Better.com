"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, DollarSign, Home, Percent } from "lucide-react"

export default function MortgageCalculator() {
  // Default values
  const [homePrice, setHomePrice] = useState(500000)
  const [downPayment, setDownPayment] = useState(100000)
  const [downPaymentPercent, setDownPaymentPercent] = useState(20)
  const [loanTerm, setLoanTerm] = useState(30)
  const [interestRate, setInterestRate] = useState(6.5)
  const [propertyTax, setPropertyTax] = useState(265)
  const [homeInsurance, setHomeInsurance] = useState(100)
  const [monthlyPayment, setMonthlyPayment] = useState(0)
  const [zipCode, setZipCode] = useState("421005")

  // Calculate monthly payment
  useEffect(() => {
    // Principal and interest calculation
    const loanAmount = homePrice - downPayment
    const monthlyInterestRate = interestRate / 100 / 12
    const numberOfPayments = loanTerm * 12

    let principalAndInterest = 0
    if (monthlyInterestRate > 0) {
      principalAndInterest =
        (loanAmount * (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments))) /
        (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1)
    } else {
      principalAndInterest = loanAmount / numberOfPayments
    }

    // Monthly property tax and insurance
    const monthlyPropertyTax = propertyTax
    const monthlyHomeInsurance = homeInsurance

    // Total monthly payment
    const total = principalAndInterest + monthlyPropertyTax + monthlyHomeInsurance
    setMonthlyPayment(Math.round(total))
  }, [homePrice, downPayment, loanTerm, interestRate, propertyTax, homeInsurance])

  // Update down payment amount when percentage changes
  const handleDownPaymentPercentChange = (value: number[]) => {
    const percent = value[0]
    setDownPaymentPercent(percent)
    setDownPayment(Math.round(homePrice * (percent / 100)))
  }

  // Update down payment percentage when amount changes
  const handleDownPaymentChange = (value: string) => {
    const amount = Number.parseInt(value) || 0
    setDownPayment(amount)
    setDownPaymentPercent(Math.round((amount / homePrice) * 100))
  }

  // Update home price
  const handleHomePriceChange = (value: string) => {
    const price = Number.parseInt(value) || 0
    setHomePrice(price)
    // Maintain the same down payment percentage
    setDownPayment(Math.round(price * (downPaymentPercent / 100)))
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Mortgage Calculator</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Estimate your monthly mortgage payment based on your loan details.
          </p>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <Tabs defaultValue="purchase" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="purchase">Purchase</TabsTrigger>
                <TabsTrigger value="refinance">Refinance</TabsTrigger>
              </TabsList>

              <TabsContent value="purchase" className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Input Form */}
                  <div className="space-y-6 bg-white p-6 rounded-lg shadow-sm">
                    <div>
                      <Label htmlFor="zipCode">ZIP Code</Label>
                      <div className="relative mt-1">
                        <Input
                          id="zipCode"
                          type="text"
                          value={zipCode}
                          onChange={(e) => setZipCode(e.target.value)}
                          className="pl-10"
                        />
                        <Home className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="homePrice">Home Price</Label>
                      <div className="relative mt-1">
                        <Input
                          id="homePrice"
                          type="text"
                          value={homePrice}
                          onChange={(e) => handleHomePriceChange(e.target.value)}
                          className="pl-10"
                        />
                        <DollarSign className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between">
                        <Label htmlFor="downPayment">Down Payment</Label>
                        <span className="text-sm text-gray-500">{downPaymentPercent}%</span>
                      </div>
                      <div className="relative mt-1">
                        <Input
                          id="downPayment"
                          type="text"
                          value={downPayment}
                          onChange={(e) => handleDownPaymentChange(e.target.value)}
                          className="pl-10"
                        />
                        <DollarSign className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                      </div>
                      <Slider
                        value={[downPaymentPercent]}
                        min={0}
                        max={50}
                        step={1}
                        onValueChange={handleDownPaymentPercentChange}
                        className="mt-4"
                      />
                    </div>

                    <div>
                      <Label htmlFor="loanTerm">Loan Term</Label>
                      <div className="grid grid-cols-3 gap-4 mt-1">
                        {[15, 20, 30].map((term) => (
                          <Button
                            key={term}
                            type="button"
                            variant={loanTerm === term ? "default" : "outline"}
                            onClick={() => setLoanTerm(term)}
                            className="w-full"
                          >
                            {term} years
                          </Button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between">
                        <Label htmlFor="interestRate">Interest Rate</Label>
                        <span className="text-sm text-gray-500">{interestRate}%</span>
                      </div>
                      <div className="relative mt-1">
                        <Input
                          id="interestRate"
                          type="text"
                          value={interestRate}
                          onChange={(e) => setInterestRate(Number.parseFloat(e.target.value) || 0)}
                          className="pl-10"
                        />
                        <Percent className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                      </div>
                      <Slider
                        value={[interestRate]}
                        min={1}
                        max={10}
                        step={0.1}
                        onValueChange={(value) => setInterestRate(value[0])}
                        className="mt-4"
                      />
                    </div>

                    <div>
                      <Label htmlFor="propertyTax">Property Tax (monthly)</Label>
                      <div className="relative mt-1">
                        <Input
                          id="propertyTax"
                          type="text"
                          value={propertyTax}
                          onChange={(e) => setPropertyTax(Number.parseInt(e.target.value) || 0)}
                          className="pl-10"
                        />
                        <DollarSign className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="homeInsurance">Home Insurance (monthly)</Label>
                      <div className="relative mt-1">
                        <Input
                          id="homeInsurance"
                          type="text"
                          value={homeInsurance}
                          onChange={(e) => setHomeInsurance(Number.parseInt(e.target.value) || 0)}
                          className="pl-10"
                        />
                        <DollarSign className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                      </div>
                    </div>
                  </div>

                  {/* Results */}
                  <div className="space-y-6">
                    <Card className="border-primary">
                      <CardHeader className="bg-primary text-white">
                        <CardTitle className="text-2xl">Your Estimated Payment</CardTitle>
                        <CardDescription className="text-white/80">Based on your inputs</CardDescription>
                      </CardHeader>
                      <CardContent className="pt-6">
                        <div className="text-4xl font-bold mb-6">${monthlyPayment}/mo</div>

                        <div className="space-y-4">
                          <div className="flex justify-between">
                            <span className="text-gray-600">Loan amount</span>
                            <span className="font-medium">${homePrice - downPayment}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Down payment</span>
                            <span className="font-medium">
                              ${downPayment} ({downPaymentPercent}%)
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Loan term</span>
                            <span className="font-medium">{loanTerm} years</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Interest rate</span>
                            <span className="font-medium">{interestRate}%</span>
                          </div>
                        </div>

                        <div className="mt-8">
                          <Button className="w-full bg-primary hover:bg-primary/90">
                            Get pre-approved
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle>Payment Breakdown</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="flex justify-between">
                            <span className="text-gray-600">Principal & Interest</span>
                            <span className="font-medium">
                              $
                              {Math.round(
                                ((homePrice - downPayment) *
                                  (interestRate / 100 / 12) *
                                  Math.pow(1 + interestRate / 100 / 12, loanTerm * 12)) /
                                  (Math.pow(1 + interestRate / 100 / 12, loanTerm * 12) - 1),
                              )}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Property Tax</span>
                            <span className="font-medium">${propertyTax}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Home Insurance</span>
                            <span className="font-medium">${homeInsurance}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="refinance" className="space-y-8">
                <div className="bg-white p-6 rounded-lg shadow-sm text-center py-12">
                  <h3 className="text-2xl font-semibold mb-4">Refinance Calculator</h3>
                  <p className="text-gray-600 mb-6">
                    See how much you could save by refinancing your current mortgage.
                  </p>
                  <Button className="bg-primary hover:bg-primary/90">Calculate Refinance Options</Button>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "How is my monthly mortgage payment calculated?",
                answer:
                  "Your monthly mortgage payment typically consists of principal, interest, property taxes, and homeowners insurance (PITI). Our calculator estimates these components based on the information you provide.",
              },
              {
                question: "How much down payment should I make?",
                answer:
                  "While 20% is often recommended to avoid private mortgage insurance (PMI), many buyers put down less. Your down payment affects your monthly payment and the total interest paid over the life of the loan.",
              },
              {
                question: "What loan term should I choose?",
                answer:
                  "A 30-year loan offers lower monthly payments, while a 15-year loan typically has a lower interest rate and builds equity faster. Choose based on your financial goals and budget.",
              },
              {
                question: "Are property tax estimates accurate?",
                answer:
                  "Property tax estimates are based on local averages for your ZIP code. Actual taxes may vary based on the specific property and local tax rates.",
              },
            ].map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to take the next step?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Get pre-approved and see what you qualify for with Better Mortgage.
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

