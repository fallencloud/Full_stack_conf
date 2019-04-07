import React from 'react';

const Speakers = () => {
  return (
    <div className='row'>
      <div className='col-md-6 col-lg-4'>
        <div className='card mb-3'>
          <img className='card-img-top' src='img/vivianne.png' alt='Vivianne' />
          <div className='card-body'>
            <h4 className='card-title'>Vivianne McVue</h4>
            <p className='card-text'>
              Vivianne is a web developer and teacher who is passionate about
              building scalable, data-driven web apps, especially ones that
              address old problems with new tech!
            </p>
          </div>
        </div>
      </div>

      <div className='col-md-6 col-lg-4'>
        <div className='card mb-3'>
          <img
            className='card-img-top'
            src='img/nodestradamus.png'
            alt='NodeStradamus'
          />
          <div className='card-body'>
            <h4 className='card-title'>NodeStradamus</h4>
            <p className='card-text'>
              "NodeStra" is a software engineer and philosopher trying to leave
              the world better than he found it. He codes for non-profits,
              eCommerce, and large-scale web apps.
            </p>
          </div>
        </div>
      </div>

      <div className='col-md-6 col-lg-4'>
        <div className='card mb-3'>
          <img className='card-img-top' src='img/robbie.png' alt='Robbie' />
          <div className='card-body'>
            <h4 className='card-title'>Robbie Redux</h4>
            <p className='card-text'>
              Robbie is a JavaScript developer working on large-scale
              applications. He's also a teacher who strives to support students
              in removing barriers to learning code.
            </p>
          </div>
        </div>
      </div>

      <div className='col-md-6 col-lg-4'>
        <div className='card mb-3'>
          <img className='card-img-top' src='img/ecma.png' alt='Ecma' />
          <div className='card-body'>
            <h4 className='card-title'>Ecma Scriptnstuff</h4>
            <p className='card-text'>
              Ecma found her passion for programming and teaching over 15 years
              ago. She is excited to introduce you to all of the wonders of
              JavaScript.
            </p>
          </div>
        </div>
      </div>

      <div className='col-md-6 col-lg-4'>
        <div className='card mb-3'>
          <img className='card-img-top' src='img/jay.png' alt='Jay' />
          <div className='card-body'>
            <h4 className='card-title'>Jay Query</h4>
            <p className='card-text'>
              Jay is a developer, author of CSS: The Missing Manual, JavaScript
              &amp; jQuery: The Missing Manual, and web development teacher.
            </p>
          </div>
        </div>
      </div>

      <div className='col-md-6 col-lg-4'>
        <div className='card'>
          <img className='card-img-top' src='img/json.png' alt='Json' />
          <div className='card-body'>
            <h4 className='card-title'>Json Babel</h4>
            <p className='card-text'>
              All of his professional life, Json has worked with computers
              online; he is a polyglot programmer and likes using the right
              tools for the job.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Speakers;
