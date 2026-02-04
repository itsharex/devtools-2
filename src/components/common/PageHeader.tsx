import React from 'react'

interface PageHeaderProps {
  title: string
  subtitle?: string
  className?: string
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle, className = '' }) => (
  <div className={className}>
    <h2 className='text-2xl font-bold mb-2 text-slate-900 dark:text-slate-100 font-sans tracking-tight'>
      {title}
    </h2>
    {subtitle && (
      <p className='text-sm text-slate-600 dark:text-slate-400 mb-2 leading-relaxed'>
        {subtitle}
      </p>
    )}
  </div>
)

export default PageHeader