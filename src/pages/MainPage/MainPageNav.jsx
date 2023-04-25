import React from 'react';
import {Link} from "react-router-dom";

const MainPageNav = () => {
  return (
    <nav>
      <ul style={{width: '275px'}}>
        <li className="d-flex justify-content-between">
          <Link to="https://blog.pitwithmagic.com/">Blog (in progress...)</Link>
          <Link to="/productivity-zone">Productivity Zone</Link>
        </li>
      </ul>
    </nav>
  );
};

export default MainPageNav;
