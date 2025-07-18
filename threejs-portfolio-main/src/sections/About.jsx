import { useState } from 'react';
import Globe from 'react-globe.gl';

import Button from '../components/Button.jsx';

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(' adrian@jsmastery.pro');
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  return (
    <section className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid1.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">Hi, I’m Dhananjay Gaur</p>
              <p className="grid-subtext">
                I'm a B.Tech final-year student (2022–26) and a curious mind in the world of full-stack development. 
                I love crafting responsive websites and bringing 3D ideas to life using Three.js — turning code into interactive art on the web.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid2.png" alt="grid-2" className="w-full sm:h-[276px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">Tech Stack</p>

              <div className="grid grid-cols-4 gap-4 mt-4">
                {/* Core Stack */}
                <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank" rel="noopener noreferrer">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5" className="w-10 h-10 object-contain transition hover:scale-110 hover:drop-shadow-md" />
                </a>
                <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank" rel="noopener noreferrer">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3" className="w-10 h-10 object-contain transition hover:scale-110 hover:drop-shadow-md" />
                </a>
                <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" className="w-10 h-10 object-contain transition hover:scale-110 hover:drop-shadow-md" />
                </a>
                <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="w-10 h-10 object-contain transition hover:scale-110 hover:drop-shadow-md" />
                </a>
                <a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" className="w-10 h-10 object-contain transition hover:scale-110 hover:drop-shadow-md" />
                </a>
                <a href="https://threejs.org/" target="_blank" rel="noopener noreferrer">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original.svg" alt="Three.js" className="w-10 h-10 object-contain bg-white rounded transition hover:scale-110 hover:drop-shadow-md" />
                </a>
                <a href="https://www.mongodb.com/" target="_blank" rel="noopener noreferrer">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" className="w-10 h-10 object-contain transition hover:scale-110 hover:drop-shadow-md" />
                </a>
                <a href="https://git-scm.com/" target="_blank" rel="noopener noreferrer">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" className="w-10 h-10 object-contain transition hover:scale-110 hover:drop-shadow-md" />
                </a>

                {/* Extra Tools Stack */}
                <a href="https://vitejs.dev/" target="_blank" rel="noopener noreferrer">
                  <img src="https://vitejs.dev/logo.svg" alt="Vite" className="w-10 h-10 object-contain transition hover:scale-110 hover:drop-shadow-md" />
                </a>
              </div>
            </div>
          </div>
        </div>



        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center shadow-xl bg-gradient-to-tr from-blue-950 via-gray-900 to-black">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0, 0, 0, 0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[
                  {
                    lat: 28.6139,
                    lng: 77.2090,
                    text: 'New Delhi, India',
                    color: 'cyan',
                    size: 12,
                  },
                ]}
              />
            </div>

            <div className="mt-4 text-center">
              <p className="grid-headtext">Coding Beyond Borders</p>
              <p className="grid-subtext">
                Currently based in <strong>Mumbai, India</strong>, I’m open to remote collaborations and global opportunities.
                Time zones don’t limit my passion for code.
              </p>
              <Button name="Let's Connect" isBeam containerClass="w-full mt-6" />
            </div>
          </div>
        </div>


        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">My Passion for Coding</p>
              <p className="grid-subtext">
                I love solving problems and building things through code. Programming isn&apos;t just my
                profession—it&apos;s my passion. I enjoy exploring new technologies, and enhancing my skills.
              </p>
            </div>
          </div>
        </div>

        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />

            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact me</p>
              <div className="copy-container" onClick={handleCopy}>
                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">dhananjaygaur04@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
