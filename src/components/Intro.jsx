import React, { Fragment, useEffect, useState } from 'react';
import './Intro.css'; 

function Intro({ disciplines }) {
  const [currentDiscipline, setCurrentDiscipline] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCurrentDiscipline((prevIndex) => (prevIndex + 1) % disciplines.length);
    }, 3000); 

    return () => clearTimeout(timeout);
  }, [currentDiscipline, disciplines]);

  return (
    <Fragment>
      <div className="intro-container">
        <h3 className="typewriter">
          <span className="typed-text">{disciplines[currentDiscipline]}</span>
        </h3>
      </div>
    </Fragment>
  );
}

export default Intro;
