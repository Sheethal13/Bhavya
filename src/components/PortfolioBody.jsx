import Card from '../components/reusable/Card';
import profileImg from '../images/bp-profile.jpeg';
import project1 from '../images/project1.webp';
import project2 from '../images/project2.webp';
import training from '../images/training.webp';
import paper from '../images/paper.webp';
import education from '../images/education.webp';
import certification from '../images/certification.webp';
import RowComponent from './reusable/RowComponent';
import RowComponentRightImg from './reusable/RowComponentRightImg';
import trophyImg from '../images/trophy.webp.webp';
export default function PortfolioBody(){
    return (
        <div>
            <RowComponent
            title="Profile"
            content="A dedicated chemistry graduate with a strong foundation in analytical and research-driven problem-solving. Currently working as a Patent Analyst at Molecular Connections, she specializes in research assessment, patent verification, and data categorization across diverse scientific fields. Her role involves analyzing research-oriented projects, studying related scientific papers, and systematically classifying data for patent validation. With a multidisciplinary approach, she integrates chemistry, biochemistry, and biology to ensure thorough evaluation and accuracy in intellectual property analysis. She excels in team collaboration, critical thinking, and time management, making her a valuable asset in research and patent domains. Passionate about innovation and scientific exploration, she is committed to making impactful contributions in the field of patent analytics and scientific research."
            image={profileImg}
            />
            <RowComponentRightImg
            title="Professional Experience"
            content={
                <div className='p-4 professional-exp'>
                  <div className='pb-8'>
                  <h2 className='pt-4 text-2xl font-general-medium uppercase pb-3'>Patent Analyst</h2>
                  <h3 className='font-semibold text-xl pb-3'>Molecular Connections, Bangalore | October 2024 – Present</h3>
                  <ul className='disc-list'>
                    <li>Conducts in-depth research and analysis of scientific literature and patents in chemistry, biochemistry, and biology.</li>
                    <li>Evaluates research-oriented projects, segregates relevant data, and verifies patents for accuracy and compliance.</li>
                    <li>Collaborates with cross-functional teams to streamline the patent verification process and ensure comprehensive analysis.</li>
                  </ul>
                  </div>
                  <div className='pb-8'>
                  <h2 className='pt-4 text-2xl font-general-medium uppercase pb-3'>Research & Development Intern</h2>
                  <h3 className='font-semibold text-xl pb-3'>Merck, Bangalore | July 2024 – October 2024</h3>
                  <ul className='disc-list'>
                    <li>Gained hands-on experience in organic synthesis and process development in the R&D department.</li>
                    <li>Assisted in monitoring and optimizing various organic reactions to improve yield and efficiency.</li>
                    <li>Developed expertise in analytical techniques such as Thin Layer Chromatography (TLC) and Column Chromatography.</li>
                  </ul>
                  </div>
                  <div>
                  <h2 className='pt-4 text-2xl font-general-medium uppercase pb-3'>Research Intern</h2>
                  <h3 className='font-semibold text-xl pb-3'>Syngene International Limited, Bangalore | June 2023 – August 2023</h3>
                  <ul className='disc-list'>
                    <li>Completed an internship project titled "Reduction of Acids to Alcohols" under the guidance of Mrs. Prajwala.</li>
                    <li>Gained practical exposure to named reactions, organic reaction mechanisms, and advanced laboratory techniques.</li>
                    <li>Enhanced skills in reaction monitoring, purification processes, and interpretation of experimental results.</li>
                  </ul>
                  </div>
                </div>
            }
            />
            <div>
            <div className="text-center">
            <p className="font-general-medium pt-20 text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light pb-4">
              Projects
            </p>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 mt-6 sm:gap-10 pb-8 lg:grid-cols-2'>
              
              <Card title="Chemical Screening and Analytical Techniques of Neem, Tulsi, and Ficus" image={project1} 
              content={
                <div className='p-3 px-6'>
                  <ul className="disc-list text-left p-3">
                    <li>Conducted an in-depth phytochemical analysis of Neem (Azadirachta indica), Tulsi (Ocimum sanctum), and Ficus species to evaluate their medicinal properties.</li>
                    <li>Investigated the bioactive compounds present in leaf extracts, assessing their potential therapeutic applications.</li>
                    <li>Utilized advanced analytical techniques to determine the chemical composition and pharmacological significance of these plants.</li>
                    <li>Highlighted the role of plant-based medicine as a sustainable alternative for future healthcare advancements.</li>
                  </ul>
                </div>
              }/>
              <Card title="Green Synthesis of Functionalized Carbon Nanodots Using Biomass as a Corrosion Inhibitor" image={project2} 
              content={
                <div className='p-3 px-6'>
                  <ul className="disc-list text-left p-3">
                    <li>Developed carbon nanodots (CNDs) using a sustainable biomass-derived green synthesis approach.</li>
                    <li>Investigated their effectiveness as an eco-friendly corrosion inhibitor, reducing metal degradation in various industrial applications.</li>
                    <li>Characterized synthesized carbon nanodots using spectroscopic and microscopic techniques to assess their morphology and functional properties.</li>
                    <li>Explored the potential of nanotechnology in sustainable chemistry and material science, contributing to environmentally friendly solutions.</li>
                  </ul>
                </div>
              }/>
            </div>
            </div>
            <div>
            <RowComponent
            title="Paper Presentations"
            content={
              <div className='paper'>
                <h2 className='pt-4 text-2xl font-general-medium  pb-3'>
                  Exploring the Efficacy of Fe₃O₄ Nanoparticles in Mitigating Corrosion of Maraging Steel in an Acidic Environment</h2>
                <p className='px-5'>
                  <ul className='disc-list text-left p-3'>
                    <li>Presented at the Two-Day International Conference at Srinivas Institute of Technology.</li>
                    <li>Investigated the role of magnetite (Fe₃O₄) nanoparticles as an effective corrosion inhibitor for high-strength maraging steel in acidic conditions.</li>
                    <li>Analyzed the corrosion resistance using electrochemical techniques, evaluating the nanoparticles' protective properties.</li>
                    <li>Highlighted the potential of nanomaterials in enhancing industrial metal durability, reducing maintenance costs, and promoting sustainable engineering solutions.</li>
                  </ul>
                </p>
              </div>
            }
            image={paper}
            />
            </div>
            <div className='pt-4'>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10">
              <Card title="Training"
              content={
                <div className='p-3 px-6'>
                  <ul className='disc-list text-left'>
                    <li>Hydroponics, One day workshop, St Agnes College (Autonomous).</li>
                    <li>Hands on training on drug discovery & formulation development using R&D instruments /equipment, One week workshop program, National Institute of Technology Warangal.</li>
                    <li>Organics in Flexitronics, Seminar, Department of PG Chemistry, St Agnes College Mangalore.</li>
                    <li>Challenges and opportunities in the global chemistry enterprise, National level seminar, St.Aloysius College.</li>
                  </ul>
                </div>
              }
              image={training}
              />
              <Card title="Certifications"
              content={
                <div className='p-3 px-6'>
                  <ul className='disc-list text-left'>
                    <li>Cosmetic Chemistry, St. Agnes College, 30 hours</li>
                    <li>Research methodology in Chemical science, St Agnes College, 30 hours</li>
                    <li>NPTEL course on analytical chemistry</li>
                  </ul>
                </div>
              }
              image={certification}/>
              <div className='sm:put-centre'>
              <Card title="Education"
              content={
                <div className='p-3 px-6'>
                  <ul className='disc-list text-left'>
                    <li>MSc Chemistry</li>
                    <p>2022 - 2024</p>
                    <p>St. Agnes College Centre for Post Graduate Studies and Research, Mangaluru, Karnataka</p>
                    <p><strong>CGPA : 7.92</strong></p>
                    <li>Bsc (Botany, Zoology, Chemistry)</li>
                    <p>2019 - 2022</p>
                    <p>St. Agnes College (Autonomous), Mangaluru, Karnataka</p>
                    <p><strong>CGPA : 8.90</strong></p>
                  </ul>
                </div>
              }
              image={education}/>
              </div>
              
            </div>
            <div className='pt-10'>
            <RowComponent
            title="Achievments and Awards"
            content={
              <div>
                
                <p className='px-5'>
                  <ul className='disc-list text-left p-3'>
                    <li>Riya Mathias Achievement Award, For the best outgoing student in Chemistry 2024.</li>
                    <li>Second prize in start-up spank, Organised by department of management and entrepreneurship at St Agnes College Mangalore.</li>
                    <li>Christina Alapat Achievement Award, For the best outgoing student in Botany.</li>
                    <li>Student police cadet state-level leaders summit, 2014-16, Won state level best diary writer award.</li>
                    <li>Students police cadet district level best cadet, 2014-16.</li>
                  </ul>
                </p>
              </div>
            }
            image={trophyImg}
            />
            </div>
            </div>
        
        </div>
    );
}