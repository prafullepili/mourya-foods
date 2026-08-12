import React, { useState } from 'react';
import { BlogPost } from '../types';
import { BLOG_POSTS } from '../data/blogs';
import { 
  BookOpen, 
  Clock, 
  User, 
  Tag, 
  ArrowRight, 
  Search, 
  Sparkles, 
  X, 
  Share2,
  Calendar
} from 'lucide-react';

export const BlogSection: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedTag, setSelectedTag] = useState<string>('All');

  const allTags = ['All', 'Superfood', 'Makhana Benefits', 'GI Tag', 'Mithila Makhana', 'Weight Loss', 'Makhana Recipes'];

  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesSearch = 
      searchQuery === '' ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesTag = 
      selectedTag === 'All' || 
      post.tags.some(t => t.toLowerCase() === selectedTag.toLowerCase());

    return matchesSearch && matchesTag;
  });

  return (
    <section id="blog" className="py-16 md:py-24 bg-[#0c382b] text-[#fcf8f2] font-sans relative border-t border-[#1b4e3e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-[#d4af37] bg-[#1a4d3e] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-[#d4af37]/30">
            SEO Health & Origin Knowledge Hub
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Makhana Knowledge & Health Blog
          </h2>
          <p className="text-sm sm:text-base text-[#e2d5b6]">
            Explore scientific articles, traditional Mithila heritage stories, diet comparison guides, and gourmet makhana recipes.
          </p>
          <div className="w-20 h-1 bg-[#d4af37] mx-auto rounded-full" />
        </div>

        {/* Search & Tag Filter Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 bg-[#124233] p-4 rounded-2xl border border-[#2d5848]">
          
          {/* Tag Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  selectedTag === tag
                    ? 'bg-[#d4af37] text-[#0c382b] font-bold'
                    : 'bg-[#0c382b] text-gray-300 hover:text-white border border-[#2d5848]'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search health blogs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#0c382b] border border-[#2d5848] text-white text-xs pl-9 pr-3 py-2 rounded-xl focus:outline-none focus:border-[#d4af37]"
            />
          </div>

        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              className="bg-[#124233] rounded-3xl border border-[#2d5848] hover:border-[#d4af37] transition-all duration-300 overflow-hidden shadow-lg hover:shadow-2xl flex flex-col justify-between group cursor-pointer"
              onClick={() => setSelectedPost(post)}
            >
              <div>
                {/* Image */}
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#124233] via-transparent to-transparent opacity-80" />
                  
                  <span className="absolute top-4 left-4 bg-[#0c382b] text-[#d4af37] text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-[#d4af37]/30">
                    {post.category}
                  </span>
                </div>

                {/* Body */}
                <div className="p-6 space-y-3">
                  
                  <div className="flex items-center gap-4 text-xs text-gray-300">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-[#d4af37]" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#d4af37]" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="font-serif font-bold text-xl text-white group-hover:text-[#d4af37] transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-xs text-gray-300 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>

                </div>
              </div>

              {/* Footer CTA */}
              <div className="px-6 pb-6 pt-2 border-t border-[#1b4e3e] flex justify-between items-center text-xs font-bold text-[#d4af37]">
                <span className="flex items-center gap-1 text-gray-300 font-normal">
                  <User className="w-3.5 h-3.5 text-[#d4af37]" />
                  {post.author}
                </span>
                <span className="flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Read Full Article <ArrowRight className="w-4 h-4" />
                </span>
              </div>

            </article>
          ))}
        </div>

      </div>

      {/* Full Article Reader Modal */}
      {selectedPost && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#0c382b] border-2 border-[#d4af37] rounded-3xl max-w-3xl w-full p-6 sm:p-10 text-[#fcf8f2] relative shadow-2xl animate-scaleIn max-h-[90vh] overflow-y-auto">
            
            <button
              onClick={() => setSelectedPost(null)}
              className="absolute top-4 right-4 text-gray-300 hover:text-white bg-[#124233] p-2 rounded-full border border-[#2d5848]"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-6">
              
              <div className="space-y-2">
                <span className="text-xs text-[#d4af37] font-bold uppercase tracking-wider bg-[#1a4d3e] px-3 py-1 rounded-full">
                  {selectedPost.category}
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white pt-2 leading-tight">
                  {selectedPost.title}
                </h2>
                <div className="flex items-center gap-4 text-xs text-gray-300 pt-1 border-b border-[#1b4e3e] pb-4">
                  <span>By <strong>{selectedPost.author}</strong></span>
                  <span>•</span>
                  <span>{selectedPost.date}</span>
                  <span>•</span>
                  <span>{selectedPost.readTime}</span>
                </div>
              </div>

              <div className="h-64 rounded-2xl overflow-hidden border border-[#2d5848]">
                <img
                  src={selectedPost.image}
                  alt={selectedPost.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="prose prose-invert max-w-none text-sm text-gray-200 leading-relaxed space-y-4">
                {selectedPost.content.split('\n\n').map((paragraph, idx) => {
                  if (paragraph.startsWith('### ')) {
                    return <h3 key={idx} className="font-serif text-xl font-bold text-[#d4af37] pt-2">{paragraph.replace('### ', '')}</h3>;
                  }
                  if (paragraph.startsWith('#### ')) {
                    return <h4 key={idx} className="font-serif text-lg font-bold text-amber-200 pt-2">{paragraph.replace('#### ', '')}</h4>;
                  }
                  return <p key={idx}>{paragraph}</p>;
                })}
              </div>

              {/* Tags */}
              <div className="pt-4 border-t border-[#1b4e3e] flex flex-wrap items-center gap-2">
                <span className="text-xs text-[#d4af37] font-bold flex items-center gap-1">
                  <Tag className="w-3.5 h-3.5" /> Tags:
                </span>
                {selectedPost.tags.map((t, idx) => (
                  <span key={idx} className="bg-[#124233] text-gray-300 text-xs px-2.5 py-1 rounded-md border border-[#2d5848]">
                    #{t}
                  </span>
                ))}
              </div>

            </div>

          </div>
        </div>
      )}

    </section>
  );
};
