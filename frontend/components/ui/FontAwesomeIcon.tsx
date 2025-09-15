import React from 'react'

interface FontAwesomeIconProps {
  iconClass: string
  className?: string
  fallbackIcon?: React.ReactNode
}

export const FontAwesomeIcon: React.FC<FontAwesomeIconProps> = ({ 
  iconClass, 
  className = '', 
  fallbackIcon 
}) => {
  // If the iconClass is a Font Awesome class, render it properly
  if (iconClass && iconClass.includes('fa-')) {
    return <i className={`${iconClass} ${className}`} aria-hidden="true" />
  }
  
  // If it's an emoji or other text, render as is
  if (iconClass && !iconClass.includes('fa')) {
    return <span className={className}>{iconClass}</span>
  }
  
  // Fallback to provided fallback icon or default icon
  if (fallbackIcon) {
    return <>{fallbackIcon}</>
  }
  
  // Default fallback icon
  return (
    <svg className={`h-8 w-8 ${className}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  )
} 