
import { ArrowRight, CheckCircle, Users, Trophy, Target, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-emerald-600">BioGain</h1>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#home" className="text-slate-700 hover:text-emerald-600 px-3 py-2 text-sm font-medium transition-colors">
                  Hem
                </a>
                <a href="#services" className="text-slate-700 hover:text-emerald-600 px-3 py-2 text-sm font-medium transition-colors">
                  Tjänster
                </a>
                <a href="#about" className="text-slate-700 hover:text-emerald-600 px-3 py-2 text-sm font-medium transition-colors">
                  Om oss
                </a>
                <a href="#contact" className="text-slate-700 hover:text-emerald-600 px-3 py-2 text-sm font-medium transition-colors">
                  Kontakt
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative overflow-hidden py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                Välkommen till 
                <span className="text-emerald-600 block">BioGain</span>
              </h1>
              <p className="mt-6 text-xl text-slate-600 leading-relaxed">
                Vi hjälper företag att växa hållbart genom innovativa lösningar och expertkompetens. 
                Tillsammans skapar vi framtidens affärsmöjligheter.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 text-lg">
                  Kom igång
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" className="border-slate-300 text-slate-700 hover:bg-slate-50 px-8 py-3 text-lg">
                  Läs mer
                </Button>
              </div>
            </div>
            <div className="relative lg:pl-8">
              <div className="bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-2xl p-8 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="bg-white rounded-xl p-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-emerald-600">250+</div>
                      <div className="text-sm text-slate-600">Nöjda kunder</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-emerald-600">98%</div>
                      <div className="text-sm text-slate-600">Framgångsgrad</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-emerald-600">5+</div>
                      <div className="text-sm text-slate-600">År experience</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-emerald-600">24/7</div>
                      <div className="text-sm text-slate-600">Support</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Våra tjänster
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Vi erbjuder skräddarsydda lösningar för att hjälpa ditt företag att nå sina mål
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Target className="h-8 w-8" />,
                title: "Strategisk rådgivning",
                description: "Utveckla långsiktiga strategier som driver tillväxt och skapar konkurrensfördelar."
              },
              {
                icon: <Users className="h-8 w-8" />,
                title: "Teamutveckling",
                description: "Stärk ditt team genom utbildning och utvecklingsprogram som ökar prestationen."
              },
              {
                icon: <Trophy className="h-8 w-8" />,
                title: "Resultatoptimering",
                description: "Maximera din avkastning genom datadriven analys och förbättringsprocesser."
              }
            ].map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-8">
                  <div className="text-emerald-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
                Om BioGain
              </h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Med över fem års erfarenhet inom affärsutveckling har vi hjälpt hundratals företag 
                att realisera sin fulla potential. Vårt expertteam kombinerar djup branschkunskap 
                med innovativa metoder för att leverera resultat som verkligen gör skillnad.
              </p>
              <div className="space-y-4">
                {[
                  "Certifierade experter inom affärsutveckling",
                  "Bevisad framgångshistorik med mätbara resultat",
                  "Skräddarsydda lösningar för varje kund",
                  "Kontinuerlig support och uppföljning"
                ].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-emerald-600 mr-3 flex-shrink-0" />
                    <span className="text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-2xl p-8">
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Våra värderingar</h3>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-emerald-600 rounded-full mr-3"></div>
                      <span className="text-slate-700 font-medium">Excellens i allt vi gör</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-emerald-600 rounded-full mr-3"></div>
                      <span className="text-slate-700 font-medium">Transparens och ärlighet</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-emerald-600 rounded-full mr-3"></div>
                      <span className="text-slate-700 font-medium">Hållbar utveckling</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-emerald-600 rounded-full mr-3"></div>
                      <span className="text-slate-700 font-medium">Kundens framgång först</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Kontakta oss
            </h2>
            <p className="text-xl text-slate-300">
              Redo att ta nästa steg? Vi ser fram emot att höra från dig.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Mail className="h-6 w-6" />,
                title: "E-post",
                content: "info@biogain.se",
                link: "mailto:info@biogain.se"
              },
              {
                icon: <Phone className="h-6 w-6" />,
                title: "Telefon",
                content: "+46 8 123 456 78",
                link: "tel:+46812345678"
              },
              {
                icon: <MapPin className="h-6 w-6" />,
                title: "Adress",
                content: "Stockholm, Sverige",
                link: "#"
              }
            ].map((contact, index) => (
              <Card key={index} className="bg-slate-800 border-slate-700 hover:bg-slate-750 transition-colors">
                <CardContent className="p-6 text-center">
                  <div className="text-emerald-400 mb-4 flex justify-center">
                    {contact.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {contact.title}
                  </h3>
                  <a 
                    href={contact.link} 
                    className="text-slate-300 hover:text-emerald-400 transition-colors"
                  >
                    {contact.content}
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 text-lg">
              Boka ett möte
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-slate-400">
            <p>&copy; 2024 BioGain. Alla rättigheter förbehållna.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
