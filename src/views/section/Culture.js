import React, { useEffect } from 'react';
import { textReveal } from '../../super/TextReveal';

const Culture = () => {

  useEffect(() => {
    textReveal('.js-s-culture' , '.js-s-culture-text');
  });

  return (
    <div className={'s-culture js-s-culture'}>
      <div className='container'>
        <h3 className='ui-h1 js-s-culture-text'>Our culture,<br/> values and <br/>belief</h3>
        <div className='cultures'>
          <div className='culture'>
            <h4 className='js-s-culture-text'>#Performance</h4>
            <p className='js-s-culture-text'>
            Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. 
            Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, 
            </p>
          </div>
          <div className='culture'>
            <h4 className='js-s-culture-text'>#Maintenance</h4>
            <p className='js-s-culture-text'>
            Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. 
            Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, 
            </p>
          </div>
          <div className='culture'>
            <h4 className='js-s-culture-text'>#Security</h4>
            <p className='js-s-culture-text'>
            Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. 
            Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, 
            </p>
          </div>
        </div>
      </div>
    </div>
);
}

export default Culture;
