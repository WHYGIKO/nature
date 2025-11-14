
const Nav = () => {

  return (
    <div className="nav">
      <div
        className="nav_background"
      />
      <nav className="nav_bar">
        <img src="/src/assets/images/nav_logo.svg" alt="" className="nav_logo" />

        <div className="nav_links">
          <a href="#about">ABOUT</a>
          <a href="#gallery">GALLERY</a>
          <a href="#projects">PROJECTS</a>
          <a href="#contacts">CONTACTS</a>
        </div>

       <a href="tel:+(212) 111-4242" className="nav_phone">+(212) 111-4242</a>
      </nav>

      <div className="nav_hero">
        <h1 className="nav_hero-title">TECHNOLOGY & NATURE</h1>
        <p className="nav_hero-subtitle">DESIGNING FOR THE FUTURE</p>
        <button className="nav_hero-button">JOIN US</button>
      </div>
    </div>
  );
};

export default Nav;
