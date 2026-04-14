'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import HeroSection from '@/components/HeroSection';
import ProjectCard from '@/components/ProjectCard';
import TechStack from '@/components/TechStack';
import Footer from '@/components/Footer';
import AboutSection from '@/components/AboutSection';
import PageIndicator from '@/components/PageIndicator';

export default function Home() {
  const initialProjects = [
    {
      title: 'Jucasfa',
      description:
        'Uma landing page responsiva construída com React, Tailwind CSS e Vite.',
      image:
        'https://res.cloudinary.com/dirlqtqgk/image/upload/v1736251928/Capturar_pfdgii.png',
      tags: ['React', 'Tailwind', 'Vite'],
      githubUrl: 'https://github.com/duduszchaida/jucasfa',
      liveUrl: 'https://jucasfa.vercel.app/',
    }, 
    {
      title: 'Jogo da velha',
      description:
        'Um jogo da velha com uma lógica um pouco diferente...',
      image:
        'https://res.cloudinary.com/dirlqtqgk/image/upload/v1739556095/zultw1vtvtv9h4skodtz.png',
      tags: ['React', 'TypeScript', 'Tailwind, Vite'],
      githubUrl: 'https://github.com/duduszchaida/jogo-da-velha',
      liveUrl: 'https://jogodojucao.netlify.app/',
    },
    {
      title: 'Downloader',
      description:
        'Downloader Web e Extensão Google de vídeos YouTube criado com Python.',
      image:
        'https://res.cloudinary.com/dggewyuon/image/upload/v1732902116/downloader_yenh1y.png',
      tags: ['Python'],
      githubUrl: 'https://github.com/duduszchaida/Download-videos',
    },
    {
      title: 'Deixe os Astros',
      description:
        'Plataforma para encontrar vídeos de São Josemaria Escrivá de forma organizada, com recursos para auxiliar no dia a dia e difundir os ensinamentos do santo.',
      image: '/saojosemaria.png',
      tags: ['Next.js', 'Resend', 'Supabase'],
      githubUrl: 'https://github.com/jonathanhacker111/rastros',
      liveUrl: 'https://www.deixerastros.com.br/',
    },
  ];

  
  const [projects, setProjects] = useState(initialProjects);
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    setProjects((prevProjects) => [...prevProjects]);
    setShowMore(true);
  };

  return (
    <main className="min-h-screen bg-background">
      <PageIndicator />
        <section id="home">
        <HeroSection />
      </section>
      <section id="about">
        <AboutSection />
      </section>
      <section id="tech-stack">
        <TechStack />
      </section>
      <section id="projects" className="py-20">
        <div className="container px-4 mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-12 text-center"
          >
            Projetos
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                image={project.image}
                tags={project.tags}
                githubUrl={project.githubUrl}
                liveUrl={project.liveUrl}
                index={index}
              />
            ))}
          </div>
         
        </div>
      </section>
      <Footer />
    </main>
  );
}
