import { motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useState } from 'react';

function Experience() {
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    const transformSelected = () => {
      const underline = document.querySelector<HTMLElement>('.underline');
      underline!.style.top = `${selected * 2.5}rem`;
    };
    transformSelected();
  }, [selected]);

  const experiences = [
    {
      name: 'Aniex Labs LLC | United States',
      role: 'BlockChain Lead Developer',
      url: 'https://https://nexuspro.io//',
      start: 'February 2024',
      end: 'PRESENT',
      shortDescription: [
        'As the lead developer at Nexus Pro, a startup company specializing in the development of decentralized exchanges(DEX), centralized exchanges (CEX), and peer-to-peer (P2P) trading platforms, I played a pivotal role in leading the technical direction and development efforts of our innovative BlockChain solution',
        'Architected a robust backend using Django and PostgreSQL to handle over 200 concurrent simulations, resulting in a 40% improvement in system performance and data retrieval efficiency.',
        'Designed and implemented an interactive dashboard utilizing Chart.js, allowing managers to monitor job assignments and completion rates; enabled tracking of individual engineer performance across 300+ projects in real time.',
        'Streamlined task management for a system handling over 1,000 tasks daily.',
        'Developed a web application that optimized the simulation workflow for Apollo Tyres, enhancing task allocation efficiency by approximately 30%.',
      ],
    },
    {
      name: ' SVERSE LAB | South Africa',
      role: 'BlockChain Fullstack Developer',
      url: 'https://www.eduskillsfoundation.org',
      start: 'SEP 2022',
      end: 'NOV 2023',
      shortDescription: [
        'Spearheaded the development of a decentralized exchange (DEX) platform, utilizing smart contracts and BlockChain technology to enable seamless token swaps. Collaborated with cross-functional teams to implement new features and improve user experience, resulting in a 20% increase in active users within six months. ',
        'Completed AWS Machine Learning and AWS Cloud Practitioner courses, gaining proficiency in deploying and scaling ML models on AWS services such as S3, Elastic Container Service, and Lambda.',
        'Acquired cloud computing skills, including cloud security, architecture, and networking in the AWS ecosystem.',
      ],
    },
    {
      name: 'Geometry Digital Assets | United Kingdom',
      role: 'BlockChain Tech Lead Developer',
      url: 'https://www.mathworks.com',
      start: 'JAN 2021',
      end: 'AUG 2022',
      shortDescription: [
        'Technical Lead, Solidity, React.js, Redux, EVM & Solana, Team Management. • Build platform in Geometry ecosystem. • AMM & DeFi like PancakeSwap, UniSwap. • Development Nexus Bridge System (Ethereum/Solana). • Auditor for smart contract.',
        'Completed advanced courses in utilizing AI tools provided by MathWorks.',
        'Gained proficiency in data analysis, model development, and AI tools like MATLAB.',
        'Specialized in machine learning models for clustering, classification, and deep learning techniques for image classification.',
      ],
    },
    {
      name: ' ENJIN | Singapore',
      role: 'BlockChain Developer ',
      url: 'https://www.edunetfoundation.org',
      start: 'FEB 2019',
      end: 'DEC 2020',
      shortDescription: [
        ' Developed the sale contracts for Watch Skins based NFT marketplace.', 
        '• Developed Smart Contracts for decentralized token platform on EVM.' ,
        '• Built Frontend by React and implement smart contract integration using Web3.js and Ether.js. Technologies: Solidity, ERC721, IPFS, Hardhat, React & Redux, Typescript, Bootstrap',
        
      ],
    },
    {
      name: '  RANONSYS | Singapore',
      role: 'Fronted Developer ',
      url: 'https://www.edunetfoundation.org',
      start: 'AUG 2016',
      end: 'JAN 2019',
      shortDescription: [
        ' • Migrated an AngularJS codebase into React.',
        ' • Implemented new features on community platform.',
        ' • Improved the front-end architecture by reorganizing modules Technologies: Styled Components, Redux, React, Angular. ', 
             
      ],
    },
  ];

  return (
    <motion.div
      className="experience"
      id="experience"
      style={{ paddingTop: '250px' }}
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
        <h2>Where I&apos;ve Worked</h2>
      </div>
      <div className="container">
        <ul className="exp-slider">
          <div className="underline"></div>
          {experiences.map((experience, index) => (
            <li
              className={`exp-slider-item ${index === selected ? 'exp-slider-item-selected' : ''}`}
              onClick={() => setSelected(index)}
              key={`${experience.name}-${index}`}
            >
              <span>{experience.name}</span>
            </li>
          ))}
        </ul>
        <div className="exp-details">
          <div className="exp-details-position">
            <h3>
              <span>{experiences[selected].role}</span>
              <span className="exp-details-position-company">
                &nbsp;@&nbsp;
                <Link href={experiences[selected].url} legacyBehavior>
                  <a target="_blank" rel="noopener noreferrer" className="link">
                    {experiences[selected].name}
                  </a>
                </Link>
              </span>
            </h3>
            <p className="exp-details-range">
              {experiences[selected].start} - {experiences[selected].end}
            </p>
            <ul className="exp-details-list">
              {experiences[selected].shortDescription.map((description, index) => (
                <li key={index} className="exp-details-list-item">
                  {description}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Experience;
