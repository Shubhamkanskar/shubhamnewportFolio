"use client"

import { useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

interface CanvasRevealEffectProps {
  containerClassName?: string
  colors?: [number, number, number][]
  dotSize?: number
  dotSpacing?: number
  dotColor?: string
  animationSpeed?: number
}

export const CanvasRevealEffect = ({
  containerClassName,
  colors = [
    [255, 255, 255],
    [255, 255, 255],
  ],
  dotSize = 2,
  dotSpacing = 20,
  dotColor = "255, 255, 255",
  animationSpeed = 10,
}: CanvasRevealEffectProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const animationRef = useRef<number>(0)
  const mouseRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 })

  useEffect(() => {
    const canvas = canvasRef.current
    const container = containerRef.current
    if (!canvas || !container) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const handleResize = () => {
      canvas.width = container.offsetWidth
      canvas.height = container.offsetHeight
    }

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      }
    }

    const dots: {
      x: number
      y: number
      color: [number, number, number]
      alpha: number
      targetAlpha: number
    }[] = []

    const initDots = () => {
      dots.length = 0
      const numDotsX = Math.ceil(canvas.width / dotSpacing)
      const numDotsY = Math.ceil(canvas.height / dotSpacing)

      for (let j = 0; j < numDotsY; j++) {
        for (let i = 0; i < numDotsX; i++) {
          const x = i * dotSpacing
          const y = j * dotSpacing
          const colorIndex = Math.floor(Math.random() * colors.length)
          dots.push({
            x,
            y,
            color: colors[colorIndex],
            alpha: 0,
            targetAlpha: 0,
          })
        }
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      dots.forEach((dot) => {
        const dx = mouseRef.current.x - dot.x
        const dy = mouseRef.current.y - dot.y
        const distance = Math.sqrt(dx * dx + dy * dy)
        const maxDistance = 100

        if (distance < maxDistance) {
          dot.targetAlpha = 1 - distance / maxDistance
        } else {
          dot.targetAlpha = 0
        }

        dot.alpha += (dot.targetAlpha - dot.alpha) * 0.1 * (animationSpeed / 10)

        ctx.fillStyle = `rgba(${dot.color[0]}, ${dot.color[1]}, ${dot.color[2]}, ${dot.alpha})`
        ctx.beginPath()
        ctx.arc(dot.x, dot.y, dotSize, 0, Math.PI * 2)
        ctx.fill()
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    handleResize()
    initDots()
    animate()

    window.addEventListener("resize", () => {
      handleResize()
      initDots()
    })
    canvas.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("resize", handleResize)
      canvas.removeEventListener("mousemove", handleMouseMove)
      cancelAnimationFrame(animationRef.current)
    }
  }, [colors, dotSize, dotSpacing, dotColor, animationSpeed])

  return (
    <div ref={containerRef} className={cn("relative w-full h-full", containerClassName)}>
      <canvas ref={canvasRef} className="absolute inset-0" />
    </div>
  )
}

