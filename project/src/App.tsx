import React from 'react';
import { Users, Trophy, Dumbbell, ArrowRight, Instagram, Facebook, Twitter } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header/Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Trophy className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-2xl font-bold text-gray-900">Hubstout</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#recursos" className="text-gray-600 hover:text-blue-600">Recursos</a>
              <a href="#sobre" className="text-gray-600 hover:text-blue-600">Sobre</a>
              <a href="#contato" className="text-gray-600 hover:text-blue-600">Contato</a>
            </div>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors">
              Cadastre-se
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-8">
              Conectando Atletas e Profissionais do Esporte
            </h1>
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
              A primeira rede social dedicada a unir atletas, treinadores, nutricionistas e todos os profissionais do mundo esportivo em uma única plataforma.
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-colors flex items-center">
                Comece Agora
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full hover:bg-blue-50 transition-colors">
                Saiba Mais
              </button>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517649763962-0c623066013b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] opacity-5 z-[-1]"></div>
      </div>

      {/* Features Section */}
      <section id="recursos" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16">Recursos Principais</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Networking Esportivo</h3>
              <p className="text-gray-600">Conecte-se com atletas e profissionais da sua modalidade ou região.</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Trophy className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Conquistas</h3>
              <p className="text-gray-600">Compartilhe suas vitórias e acompanhe o progresso de outros atletas.</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Dumbbell className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Treinos e Eventos</h3>
              <p className="text-gray-600">Organize e participe de treinos, competições e eventos esportivos.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
            Pronto para fazer parte da comunidade?
          </h2>
          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
            Junte-se a milhares de atletas e profissionais que já estão revolucionando o mundo do esporte.
          </p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-full hover:bg-blue-50 transition-colors">
            Criar Conta Gratuita
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Trophy className="h-8 w-8 text-blue-400" />
                <span className="ml-2 text-2xl font-bold">Hubstout</span>
              </div>
              <p className="text-gray-400">Conectando o mundo do esporte.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Empresa</h3>
              <ul className="space-y-2">
                <li><a href="#sobre" className="text-gray-400 hover:text-white">Sobre</a></li>
                <li><a href="#carreiras" className="text-gray-400 hover:text-white">Carreiras</a></li>
                <li><a href="#imprensa" className="text-gray-400 hover:text-white">Imprensa</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Recursos</h3>
              <ul className="space-y-2">
                <li><a href="#blog" className="text-gray-400 hover:text-white">Blog</a></li>
                <li><a href="#guias" className="text-gray-400 hover:text-white">Guias</a></li>
                <li><a href="#ajuda" className="text-gray-400 hover:text-white">Ajuda</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Redes Sociais</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <Instagram className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <Facebook className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <Twitter className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Hubstout. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;