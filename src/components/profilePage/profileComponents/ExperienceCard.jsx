import ExperienceItem from './ExperienceItem';
import { Card } from 'react-bootstrap';

const ExperienceCard = () => {
  const experiences = [
    {
      company: 'Ankorstore',
      logo: 'https://picsum.photos/seed/ankorstore/48',
      role: 'Sales Ops Manager',
      duration: 'Apr 2023 - Feb 2024 · 11 mos',
      location: 'Spagna · Remote',
      description: 'AI-Driven Lead Prioritization: Implemented a Machine Learning based LTV lead scoring model, resulting in a 20% increase in the Lifetime Value of onboarded leads by prioritizing high-value prospects...',
      fullDescription: 'AI-Driven Lead Prioritization: Implemented a Machine Learning based LTV lead scoring model, resulting in a 20% increase in the Lifetime Value of onboarded leads by prioritizing high-value prospects. Developed and maintained data pipelines to ensure accurate and timely data flow for the ML model. Collaborated with cross-functional teams to integrate the scoring system into existing sales processes, significantly improving efficiency and conversion rates.'
    },
    {
      company: 'Ankorstore',
      logo: 'https://picsum.photos/seed/ankorstore2/48',
      role: 'Growth Outbound Manager',
      duration: 'Oct 2022 - Apr 2023 · 7 mos',
      location: 'Barcellona, Catalogna, Spagna · Remote',
      description: 'Innovative Lead Generation: Exhibited startup-like agility by quickly scaling the Retailer Outbound strategy from 0 to 2,000 qualified leads per week...',
      fullDescription: 'Innovative Lead Generation: Exhibited startup-like agility by quickly scaling the Retailer Outbound strategy from 0 to 2,000 qualified leads per week. Implemented advanced targeting techniques and personalized outreach strategies, resulting in a 35% increase in conversion rates. Managed a team of outbound specialists, providing mentorship and implementing performance optimization strategies that led to a 25% improvement in individual productivity.'
    },
    {
      company: 'Ankorstore',
      logo: 'https://picsum.photos/seed/ankorstore3/48',
      role: 'Growth Outbound Specialist',
      duration: 'Jun 2022 - Sep 2022 · 4 mos',
      location: 'Barcellona, Catalogna, Spagna · Remote',
      description: 'Management Skills: Displayed strong relationship management skills by overseeing partnerships with 10+ data providers, ensuring high-quality user data while maintaining cost-efficiency...',
      fullDescription: 'Management Skills: Displayed strong relationship management skills by overseeing partnerships with 10+ data providers, ensuring high-quality user data while maintaining cost-efficiency. Demonstrated ability to manage multiple stakeholders, ensuring timely and effective communication, and fostering a collaborative environment that drove business growth.'
    },
    {
      company: 'POPWave Marketing Trainer',
      logo: 'https://picsum.photos/seed/popwave/48',
      role: 'Digital Marketing Strategist',
      duration: 'Nov 2019 - Aug 2021 · 1 yr 10 mos',
      location: 'Reggio Emilia, Italia',
      description: 'Led end-to-end project management of marketing initiatives, ensuring alignment with company expansion goals and local market needs...',
      fullDescription: 'Led end-to-end project management of marketing initiatives, ensuring alignment with company expansion goals and local market needs. Developed and executed comprehensive marketing strategies, resulting in a 30% increase in brand awareness and a 25% boost in sales revenue.'
    },
    {
      company: 'The Level Group',
      logo: 'https://picsum.photos/seed/levelgroup/48',
      role: 'E-Commerce Business Analyst',
      duration: 'Jan 2019 - Aug 2019 · 8 mos',
      location: 'Milano, Italia',
      description: 'Provided data-driven insights to cross-functional teams, facilitating informed decision-making in marketing, strategy, and product development...',
      fullDescription: 'Provided data-driven insights to cross-functional teams, facilitating informed decision-making in marketing, strategy, and product development. Analyzed market trends, customer behavior, and competitor activity to inform business decisions, resulting in a 20% increase in sales revenue and a 15% improvement in customer satisfaction.'
    },
    {
      company: 'Digital Marketing Agency',
      logo: 'https://picsum.photos/seed/dma/48',
      role: 'Social Media Specialist',
      duration: 'Giu 2018 - Dic 2018 · 7 mesi',
      location: 'Roma, Italia',
      description: 'Gestione delle campagne sui social media per clienti di vari settori, ottenendo un aumento medio del 40% nell\'engagement...',
      fullDescription: 'Gestione delle campagne sui social media per clienti di vari settori, ottenendo un aumento medio del 40% nell\'engagement. Sviluppo di strategie di content marketing e analisi delle performance utilizzando strumenti avanzati di analytics.'
    },
    {
      company: 'Tech Startup',
      logo: 'https://picsum.photos/seed/techstartup/48',
      role: 'Growth Hacking Intern',
      duration: 'Gen 2018 - Mag 2018 · 5 mesi',
      location: 'Milano, Italia',
      description: 'Implementazione di strategie di growth hacking per aumentare l\'acquisizione di utenti, risultando in un incremento del 60% nella base utenti...',
      fullDescription: 'Implementazione di strategie di growth hacking per aumentare l\'acquisizione di utenti, risultando in un incremento del 60% nella base utenti. Collaborazione con il team di sviluppo per ottimizzare l\'onboarding degli utenti e migliorare la retention.'
    },
    {
      company: 'E-commerce Platform',
      logo: 'https://picsum.photos/seed/ecommerce/48',
      role: 'Customer Success Intern',
      duration: 'Set 2017 - Dic 2017 · 4 mesi',
      location: 'Torino, Italia',
      description: 'Supporto ai clienti nell\'implementazione e ottimizzazione delle loro piattaforme e-commerce, migliorando la soddisfazione del cliente del 25%...',
      fullDescription: 'Supporto ai clienti nell\'implementazione e ottimizzazione delle loro piattaforme e-commerce, migliorando la soddisfazione del cliente del 25%. Creazione di guide e tutorial per facilitare l\'utilizzo della piattaforma da parte dei clienti.'
    },
    {
      company: 'Local Newspaper',
      logo: 'https://picsum.photos/seed/newspaper/48',
      role: 'Digital Content Creator',
      duration: 'Giu 2017 - Ago 2017 · 3 mesi',
      location: 'Bologna, Italia',
      description: 'Creazione di contenuti digitali per il sito web del giornale, contribuendo a un aumento del 30% nel traffico organico...',
      fullDescription: 'Creazione di contenuti digitali per il sito web del giornale, contribuendo a un aumento del 30% nel traffico organico. Gestione dei social media e implementazione di strategie SEO per migliorare la visibilità online del giornale.'
    },
    {
      company: 'University Project',
      logo: 'https://picsum.photos/seed/university/48',
      role: 'Team Leader',
      duration: 'Feb 2017 - Mag 2017 · 4 mesi',
      location: 'Firenze, Italia',
      description: 'Guidato un team di 5 studenti nello sviluppo di un\'app mobile per la gestione del tempo, vincendo il premio per il miglior progetto universitario...',
      fullDescription: 'Guidato un team di 5 studenti nello sviluppo di un\'app mobile per la gestione del tempo, vincendo il premio per il miglior progetto universitario. Responsabile della pianificazione del progetto, della distribuzione dei compiti e della presentazione finale.'
    }
  ];

  return (
    <Card className="experience-section mb-4">
      <Card.Body>
        <Card.Title as="h2" className="mb-4">Experience</Card.Title>
        {experiences.slice(0, 6).map((exp, index) => (
          <ExperienceItem 
            key={index}
            company={exp.company}
            logo={exp.logo}
            role={exp.role}
            duration={exp.duration}
            location={exp.location}
            description={exp.description}
            fullDescription={exp.fullDescription}
          />
        ))}
      </Card.Body>
      <div className="show-all-experiences">
        <button className="btn btn-link text-decoration-none w-100 py-3 text-secondary fw-semibold">
          Show all {experiences.length} experiences <span className="ms-1">&rarr;</span>
        </button>
      </div>
    </Card>
  );
};

export default ExperienceCard;