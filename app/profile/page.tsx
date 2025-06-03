"use client"

import { Suspense } from "react"
import { Sidebar } from "@/components/sidebar"
import { Breadcrumb } from "@/components/breadcrumb"
import { ProfileContent } from "@/components/profile-content"
import { ErrorBoundary } from "react-error-boundary"

function ErrorFallback({ error }: { error: Error }) {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-red-500">
        <h2 className="text-xl font-bold mb-2">Something went wrong:</h2>
        <pre className="text-sm">{error.message}</pre>
      </div>
    </div>
  )
}

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-6">
          <Breadcrumb
            items={[
              { label: "Dashboard", href: "/dashboard" },
              { label: "Profile", href: "/profile" },
            ]}
          />
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <Suspense fallback={<div className="text-white">Loading profile...</div>}>
              <ProfileContent />
            </Suspense>
          </ErrorBoundary>
        </main>
      </div>
    </div>
  )
}
