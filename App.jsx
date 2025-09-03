import React, { useState, useEffect } from 'react';

// SVG Icons and Placeholder Images
const ArrowIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7.5 5L12.5 10L7.5 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const PlayIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 4.5L13.5 9L6 13.5V4.5Z" fill="currentColor"/>
  </svg>
);

const WorldMapIcon = () => (
  <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="45" fill="none" stroke="#34D399" strokeWidth="2" opacity="0.3"/>
    <path d="M20 50C20 33.431 33.431 20 50 20C66.569 20 80 33.431 80 50C80 66.569 66.569 80 50 80C33.431 80 20 66.569 20 50Z" fill="none" stroke="#34D399" strokeWidth="1" opacity="0.2"/>
    <circle cx="35" cy="40" r="2" fill="#34D399" opacity="0.6"/>
    <circle cx="65" cy="35" r="2" fill="#34D399" opacity="0.6"/>
    <circle cx="45" cy="70" r="2" fill="#34D399" opacity="0.6"/>
    <circle cx="70" cy="65" r="2" fill="#34D399" opacity="0.6"/>
  </svg>
);

const BrowserIcon = () => (
  <svg width="360" height="22" viewBox="0 0 360 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="360" height="22" rx="8" fill="#C2E9BF"/>
    <rect x="7" y="8" width="27" height="7" rx="3.5" fill="#075300"/>
  </svg>
);

const ProcessIcon = ({ number, title, description, imagePosition = "left" }) => (
  <div className={`flex gap-24 items-center ${imagePosition === "right" ? "flex-row-reverse" : ""}`}>
    <div className="flex-1">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-1">
          <span className="text-[#0DA500] text-4xl font-semibold leading-[48px]">{number}</span>
          <h3 className="text-white text-4xl font-semibold leading-[48px]">{title}</h3>
        </div>
        <p className="text-white text-lg leading-6">{description}</p>
      </div>
    </div>
    <div className="w-[360px] h-[360px] bg-[#E7F6E5] rounded-lg relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0">
        <BrowserIcon />
      </div>
      {/* Placeholder content for each step */}
      <div className="mt-8 px-6">
        {number === "01" && (
          <div className="space-y-3">
            <div className="h-4 bg-[#075300] rounded w-3/4"></div>
            <div className="h-4 bg-[#075300] rounded w-1/2"></div>
            <div className="h-4 bg-[#075300] rounded w-2/3"></div>
            <div className="h-4 bg-[#0DA500] rounded w-1/3"></div>
          </div>
        )}
        {number === "02" && (
          <div className="space-y-3">
            <div className="h-4 bg-[#075300] rounded w-full"></div>
            <div className="h-4 bg-white rounded w-3/4 border-2 border-[#D0D1D4]"></div>
            <div className="h-4 bg-white rounded w-1/2 border-2 border-[#D0D1D4]"></div>
            <div className="h-4 bg-[#C2E9BF] rounded w-2/3"></div>
          </div>
        )}
        {number === "03" && (
          <div className="space-y-3">
            <div className="h-4 bg-[#075300] rounded w-3/4"></div>
            <div className="h-4 bg-[#075300] rounded w-1/2"></div>
            <div className="h-4 bg-[#075300] rounded w-2/3"></div>
            <div className="h-4 bg-[#0DA500] rounded w-1/3"></div>
          </div>
        )}
        {number === "04" && (
          <div className="space-y-3">
            <div className="h-4 bg-[#075300] rounded w-full"></div>
            <div className="h-4 bg-[#075300] rounded w-3/4"></div>
            <div className="h-4 bg-[#075300] rounded w-1/2"></div>
            <div className="h-4 bg-[#0DA500] rounded w-2/3"></div>
          </div>
        )}
      </div>
    </div>
  </div>
);

const TemplateCard = ({ title, description, color, imagePosition = "left" }) => (
  <div className={`flex flex-col gap-3 p-10 rounded-2xl h-[400px] relative overflow-hidden ${imagePosition === "right" ? "items-end" : "items-start"}`}>
    <div className={`absolute inset-0 ${color} opacity-90`}></div>
    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80"></div>
    <div className="relative z-10 flex items-center justify-between w-full mt-auto">
      <h3 className="text-white text-3xl font-semibold leading-10 tracking-tight">{title}</h3>
      <button className="p-2.5 rounded-lg border border-[#D0D1D4] bg-white/10 backdrop-blur-sm">
        <ArrowIcon />
      </button>
    </div>
  </div>
);

const AIBuilderTab = ({ activeTab, onTabChange }) => {
  const tabs = [
    { id: 'content', label: 'Page Content', icon: '📝' },
    { id: 'design', label: 'Design', icon: '🎨' },
    { id: 'seo', label: 'SEO', icon: '🔍' }
  ];

  const tabContent = {
    content: {
      title: 'Page Content Generator',
      description: 'AI-powered content creation for your website pages. Generate engaging copy, headlines, and descriptions tailored to your brand voice.',
      features: ['Smart content suggestions', 'SEO-optimized text', 'Brand voice consistency', 'Multiple content variations']
    },
    design: {
      title: 'Design Customization',
      description: 'Intelligent design recommendations based on your industry, brand colors, and user preferences.',
      features: ['Color scheme optimization', 'Layout suggestions', 'Typography pairing', 'Visual hierarchy']
    },
    seo: {
      title: 'SEO Optimization',
      description: 'AI-driven SEO analysis and recommendations to improve your website\'s search engine performance.',
      features: ['Keyword optimization', 'Meta tag generation', 'Content structure', 'Performance insights']
    }
  };

  const currentContent = tabContent[activeTab];

  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg">
      <div className="flex gap-2 mb-8">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
              activeTab === tab.id
                ? 'bg-[#0A7C00] text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <span>{tab.icon}</span>
            {tab.label}
          </button>
        ))}
      </div>
      
      <div className="space-y-6">
        <div>
          <h3 className="text-2xl font-semibold text-gray-900 mb-2">{currentContent.title}</h3>
          <p className="text-gray-600 leading-6">{currentContent.description}</p>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          {currentContent.features.map((feature, index) => (
            <div key={index} className="flex items-center gap-2 text-sm text-gray-700">
              <div className="w-2 h-2 bg-[#0A7C00] rounded-full"></div>
              {feature}
            </div>
          ))}
        </div>
        
        <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-[#0A7C00]">
          <p className="text-sm text-gray-600">
            <strong>AI Status:</strong> Ready to generate {activeTab === 'content' ? 'content' : activeTab === 'design' ? 'design suggestions' : 'SEO recommendations'} for your website.
          </p>
        </div>
      </div>
    </div>
  );
};

export default function App() {
  const [activeTab, setActiveTab] = useState('content');
  const [showAIModal, setShowAIModal] = useState(false);
  
  // AI Quote Generation State
  const [isGeneratingQuote, setIsGeneratingQuote] = useState(false);
  const [quoteProgress, setQuoteProgress] = useState(0);
  const [aiSuggestions, setAiSuggestions] = useState([]);
  const [selectedFunctionality, setSelectedFunctionality] = useState([]);
  const [quoteData, setQuoteData] = useState({
    template: 'Startup 1.0',
    features: ['Product overview', 'Feature(s) highlight', 'About us', 'Case studies', 'Testimonials', 'Lead generation form'],
    pricing: 'Premium',
    estimatedCost: '$100k–125k',
    includes: ['Up to 1000 pages', 'Up to 30 authorized users', 'Full brand and style customization']
  });

  // AI Quote Generation Functions
  const generateAIQuote = async () => {
    setIsGeneratingQuote(true);
    setQuoteProgress(0);
    
    // Simulate AI processing with progress updates
    const interval = setInterval(() => {
      setQuoteProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsGeneratingQuote(false);
          setShowAIModal(true);
          return 100;
        }
        return prev + 10;
      });
    }, 200);
  };

  const handleFunctionalitySelect = (functionality) => {
    setSelectedFunctionality(prev => 
      prev.includes(functionality) 
        ? prev.filter(f => f !== functionality)
        : [...prev, functionality]
    );
  };

  const getAIRecommendations = () => {
    const recommendations = [];
    if (selectedFunctionality.includes('CRM integration')) {
      recommendations.push('Enhanced user management system');
    }
    if (selectedFunctionality.includes('Asset storage/management')) {
      recommendations.push('Digital asset library with AI tagging');
    }
    if (selectedFunctionality.includes('Multilingual support')) {
      recommendations.push('AI-powered translation services');
    }
    return recommendations;
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Bar */}
      <header className="sticky top-0 z-50 bg-black/90 backdrop-blur-sm border-b border-gray-800">
        <nav className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[#8CC63F] rounded-full flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-black rounded"></div>
              </div>
              <span className="text-white text-xl font-semibold">Marketplace</span>
            </div>
            
            {/* Navigation Links */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#home" className="text-white hover:text-[#34D399] transition-colors">Home</a>
              <a href="#pricing" className="text-white hover:text-[#34D399] transition-colors">Pricing</a>
              <a href="#quote-builder" className="text-white hover:text-[#34D399] transition-colors">Get Quote</a>
              <a href="#blog" className="text-white hover:text-[#34D399] transition-colors">Blog</a>
              <a href="#contact" className="text-white hover:text-[#34D399] transition-colors">Contact Us</a>
            </div>
            
            {/* Right Side */}
            <div className="flex items-center gap-4">
              <button className="text-white hover:text-[#34D399] transition-colors">Login</button>
              <button className="bg-[#0A7C00] text-white px-6 py-2.5 rounded-lg hover:bg-[#0A7C00]/90 transition-colors">
                Get Started
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden">
        {/* Background World Map */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 flex items-center justify-center">
            <WorldMapIcon />
          </div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 py-32 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6 max-w-5xl mx-auto">
            Supporting your freedom to create with Marketplace
          </h1>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            With ready-made and fully customizable templates, Marketplace helps bring your ideal website to life—faster and smarter. Whether you are migrating a current site or building a new one, we are here to guide you on your website journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={() => document.getElementById('quote-builder')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-[#0A7C00] text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-[#0A7C00]/90 transition-colors flex items-center gap-2"
            >
              Get Started
              <ArrowIcon />
            </button>
            <button className="bg-white text-gray-900 px-8 py-3 rounded-lg text-lg font-medium hover:bg-gray-100 transition-colors flex items-center gap-2">
              <PlayIcon />
              Watch Demo
            </button>
          </div>
        </div>
      </section>

      {/* AI Builder Showcase */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Build Your Website with AI
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the future of website creation with our AI-powered builder that understands your vision and brings it to life.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Options */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900">Choose Your Focus Area</h3>
              <div className="space-y-4">
                <button
                  onClick={() => setActiveTab('content')}
                  className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                    activeTab === 'content'
                      ? 'border-[#0A7C00] bg-[#0A7C00]/5'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">📝</span>
                    <div>
                      <h4 className="font-medium text-gray-900">Page Content</h4>
                      <p className="text-sm text-gray-600">Generate engaging copy and headlines</p>
                    </div>
                  </div>
                </button>
                
                <button
                  onClick={() => setActiveTab('design')}
                  className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                    activeTab === 'design'
                      ? 'border-[#0A7C00] bg-[#0A7C00]/5'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">🎨</span>
                    <div>
                      <h4 className="font-medium text-gray-900">Design</h4>
                      <p className="text-sm text-gray-600">Customize colors, layouts, and styles</p>
                    </div>
                  </div>
                </button>
                
                <button
                  onClick={() => setActiveTab('seo')}
                  className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                    activeTab === 'seo'
                      ? 'border-[#0A7C00] bg-[#0A7C00]/5'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">🔍</span>
                    <div>
                      <h4 className="font-medium text-gray-900">SEO</h4>
                      <p className="text-sm text-gray-600">Optimize for search engines</p>
                    </div>
                  </div>
                </button>
              </div>
            </div>
            
            {/* Right Column - Preview */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <AIBuilderTab activeTab={activeTab} onTabChange={setActiveTab} />
            </div>
          </div>
        </div>
      </section>

      {/* Template Gallery */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 md:mb-0">
              Explore our gallery of website templates
            </h2>
            <button className="bg-[#0A7C00] text-white px-8 py-3 rounded-lg hover:bg-[#0A7C00]/90 transition-colors flex items-center gap-2">
              View All
              <ArrowIcon />
            </button>
          </div>
          
          {/* Filter and Search Section */}
          <div className="mb-12">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 mb-8">
              <div className="flex-1">
                <h3 className="text-lg font-medium text-gray-700 mb-3">Filter by features</h3>
                <div className="flex flex-wrap gap-2">
                  <button className="bg-white border border-[#D0D1D4] text-gray-700 px-4 py-2 rounded-lg hover:border-[#0A7C00] hover:text-[#0A7C00] transition-colors">
                    Advanced search
                  </button>
                  <button className="bg-white border border-[#D0D1D4] text-gray-700 px-4 py-2 rounded-lg hover:border-[#0A7C00] hover:text-[#0A7C00] transition-colors">
                    Blog integration
                  </button>
                  <button className="bg-white border border-[#D0D1D4] text-gray-700 px-4 py-2 rounded-lg hover:border-[#0A7C00] hover:text-[#0A7C00] transition-colors">
                    Calendar/booking tool
                  </button>
                  <button className="bg-white border border-[#D0D1D4] text-gray-700 px-4 py-2 rounded-lg hover:border-[#0A7C00] hover:text-[#0A7C00] transition-colors">
                    Case studies
                  </button>
                  <button className="bg-white border border-[#D0D1D4] text-gray-700 px-4 py-2 rounded-lg hover:border-[#0A7C00] hover:text-[#0A7C00] transition-colors">
                    Image gallery
                  </button>
                  <button className="bg-white border border-[#D0D1D4] text-gray-700 px-4 py-2 rounded-lg hover:border-[#0A7C00] hover:text-[#0A7C00] transition-colors">
                    Log in/registration
                  </button>
                  <button className="bg-white border border-[#D0D1D4] text-gray-700 px-4 py-2 rounded-lg hover:border-[#0A7C00] hover:text-[#0A7C00] transition-colors">
                    Newsletter signup
                  </button>
                  <button className="bg-white border border-[#D0D1D4] text-gray-700 px-4 py-2 rounded-lg hover:border-[#0A7C00] hover:text-[#0A7C00] transition-colors">
                    Pricing table
                  </button>
                  <button className="bg-white border border-[#D0D1D4] text-gray-700 px-4 py-2 rounded-lg hover:border-[#0A7C00] hover:text-[#0A7C00] transition-colors">
                    Shopping cart
                  </button>
                  <button className="bg-white border border-[#D0D1D4] text-gray-700 px-4 py-2 rounded-lg hover:border-[#0D1D4] hover:text-[#0A7C00] transition-colors">
                    Social media feed
                  </button>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <label className="text-lg font-medium text-gray-700">Sort by</label>
                <select className="bg-white border border-[#D0D1D4] text-gray-700 px-4 py-2 rounded-lg focus:border-[#0A7C00] focus:outline-none">
                  <option>Most Popular</option>
                  <option>Newest First</option>
                  <option>Oldest First</option>
                  <option>Alphabetical</option>
                </select>
              </div>
            </div>
          </div>
          
          {/* First Row of Templates */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <TemplateCard
              title="SaaS 1.0"
              description="Perfect for software companies and startups"
              color="bg-gradient-to-br from-[#4DD58C] to-[#04261E]"
            />
            <TemplateCard
              title="E-commerce 1.0"
              description="Built for online stores and retail businesses"
              color="bg-gradient-to-br from-[#6D83D9] to-[#131D45]"
            />
            <TemplateCard
              title="Startup 1.0"
              description="Modern design for innovative companies"
              color="bg-gradient-to-br from-[#BD550F] to-[#421E06]"
            />
          </div>
          
          {/* Second Row of Templates */}
          <div className="grid md:grid-cols-3 gap-8">
            <TemplateCard
              title="Portfolio 1.0"
              description="Showcase your creative work and projects"
              color="bg-gradient-to-br from-[#E9D101] to-[#4D4000]"
            />
            <TemplateCard
              title="Event 1.0"
              description="Perfect for conferences and special events"
              color="bg-gradient-to-br from-[#8B0B68] to-[#2C0321]"
            />
            <TemplateCard
              title="Agency 1.0"
              description="Professional agency and consulting websites"
              color="bg-gradient-to-br from-[#0F1AAA] to-[#030529]"
            />
          </div>
        </div>
      </section>

      {/* Marketplace AI Section */}
      <section className="py-24 bg-gradient-to-t from-[#00120C] to-black relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,<svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><g fill="%2334D399" fill-opacity="0.1"><circle cx="30" cy="30" r="2"/></g></svg>')] opacity-20"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get creative with Marketplace AI
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Looking for a unique solution? Marketplace AI helps you design a custom website template from the ground up—based on your brand, your style, your preferences. Bring your vision to life without limits.
          </p>
          <button 
            onClick={() => setShowAIModal(true)}
            className="bg-[#0A7C00] text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-[#0A7C00]/90 transition-colors flex items-center gap-2 mx-auto"
          >
            <PlayIcon />
            Create Template
          </button>
        </div>
      </section>

      {/* Template Details Showcase */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Column - Template Images */}
            <div className="space-y-6">
              {/* Main Template Image */}
              <div className="bg-gradient-to-br from-[#4DD58C] to-[#04261E] rounded-2xl p-10 h-[481px] relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80"></div>
                <div className="relative z-10 flex items-center justify-between w-full mt-auto">
                  <h3 className="text-white text-2xl font-semibold">SaaS 1.0</h3>
                  <button className="p-2.5 rounded-lg border border-[#D0D1D4] bg-white/10 backdrop-blur-sm">
                    <ArrowIcon />
                  </button>
                </div>
              </div>
              
              {/* Secondary Images Grid */}
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-[#6D83D9] to-[#131D45] rounded-2xl p-8 h-[376px] relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80"></div>
                  <div className="relative z-10 flex items-center justify-between w-full mt-auto">
                    <h4 className="text-white text-lg font-semibold">E-commerce 1.0</h4>
                    <button className="p-2 rounded-lg border border-[#D0D1D4] bg-white/10 backdrop-blur-sm">
                      <ArrowIcon />
                    </button>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-[#BD550F] to-[#421E06] rounded-2xl p-8 h-[248px] relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80"></div>
                  <div className="relative z-10 flex items-center justify-between w-full mt-auto">
                    <h4 className="text-white text-lg font-semibold">Startup 1.0</h4>
                    <button className="p-2 rounded-lg border border-[#D0D1D4] bg-white/10 backdrop-blur-sm">
                      <ArrowIcon />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Column - Template Details */}
            <div className="space-y-8">
              <div>
                <h2 className="text-5xl font-bold text-gray-900 mb-6">SaaS 1.0</h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  The SaaS template is perfect for tech organizations and product teams. It's sleek, responsive, SEO-friendly, and designed to showcase highly functional solutions with a clean layout, smooth animations, and a conversion-focused approach.
                </p>
                
                {/* Tags */}
                <div>
                  <h4 className="text-sm font-medium text-gray-700 mb-3">Tags</h4>
                  <div className="flex gap-3">
                    <span className="bg-[#E7F6E5] text-[#0A7C00] px-3 py-1 rounded-full text-sm font-medium">
                      SaaS
                    </span>
                    <span className="bg-[#E7F6E5] text-[#0A7C00] px-3 py-1 rounded-full text-sm font-medium">
                      Tech
                    </span>
                  </div>
                </div>
              </div>
              
              {/* Customization Options */}
              <div>
                <h4 className="text-lg font-medium text-gray-900 mb-4">Customize your template</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-gray-700">Product overview</span>
                    <div className="flex gap-2">
                      <div className="w-5 h-5 bg-[#0A7C00] rounded"></div>
                      <div className="w-5 h-5 bg-[#0A7C00] rounded"></div>
                      <div className="w-5 h-5 bg-[#0A7C00] rounded"></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-gray-700">Feature(s) highlight</span>
                    <div className="flex gap-2">
                      <div className="w-5 h-5 bg-[#0A7C00] rounded"></div>
                      <div className="w-5 h-5 bg-[#0A7C00] rounded"></div>
                      <div className="w-5 h-5 bg-[#0A7C00] rounded"></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-gray-700">Case studies</span>
                    <div className="flex gap-2">
                      <div className="w-5 h-5 bg-[#0A7C00] rounded"></div>
                      <div className="w-5 h-5 bg-[#0A7C00] rounded"></div>
                      <div className="w-5 h-5 bg-[#0A7C00] rounded"></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-gray-700">Testimonials</span>
                    <div className="flex gap-2">
                      <div className="w-5 h-5 bg-[#0A7C00] rounded"></div>
                      <div className="w-5 h-5 bg-[#0A7C00] rounded"></div>
                      <div className="w-5 h-5 bg-[#0A7C00] rounded"></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-gray-700">Pricing table & comparisons</span>
                    <div className="flex gap-2">
                      <div className="w-5 h-5 bg-[#0A7C00] rounded"></div>
                      <div className="w-5 h-5 bg-[#0A7C00] rounded"></div>
                      <div className="w-5 h-5 bg-[#0A7C00] rounded"></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-gray-700">Log in/registration form</span>
                    <div className="flex gap-2">
                      <div className="w-5 h-5 bg-[#0A7C00] rounded"></div>
                      <div className="w-5 h-5 bg-[#0A7C00] rounded"></div>
                      <div className="w-5 h-5 bg-[#0A7C00] rounded"></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-gray-700">FAQ & help center</span>
                    <div className="flex gap-2">
                      <div className="w-5 h-5 bg-[#0A7C00] rounded"></div>
                      <div className="w-5 h-5 bg-[#0A7C00] rounded"></div>
                      <div className="w-5 h-5 bg-[#0A7C00] rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className="flex gap-4">
                <button className="bg-[#0A7C00] text-white px-8 py-3 rounded-lg hover:bg-[#0A7C00]/90 transition-colors flex items-center gap-2">
                  <PlayIcon />
                  Get this template
                </button>
                <button className="bg-white border border-[#0A7C00] text-[#0A7C00] px-8 py-3 rounded-lg hover:bg-[#0A7C00]/5 transition-colors">
                  Customize
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Included Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">Features included</h3>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 bg-[#0A7C00] rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-gray-700">Product overview</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 bg-[#0A7C00] rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-gray-700">Feature(s) highlight</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 bg-[#0A7C00] rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-gray-700">Case studies</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 bg-[#0A7C00] rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-gray-700">Testimonials</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 bg-[#0A7C00] rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-gray-700">Pricing table & comparisons</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 bg-[#0A7C00] rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-gray-700">Log in/registration form</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 bg-[#0A7C00] rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-gray-700">FAQ & help center</span>
            </div>
          </div>
        </div>
      </section>

      {/* More Templates Like This */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-16 text-center">More templates like this</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <TemplateCard
              title="E-commerce 2.0"
              description="Advanced online store with enhanced features"
              color="bg-gradient-to-br from-[#5A581C] to-[#272413]"
            />
            <TemplateCard
              title="Portfolio 2.0"
              description="Creative portfolio showcase for professionals"
              color="bg-gradient-to-br from-[#7C33E2] to-[#120028]"
            />
            <TemplateCard
              title="News 1.0"
              description="Modern news and media website template"
              color="bg-gradient-to-br from-[#8FA2A3] to-[#1F2829]"
            />
          </div>
        </div>
      </section>

      {/* The Web Launch Process */}
      <section className="py-24 bg-[#020D10] relative overflow-hidden">
        {/* Background Vector */}
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 opacity-10">
          <svg width="755" height="1040" viewBox="0 0 755 1040" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 520C0 233.019 233.019 0 520 0C806.981 0 1040 233.019 1040 520C1040 806.981 806.981 1040 520 1040C233.019 1040 0 806.981 0 520Z" fill="#34D399"/>
          </svg>
        </div>
        
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-start justify-between mb-20">
            <div className="lg:w-1/2 mb-12 lg:mb-0">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                The web launch process
              </h2>
            </div>
            <div className="lg:w-1/2">
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Building, launching, and maintaining secure, modern, and compliant websites has never been easier. With a streamlined process, we guarantee transparency at every step.
              </p>
              <button className="bg-white text-gray-900 px-6 py-2.5 rounded-lg hover:bg-gray-100 transition-colors">
                Read our FAQs
              </button>
            </div>
          </div>
          
          <div className="space-y-24">
            <ProcessIcon
              number="01"
              title="Find your template + pricing package"
              description="Explore our Gallery and select a website template that matches your vision, or create a custom template with your unique branding. Still struggling to decide? Click 'Get a quote' and let us help you find the perfect template. We'll then match you to the right pricing package based on your content needs."
            />
            
            <ProcessIcon
              number="02"
              title="Submit request & sign contract"
              description="Transparency is key. Once you submit your request—whether for a migration or a new website—we'll guide you through every step of the agreement and payment processes. Track your progress easily with status updates sent to your inbox or the My Account dashboard."
              imagePosition="right"
            />
            
            <ProcessIcon
              number="03"
              title="Train your team & build your site"
              description="You're never on your own. Our team will equip your content specialists with hands-on training, so updates to your website are quick and effortless. Need custom features or specific IT requirements? We'll collaborate with you to ensure your website is tailored to your needs, all the way through launch."
            />
            
            <ProcessIcon
              number="04"
              title="Launch site & track performance"
              description="Once your website is ready and the content is in place, simply give us the green light. Post-launch, you'll have all the tools you'll need to manage content and track site performance. Use your My Account dashboard to monitor key metrics, review billing, and manage authorized users and premium services."
              imagePosition="right"
            />
          </div>
        </div>
      </section>

      {/* Interactive Quote Builder Section */}
      <section id="quote-builder" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Get a personalized quote, instantly.
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Let us help you find the right website template and pricing package for your content needs.
            </p>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Quote Builder */}
            <div className="flex-1">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                {/* Chat Interface */}
                <div className="mb-8">
                  <div className="flex gap-3 mb-6">
                    <div className="w-8 h-8 bg-[#8CC63F] rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="bg-gray-100 rounded-2xl px-4 py-3 max-w-md">
                      <p className="text-gray-700">Does your website need any extra functionality?</p>
                    </div>
                  </div>
                  
                  {/* Functionality Options */}
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <button 
                        onClick={() => handleFunctionalitySelect('CRM integration')}
                        className={`border rounded-lg px-4 py-3 text-left transition-all ${
                          selectedFunctionality.includes('CRM integration')
                            ? 'border-[#0A7C00] bg-[#0A7C00]/5 text-[#0A7C00]'
                            : 'bg-white border-gray-200 hover:border-[#0A7C00] text-gray-700'
                        }`}
                      >
                        <div className="flex justify-between items-center">
                          <span>CRM integration</span>
                          {selectedFunctionality.includes('CRM integration') ? (
                            <div className="w-4 h-4 bg-[#0A7C00] rounded-full flex items-center justify-center">
                              <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                          ) : (
                            <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                          )}
                        </div>
                      </button>
                      <button className="bg-white border border-gray-200 rounded-lg px-4 py-3 text-left hover:border-[#0A7C00] transition-colors group">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-700">Asset storage/management</span>
                          <svg className="w-4 h-4 text-gray-400 group-hover:text-[#0A7C00]" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </button>
                      <button className="bg-white border border-gray-200 rounded-lg px-4 py-3 text-left hover:border-[#0A7C00] transition-colors group">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-700">Localization options</span>
                          <svg className="w-4 h-4 text-gray-400 group-hover:text-[#0A7C00]" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </button>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <button className="bg-white border border-gray-200 rounded-lg px-4 py-3 text-left hover:border-[#0A7C00] transition-colors group">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-700">Multilingual support</span>
                          <svg className="w-4 h-4 text-gray-400 group-hover:text-[#0A7C00]" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </button>
                      <button className="bg-white border border-gray-200 rounded-lg px-4 py-3 text-left hover:border-[#0A7C00] transition-colors group">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-700">Live chatbot</span>
                          <svg className="w-4 h-4 text-gray-400 group-hover:text-[#0A7C00]" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </button>
                      <button className="bg-white border border-gray-200 rounded-lg px-4 py-3 text-left hover:border-[#0A7C00] transition-colors group">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-700">Customer service ticketing</span>
                          <svg className="w-4 h-4 text-gray-400 group-hover:text-[#0A7C00]" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </button>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <button className="bg-white border border-gray-200 rounded-lg px-4 py-3 text-left hover:border-[#0A7C00] transition-colors group">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-700">Custom API integration</span>
                          <svg className="w-4 h-4 text-gray-400 group-hover:text-[#0A7C00]" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </button>
                      <button className="bg-white border border-gray-200 rounded-lg px-4 py-3 text-left hover:border-[#0A7C00] transition-colors group">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-700">Role-based access control</span>
                          <svg className="w-4 h-4 text-gray-400 group-hover:text-[#0A7C00]" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </button>
                      <button className="bg-white border border-gray-200 rounded-lg px-4 py-3 text-left hover:border-[#0A7C00] transition-colors group">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-700">Two-factor authentication</span>
                          <svg className="w-4 h-4 text-gray-400 group-hover:text-[#0A7C00]" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </button>
                    </div>
                    
                    <div className="flex justify-center">
                      <button className="bg-white border border-gray-200 rounded-lg px-6 py-3 text-center hover:border-[#0A7C00] transition-colors group w-full max-w-md">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-700">None for now, just the basics!</span>
                          <svg className="w-4 h-4 text-gray-400 group-hover:text-[#0A7C00]" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </button>
                    </div>
                  </div>
                  
                  {/* AI Recommendations */}
                  {selectedFunctionality.length > 0 && (
                    <div className="mt-6 p-4 bg-gradient-to-r from-[#0A7C00]/10 to-[#34D399]/10 rounded-lg border border-[#0A7C00]/20">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-6 h-6 bg-[#0A7C00] rounded-full flex items-center justify-center">
                          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <h4 className="font-semibold text-[#0A7C00]">AI Recommendations</h4>
                      </div>
                      <div className="space-y-2">
                        {getAIRecommendations().map((rec, index) => (
                          <div key={index} className="flex items-center gap-2 text-sm text-gray-700">
                            <div className="w-2 h-2 bg-[#0A7C00] rounded-full"></div>
                            <span>{rec}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {/* AI Quote Generation Button */}
                  <div className="mt-6 text-center">
                    <button
                      onClick={generateAIQuote}
                      disabled={isGeneratingQuote}
                      className="bg-gradient-to-r from-[#0A7C00] to-[#34D399] text-white px-8 py-3 rounded-lg font-medium hover:from-[#0A7C00]/90 hover:to-[#34D399]/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 mx-auto"
                    >
                      {isGeneratingQuote ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          Generating AI Quote... {quoteProgress}%
                        </>
                      ) : (
                        <>
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
                          </svg>
                          Generate AI-Powered Quote
                        </>
                      )}
                    </button>
                  </div>
                </div>
                
                {/* Navigation */}
                <div className="flex items-center justify-between">
                  <button className="bg-white border border-gray-200 px-6 py-2.5 rounded-lg hover:border-[#0A7C00] transition-colors flex items-center gap-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Back
                  </button>
                  
                  <div className="flex gap-2">
                    <div className="w-10 h-2 bg-[#0DA500] rounded"></div>
                    <div className="w-10 h-2 bg-[#0DA500] rounded"></div>
                    <div className="w-10 h-2 bg-[#0DA500] rounded"></div>
                    <div className="w-10 h-2 bg-[#0DA500] rounded"></div>
                    <div className="w-10 h-2 bg-[#0DA500] rounded"></div>
                    <div className="w-10 h-2 bg-[#0DA500] rounded"></div>
                    <div className="w-10 h-2 bg-gray-300 rounded opacity-15"></div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <button className="text-[#075300] hover:text-[#0A7C00] transition-colors">
                      Skip
                    </button>
                    <button className="bg-[#0A7C00] text-white px-6 py-2.5 rounded-lg hover:bg-[#0A7C00]/90 transition-colors flex items-center gap-2">
                      Next
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Quote Summary Sidebar */}
            <div className="lg:w-80">
              <div className="bg-white rounded-2xl p-6 shadow-lg sticky top-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Quote Summary</h3>
                
                {/* Template Selection */}
                <div className="mb-6">
                  <p className="text-gray-700 mb-3">Template</p>
                  <div className="bg-white border border-gray-200 rounded-lg p-3">
                    <div className="flex gap-3">
                      <div className="w-20 h-20 bg-gradient-to-br from-orange-600 to-orange-800 rounded-lg flex items-center justify-center">
                        <span className="text-white text-xs font-bold">Startup 1.0</span>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900">Startup 1.0</h4>
                        <p className="text-sm text-gray-600">Business • Tech</p>
                      </div>
                      <button className="w-10 h-10 border border-gray-200 rounded-lg flex items-center justify-center hover:border-[#0A7C00] transition-colors">
                        <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                
                {/* Features Selected */}
                <div className="mb-6">
                  <p className="text-gray-700 mb-3">Features selected</p>
                  <div className="space-y-2">
                    {['Product overview', 'Feature(s) highlight', 'About us', 'Case studies', 'Testimonials', 'Lead generation form'].map((feature, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="w-5 h-5 bg-[#0DA500] rounded-full flex items-center justify-center">
                          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Pricing Package */}
                <div>
                  <p className="text-gray-700 mb-3">Pricing Package</p>
                  <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-4 text-white">
                    <h4 className="text-xl font-semibold mb-2">Premium</h4>
                    <div className="mb-3">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs text-gray-300">Estimated cost</span>
                        <svg className="w-3 h-3 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <p className="text-lg font-semibold">$100k–125k</p>
                    </div>
                    <div className="border-t border-gray-600 pt-3">
                      <p className="text-sm font-semibold mb-2">Includes:</p>
                      <div className="space-y-1">
                        {['Up to 1000 pages', 'Up to 30 authorized users', 'Full brand and style customization'].map((item, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <div className="w-4 h-4 bg-[#0DA500] rounded-full flex items-center justify-center">
                              <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <span className="text-sm">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-black via-[#00120C] to-[#020D10] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-6">
              <div className="w-12 h-12 bg-[#8CC63F] rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-black rounded"></div>
              </div>
              <span className="text-white text-2xl font-semibold">Marketplace</span>
            </div>
            
            <nav className="flex flex-wrap justify-center gap-8 mb-8">
              <a href="#home" className="text-white hover:text-[#34D399] transition-colors">Home</a>
              <a href="#gallery" className="text-white hover:text-[#34D399] transition-colors">Gallery</a>
              <a href="#pricing" className="text-white hover:text-[#34D399] transition-colors">Pricing</a>
              <a href="#faqs" className="text-white hover:text-[#34D399] transition-colors">FAQs</a>
              <a href="#training" className="text-white hover:text-[#34D399] transition-colors">Training</a>
              <a href="#contact" className="text-white hover:text-[#34D399] transition-colors">Contact Us</a>
              <a href="#account" className="text-white hover:text-[#34D399] transition-colors">My Account</a>
            </nav>
          </div>
          
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <p className="text-gray-400 text-sm">
                Copyright © 2025 CX Studios. All rights reserved.
              </p>
              
              <div className="flex items-center gap-4">
                <a href="#" className="text-gray-400 hover:text-[#34D399] transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.02-1.843-3.02-1.843 0-2.136 1.445-2.136 2.939v5.66H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-[#34D399] transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-[#34D399] transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
              </div>
              
              <div className="flex items-center gap-4 text-sm text-gray-400">
                <a href="#" className="hover:text-[#34D399] transition-colors underline">Terms and Conditions</a>
                <span>|</span>
                <a href="#" className="hover:text-[#34D399] transition-colors underline">Privacy Policy</a>
                <span>|</span>
                <a href="#" className="hover:text-[#34D399] transition-colors underline">Cookies</a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* AI Quote Generation Modal */}
      {showAIModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-6">
          <div className="bg-white rounded-2xl p-8 max-w-2xl w-full">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-[#0A7C00] to-[#34D399] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">AI Quote Generated!</h3>
              <p className="text-gray-600">Your personalized quote has been created using AI analysis</p>
            </div>
            
            {/* AI Analysis Results */}
            <div className="space-y-4 mb-6">
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">AI Analysis Summary</h4>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex justify-between">
                    <span>Selected Functionality:</span>
                    <span className="font-medium">{selectedFunctionality.length} features</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Complexity Level:</span>
                    <span className="font-medium">
                      {selectedFunctionality.length > 3 ? 'Advanced' : selectedFunctionality.length > 1 ? 'Intermediate' : 'Basic'}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Recommended Package:</span>
                    <span className="font-medium text-[#0A7C00]">
                      {selectedFunctionality.length > 3 ? 'Enterprise' : selectedFunctionality.length > 1 ? 'Premium' : 'Starter'}
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="bg-[#0A7C00]/5 rounded-lg p-4 border border-[#0A7C00]/20">
                <h4 className="font-semibold text-[#0A7C00] mb-2">AI Recommendations</h4>
                <div className="space-y-1">
                  {getAIRecommendations().map((rec, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm text-gray-700">
                      <div className="w-2 h-2 bg-[#0A7C00] rounded-full"></div>
                      <span>{rec}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="flex gap-3 justify-center">
              <button
                onClick={() => setShowAIModal(false)}
                className="bg-gray-100 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-200 transition-colors"
              >
                Close
              </button>
              <button
                onClick={() => {
                  setShowAIModal(false);
                  // Scroll to quote builder
                  document.getElementById('quote-builder')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-[#0A7C00] text-white px-6 py-2 rounded-lg hover:bg-[#0A7C00]/90 transition-colors"
              >
                View Full Quote
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
