import { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline'
}

export function Button({ variant = 'default', className, ...props }: ButtonProps) {
  const base = 'px-4 py-2 rounded-md transition-colors'
  const variants = {
    default: 'bg-blue-600 hover:bg-blue-500',
    outline: 'border border-gray-700 hover:border-gray-600'
  }
  
  return <button className={`${base} ${variants[variant]} ${className}`} {...props} />
}