import React from 'react';
import {Link} from "react-router-dom";

const MainPageNav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/productivity-zone">Productivity Zone</Link>
        </li>
      </ul>
    </nav>
  );
};

export default MainPageNav;
