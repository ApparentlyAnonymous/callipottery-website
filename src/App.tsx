import { BuilderComponent, builder } from '@builder.io/react'
import { useEffect, useState } from 'react'

// Initialize Builder
builder.init(import.meta.env.VITE_BUILDER_PUBLIC_KEY)

export default function HomePage() {
  const [heroContent, setHeroContent] = useState(null)

  useEffect(() => {
    // Fetch only the hero section from Builder
    builder
      .get('hero-section')
      .promise()
      .then((content) => setHeroContent(content))
  }, [])

  return (
    <div>
      {/* EDITABLE HERO from Builder.io */}
      {heroContent && <BuilderComponent model="hero-section" content={heroContent} />}
      
      {/* YOUR ORIGINAL CONTENT stays the same */}
      <section className="products">
        <h2>Our Products</h2>
        {/* Your existing products code */}
      </section>

      <section className="about">
        <h2>About Us</h2>
        {/* Your existing about code */}
      </section>
    </div>
  )
}
