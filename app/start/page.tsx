"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Check } from "lucide-react"

export default function Start() {
  const [step, setStep] = useState(1)
  const [loanPurpose, setLoanPurpose] = useState("purchase")
  const [propertyType, setPropertyType] = useState("primary")
  const [email, setEmail] = useState("")

  const handleNext = () => {
    setStep(step + 1)
  }

  const handleBack = () => {
    setStep(step - 1)
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Progress Bar */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
            <div
              className="bg-primary h-full transition-all duration-300 ease-in-out"
              style={{ width: `${(step / 5) * 100}%` }}
            ></div>
          </div>
          <div className="flex justify-between mt-2 text-sm text-gray-500">
            <span>Start</span>
            <span>Finish</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-grow py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            {step === 1 && (
              <div className="space-y-8">
                <div className="text-center">
                  <h1 className="text-3xl font-bold mb-4">Let's get started</h1>
                  <p className="text-gray-600">
                    Answer a few questions to see your personalized rates and loan options.
                  </p>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle>What's your goal?</CardTitle>
                    <CardDescription>Tell us what you're looking to do.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <RadioGroup value={loanPurpose} onValueChange={setLoanPurpose} className="space-y-4">
                      <div
                        className={`flex items-center space-x-3 border rounded-lg p-4 cursor-pointer ${loanPurpose === "purchase" ? "border-primary bg-primary/5" : "border-gray-200"}`}
                      >
                        <RadioGroupItem value="purchase" id="purchase" />
                        <Label htmlFor="purchase" className="flex-grow cursor-pointer">
                          <div className="font-medium">Buy a home</div>
                          <div className="text-sm text-gray-500">I want to purchase a new property</div>
                        </Label>
                      </div>

                      <div
                        className={`flex items-center space-x-3 border rounded-lg p-4 cursor-pointer ${loanPurpose === "refinance" ? "border-primary bg-primary/5" : "border-gray-200"}`}
                      >
                        <RadioGroupItem value="refinance" id="refinance" />
                        <Label htmlFor="refinance" className="flex-grow cursor-pointer">
                          <div className="font-medium">Refinance</div>
                          <div className="text-sm text-gray-500">I want to refinance my current mortgage</div>
                        </Label>
                      </div>
                    </RadioGroup>

                    <Button className="w-full mt-6 bg-primary hover:bg-primary/90" onClick={handleNext}>
                      Continue
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-8">
                <div className="text-center">
                  <h1 className="text-3xl font-bold mb-4">Property information</h1>
                  <p className="text-gray-600">Tell us about the property you're interested in.</p>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle>What type of property is this?</CardTitle>
                    <CardDescription>Select the property type.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <RadioGroup value={propertyType} onValueChange={setPropertyType} className="space-y-4">
                      <div
                        className={`flex items-center space-x-3 border rounded-lg p-4 cursor-pointer ${propertyType === "primary" ? "border-primary bg-primary/5" : "border-gray-200"}`}
                      >
                        <RadioGroupItem value="primary" id="primary" />
                        <Label htmlFor="primary" className="flex-grow cursor-pointer">
                          <div className="font-medium">Primary residence</div>
                          <div className="text-sm text-gray-500">I'll live here most of the year</div>
                        </Label>
                      </div>

                      <div
                        className={`flex items-center space-x-3 border rounded-lg p-4 cursor-pointer ${propertyType === "secondary" ? "border-primary bg-primary/5" : "border-gray-200"}`}
                      >
                        <RadioGroupItem value="secondary" id="secondary" />
                        <Label htmlFor="secondary" className="flex-grow cursor-pointer">
                          <div className="font-medium">Second home</div>
                          <div className="text-sm text-gray-500">I'll use this as a vacation or second home</div>
                        </Label>
                      </div>

                      <div
                        className={`flex items-center space-x-3 border rounded-lg p-4 cursor-pointer ${propertyType === "investment" ? "border-primary bg-primary/5" : "border-gray-200"}`}
                      >
                        <RadioGroupItem value="investment" id="investment" />
                        <Label htmlFor="investment" className="flex-grow cursor-pointer">
                          <div className="font-medium">Investment property</div>
                          <div className="text-sm text-gray-500">I'll rent this property out</div>
                        </Label>
                      </div>
                    </RadioGroup>

                    <div className="flex space-x-4 mt-6">
                      <Button variant="outline" className="flex-1" onClick={handleBack}>
                        Back
                      </Button>
                      <Button className="flex-1 bg-primary hover:bg-primary/90" onClick={handleNext}>
                        Continue
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-8">
                <div className="text-center">
                  <h1 className="text-3xl font-bold mb-4">Create your account</h1>
                  <p className="text-gray-600">Set up your account to save your progress.</p>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle>Your information</CardTitle>
                    <CardDescription>Enter your email to get started.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="email">Email address</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="you@example.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="mt-1"
                        />
                      </div>

                      <div className="text-sm text-gray-500">
                        By continuing, you agree to Better's{" "}
                        <a href="#" className="text-primary hover:underline">
                          Terms of Service
                        </a>{" "}
                        and{" "}
                        <a href="#" className="text-primary hover:underline">
                          Privacy Policy
                        </a>
                        .
                      </div>
                    </div>

                    <div className="flex space-x-4 mt-6">
                      <Button variant="outline" className="flex-1" onClick={handleBack}>
                        Back
                      </Button>
                      <Button className="flex-1 bg-primary hover:bg-primary/90" onClick={handleNext} disabled={!email}>
                        Continue
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {step === 4 && (
              <div className="space-y-8">
                <div className="text-center">
                  <h1 className="text-3xl font-bold mb-4">Almost there!</h1>
                  <p className="text-gray-600">We're preparing your personalized rates.</p>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle>Why choose Better?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        "100% online application process",
                        "No commissions or lender fees",
                        "Pre-approval in as little as 3 minutes",
                        "Close faster than traditional lenders",
                      ].map((benefit, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <div className="mt-0.5 bg-primary/10 rounded-full p-1">
                            <Check className="h-4 w-4 text-primary" />
                          </div>
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>

                    <Button className="w-full mt-6 bg-primary hover:bg-primary/90" onClick={handleNext}>
                      View my rates
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </div>
            )}

            {step === 5 && (
              <div className="space-y-8">
                <div className="text-center">
                  <h1 className="text-3xl font-bold mb-4">Your personalized rates</h1>
                  <p className="text-gray-600">Based on the information you provided, here are your loan options.</p>
                </div>

                <div className="space-y-4">
                  {[
                    {
                      term: "30-year fixed",
                      rate: "6.125%",
                      payment: "$2,415",
                      apr: "6.250%",
                    },
                    {
                      term: "15-year fixed",
                      rate: "5.375%",
                      payment: "$3,542",
                      apr: "5.500%",
                      recommended: true,
                    },
                    {
                      term: "7/1 ARM",
                      rate: "5.750%",
                      payment: "$2,917",
                      apr: "5.875%",
                    },
                  ].map((option, index) => (
                    <Card key={index} className={option.recommended ? "border-primary" : ""}>
                      {option.recommended && (
                        <div className="bg-primary text-white text-center py-1 text-sm font-medium">Recommended</div>
                      )}
                      <CardContent className="p-6">
                        <div className="flex justify-between items-center mb-4">
                          <div>
                            <h3 className="text-xl font-bold">{option.term}</h3>
                            <p className="text-gray-500">Rate: {option.rate}</p>
                          </div>
                          <div className="text-right">
                            <div className="text-2xl font-bold">{option.payment}/mo</div>
                            <p className="text-gray-500">APR: {option.apr}</p>
                          </div>
                        </div>
                        <Button
                          className={`w-full ${option.recommended ? "bg-primary hover:bg-primary/90" : "bg-gray-100 hover:bg-gray-200 text-gray-800"}`}
                        >
                          Select this loan
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div className="text-center">
                  <Button variant="outline" onClick={() => setStep(1)}>
                    Start over
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

