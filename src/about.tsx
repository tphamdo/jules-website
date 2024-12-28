import Navbar2 from './components/navbar2';
import Footer from './components/footer';
import me from './assets/images/me.jpeg';

interface Experience {
  position: string;
  company: string;
  dates: string;
}

interface WorkProps {
  experience: Experience;
}

const WorkExperience: React.FC<WorkProps> = (props) => {
  const { experience } = props;
  return (
    <div className="mb-4">
      <h2 className="text-lg">{experience.position}</h2>
      <p className="text-neutral-700">{experience.company}</p>
      <p className="text-neutral-700 text-sm">{experience.dates}</p>
    </div>
  );
};

const experiences = [
  {
    position: 'Influencer Relations Lead',
    company: 'BrandBuzz PH',
    dates: 'Oct 2024-Present',
  },
  {
    position: 'Influencer Relations Coordinator',
    company: 'BrandBuzz PH',
    dates: 'March 2024-Oct 2024',
  },
  {
    position: 'Sales Development Rep',
    company: 'UpperBound',
    dates: 'Nov 2023-Feb 2024',
  },
  {
    position: 'Research Analyst',
    company: 'Genpact',
    dates: 'Feb 2022-Nov 2023',
  },
];

interface Schooling {
  degree: string;
  school: string;
  dates: string;
}

interface SchoolProps {
  school: Schooling;
}

const School: React.FC<SchoolProps> = (props) => {
  const { school } = props;
  return (
    <div className="mb-4">
      <h2 className="text-lg">{school.degree}</h2>
      <p className="text-neutral-700">{school.school}</p>
      <p className="text-neutral-700 text-sm">{school.dates}</p>
    </div>
  );
};

const schools = [
  {
    degree: 'Bachelors of Arts in Communications Arts',
    school: 'De La Salle University',
    dates: '2017-2021',
  },
];

function About() {
  return (
    <div className="max-w-4xl mx-auto px-3">
      <Navbar2 />
      <div className="max-w-3xl mx-auto mt-16">
        <div className="max-w-xl mx-auto slide delay0">
          <h1 className="text-3xl font-semibold">
            Influencer Relations Lead
          </h1>
          <p className="mt-8 text-neutral-800 text-lg leading-relaxed">
            I'm Julia, a ________ with 3 years of industry
            experience. More stuff about me here _____________________________.
          </p>
        </div>
        <img
          className="md:h-[600px] mx-auto mt-12 slide delay01" //aspect-square
          src={me}
          alt="picture of me"
        />
        <div className="max-w-xl mx-auto slide delay02 mt-16">
          <h1 className="text-2xl font-medium">Work Experience</h1>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2">
            {experiences.map((experience, idx) => (
              <WorkExperience key={idx} experience={experience} />
            ))}
          </div>
        </div>
        <div className="max-w-xl mx-auto slide delay02 mt-8">
          <h1 className="text-2xl font-medium">Education</h1>
          <div className="mt-4 grid grid-cols-1">
            {schools.map((school, idx) => (
              <School key={idx} school={school} />
            ))}
          </div>
        </div>
        <div className="max-w-xl mx-auto slide delay02 mt-8">
          <h1 className="text-2xl font-medium">Contact</h1>
          <p className="text-neutral-700 mt-4">
            Feel free to reach out for collaborations, or just to say hello!
          </p>
          <p className="text-neutral-700">
            Currently seeking new opportunities.
          </p>
          <a href="https://www.linkedin.com/in/tphamdo" className="block mt-4">
            Linkedin
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
