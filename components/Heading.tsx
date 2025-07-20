import { HeadingProps } from '@/interfaces'
import React from 'react'

const Heading: React.FC<HeadingProps> = ({title}) => {
  return (
    <section className="bg-white mb-5 shadow px-4 py-4">
        <h1 className="text-2xl font-bold tracking-tight text-gray-900">
          {title}
        </h1>
    </section>
  )
}

export default Heading