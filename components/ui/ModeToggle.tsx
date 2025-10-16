"use client"

import { Moon } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

export function ModeToggle() {
  const { setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme("dark")
  }

  return (
    <Button variant="outline" size="icon" onClick={toggleTheme}>
      <Moon className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all" />
      <span className="sr-only">Theme is always dark</span>
    </Button>
  )
}
