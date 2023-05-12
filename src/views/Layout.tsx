import React from "react";
import "./App.css";
import Logo from './assets/logo.png';
import Candidates from './assets/candidates.png'
import Bel from './assets/bel.png'
import Settings from './assets/settings.png'
import Logout from './assets/logout.png';
import Events from './assets/events.png'



function Layout() {
  return (
    <div className="App">
      <div className="tv-pn-asidebar">

        <div className="tv-pn-sidebar-logo">
          <img src={Logo} alt="logo" />
        </div>
        <div className="tv-pn-sidebar-menuItem"><img src={Events} alt="logo" />Events</div>
        <div className="tv-pn-sidebar-menuItem"><img src={Candidates} alt="logo" />Candidates</div>
        <div className="tv-pn-sidebar-menuItem"><img src={Bel} alt="logo" />Notifications</div>
        <div className="tv-pn-sidebar-menuItem"><img src={Settings} alt="logo" />Settings</div>

        <div className="tv-pn-sidebar-menuItem mt-auto"><img src={Logout} alt="logo" />Logout</div>
      </div>
      <div className="tv-pn-content">
        <div className="tv-pn-header">Header</div>
        <div className="tv-pn-Page">
          <div className="tv-pn-Page-tabholder">Tab Holder</div>
          <div className="tv-pn-Page">Content Holder</div>
        </div>
      </div>
    </div>
  );
}

export default Layout;
