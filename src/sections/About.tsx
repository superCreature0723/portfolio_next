import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

function About() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Initial check
    checkMobile();

    // Add resize listener
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    console.log('Element is in view: ', isInView);
  }, [isInView]);

  const mobileText = {
    intro:
      'Hello! I am Jackie Clarke, a Full Stack Developer passionate about BlockChain and Machine Learning. I hold a Bachelor of Technology from SRM Institute of Science and Technology.',
    experience:
      '',
  };

  const desktopText = {
    intro:
      'Hello! I am Jackie Clarke, a Full Stack Developer passionate about BlockChain and Machine Learning. With experience across a wide array of technologies, I strive to deliver scalable, cost-effective solutions. I hold a Bachelor of Technology from SRM Institute of Science and Technology, with a focus on cloud computing, backend development, and intelligent automation.',
    experience:
      'BlockChain Engineer with 7 years of experience in web development and 4 years of experience in BlockChain full- stack, developing decentralized applications (DApps) and smart contracts using Solidity and Web3 technologies.  Proficient in building DEX, CEX, P2P with a deep understanding of BlockChain protocols and consensus mechanisms. Experienced in leading teams to evaluate system functioning and remain forward-thinking in design and progress. Adept in collaborating with colleagues to ensure product quality and improvements. Excellent problem- solving abilities and a strong team player with effective communication skills',
  };

  return (
    <motion.div
      className="about"
      id="about"
      ref={ref}
      style={{ paddingTop: isMobile ? '150px' : '250px' }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1, y: -50 },
        hidden: { opacity: 0, y: 0 },
      }}
    >
      <div className="title">
        <h2>About Me</h2>
      </div>
      <div className="about-grid">
        <div className="about-grid-info">
          <p className="about-grid-info-text text-justify">
            {isMobile ? mobileText.intro : desktopText.intro}
          </p>
          <p className="about-grid-info-text text-justify">
            {isMobile ? mobileText.experience : desktopText.experience}
          </p>
          <p className="about-grid-info-text text-justify">
            Here are a few technologies I&apos;ve been working with recently:
          </p>

          <ul className="about-grid-info-list">
            <li className="about-grid-info-list-item">Solidity</li>
            <li className="about-grid-info-list-item">Web3</li>
            <li className="about-grid-info-list-item">Ethereum</li>
            <li className="about-grid-info-list-item">EVM</li>
            <li className="about-grid-info-list-item">Hardhat</li>
            <li className="about-grid-info-list-item">Trello/Jira • AWS</li>
            <li className="about-grid-info-list-item">React</li>
            <li className="about-grid-info-list-item">Next.js</li>
            <li className="about-grid-info-list-item">Node.js</li>
            <li className="about-grid-info-list-item">TailwindCSS</li>
            <li className="about-grid-info-list-item">Azure</li>
            <li className="about-grid-info-list-item">Google Cloud</li>
          </ul>
        </div>
        <div className="about-grid-photo">
          <div className="overlay"></div>
          <div className="overlay-border"></div>
          <div className="about-grid-photo-container">
            <Image
              src="/etc/image.jpg"
              alt="profile"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
