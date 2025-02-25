import { Translation } from './types';

export const translations: Record<string, Translation> = {
  en: {
    hero: {
      title: "Connect with the Sports World",
      subtitle: "The social network that brings together athletes and sports professionals",
      cta: "Join the Community",
    },
    features: {
      title: "Why Hubstout?",
      items: [
        {
          title: "Professional Network",
          description: "Connect with athletes, coaches, and sports professionals worldwide"
        },
        {
          title: "Career Development",
          description: "Find opportunities and grow your sports career"
        },
        {
          title: "Knowledge Sharing",
          description: "Learn from experts and share your experience"
        }
      ]
    },
    footer: {
      rights: "All rights reserved"
    }
  },
  pt: {
    hero: {
      title: "Conecte-se com o Mundo do Esporte",
      subtitle: "A rede social que une atletas e profissionais do esporte",
      cta: "Entre para a Comunidade",
    },
    features: {
      title: "Por que Hubstout?",
      items: [
        {
          title: "Rede Profissional",
          description: "Conecte-se com atletas, treinadores e profissionais do esporte em todo o mundo"
        },
        {
          title: "Desenvolvimento de Carreira",
          description: "Encontre oportunidades e desenvolva sua carreira esportiva"
        },
        {
          title: "Compartilhamento de Conhecimento",
          description: "Aprenda com especialistas e compartilhe sua experiência"
        }
      ]
    },
    footer: {
      rights: "Todos os direitos reservados"
    }
  },
  es: {
    hero: {
      title: "Conéctate con el Mundo del Deporte",
      subtitle: "La red social que une a atletas y profesionales del deporte",
      cta: "Únete a la Comunidad",
    },
    features: {
      title: "¿Por qué Hubstout?",
      items: [
        {
          title: "Red Profesional",
          description: "Conéctate con atletas, entrenadores y profesionales del deporte en todo el mundo"
        },
        {
          title: "Desarrollo Profesional",
          description: "Encuentra oportunidades y desarrolla tu carrera deportiva"
        },
        {
          title: "Compartir Conocimientos",
          description: "Aprende de expertos y comparte tu experiencia"
        }
      ]
    },
    footer: {
      rights: "Todos los derechos reservados"
    }
  }
};