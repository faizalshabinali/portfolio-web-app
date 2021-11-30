import React from 'react';
import ImageSection from '../Components/ImageSection';
import ServicesSection from '../Components/ServicesSection';
import SkillsSection from '../Components/SkillsSection';
import Title from '../Components/Title';
import design from '../img/design.svg';
import intelligence from '../img/intelligence.svg';
import gamedev from '../img/game-dev.svg';

function AboutPage() {
  return (
    <div className='AboutPage'>
      <Title title={'About Me'} span={'About Me'} />
      <ImageSection />
      <Title title={'My Skills'} span={'My Skills'} />
      <div className='skills-containers'>
        <SkillsSection skill={'JavaScript'} progress={'70%'} width={'70%'} />
        <SkillsSection skill={'HTML'} progress={'80%'} width={'80%'} />
        <SkillsSection skill={'CSS'} progress={'70%'} width={'70%'} />
        <SkillsSection skill={'React JS'} progress={'75%'} width={'75%'} />
        <SkillsSection skill={'Bootstrap'} progress={'80%'} width={'80%'} />
        <SkillsSection skill={'Adobe XD'} progress={'90%'} width={'90%'} />
      </div>
      <Title title={'Services'} span={'Services'} />
      <div className='services-containers'>
        <ServicesSection
          image={design}
          title={'UI/UX Design'}
          text={
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam consequuntur magni temporibus.'
          }
        />
        <ServicesSection
          image={intelligence}
          title={'Artificial Intelligence'}
          text={
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam consequuntur magni temporibus.'
          }
        />
        <ServicesSection
          image={gamedev}
          title={'Game Development'}
          text={
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam consequuntur magni temporibus.'
          }
        />
      </div>
    </div>
  );
}

export default AboutPage;
