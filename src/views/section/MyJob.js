import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import { textReveal, titleReveal } from '../../super/TextReveal';
import { gsap } from "gsap/all";
import { useTranslation } from "react-i18next";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ChevronRightIcon from '../icon/ChevronRight';

gsap.registerPlugin(ScrollTrigger);

const MyJob = () => {
  const {t} = useTranslation('common');

  useEffect(() => {
    titleReveal('.js-s-myJob', '.s-myJob .js-textReveal-text span');
    textReveal('.js-s-myJob', '.js-s-myJob-text');
  });

  return (
    <div className={"s-myJob js-textReveal-trigger js-s-myJob"}>
      <div className='container'>
        <div className="s-myJob-left">
          <h3 className='s-myJob-title ui-h1 is-medium js-textReveal-text' data-text={t('section.myJob.title')}>
            <hr></hr>
            <span>{t('section.myJob.title')}</span>
          </h3>
          <p className='s-myJob-text js-s-myJob-text'>{t('section.myJob.text')}</p>
        </div>
        <div className="s-myJob-right js-s-myJob-text">
          <Link className='s-myJob-link js-cursor-pointer' to={'/contact'}>
            {t('section.myJob.link')}
            <ChevronRightIcon class="s-myJob-arrow" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MyJob;
