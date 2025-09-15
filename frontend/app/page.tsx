"use client"
import { useEffect } from 'react'

export default function Index() {
  useEffect(() => {
    // Use relative redirect so it works under sub-paths (e.g., GitHub Pages project site)
    window.location.replace('./zh/')
  }, [])
  return null
}


