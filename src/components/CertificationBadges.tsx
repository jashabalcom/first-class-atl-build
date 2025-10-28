import { Shield, Award, CheckCircle, FileCheck } from "lucide-react";

const CertificationBadges = () => {
  const certifications = [
    {
      icon: Shield,
      title: "Licensed",
      description: "Fully licensed contractor in Georgia",
    },
    {
      icon: Award,
      title: "Bonded",
      description: "Bonded for your protection and peace of mind",
    },
    {
      icon: CheckCircle,
      title: "Insured",
      description: "Comprehensive liability and workers' compensation",
    },
    {
      icon: FileCheck,
      title: "DBE/MBE Certified",
      description: "Certified Disadvantaged & Minority Business Enterprise",
    },
  ];

  return (
    <section className="py-20 border-y">
      <div className="container">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">Certifications & Trust</h2>
            <p className="text-lg text-muted-foreground">
              Fully credentialed and committed to excellence in every project.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => {
              const Icon = cert.icon;
              return (
                <div 
                  key={index}
                  className="text-center space-y-4 p-6 rounded-lg border bg-card hover:shadow-lg transition-all hover:-translate-y-1"
                >
                  <div className="flex justify-center">
                    <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center">
                      <Icon className="h-8 w-8 text-accent" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">{cert.title}</h3>
                    <p className="text-sm text-muted-foreground">{cert.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationBadges;
