import React from 'react';

const Footer = () => {
  return (
    <>
      <div className='text-center'>
        &copy; 2025 All rights reserved by{' '}
        <a href='https://vinod.co' target='_blank'>Learn with Vinod</a>
        
        <h5 className='mt-3'>
          <a href='https://youtube.com/learnwithvinod' className='me-3' target='_blank'>
            <i className='bi bi-youtube'></i>
          </a>{' '}
          <a href='' className='me-3' target='_blank'>
            <i className='bi bi-facebook'></i>
          </a>{' '}
          <a href='' className='me-3' target='_blank'>
            <i className='bi bi-instagram'></i>
          </a>{' '}
          <a href='' className='me-3' target='_blank'>
            <i className='bi bi-twitter'></i>
          </a>{' '}
          <a href='' className='me-3' target='_blank'>
            <i className='bi bi-linkedin'></i>
          </a>{' '}
        </h5>
      </div>
    </>
  );
};

export default Footer;
