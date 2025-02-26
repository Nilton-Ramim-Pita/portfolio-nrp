import React, { useState, useEffect } from 'react';
import { Menu, X, Linkedin, Github, Mail, Phone, Download, ChevronRight, ExternalLink, Globe, Code, Palette, Database, Monitor, Search, Cpu, QrCode } from 'lucide-react';
import './App.css';

// Translations
const translations = {
  en: {
    nav: {
      home: 'HOME',
      about: 'ABOUT US',
      services: 'SERVICES',
      portfolio: 'PORTFOLIO',
      blog: 'BLOG',
      contact: 'CONTACT'
    },
    hero: {
      title: 'Nilton Ramim Pita Ncangaza',
      subtitle: 'IT Specialist & Software Developer',
      description: 'I am a professional, visually dedicated and detail-oriented IT specialist with expertise in software development, digital marketing, and graphic design.',
      hireMe: 'Hire Me',
      viewPortfolio: 'View Portfolio'
    },
    about: {
      biography: 'Biography',
      bio1: 'I am Nilton Ramim Pita Ncangaza, an IT specialist with extensive experience in software development, digital marketing, and graphic design. My passion for technology and problem-solving has driven me to develop innovative solutions for clients across various industries.',
      bio2: 'With a strong educational background in computer science and years of hands-on experience, I bring a unique blend of technical expertise and creative thinking to every project I undertake.',
      name: 'Name:',
      email: 'Email:',
      expertise: 'Expertise:',
      experience: 'Experience:',
      expertiseAreas: 'Software Development, Digital Marketing, Graphic Design',
      experienceYears: '5+ Years',
      downloadCV: 'Download CV'
    },
    skills: {
      title: 'Skills',
      python: 'Python',
      react: 'React',
      nodejs: 'Node.js',
      marketing: 'Digital Marketing & SEO',
      design: 'Graphic Design',
      maintenance: 'Computer Maintenance'
    },
    services: {
      title: 'My Services',
      description: 'I offer a comprehensive range of IT services tailored to meet your specific needs. From software development to digital marketing, I provide end-to-end solutions to help your business thrive.',
      software: {
        title: 'Software Development',
        description: 'Custom software solutions using Python, React, Node.js and other modern technologies to meet your business needs.',
        details: 'I develop custom web applications, mobile apps, and desktop software tailored to your specific requirements. Using modern frameworks and best practices, I create scalable, maintainable, and high-performance solutions.'
      },
      marketing: {
        title: 'Digital Marketing & SEO',
        description: 'Strategic digital marketing campaigns and SEO optimization to increase your online visibility and drive traffic.',
        details: 'I help businesses improve their online presence through comprehensive SEO strategies, content marketing, social media campaigns, and analytics-driven optimization to increase traffic and conversions.'
      },
      design: {
        title: 'Graphic Design',
        description: 'Creative and professional graphic design services for branding, marketing materials, and digital assets.',
        details: 'From logo design to complete brand identity systems, I create visually compelling designs that communicate your brand message effectively across all digital and print media.'
      },
      maintenance: {
        title: 'Computer Maintenance',
        description: 'Professional computer maintenance and repair services to keep your hardware and systems running smoothly.',
        details: 'I provide comprehensive hardware and software maintenance services, including system optimization, virus removal, data recovery, and hardware upgrades to ensure your technology operates at peak performance.'
      },
      learnMore: 'Learn More'
    },
    portfolio: {
      title: 'My Portfolio',
      description: 'Explore a selection of my recent projects showcasing my skills in software development, digital marketing, and graphic design.',
      categories: {
        all: 'All',
        development: 'Development',
        design: 'Design',
        marketing: 'Marketing'
      },
      projects: {
        ecommerce: {
          title: 'E-commerce Website',
          tech: 'React, Node.js, MongoDB'
        },
        marketing: {
          title: 'Digital Marketing Campaign',
          tech: 'SEO, Social Media, Content Strategy'
        },
        mobile: {
          title: 'Mobile Application',
          tech: 'React Native, Firebase'
        },
        brand: {
          title: 'Brand Identity Design',
          tech: 'Logo, Brand Guidelines, Marketing Materials'
        },
        python: {
          title: 'Python Data Analysis Tool',
          tech: 'Python, Pandas, Matplotlib'
        },
        task: {
          title: 'Task Management System',
          tech: 'React, Node.js, Express, MongoDB'
        }
      },
      viewDetails: 'View Details',
      github: 'GitHub',
      liveDemo: 'Live Demo',
      viewAll: 'View All Projects'
    },
    blog: {
      title: 'Latest Articles',
      description: 'Stay updated with the latest trends and insights in technology, development, and digital marketing through my regularly updated blog.',
      articles: {
        react: {
          date: 'May 15, 2025',
          category: 'Development',
          title: 'The Future of React Development in 2025',
          description: 'Explore the latest trends and advancements in React development and how they are shaping the future of web applications.'
        },
        seo: {
          date: 'April 28, 2025',
          category: 'Digital Marketing',
          title: 'Effective SEO Strategies for Small Businesses',
          description: 'Learn how small businesses can leverage SEO to increase their online visibility and attract more customers.'
        },
        design: {
          date: 'April 10, 2025',
          category: 'Design',
          title: 'Essential Design Principles for Modern Web Applications',
          description: 'Discover the key design principles that can elevate your web applications and enhance user experience.'
        }
      },
      readMore: 'Read More',
      viewAll: 'View All Articles'
    },
    contact: {
      title: 'Get In Touch',
      description: 'Have a project in mind or need professional IT services? Feel free to contact me. I\'m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.',
      form: {
        name: 'Your Name',
        email: 'Your Email',
        subject: 'Subject',
        message: 'Message',
        send: 'Send Message',
        placeholders: {
          name: 'John Doe',
          email: 'john@example.com',
          subject: 'Project Inquiry',
          message: 'Your message here...'
        }
      },
      info: {
        title: 'Contact Information',
        email: 'Email',
        phone: 'Phone',
        linkedin: 'LinkedIn',
        github: 'GitHub',
        follow: 'Follow Me'
      }
    },
    footer: {
      rights: 'All rights reserved.'
    }
  },
  pt: {
    nav: {
      home: 'INÍCIO',
      about: 'SOBRE',
      services: 'SERVIÇOS',
      portfolio: 'PORTFÓLIO',
      blog: 'BLOG',
      contact: 'CONTATO'
    },
    hero: {
      title: 'Nilton Ramim Pita Ncangaza',
      subtitle: 'Especialista em TI & Desenvolvedor de Software',
      description: 'Sou um especialista em TI profissional, visualmente dedicado e orientado a detalhes, com experiência em desenvolvimento de software, marketing digital e design gráfico.',
      hireMe: 'Contrate-me',
      viewPortfolio: 'Ver Portfólio'
    },
    about: {
      biography: 'Biografia',
      bio1: 'Sou Nilton Ramim Pita Ncangaza, um especialista em TI com vasta experiência em desenvolvimento de software, marketing digital e design gráfico. Minha paixão por tecnologia e resolução de problemas me levou a desenvolver soluções inovadoras para clientes em diversos setores.',
      bio2: 'Com uma sólida formação acadêmica em ciência da computação e anos de experiência prática, trago uma combinação única de expertise técnica e pensamento criativo para cada projeto que realizo.',
      name: 'Nome:',
      email: 'Email:',
      expertise: 'Especialidades:',
      experience: 'Experiência:',
      expertiseAreas: 'Desenvolvimento de Software, Marketing Digital, Design Gráfico',
      experienceYears: 'Mais de 5 anos',
      downloadCV: 'Baixar Currículo'
    },
    skills: {
      title: 'Habilidades',
      python: 'Python',
      react: 'React',
      nodejs: 'Node.js',
      marketing: 'Marketing Digital & SEO',
      design: 'Design Gráfico',
      maintenance: 'Manutenção de Computadores'
    },
    services: {
      title: 'Meus Serviços',
      description: 'Ofereço uma ampla gama de serviços de TI adaptados para atender às suas necessidades específicas. Do desenvolvimento de software ao marketing digital, forneço soluções completas para ajudar seu negócio a prosperar.',
      software: {
        title: 'Desenvolvimento de Software',
        description: 'Soluções de software personalizadas usando Python, React, Node.js e outras tecnologias modernas para atender às necessidades do seu negócio.',
        details: 'Desenvolvo aplicações web personalizadas, aplicativos móveis e software para desktop adaptados às suas necessidades específicas. Usando frameworks modernos e melhores práticas, crio soluções escaláveis, de fácil manutenção e alto desempenho.'
      },
      marketing: {
        title: 'Marketing Digital & SEO',
        description: 'Campanhas estratégicas de marketing digital e otimização de SEO para aumentar sua visibilidade online e gerar tráfego.',
        details: 'Ajudo empresas a melhorar sua presença online através de estratégias abrangentes de SEO, marketing de conteúdo, campanhas de mídia social e otimização baseada em análises para aumentar o tráfego e as conversões.'
      },
      design: {
        title: 'Design Gráfico',
        description: 'Serviços de design gráfico criativos e profissionais para branding, materiais de marketing e ativos digitais.',
        details: 'Do design de logotipos a sistemas completos de identidade de marca, crio designs visualmente atraentes que comunicam efetivamente a mensagem da sua marca em todas as mídias digitais e impressas.'
      },
      maintenance: {
        title: 'Manutenção de Computadores',
        description: 'Serviços profissionais de manutenção e reparo de computadores para manter seu hardware e sistemas funcionando sem problemas.',
        details: 'Forneço serviços abrangentes de manutenção de hardware e software, incluindo otimização de sistemas, remoção de vírus, recuperação de dados e atualizações de hardware para garantir que sua tecnologia opere com desempenho máximo.'
      },
      learnMore: 'Saiba Mais'
    },
    portfolio: {
      title: 'Meu Portfólio',
      description: 'Explore uma seleção dos meus projetos recentes que demonstram minhas habilidades em desenvolvimento de software, marketing digital e design gráfico.',
      categories: {
        all: 'Todos',
        development: 'Desenvolvimento',
        design: 'Design',
        marketing: 'Marketing'
      },
      projects: {
        ecommerce: {
          title: 'Site de E-commerce',
          tech: 'React, Node.js, MongoDB'
        },
        marketing: {
          title: 'Campanha de Marketing Digital',
          tech: 'SEO, Mídia Social, Estratégia de Conteúdo'
        },
        mobile: {
          title: 'Aplicativo Móvel',
          tech: 'React Native, Firebase'
        },
        brand: {
          title: 'Design de Identidade de Marca',
          tech: 'Logo, Diretrizes de Marca, Materiais de Marketing'
        },
        python: {
          title: 'Ferramenta de Análise de Dados em Python',
          tech: 'Python, Pandas, Matplotlib'
        },
        task: {
          title: 'Sistema de Gerenciamento de Tarefas',
          tech: 'React, Node.js, Express, MongoDB'
        }
      },
      viewDetails: 'Ver Detalhes',
      github: 'GitHub',
      liveDemo: 'Demo ao Vivo',
      viewAll: 'Ver Todos os Projetos'
    },
    blog: {
      title: 'Artigos Recentes',
      description: 'Mantenha-se atualizado com as últimas tendências e insights em tecnologia, desenvolvimento e marketing digital através do meu blog regularmente atualizado.',
      articles: {
        react: {
          date: '15 de Maio, 2025',
          category: 'Desenvolvimento',
          title: 'O Futuro do Desenvolvimento React em 2025',
          description: 'Explore as últimas tendências e avanços no desenvolvimento React e como eles estão moldando o futuro das aplicações web.'
        },
        seo: {
          date: '28 de Abril, 2025',
          category: 'Marketing Digital',
          title: 'Estratégias Eficazes de SEO para Pequenas Empresas',
          description: 'Aprenda como pequenas empresas podem aproveitar o SEO para aumentar sua visibilidade online e atrair mais clientes.'
        },
        design: {
          date: '10 de Abril, 2025',
          category: 'Design',
          title: 'Princípios Essenciais de Design para Aplicações Web Modernas',
          description: 'Descubra os princípios-chave de design que podem elevar suas aplicações web e melhorar a experiência do usuário.'
        }
      },
      readMore: 'Ler Mais',
      viewAll: 'Ver Todos os Artigos'
    },
    contact: {
      title: 'Entre em Contato',
      description: 'Tem um projeto em mente ou precisa de serviços profissionais de TI? Sinta-se à vontade para entrar em contato. Estou sempre aberto a discutir novos projetos, ideias criativas ou oportunidades de fazer parte da sua visão.',
      form: {
        name: 'Seu Nome',
        email: 'Seu Email',
        subject: 'Assunto',
        message: 'Mensagem',
        send: 'Enviar Mensagem',
        placeholders: {
          name: 'João Silva',
          email: 'joao@exemplo.com',
          subject: 'Consulta de Projeto',
          message: 'Sua mensagem aqui...'
        }
      },
      info: {
        title: 'Informações de Contato',
        email: 'Email',
        phone: 'Telefone',
        linkedin: 'LinkedIn',
        github: 'GitHub',
        follow: 'Siga-me'
      }
    },
    footer: {
      rights: 'Todos os direitos reservados.'
    }
  }
};

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState('pt');
  const [activeServiceId, setActiveServiceId] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState('all');
  const [showQRCode, setShowQRCode] = useState(false);
  
  const t = translations[language as keyof typeof translations];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleLanguage = (lang: string) => {
    setLanguage(lang);
  };

  const toggleServiceDetails = (id: string) => {
    setActiveServiceId(activeServiceId === id ? null : id);
  };

  const filterProjects = (category: string) => {
    setActiveCategory(category);
  };

  const toggleQRCode = () => {
    setShowQRCode(!showQRCode);
  };

  // Generate CV PDF
  const generateCV = () => {
    // In a real implementation, this would generate or download a pre-made PDF
    alert(language === 'pt' ? 'Baixando currículo em PDF...' : 'Downloading CV in PDF...');
  };

  // Projects data with categories
  const projects = [
    { id: 1, title: t.portfolio.projects.ecommerce.title, tech: t.portfolio.projects.ecommerce.tech, image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80', category: 'development', github: true, demo: false },
    { id: 2, title: t.portfolio.projects.marketing.title, tech: t.portfolio.projects.marketing.tech, image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1115&q=80', category: 'marketing', github: false, demo: true },
    { id: 3, title: t.portfolio.projects.mobile.title, tech: t.portfolio.projects.mobile.tech, image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80', category: 'development', github: true, demo: false },
    { id: 4, title: t.portfolio.projects.brand.title, tech: t.portfolio.projects.brand.tech, image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80', category: 'design', github: false, demo: true },
    { id: 5, title: t.portfolio.projects.python.title, tech: t.portfolio.projects.python.tech, image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80', category: 'development', github: true, demo: false },
    { id: 6, title: t.portfolio.projects.task.title, tech: t.portfolio.projects.task.tech, image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80', category: 'development', github: true, demo: true },
  ];

  // Filter projects based on active category
  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Language Switcher */}
      <div className="fixed top-4 right-4 z-50 flex space-x-2">
        <button 
          onClick={() => toggleLanguage('pt')} 
          className={`px-3 py-1 rounded-md flex items-center ${language === 'pt' ? 'bg-red-500' : 'bg-gray-800'}`}
        >
          🇵🇹 PT
        </button>
        <button 
          onClick={() => toggleLanguage('en')} 
          className={`px-3 py-1 rounded-md flex items-center ${language === 'en' ? 'bg-red-500' : 'bg-gray-800'}`}
        >
          🇺🇸 EN
        </button>
      </div>

      {/* Header */}
      <header className="fixed w-full bg-black/90 backdrop-blur-sm z-40 border-b border-gray-800">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <a href="#home" className="text-2xl font-bold flex items-center">
            <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center mr-2">
              <span className="text-white font-bold">NRP</span>
            </div>
            <span className="text-red-500">i</span>Port
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="hover:text-red-500 transition-colors">{t.nav.home}</a>
            <a href="#about" className="hover:text-red-500 transition-colors">{t.nav.about}</a>
            <a href="#services" className="hover:text-red-500 transition-colors">{t.nav.services}</a>
            <a href="#portfolio" className="hover:text-red-500 transition-colors">{t.nav.portfolio}</a>
            <a href="#blog" className="hover:text-red-500 transition-colors">{t.nav.blog}</a>
            <a href="#contact" className="hover:text-red-500 transition-colors">{t.nav.contact}</a>
          </nav>
          
          {/* Mobile Menu Button */}
          <button className="md:hidden text-white" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-sm">
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              <a href="#home" className="hover:text-red-500 transition-colors" onClick={toggleMenu}>{t.nav.home}</a>
              <a href="#about" className="hover:text-red-500 transition-colors" onClick={toggleMenu}>{t.nav.about}</a>
              <a href="#services" className="hover:text-red-500 transition-colors" onClick={toggleMenu}>{t.nav.services}</a>
              <a href="#portfolio" className="hover:text-red-500 transition-colors" onClick={toggleMenu}>{t.nav.portfolio}</a>
              <a href="#blog" className="hover:text-red-500 transition-colors" onClick={toggleMenu}>{t.nav.blog}</a>
              <a href="#contact" className="hover:text-red-500 transition-colors" onClick={toggleMenu}>{t.nav.contact}</a>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center relative overflow-hidden pt-16">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>
        
        <div className="container mx-auto px-4 z-10 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">{t.hero.title}</h1>
            <h2 className="text-2xl md:text-3xl text-red-500 font-semibold mb-6">{t.hero.subtitle}</h2>
            <p className="text-lg text-gray-300 mb-8 max-w-xl">
              {t.hero.description}
            </p>
            <div className="flex space-x-4">
              <a href="#contact" className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-md transition-colors flex items-center btn-primary">
                {t.hero.hireMe} <Mail className="ml-2" size={18} />
              </a>
              <a href="#portfolio" className="border border-white hover:border-red-500 hover:text-red-500 px-6 py-3 rounded-md transition-colors">
                {t.hero.viewPortfolio}
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-red-500 flex items-center justify-center bg-gray-900">
                <Code size={100} className="text-red-500" />
              </div>
            </div>
          </div>
        </div>
        
        {/* Social Links */}
        <div className="absolute bottom-10 right-10 flex space-x-4">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-red-500 p-2 rounded-full transition-colors">
            <Linkedin size={20} />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-red-500 p-2 rounded-full transition-colors">
            <Github size={20} />
          </a>
          <a href="mailto:ramimpita65@gmail.com" className="bg-white/10 hover:bg-red-500 p-2 rounded-full transition-colors">
            <Mail size={20} />
          </a>
          <a href="tel:+123456789" className="bg-white/10 hover:bg-red-500 p-2 rounded-full transition-colors">
            <Phone size={20} />
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h2 className="text-4xl font-bold mb-2">{t.about.biography}</h2>
              <div className="w-20 h-1 bg-red-500 mb-8"></div>
              <p className="text-gray-300 mb-6">
                {t.about.bio1}
              </p>
              <p className="text-gray-300 mb-6">
                {t.about.bio2}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div>
                  <h3 className="font-semibold mb-2">{t.about.name}</h3>
                  <p className="text-gray-300">Nilton Ramim Pita Ncangaza</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">{t.about.email}</h3>
                  <p className="text-gray-300">ramimpita65@gmail.com</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">{t.about.expertise}</h3>
                  <p className="text-gray-300">{t.about.expertiseAreas}</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">{t.about.experience}</h3>
                  <p className="text-gray-300">{t.about.experienceYears}</p>
                </div>
              </div>
              <button onClick={generateCV} className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-md transition-colors inline-flex items-center btn-primary">
                {t.about.downloadCV} <Download className="ml-2" size={18} />
              </button>
            </div>
            <div className="md:w-1/2 md:pl-12">
              <h2 className="text-4xl font-bold mb-2">{t.skills.title}</h2>
              <div className="w-20 h-1 bg-red-500 mb-8"></div>
              
              <div className="mb-6">
                <div className="flex justify-between mb-2">
                  <span className="font-semibold">{t.skills.python}</span>
                  <span>90%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-red-500 h-2 rounded-full skill-bar" style={{ width: '90%' }}></div>
                </div>
              </div>
              
              <div className="mb-6">
                <div className="flex justify-between mb-2">
                  <span className="font-semibold">{t.skills.react}</span>
                  <span>85%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-red-500 h-2 rounded-full skill-bar" style={{ width: '85%' }}></div>
                </div>
              </div>
              
              <div className="mb-6">
                <div className="flex justify-between mb-2">
                  <span className="font-semibold">{t.skills.nodejs}</span>
                  <span>80%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-red-500 h-2 rounded-full skill-bar" style={{ width: '80%' }}></div>
                </div>
              </div>
              
              <div className="mb-6">
                <div className="flex justify-between mb-2">
                  <span className="font-semibold">{t.skills.marketing}</span>
                  <span>85%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-red-500 h-2 rounded-full skill-bar" style={{ width: '85%' }}></div>
                </div>
              </div>
              
              <div className="mb-6">
                <div className="flex justify-between mb-2">
                  <span className="font-semibold">{t.skills.design}</span>
                  <span>75%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-red-500 h-2 rounded-full skill-bar" style={{ width: '75%' }}></div>
                </div>
              </div>
              
              <div className="mb-6">
                <div className="flex justify-between mb-2">
                  <span className="font-semibold">{t.skills.maintenance}</span>
                  <span>95%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-red-500 h-2 rounded-full skill-bar" style={{ width: '95%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-2">{t.services.title}</h2>
            <div className="w-20 h-1 bg-red-500 mx-auto mb-8"></div>
            <p className="text-gray-300 max-w-2xl mx-auto">
              {t.services.description}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Software Development */}
            <div className={`bg-gray-900 p-8 rounded-lg transition-all duration-300 service-card ${activeServiceId === 'software' ? 'scale-105 shadow-lg shadow-red-500/20' : 'hover:bg-gray-800'}`}>
              <div className="w-16 h-16 bg-red-500 rounded-lg flex items-center justify-center mb-6 group-hover:bg-red-600 transition-colors">
                <Code className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">{t.services.software.title}</h3>
              <p className="text-gray-400 mb-4">
                {t.services.software.description}
              </p>
              <button 
                onClick={() => toggleServiceDetails('software')} 
                className="text-red-500 inline-flex items-center hover:text-red-400"
              >
                {t.services.learnMore} <ChevronRight size={16} className={`ml-1 transition-transform duration-300 ${activeServiceId === 'software' ? 'rotate-90' : ''}`} />
              </button>
              
              {activeServiceId === 'software' && (
                <div className="mt-4 pt-4 border-t border-gray-700 animate-fadeIn">
                  <p className="text-gray-300 mb-4">{t.services.software.details}</p>
                  <div className="grid grid-cols-2 gap-2 mt-4">
                    <div className="bg-gray-800 p-3 rounded-md flex items-center">
                      <Code size={16} className="text-red-500 mr-2" />
                      <span className="text-sm">React</span>
                    </div>
                    <div className="bg-gray-800 p-3 rounded-md flex items-center">
                      <Code size={16} className="text-red-500 mr-2" />
                      <span className="text-sm">Node.js</span>
                    </div>
                    <div className="bg-gray-800 p-3 rounded-md flex items-center">
                      <Code size={16} className="text-red-500 mr-2" />
                      <span className="text-sm">Python</span>
                    </div>
                    <div className="bg-gray-800 p-3 rounded-md flex items-center">
                      <Database size={16} className="text-red-500 mr-2" />
                      <span className="text-sm">MongoDB</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            {/* Digital Marketing */}
            <div className={`bg-gray-900 p-8 rounded-lg transition-all duration-300 service-card ${activeServiceId === 'marketing' ? 'scale-105 shadow-lg shadow-red-500/20' : 'hover:bg-gray-800'}`}>
              <div className="w-16 h-16 bg-red-500 rounded-lg flex items-center justify-center mb-6 group-hover:bg-red-600 transition-colors">
                <Search className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">{t.services.marketing.title}</h3>
              <p className="text-gray-400 mb-4">
                {t.services.marketing.description}
              </p>
              <button 
                onClick={() => toggleServiceDetails('marketing')} 
                className="text-red-500 inline-flex items-center hover:text-red-400"
              >
                {t.services.learnMore} <ChevronRight size={16} className={`ml-1 transition-transform duration-300 ${activeServiceId === 'marketing' ? 'rotate-90' : ''}`} />
              </button>
              
              {activeServiceId === 'marketing' && (
                <div className="mt-4 pt-4 border-t border-gray-700 animate-fadeIn">
                  <p className="text-gray-300 mb-4">{t.services.marketing.details}</p>
                  <div className="grid grid-cols-2 gap-2 mt-4">
                    <div className="bg-gray-800 p-3 rounded-md flex items-center">
                      <Search size={16} className="text-red-500 mr-2" />
                      <span className="text-sm">SEO</span>
                    </div>
                    <div className="bg-gray-800 p-3 rounded-md flex items-center">
                      <Globe size={16} className="text-red-500 mr-2" />
                      <span className="text-sm">Social Media</span>
                    </div>
                    <div className="bg-gray-800 p-3 rounded-md flex items-center">
                      <ChevronRight size={16} className="text-red-500 mr-2" />
                      <span className="text-sm">SEM</span>
                    </div>
                    <div className="bg-gray-800 p-3 rounded-md flex items-center">
                      <Mail size={16} className="text-red-500 mr-2" />
                      <span className="text-sm">Email</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            {/* Graphic Design */}
            <div className={`bg-gray-900 p-8 rounded-lg transition-all duration-300 service-card ${activeServiceId === 'design' ? 'scale-105 shadow-lg shadow-red-500/20' : 'hover:bg-gray-800'}`}>
              <div className="w-16 h-16 bg-red-500 rounded-lg flex items-center justify-center mb-6 group-hover:bg-red-600 transition-colors">
                <Palette className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">{t.services.design.title}</h3>
              <p className="text-gray-400 mb-4">
                {t.services.design.description}
              </p>
              <button 
                onClick={() => toggleServiceDetails('design')} 
                className="text-red-500 inline-flex items-center hover:text-red-400"
              >
                {t.services.learnMore} <ChevronRight size={16} className={`ml-1 transition-transform duration-300 ${activeServiceId === 'design' ? 'rotate-90' : ''}`} />
              </button>
              
              {activeServiceId === 'design' && (
                <div className="mt-4 pt-4 border-t border-gray-700 animate-fadeIn">
                  <p className="text-gray-300 mb-4">{t.services.design.details}</p>
                  <div className="grid grid-cols-2 gap-2 mt-4">
                    <div className="bg-gray-800 p-3 rounded-md flex items-center">
                      <Palette size={16} className="text-red-500 mr-2" />
                      <span className="text-sm">Logos</span>
                    </div>
                    <div className="bg-gray-800 p-3 rounded-md flex items-center">
                      <Palette size={16} className="text-red-500 mr-2" />
                      <span className="text-sm">Branding</span>
                    </div>
                    <div className="bg-gray-800 p-3 rounded-md flex items-center">
                      <Palette size={16} className="text-red-500 mr-2" />
                      <span className="text-sm">UI/UX</span>
                    </div>
                    <div className="bg-gray-800 p-3 rounded-md flex items-center">
                      <Palette size={16} className="text-red-500 mr-2" />
                      <span className="text-sm">Print</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            {/* Computer Maintenance */}
            <div className={`bg-gray-900 p-8 rounded-lg transition-all duration-300 service-card ${activeServiceId === 'maintenance' ? 'scale-105 shadow-lg shadow-red-500/20' : 'hover:bg-gray-800'}`}>
              <div className="w-16 h-16 bg-red-500 rounded-lg flex items-center justify-center mb-6 group-hover:bg-red-600 transition-colors">
                <Monitor className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">{t.services.maintenance.title}</h3>
              <p className="text-gray-400 mb-4">
                {t.services.maintenance.description}
              </p>
              <button 
                onClick={() => toggleServiceDetails('maintenance')} 
                className="text-red-500 inline-flex items-center hover:text-red-400"
              >
                {t.services.learnMore} <ChevronRight size={16} className={`ml-1 transition-transform duration-300 ${activeServiceId === 'maintenance' ? 'rotate-90' : ''}`} />
              </button>
              
              {activeServiceId === 'maintenance' && (
                <div className="mt-4 pt-4 border-t border-gray-700 animate-fadeIn">
                  <p className="text-gray-300 mb-4">{t.services.maintenance.details}</p>
                  <div className="grid grid-cols-2 gap-2 mt-4">
                    <div className="bg-gray-800 p-3 rounded-md flex items-center">
                      <Cpu size={16} className="text-red-500 mr-2" />
                      <span className="text-sm">Hardware</span>
                    </div>
                    <div className="bg-gray-800 p-3 rounded-md flex items-center">
                      <Monitor size={16} className="text-red-500 mr-2" />
                      <span className="text-sm">Software</span>
                    </div>
                    <div className="bg-gray-800 p-3 rounded-md flex items-center">
                      <Monitor size={16} className="text-red-500 mr-2" />
                      <span className="text-sm">Networking</span>
                    </div>
                    <div className="bg-gray-800 p-3 rounded-md flex items-center">
                      <Monitor size={16} className="text-red-500 mr-2" />
                      <span className="text-sm">Security</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-2">{t.portfolio.title}</h2>
            <div className="w-20 h-1 bg-red-500 mx-auto mb-8"></div>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8">
              {t.portfolio.description}
            </p>
            
            {/* Portfolio Filter */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <button 
                onClick={() => filterProjects('all')} 
                className={`px-4 py-2 rounded-md transition-colors ${activeCategory === 'all' ? 'bg-red-500 text-white' : 'bg-gray-800 hover:bg-gray-700'}`}
              >
                {t.portfolio.categories.all}
              </button>
              <button 
                onClick={() => filterProjects('development')} 
                className={`px-4 py-2 rounded-md transition-colors ${activeCategory === 'development' ? 'bg-red-500 text-white' : 'bg-gray-800 hover:bg-gray-700'}`}
              >
                {t.portfolio.categories.development}
              </button>
              <button 
                onClick={() => filterProjects('design')} 
                className={`px-4 py-2 rounded-md transition-colors ${activeCategory === 'design' ? 'bg-red-500 text-white' : 'bg-gray-800 hover:bg-gray-700'}`}
              >
                {t.portfolio.categories.design}
              </button>
              <button 
                onClick={() => filterProjects('marketing')} 
                className={`px-4 py-2 rounded-md transition-colors ${activeCategory === 'marketing' ?  'bg-red-500 text-white' : 'bg-gray-800 hover:bg-gray-700'}`}
              >
                {t.portfolio.categories.marketing}
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map(project => (
              <div key={project.id} className="group relative overflow-hidden rounded-lg portfolio-item">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.tech}</p>
                  <div className="flex space-x-3">
                    <a href="#" className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md transition-colors text-sm">
                      {t.portfolio.viewDetails}
                    </a>
                    {project.github && (
                      <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-md transition-colors text-sm flex items-center">
                        <Github size={16} className="mr-1" /> {t.portfolio.github}
                      </a>
                    )}
                    {project.demo && (
                      <a href="#" className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-md transition-colors text-sm flex items-center">
                        <ExternalLink size={16} className="mr-1" /> {t.portfolio.liveDemo}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-md transition-colors inline-flex items-center btn-primary">
              {t.portfolio.viewAll} <Github className="ml-2" size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-2">{t.blog.title}</h2>
            <div className="w-20 h-1 bg-red-500 mx-auto mb-8"></div>
            <p className="text-gray-300 max-w-2xl mx-auto">
              {t.blog.description}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-900 rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-red-500/20">
              <img 
                src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                alt="React Development" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-400 mb-4">
                  <span>{t.blog.articles.react.date}</span>
                  <span className="mx-2">•</span>
                  <span>{t.blog.articles.react.category}</span>
                </div>
                <h3 className="text-xl font-bold mb-3">{t.blog.articles.react.title}</h3>
                <p className="text-gray-400 mb-4">
                  {t.blog.articles.react.description}
                </p>
                <a href="#" className="text-red-500 inline-flex items-center hover:text-red-400">
                  {t.blog.readMore} <ChevronRight size={16} className="ml-1" />
                </a>
              </div>
            </div>
            
            <div className="bg-gray-900 rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-red-500/20">
              <img 
                src="https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1174&q=80" 
                alt="SEO Strategies" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-400 mb-4">
                  <span>{t.blog.articles.seo.date}</span>
                  <span className="mx-2">•</span>
                  <span>{t.blog.articles.seo.category}</span>
                </div>
                <h3 className="text-xl font-bold mb-3">{t.blog.articles.seo.title}</h3>
                <p className="text-gray-400 mb-4">
                  {t.blog.articles.seo.description}
                </p>
                <a href="#" className="text-red-500 inline-flex items-center hover:text-red-400">
                  {t.blog.readMore} <ChevronRight size={16} className="ml-1" />
                </a>
              </div>
            </div>
            
            <div className="bg-gray-900 rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-red-500/20">
              <img 
                src="https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1164&q=80" 
                alt="Design Principles" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-400 mb-4">
                  <span>{t.blog.articles.design.date}</span>
                  <span className="mx-2">•</span>
                  <span>{t.blog.articles.design.category}</span>
                </div>
                <h3 className="text-xl font-bold mb-3">{t.blog.articles.design.title}</h3>
                <p className="text-gray-400 mb-4">
                  {t.blog.articles.design.description}
                </p>
                <a href="#" className="text-red-500 inline-flex items-center hover:text-red-400">
                  {t.blog.readMore} <ChevronRight size={16} className="ml-1" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <a href="#" className="bg-transparent border border-red-500 hover:bg-red-500 text-white px-6 py-3 rounded-md transition-colors">
              {t.blog.viewAll}
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-2">{t.contact.title}</h2>
            <div className="w-20 h-1 bg-red-500 mx-auto mb-8"></div>
            <p className="text-gray-300 max-w-2xl mx-auto">
              {t.contact.description}
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/2">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">{t.contact.form.name}</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full bg-gray-800 border border-gray-700 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                      placeholder={t.contact.form.placeholders.name}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">{t.contact.form.email}</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full bg-gray-800 border border-gray-700 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                      placeholder={t.contact.form.placeholders.email}
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">{t.contact.form.subject}</label>
                  <input 
                    type="text" 
                    id="subject" 
                    className="w-full bg-gray-800 border border-gray-700 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                    placeholder={t.contact.form.placeholders.subject}
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">{t.contact.form.message}</label>
                  <textarea 
                    id="message" 
                    rows={6}
                    className="w-full bg-gray-800 border border-gray-700 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                    placeholder={t.contact.form.placeholders.message}
                  ></textarea>
                </div>
                
                <button type="submit" className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-md transition-colors w-full btn-primary">
                  {t.contact.form.send}
                </button>
              </form>
            </div>
            
            <div className="md:w-1/2">
              <div className="bg-gray-800 p-8 rounded-lg h-full">
                <h3 className="text-2xl font-bold mb-6">{t.contact.info.title}</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-red-500 p-3 rounded-md mr-4">
                      <Mail size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{t.contact.info.email}</h4>
                      <p className="text-gray-300">ramimpita65@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-red-500 p-3 rounded-md mr-4">
                      <Phone size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{t.contact.info.phone}</h4>
                      <p className="text-gray-300">+123 456 7890</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-red-500 p-3 rounded-md mr-4">
                      <Linkedin size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{t.contact.info.linkedin}</h4>
                      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-red-500">
                        linkedin.com/in/nilton-ncangaza
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-red-500 p-3 rounded-md mr-4">
                      <Github size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{t.contact.info.github}</h4>
                      <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-red-500">
                        github.com/nilton-ncangaza
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h4 className="font-semibold mb-4">{t.contact.info.follow}</h4>
                  <div className="flex space-x-4">
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="bg-gray-700 hover:bg-red-500 p-3 rounded-full transition-colors">
                      <Linkedin size={20} />
                    </a>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="bg-gray-700 hover:bg-red-500 p-3 rounded-full transition-colors">
                      <Github size={20} />
                    </a>
                    <a href="mailto:ramimpita65@gmail.com" className="bg-gray-700 hover:bg-red-500 p-3 rounded-full transition-colors">
                      <Mail size={20} />
                    </a>
                  </div>
                </div>
                
                {/* WhatsApp QR Code */}
                <div className="mt-8">
                  <button 
                    onClick={toggleQRCode}
                    className="flex items-center space-x-2 bg-gray-700 hover:bg-gray-600 p-3 rounded-md transition-colors w-full"
                  >
                    <QrCode size={20} className="text-red-500" />
                    <span>WhatsApp QR Code</span>
                  </button>
                  
                  {showQRCode && (
                    <div className="mt-4 bg-white p-4 rounded-md flex flex-col items-center animate-fadeIn">
                      <div className="w-48 h-48 bg-gray-100 flex items-center justify-center">
                        {/* This would be a real QR code in production */}
                        <div className="text-black text-center">
                          <QrCode size={120} className="mx-auto text-black" />
                          <p className="mt-2 text-xs">Scan to chat on WhatsApp</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <a href="#home" className="text-2xl font-bold flex items-center">
                <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center mr-2">
                  <span className="text-white font-bold">NRP</span>
                </div>
                <span className="text-red-500">i</span>Port
              </a>
            </div>
            
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-gray-400">
                &copy; {new Date().getFullYear()} Nilton Ramim Pita Ncangaza. {t.footer.rights}
              </p>
            </div>
            
            <div className="flex space-x-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-500">
                <Linkedin size={20} />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-500">
                <Github size={20} />
              </a>
              <a href="mailto:ramimpita65@gmail.com" className="text-gray-400 hover:text-red-500">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;