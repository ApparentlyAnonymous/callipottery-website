import { useState } from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Calendar, User } from 'lucide-react';

export function JournalPage() {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const categories = ['All', 'Process', 'Tips', 'Studio Life', 'Events'];

  const posts = [
    {
      title: 'The Art of Centering: A Meditation in Clay',
      excerpt: 'Centering clay on the wheel is more than technique — it\'s a practice in patience, breath, and presence. Here\'s how to find your center...',
      category: 'Process',
      date: 'Oct 20, 2025',
      author: 'Sneha',
      image: 'https://images.unsplash.com/photo-1590605049074-f1780f70b791?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3R0ZXJ5JTIwd2hlZWwlMjBjbGF5fGVufDF8fHx8MTc2MTM3NTc4OXww&ixlib=rb-4.1.0&q=80&w=1080',
      featured: true,
    },
    {
      title: '5 Glazing Mistakes Beginners Make (And How to Avoid Them)',
      excerpt: 'From drips to bare spots, glazing can be tricky. Learn from common mistakes and master the art of beautiful finishes.',
      category: 'Tips',
      date: 'Oct 15, 2025',
      author: 'Sneha',
      image: 'https://images.unsplash.com/photo-1637548580984-10c48d61b168?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwZ2xhemluZyUyMHByb2Nlc3N8ZW58MXx8fHwxNzYxNDU0MDI0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: 'A Day in the Life of Our Studio',
      excerpt: 'Join us for a behind-the-scenes look at a typical Tuesday at Callipottery — from morning prep to evening kiln loading.',
      category: 'Studio Life',
      date: 'Oct 10, 2025',
      author: 'Team Callipottery',
      image: 'https://images.unsplash.com/photo-1638341840302-a2d9579b821e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3R0ZXJ5JTIwc3R1ZGlvJTIwd29ya3NwYWNlfGVufDF8fHx8MTc2MTM3NzY4NHww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: 'Hand-Building vs. Wheel-Throwing: Which Should You Learn First?',
      excerpt: 'Both techniques have unique benefits. We break down the pros and cons to help you choose your pottery path.',
      category: 'Tips',
      date: 'Oct 5, 2025',
      author: 'Sneha',
      image: 'https://images.unsplash.com/photo-1753164726043-31e583f8a9b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kcyUyMHNoYXBpbmclMjBjbGF5fGVufDF8fHx8MTc2MTQ1NDAyM3ww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: 'Firing Day: The Magic of Transformation',
      excerpt: 'There\'s nothing quite like opening a kiln after a successful firing. Here\'s what happens inside those glowing chambers.',
      category: 'Process',
      date: 'Sep 28, 2025',
      author: 'Sneha',
      image: 'https://images.unsplash.com/photo-1650065962232-e4b7f95ebf1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraWxuJTIwZmlyZSUyMGNlcmFtaWNzfGVufDF8fHx8MTc2MTQ1NDAyMnww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: 'Workshop Recap: Weekend Intensive September 2025',
      excerpt: 'Last weekend, 8 students spent two days immersed in clay. Here are the beautiful pieces they created.',
      category: 'Events',
      date: 'Sep 25, 2025',
      author: 'Team Callipottery',
      image: 'https://images.unsplash.com/photo-1710834925630-7dee6c880b07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3R0ZXJ5JTIwY2xhc3MlMjB3b3Jrc2hvcHxlbnwxfHx8fDE3NjE0NTQwMjJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  const filteredPosts = selectedFilter === 'all' 
    ? posts 
    : posts.filter(post => post.category.toLowerCase() === selectedFilter);

  const featuredPost = posts.find(post => post.featured);

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 
            className="text-4xl sm:text-5xl md:text-6xl mb-4 text-[#3E2F24]"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Journal — Clay Notes
          </h1>
          <p className="text-lg text-[#6B5D52] max-w-2xl mx-auto">
            Stories from the wheel, tips for makers, and reflections on the pottery life.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => setSelectedFilter(category.toLowerCase())}
              variant={selectedFilter === category.toLowerCase() ? 'default' : 'outline'}
              className={
                selectedFilter === category.toLowerCase()
                  ? 'bg-[#A67C52] hover:bg-[#8B6644] text-white'
                  : 'border-[#A67C52] text-[#A67C52] hover:bg-[#A67C52] hover:text-white'
              }
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Featured Story */}
        {selectedFilter === 'all' && featuredPost && (
          <Card className="mb-12 overflow-hidden border-[#3E2F24]/10 shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="aspect-[4/3] md:aspect-auto">
                <ImageWithFallback
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 flex flex-col justify-center bg-white">
                <Badge className="w-fit mb-4 bg-[#A67C52] text-white">
                  Featured Story
                </Badge>
                <h2 
                  className="text-3xl mb-4 text-[#3E2F24]"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  {featuredPost.title}
                </h2>
                <p className="text-[#3E2F24] mb-6 leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center gap-4 text-sm text-[#6B5D52] mb-6">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span>{featuredPost.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{featuredPost.date}</span>
                  </div>
                </div>
                <Button className="w-fit bg-[#A67C52] hover:bg-[#8B6644] text-white">
                  Read More
                </Button>
              </div>
            </div>
          </Card>
        )}

        {/* Post Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts
            .filter(post => !post.featured || selectedFilter !== 'all')
            .map((post, index) => (
              <Card
                key={index}
                className="overflow-hidden border-[#3E2F24]/10 hover:shadow-xl transition-shadow group"
              >
                <div className="aspect-[4/3] overflow-hidden bg-[#E5E0DC]">
                  <ImageWithFallback
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="p-6 bg-white">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge 
                      variant="secondary" 
                      className="bg-[#E5E0DC] text-[#3E2F24]"
                    >
                      {post.category}
                    </Badge>
                  </div>

                  <h3 
                    className="mb-3 text-[#3E2F24] group-hover:text-[#A67C52] transition-colors"
                    style={{ fontFamily: 'var(--font-serif)' }}
                  >
                    {post.title}
                  </h3>

                  <p className="text-[#6B5D52] mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center gap-4 text-sm text-[#6B5D52] pt-4 border-t border-[#3E2F24]/10">
                    <div className="flex items-center gap-1">
                      <User className="w-3 h-3" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-[#6B5D52] text-lg">
              No posts found in this category.
            </p>
          </div>
        )}

        {/* Quote Banner */}
        <div className="mt-16 p-12 bg-[#3E2F24] rounded-2xl text-center">
          <p 
            className="text-2xl sm:text-3xl text-[#F7F3EF]"
            style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic' }}
          >
            "Clay remembers every touch."
          </p>
        </div>
      </div>
    </div>
  );
}
