import { HTMLAttributes } from 'react'

export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={`bg-gray-800 rounded-lg ${className}`} {...props} />
}

export function CardContent({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={`p-6 ${className}`} {...props} />
}