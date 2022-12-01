import React, { useEffect } from 'react';
import { useTranslation } from "react-i18next";
import { textReveal } from '../../super/TextReveal';
import DevicesIcon from '../icon/Devices';
import TagIcon from '../icon/Tag';
import DefenderIcon from '../icon/Defender';

const Services = () => {
  const {t} = useTranslation('common');

  useEffect(() => {
    textReveal('.js-s-services' , '.js-s-services-text');
  });

  return (
    <div className={"s-services js-s-services"}>
      <div className='container'>
        <div className='service js-s-services-text' style={{borderLeft: `solid 1px #74FDE6`}}>
          <DevicesIcon />
          <ul>
            <li>{t('section.services.service-1.item-1')}</li>
            <li>{t('section.services.service-1.item-2')}</li>
            <li>{t('section.services.service-1.item-3')}</li>
            <li>{t('section.services.service-1.item-4')}</li>
            <li>{t('section.services.service-1.item-5')}</li>
          </ul>
        </div>

        <div className='service js-s-services-text' style={{borderLeft: `solid 1px #3FD3FF`}}>
          <TagIcon />
          <ul>
            <li>{t('section.services.service-2.item-1')}</li>
            <li>{t('section.services.service-2.item-2')}</li>
            <li>{t('section.services.service-2.item-3')}</li>
            <li>{t('section.services.service-2.item-4')}</li>
          </ul>
        </div>

        <div className='service js-s-services-text' style={{borderLeft: `solid 1px #4C29FF`}}>
          <DefenderIcon />
          <ul>
            <li>{t('section.services.service-3.item-1')}</li>
            <li>{t('section.services.service-3.item-2')}</li>
            <li>{t('section.services.service-3.item-3')}</li>
            <li>{t('section.services.service-3.item-4')}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Services;
