'use client'
 
import Link from 'next/link'
import { useEffect } from 'react'
 
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])
 
  return (
    <div className="p-8 lg:w-[340px] flex flex-col items-center lg:px-0 m-auto">
      <h2>Something went wrong!</h2>
      <Link href="/">
        Try again
      </Link>
    </div>
  )
}