const TopNav = () => {
    return (
      <nav style={{height: '110px', backgroundColor: '#0076ce'}}>
        <div className="logo">DELL Technologies</div>
        <div className="links">
          <a href="/forum">Forum</a>
          <a href="/faq">FAQ</a>
          <a href="/scheduling">Scheduling</a>
        </div>
        <div className="icons">
          <img src="/path/to/profile/icon" alt="Profile" />
          <img src="/path/to/bell/icon" alt="Notifications" />
        </div>
      </nav>
    );
  };
  
  export default TopNav;