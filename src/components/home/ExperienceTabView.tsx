import styles from '../../styles/Home.module.css';
import Image from 'next/image';
import React, { useState } from 'react';
import experienceDataJson from '../../data/experience.json';
import { BriefcaseIcon, MapPinIcon } from '@heroicons/react/24/outline';

interface Experience {
  id: number;
  category: string;
  company: string;
  role: string;
  type: string;
  logo: string;
  startDate: string;
  endDate: string;
  location: string;
  description?: string[];
}

interface Education {
  id: number;
  category: string;
  school: string;
  degree: string;
  university?: string;
  logo: string;
  startDate: string;
  endDate: string;
  location?: string;
  mode?: string;
}

interface Skill {
  id: number;
  category: string;
  name: string;
}

interface ExperienceData {
  experience: Experience[];
  education: Education[];
  skills: Skill[];
}

// ✅ Cast JSON to typed object
const experienceData = experienceDataJson as ExperienceData;

type TabKey = "experience" | "education" | "skills";

export default function ExperienceTabView() {
  const [activeTab, setActiveTab] = useState<TabKey>("experience");

  // ✅ Render Experience
  const renderExperience = () => {
    const grouped = experienceData.experience.reduce((acc, exp) => {
      if (!acc[exp.category]) acc[exp.category] = [];
      acc[exp.category].push(exp);
      return acc;
    }, {} as Record<string, Experience[]>);

    return (
      <div>
        {Object.entries(grouped).map(([category, items]) => (
          <div key={category} className={styles.expCategorySection}>
            <h3 className={styles.expCategory}>{category}</h3>
            {items.map((exp) => (
              <div key={exp.id} className={styles.expCard}>
                <div className={styles.expContent}>
                  <div className={styles.expLogo}>
                    <Image src={exp.logo} alt={exp.company} width={48} height={48} />
                  </div>
                  <div className={styles.expDetails}>
                    <h4>
                      {exp.company} | {exp.startDate} - {exp.endDate}
                    </h4>
                    <div className={styles.expDetailContainer}>
                      <div className={styles.expDetailContainer}>
                        <BriefcaseIcon className={styles.expIcon} />
                        <p>{exp.role}</p>
                      </div>
                      <p>|</p>
                      <div className={styles.expDetailContainer}>
                        <MapPinIcon className={styles.expIcon} />
                        <p className={styles.expLocation}>{exp.location}</p>
                      </div>
                    </div>
                    {exp.description && exp.description.length > 0 && (
                      <div className={styles.expDescription}>
                        <span className={styles.expDescriptionTitle}>Responsibilities:</span>
                        <ul>
                          {exp.description.map((point, index) => (
                            <li key={index}>{point}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  };

  // ✅ Render Education
  const renderEducation = () => {
    const grouped = experienceData.education.reduce((acc, edu) => {
      if (!acc[edu.category]) acc[edu.category] = [];
      acc[edu.category].push(edu);
      return acc;
    }, {} as Record<string, Education[]>);

    return (
      <div>
        {Object.entries(grouped).map(([category, items]) => (
          <div key={category} className={styles.eduCategorySection}>
            <h3 className={styles.eduCategory}>{category}</h3>
            {items.map((edu) => (
              <div key={edu.id} className={styles.eduCard}>
                <div className={styles.eduContent}>
                  <Image src={edu.logo} alt={edu.school} width={48} height={48} />
                  <div>
                    <h4>{edu.school}</h4>
                    <p>{edu.degree}</p>
                    <p>{edu.startDate} - {edu.endDate}</p>
                    <p>{edu.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  };

  // ✅ Render Skills
  const renderSkills = () => {
    const grouped = experienceData.skills.reduce((acc, skill) => {
      if (!acc[skill.category]) acc[skill.category] = [];
      acc[skill.category].push(skill);
      return acc;
    }, {} as Record<string, Skill[]>);

    return (
      <div>
        {Object.entries(grouped).map(([category, items]) => (
          <div key={category} className={styles.skillCategorySection}>
            <h3 className={styles.skillCategory}>{category}</h3>
            <div className={styles.skillTags}>
              {items.map((skill) => (
                <span key={skill.id} className={styles.skillTag}>
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className={styles.experienceContainer}>
      {/* Tabs */}
      <div className={styles.tabHeader}>
        <button
          className={`${styles.tabButton} ${activeTab === "experience" ? styles.active : ""}`}
          onClick={() => setActiveTab("experience")}
        >
          Experience
        </button>
        <button
          className={`${styles.tabButton} ${activeTab === "education" ? styles.active : ""}`}
          onClick={() => setActiveTab("education")}
        >
          Education
        </button>
        <button
          className={`${styles.tabButton} ${activeTab === "skills" ? styles.active : ""}`}
          onClick={() => setActiveTab("skills")}
        >
          Skills
        </button>
      </div>

      {/* Tab Content */}
      <div className={styles.tabContent}>
        {activeTab === "experience" && renderExperience()}
        {activeTab === "education" && renderEducation()}
        {activeTab === "skills" && renderSkills()}
      </div>
    </div>
  );
}