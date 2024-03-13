import Link from "next/link"
import { SignupForm } from "@/app/(marketing)/signup/form"

export default function Page() {
  return (
    <div className="flex items-center w-1/4 px-4 sm:px-6 lg:px-8">
      <div className="w-full mx-auto space-y-8">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">Create an account</h1>
          <p className="text-gray-500">Enter your information to get started</p>
        </div>
        <SignupForm />
        <div className="mt-4 text-center text-sm">
          Already have an account?{" "}
          <Link className="underline" href="/login">
            Login
          </Link>
        </div>
      </div>
    </div>
  )
}
