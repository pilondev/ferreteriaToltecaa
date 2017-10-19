import React from 'react';

const whoSection = () => {
  return(
    <section className="yellow-section yellow-background min-height-sections-500">
      <div className="row middle-xs padding-30">
        <div className="col-xs-12 text-center">
          <div className="box">
            <div><h3 className="weight-bold spacing-10">NUESTRA EMPRESA</h3></div>
          </div>
        </div>
      </div>
      <div className="row middle-xs">
        <div className="col-xs-12 col-sm-4 text-center padding-30">
          <div className="box">
            <div>
              <img src={process.env.PUBLIC_URL + '/img/FIC1.png'} alt="150x150" />
              <h3 className="white-text spacing-10">MISION</h3>
            </div>
            <div className="padding-20">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
          </div>
        </div>
        <div className="col-xs-12 col-sm-4 text-center padding-30">
          <div className="box">
            <div>
              <img src={process.env.PUBLIC_URL + '/img/FIC2.png'} alt="150x150" />
              <h3 className="white-text spacing-10">VISION</h3>
            </div>
            <div className="padding-20">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
          </div>
        </div>
        <div className="col-xs-12 col-sm-4 text-center">
          <div className="box">
            <div>
              <img src={process.env.PUBLIC_URL + '/img/FIC3.png'} alt="150x150" />
              <h3 className="white-text spacing-10">VALORES</h3>
            </div>
            <div className="padding-20">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default whoSection;
