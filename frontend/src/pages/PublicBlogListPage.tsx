import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Eye, 
  Heart, 
  Calendar, 
  FileText,
  Search,
  User,
  Users,
  ArrowRight,
  Star,
  Globe,
  PenTool,
  TrendingUp,
  BookOpen,
  Sparkles,
  ChevronRight,
  Play,
  Mail,
  Phone,
  MapPin,
  Twitter,
  Facebook,
  Instagram,
  Linkedin,
  Github,
  Zap,
  Gem,
  Rocket,
  Cpu,
  Radio,
  Hexagon
} from 'lucide-react';
import { Navbar } from '../components/UI/Navbar';
import { useAuth } from '../hooks/useAuth';
import { apiService } from '../services/api';
import type { BlogType } from '../types';

export const PublicBlogListPage: React.FC = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [featuredBlogs, setFeaturedBlogs] = useState<BlogType[]>([]);
  const [recentBlogs, setRecentBlogs] = useState<BlogType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const stats = {
    totalBlogs: 500,
    totalAuthors: 150,
    totalViews: 25000,
    totalLikes: 8500
  };

  useEffect(() => {
    loadHomePageData();
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const loadHomePageData = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const [featuredResponse, recentResponse] = await Promise.all([
        apiService.getAllPublicBlogs({ page: 1, limit: 3 }),
        apiService.getAllPublicBlogs({ page: 1, limit: 6 }),
      ]);
      
      setFeaturedBlogs(featuredResponse.blogs.slice(0, 3));
      setRecentBlogs(recentResponse.blogs);
    } catch (error) {
      console.error('Failed to load home page data:', error);
      setError('Failed to load content');
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login');
    } catch (error) {
      console.error('Failed to logout:', error);
    }
  };

  const handleViewBlog = (blog: BlogType) => {
    navigate(`/blog/${blog.slug}`);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const formatNumber = (num: number) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
  };

  // 2026 Hero Section with Kinetic Typography
  const HeroSection = () => (
    <div className="relative min-h-screen bg-[#0A0A0F] text-white overflow-hidden">
      {/* Interactive Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
      
      {/* Mouse-tracked Orbs */}
      <div 
        className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-r from-violet-600/20 via-fuchsia-600/20 to-indigo-600/20 blur-3xl transition-transform duration-700 ease-out"
        style={{
          transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
          left: '10%',
          top: '20%'
        }}
      />
      <div 
        className="absolute w-[600px] h-[600px] rounded-full bg-gradient-to-r from-amber-600/20 via-orange-600/20 to-rose-600/20 blur-3xl transition-transform duration-700 ease-out"
        style={{
          transform: `translate(${mousePosition.x * -0.01}px, ${mousePosition.y * -0.01}px)`,
          right: '10%',
          bottom: '20%'
        }}
      />

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full animate-float-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${10 + Math.random() * 10}s`
            }}
          />
        ))}
      </div>
      
      <div className="absolute inset-0 bg-black/20 backdrop-blur-sm"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <div className="text-center">
          {/* 2026 Neubrutalism Badge */}
          <div className="inline-flex items-center px-6 py-3 rounded-none bg-black border-2 border-white/20 mb-8 transform -rotate-1 hover:rotate-0 transition-transform duration-300">
            <Zap className="w-5 h-5 mr-2 text-yellow-400 animate-pulse" />
            <span className="text-sm font-bold tracking-wider text-white">EST. 2026 • NEXT GEN PLATFORM</span>
          </div>
          
          {/* Kinetic Typography Main Heading */}
          <h1 className="text-7xl md:text-8xl font-black mb-8 leading-[0.9] tracking-tighter">
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-white animate-text-shimmer">
              Discover
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-400 to-pink-400 animate-gradient-x">
              Amazing Stories
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in-up">
            <span className="relative inline-block">
              <span className="absolute -inset-1 bg-gradient-to-r from-violet-600/20 to-fuchsia-600/20 blur-lg"></span>
              <span className="relative">Join our vibrant community</span>
            </span>{' '}
            of <span className="text-white font-medium">visionary writers</span> and{' '}
            <span className="text-white font-medium">curious readers</span>.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
            <button
              onClick={() => navigate('/blog')}
              className="group relative px-10 py-5 bg-white text-black font-bold text-lg transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[8px_8px_0px_0px_rgba(255,255,255,0.3)] active:translate-x-0 active:translate-y-0 active:shadow-none"
            >
              <span className="relative z-10 flex items-center gap-3">
                <Search className="w-5 h-5" />
                Explore All Blogs
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </span>
            </button>
            
            {user ? (
              <button
                onClick={() => navigate('/dashboard')}
                className="group px-10 py-5 bg-transparent border-2 border-white text-white font-bold text-lg hover:bg-white/10 transition-all duration-300 hover:scale-105"
              >
                <span className="flex items-center gap-3">
                  <PenTool className="w-5 h-5" />
                  Go to Dashboard
                </span>
              </button>
            ) : (
              <button
                onClick={() => navigate('/register')}
                className="group px-10 py-5 bg-transparent border-2 border-white text-white font-bold text-lg hover:bg-white/10 transition-all duration-300 hover:scale-105"
              >
                <span className="flex items-center gap-3">
                  <Users className="w-5 h-5" />
                  Join Community
                </span>
              </button>
            )}
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { number: formatNumber(stats.totalBlogs), label: 'Stories', icon: BookOpen, color: 'from-violet-500 to-fuchsia-500' },
              { number: formatNumber(stats.totalAuthors), label: 'Authors', icon: Users, color: 'from-blue-500 to-cyan-500' },
              { number: formatNumber(stats.totalViews), label: 'Views', icon: Eye, color: 'from-amber-500 to-orange-500' },
              { number: formatNumber(stats.totalLikes), label: 'Likes', icon: Heart, color: 'from-rose-500 to-pink-500' }
            ].map((stat, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-shimmer"></div>
                <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 p-6 transform hover:scale-105 hover:-rotate-1 transition-all duration-300">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-none bg-gradient-to-r ${stat.color} mb-4`}>
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-3xl font-bold mb-2 font-mono">{stat.number}</div>
                  <div className="text-xs font-bold tracking-wider text-gray-400">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  // 2026 Featured Blogs Section with Neubrutalism Cards
  const FeaturedBlogsSection = () => (
    <div className="relative bg-[#0A0A0F] py-24 overflow-hidden border-t border-white/10">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-violet-900/20 via-transparent to-transparent"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-black border-2 border-violet-500/30 mb-6">
            <Gem className="w-4 h-4 mr-2 text-violet-400" />
            <span className="text-sm font-bold tracking-wider text-white">CURATED PICKS</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 tracking-tighter">
            Hand-picked
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400"> Masterpieces</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Discover the most compelling stories from our talented community
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {featuredBlogs.map((blog, index) => (
            <div key={blog._id} className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 to-fuchsia-600 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"></div>
              <div className="relative bg-black border-2 border-white/10 p-8 transform hover:scale-[1.02] hover:-rotate-1 transition-all duration-300">
                <div className="absolute -top-3 -right-3 w-12 h-12 bg-gradient-to-br from-violet-600 to-fuchsia-600 flex items-center justify-center">
                  <span className="text-white font-black text-lg">#{index + 1}</span>
                </div>
                
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center bg-white/5 px-3 py-1 border border-white/10">
                    <Star className="w-4 h-4 mr-2 text-yellow-400 fill-yellow-400" />
                    <span className="text-sm font-bold text-white">FEATURED</span>
                  </div>
                  <div className="flex items-center text-violet-400">
                    <TrendingUp className="w-4 h-4 mr-1" />
                    <span className="text-sm font-bold">TRENDING</span>
                  </div>
                </div>
                
                <h3 className="text-2xl font-black text-white mb-4 cursor-pointer hover:text-violet-400 transition-colors line-clamp-2"
                    onClick={() => handleViewBlog(blog)}>
                  {blog.title}
                </h3>
                
                <p className="text-gray-400 mb-6 line-clamp-3 text-sm leading-relaxed">{blog.excerpt}</p>
                
                <div className="flex items-center justify-between text-sm mb-6">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-gradient-to-r from-violet-600 to-fuchsia-600 flex items-center justify-center mr-3">
                      <User className="w-4 h-4 text-white" />
                    </div>
                    <span className="font-bold text-white">{blog.userId.email}</span>
                  </div>
                  <div className="flex items-center text-gray-400">
                    <Calendar className="w-4 h-4 mr-1" />
                    {formatDate(blog.publishedAt)}
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center text-blue-400 bg-blue-400/10 px-3 py-1 border border-blue-400/20">
                      <Eye className="w-4 h-4 mr-1" />
                      <span className="text-sm font-bold">{formatNumber(blog.views)}</span>
                    </div>
                    <div className="flex items-center text-rose-400 bg-rose-400/10 px-3 py-1 border border-rose-400/20">
                      <Heart className="w-4 h-4 mr-1" />
                      <span className="text-sm font-bold">{formatNumber(blog.likes)}</span>
                    </div>
                  </div>
                  <button
                    onClick={() => handleViewBlog(blog)}
                    className="bg-white text-black px-6 py-2 font-bold text-sm hover:bg-violet-400 hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    READ MORE
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // 2026 Features Section with Tech Aesthetic
  const FeaturesSection = () => (
    <div className="relative bg-[#0A0A0F] py-24 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-black border-2 border-cyan-500/30 mb-6">
            <Cpu className="w-4 h-4 mr-2 text-cyan-400" />
            <span className="text-sm font-bold tracking-wider text-white">TECH SPEC</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 tracking-tighter">
            Why Choose
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400"> Our Platform?</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Everything you need to share your ideas with the world
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: PenTool,
              title: "INTUITIVE WRITING",
              description: "Advanced editor with live preview, syntax highlighting, and collaborative features",
              color: "from-violet-500 to-fuchsia-500",
              tech: "MARKDOWN v2.0"
            },
            {
              icon: Globe,
              title: "GLOBAL REACH",
              description: "Share your stories with readers worldwide through our SEO-optimized platform",
              color: "from-cyan-500 to-blue-500",
              tech: "CDN EDGE"
            },
            {
              icon: Users,
              title: "THRIVING COMMUNITY",
              description: "Connect with like-minded writers and build your audience organically",
              color: "from-amber-500 to-orange-500",
              tech: "SOCIAL v3.0"
            }
          ].map((feature, index) => (
            <div key={index} className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-shimmer"></div>
              <div className="relative bg-black border-2 border-white/10 p-8 h-full transform hover:scale-105 hover:rotate-1 transition-all duration-300">
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} flex items-center justify-center`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <span className="text-xs font-mono text-gray-500">{feature.tech}</span>
                </div>
                <h3 className="text-2xl font-black text-white mb-4 tracking-tight">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
                
                <div className="absolute bottom-0 left-0 w-full h-1 bg-white/5">
                  <div className={`h-full bg-gradient-to-r ${feature.color} w-0 group-hover:w-full transition-all duration-500`}></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // 2026 Recent Blogs Section
  const RecentBlogsSection = () => (
    <div className="relative bg-[#0A0A0F] py-24 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between mb-16">
          <div className="text-center md:text-left mb-8 md:mb-0">
            <div className="inline-flex items-center px-4 py-2 bg-black border-2 border-amber-500/30 mb-6">
              <Radio className="w-4 h-4 mr-2 text-amber-400" />
              <span className="text-sm font-bold tracking-wider text-white">LIVE FEED</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-white mb-4 tracking-tighter">
              Latest
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400"> Stories</span>
            </h2>
            <p className="text-xl text-gray-400">Fresh content from our creative community</p>
          </div>
          <button
            onClick={() => navigate('/blog')}
            className="group px-8 py-4 bg-transparent border-2 border-white text-white font-bold hover:bg-white/10 transition-all duration-300 flex items-center gap-3"
          >
            <Search className="w-5 h-5" />
            VIEW ALL POSTS
            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recentBlogs.map((blog, index) => (
            <div key={blog._id} className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-amber-600 to-orange-600 opacity-0 group-hover:opacity-100 blur transition-opacity duration-500"></div>
              <div className="relative bg-black border-2 border-white/10 p-6 transform hover:scale-[1.02] transition-all duration-300">
                <div className={`h-1 w-full bg-gradient-to-r ${
                  index % 3 === 0 ? 'from-violet-500 to-fuchsia-500' :
                  index % 3 === 1 ? 'from-cyan-500 to-blue-500' :
                  'from-amber-500 to-orange-500'
                } mb-4`}></div>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-amber-400">
                    <BookOpen className="w-4 h-4 mr-2" />
                    <span className="text-xs font-bold tracking-wider">ARTICLE</span>
                  </div>
                  <div className="text-xs font-mono text-gray-500">
                    {formatDate(blog.publishedAt)}
                  </div>
                </div>
                
                <h3 className="text-xl font-black text-white mb-3 cursor-pointer hover:text-amber-400 transition-colors line-clamp-2"
                    onClick={() => handleViewBlog(blog)}>
                  {blog.title}
                </h3>
                
                <p className="text-gray-400 text-sm mb-4 line-clamp-3 leading-relaxed">
                  {blog.excerpt}
                </p>
                
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-amber-600 to-orange-600 flex items-center justify-center mr-3">
                    <User className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-sm font-bold text-white">{blog.userId.email}</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center text-blue-400 bg-blue-400/10 px-2 py-1 border border-blue-400/20">
                      <Eye className="w-3 h-3 mr-1" />
                      <span className="text-xs font-bold">{formatNumber(blog.views)}</span>
                    </div>
                    <div className="flex items-center text-rose-400 bg-rose-400/10 px-2 py-1 border border-rose-400/20">
                      <Heart className="w-3 h-3 mr-1" />
                      <span className="text-xs font-bold">{formatNumber(blog.likes)}</span>
                    </div>
                  </div>
                  <button
                    onClick={() => handleViewBlog(blog)}
                    className="bg-white/10 text-white px-4 py-2 text-xs font-bold hover:bg-white hover:text-black transition-colors flex items-center gap-2 group"
                  >
                    READ
                    <Play className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // 2026 Reviews Section with Horizontal Scroll
  const ReviewsSection = () => {
    const reviews = [
      {
        id: 1,
        name: "Sarah Johnson",
        role: "Tech Blogger",
        avatar: "SJ",
        rating: 5,
        review: "This platform has transformed how I share my tech insights. The editor is a game-changer, and the community engagement is phenomenal!",
        bgGradient: "from-violet-600 to-fuchsia-600"
      },
      {
        id: 2,
        name: "Michael Chen",
        role: "Travel Writer",
        avatar: "MC",
        rating: 5,
        review: "As a travel writer, I needed a platform that could handle both text and media beautifully. This exceeds all my expectations.",
        bgGradient: "from-cyan-600 to-blue-600"
      },
      {
        id: 3,
        name: "Emily Rodriguez",
        role: "Food Blogger",
        avatar: "ER",
        rating: 5,
        review: "The engagement I get on my food blogs here is amazing. The platform's features have helped me reach a much wider audience!",
        bgGradient: "from-amber-600 to-orange-600"
      },
      {
        id: 4,
        name: "David Kim",
        role: "Fiction Writer",
        avatar: "DK",
        rating: 5,
        review: "The writing experience is so smooth and distraction-free. I've published my entire short story series here with great success!",
        bgGradient: "from-emerald-600 to-teal-600"
      },
      {
        id: 5,
        name: "Lisa Thompson",
        role: "Lifestyle Blogger",
        avatar: "LT",
        rating: 5,
        review: "The analytics features help me understand my audience better. Plus, the community here is so supportive and engaging!",
        bgGradient: "from-rose-600 to-pink-600"
      }
    ];

    return (
      <div className="relative bg-[#0A0A0F] py-24 border-t border-white/10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-violet-900/20 via-transparent to-transparent"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-black border-2 border-yellow-500/30 mb-6">
              <Star className="w-4 h-4 mr-2 text-yellow-400 fill-yellow-400" />
              <span className="text-sm font-bold tracking-wider text-white">TRUSTED BY</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6 tracking-tighter">
              Loved by
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-400"> Creators</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Join thousands of satisfied writers who have found their voice
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0A0A0F] to-transparent z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0A0A0F] to-transparent z-10"></div>

            <div className="overflow-hidden w-full">
              <div className="flex animate-scroll-2026 gap-6 py-8 px-8">
                {[...reviews, ...reviews, ...reviews].map((review, index) => (
                  <div
                    key={`${review.id}-${index}`}
                    className="flex-none w-[400px] group relative"
                  >
                    <div className="absolute -inset-1 bg-gradient-to-r from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative bg-black border-2 border-white/10 p-8 transform hover:scale-105 hover:rotate-1 transition-all duration-300">
                      <div className="flex items-center gap-4 mb-6">
                        <div className={`w-12 h-12 bg-gradient-to-r ${review.bgGradient} flex items-center justify-center text-white font-black text-lg`}>
                          {review.avatar}
                        </div>
                        <div>
                          <h4 className="text-lg font-black text-white">{review.name}</h4>
                          <p className="text-xs font-mono text-gray-500">{review.role}</p>
                        </div>
                      </div>

                      <div className="flex gap-1 mb-4">
                        {Array.from({ length: review.rating }).map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                        ))}
                      </div>

                      <p className="text-gray-300 text-sm leading-relaxed">"{review.review}"</p>
                      
                      <div className="absolute bottom-4 right-4">
                        <Hexagon className="w-6 h-6 text-white/20" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // 2026 Call to Action Section
  const CallToActionSection = () => (
    <div className="relative bg-[#0A0A0F] py-32 overflow-hidden border-t border-white/10">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,violet_0deg,transparent_60deg,transparent_300deg,fuchsia_360deg)] opacity-20 animate-spin-slow"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,white_0%,transparent_50%)] opacity-10"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center px-6 py-3 bg-black border-2 border-white/20 mb-8 transform hover:scale-105 transition-transform">
          <Rocket className="w-5 h-5 mr-2 text-white" />
          <span className="text-sm font-bold tracking-wider text-white">JOIN THE REVOLUTION</span>
        </div>
        
        <h2 className="text-6xl md:text-7xl font-black mb-8 leading-[0.9] tracking-tighter">
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 animate-gradient-x">
            Ready to Share Your
          </span>
          <span className="block text-white">
            Unique Story?
          </span>
        </h2>
        
        <p className="text-2xl text-gray-400 mb-12 max-w-4xl mx-auto leading-relaxed">
          Join <span className="text-white font-bold">thousands of writers</span> who are already sharing their ideas and connecting with readers worldwide.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          {user ? (
            <button
              onClick={() => navigate('/dashboard')}
              className="group relative px-12 py-5 bg-white text-black font-black text-xl transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[8px_8px_0px_0px_rgba(255,255,255,0.3)] active:translate-x-0 active:translate-y-0 active:shadow-none"
            >
              <span className="relative z-10 flex items-center gap-3">
                <PenTool className="w-6 h-6" />
                Start Writing Now
                <Sparkles className="w-6 h-6 animate-pulse" />
              </span>
            </button>
          ) : (
            <>
              <button
                onClick={() => navigate('/register')}
                className="group relative px-12 py-5 bg-white text-black font-black text-xl transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[8px_8px_0px_0px_rgba(255,255,255,0.3)] active:translate-x-0 active:translate-y-0 active:shadow-none"
              >
                <span className="relative z-10 flex items-center gap-3">
                  <PenTool className="w-6 h-6" />
                  Get Started Free
                  <Sparkles className="w-6 h-6 animate-pulse" />
                </span>
              </button>
              <button
                onClick={() => navigate('/login')}
                className="px-12 py-5 bg-transparent border-2 border-white text-white font-black text-xl hover:bg-white/10 transition-all duration-300 flex items-center gap-3"
              >
                <User className="w-6 h-6" />
                Sign In
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );

  // 2026 Footer
  const FooterSection = () => (
    <footer className="relative bg-black text-white border-t border-white/10">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f1a_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f1a_1px,transparent_1px)] bg-[size:32px_32px]"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-2">
            <div className="mb-8">
              <h3 className="text-3xl font-black mb-4 tracking-tighter">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400">
                  BlogSpace
                </span>
                <span className="text-white text-sm font-mono ml-2">v2026.1</span>
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed max-w-md">
                Empowering writers and readers to share stories, discover new perspectives, and build meaningful connections through the power of words.
              </p>
            </div>
            
            <div className="mb-8">
              <h4 className="text-sm font-bold tracking-wider text-gray-400 mb-4">FOLLOW US</h4>
              <div className="flex space-x-4">
                {[
                  { icon: Twitter, href: "#", color: "hover:text-cyan-400" },
                  { icon: Facebook, href: "#", color: "hover:text-blue-400" },
                  { icon: Instagram, href: "#", color: "hover:text-pink-400" },
                  { icon: Linkedin, href: "#", color: "hover:text-blue-400" },
                  { icon: Github, href: "#", color: "hover:text-white" }
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className={`w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/20 transition-all duration-300 transform hover:scale-110 hover:-rotate-3 ${social.color}`}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-sm font-bold tracking-wider text-gray-400 mb-6">QUICK LINKS</h4>
            <ul className="space-y-4">
              {[
                { label: "All Blogs", href: "/blog" },
                { label: "Featured Stories", href: "/blog?featured=true" },
                { label: "Authors", href: "/authors" },
                { label: "Categories", href: "/categories" },
                { label: "About Us", href: "/about" }
              ].map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center group font-bold"
                  >
                    <ChevronRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-bold tracking-wider text-gray-400 mb-6">GET IN TOUCH</h4>
            <div className="space-y-4">
              <div className="flex items-center text-gray-300">
                <Mail className="w-5 h-5 mr-3 text-violet-400" />
                <span>shashwat@blogspace.com</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Phone className="w-5 h-5 mr-3 text-violet-400" />
                <span>+91 12345 67890</span>
              </div>
              <div className="flex items-center text-gray-300">
                <MapPin className="w-5 h-5 mr-3 text-violet-400" />
                <span>Raipur, Chhattisgarh, India</span>
              </div>
            </div>
            
            <div className="mt-8">
              <h5 className="text-md font-bold mb-3 text-gray-200">STAY UPDATED</h5>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 bg-white/5 border-2 border-white/10 text-white placeholder-gray-500 font-mono text-sm focus:outline-none focus:border-violet-400"
                />
                <button className="bg-gradient-to-r from-violet-600 to-fuchsia-600 px-6 py-2 font-bold hover:from-violet-700 hover:to-fuchsia-700 transition-colors">
                  <Mail className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 font-mono text-sm mb-4 md:mb-0">
              <span className="text-violet-400">©</span> 2026 BlogSpace. All rights reserved.
            </div>
            <div className="flex space-x-6">
              {[
                { label: "Privacy Policy", href: "/privacy" },
                { label: "Terms of Service", href: "/terms" },
                { label: "Cookie Policy", href: "/cookies" }
              ].map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-gray-400 hover:text-white transition-colors duration-200 text-xs font-bold tracking-wider"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0A0A0F]">
        <Navbar onLogout={handleLogout} />
        <div className="pt-16">
          <div className="animate-pulse">
            <div className="h-screen bg-gradient-to-r from-violet-900/50 to-fuchsia-900/50 relative overflow-hidden">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:64px_64px]"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-[#0A0A0F]">
        <Navbar onLogout={handleLogout} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 pt-32">
          <div className="text-center">
            <div className="bg-black border-2 border-red-500/30 p-16 max-w-2xl mx-auto">
              <div className="bg-gradient-to-r from-red-600 to-pink-600 w-20 h-20 flex items-center justify-center mx-auto mb-8">
                <FileText className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl font-black text-white mb-4">Oops! Something went wrong</h2>
              <p className="text-gray-400 mb-8 text-lg">{error}</p>
              <button 
                onClick={loadHomePageData}
                className="bg-white text-black px-8 py-4 font-black text-lg hover:bg-violet-400 hover:text-white transition-colors"
              >
                TRY AGAIN
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0A0A0F]">
      <Navbar onLogout={handleLogout} />
      
      <div className="pt-16">
        <HeroSection />
        <FeaturedBlogsSection />
        <FeaturesSection />
        <RecentBlogsSection />
        <ReviewsSection />
        <CallToActionSection />
        <FooterSection />
      </div>
      
      <style>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes text-shimmer {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes float-particle {
          0%, 100% {
            transform: translate(0, 0);
            opacity: 0;
          }
          10%, 90% {
            opacity: 1;
          }
          50% {
            transform: translate(100px, -100px);
          }
        }
        
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        
        @keyframes scroll-2026 {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.33%);
          }
        }
        
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out;
        }
        
        .animate-text-shimmer {
          background-size: 200% 200%;
          animation: text-shimmer 4s ease infinite;
        }
        
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 6s ease infinite;
        }
        
        .animate-float-particle {
          animation: float-particle linear infinite;
        }
        
        .animate-shimmer {
          position: relative;
          overflow: hidden;
        }
        
        .animate-shimmer::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
          animation: shimmer 2s infinite;
        }
        
        .animate-scroll-2026 {
          animation: scroll-2026 40s linear infinite;
        }
        
        .animate-scroll-2026:hover {
          animation-play-state: paused;
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};
