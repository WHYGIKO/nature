import React from 'react'

const Footer = () => {
	return (
		<div className="footer">
			<div className="container">
				<div className="footer_box">
					<ul className="footer_list">
						<li><a className="footer_link" href="#">HOME PAGE</a></li>
						<li><a className="footer_link" href="#">ABOUT</a></li>
						<li><a className="footer_link" href="#">GALLERY</a></li>
						<li><a className="footer_link" href="#">PROJECTS</a></li>
						<li><a className="footer_link" href="#">CONTACTS</a></li>
					</ul>

					<ul className="footer_list">
						<li><a className="footer_link" href="#">CONTACTS</a></li>
						<li><span>•</span><a className="footer_link" href="tel:+(212)111-4242">+(212) 111-4242</a></li>
						<li> <span>•</span><a className="footer_link" href="https://www.nature.com/">Technature.agency</a></li>
					</ul>

					<ul className="footer_list">
						<li><a className="footer_link" href="#">FOLLOW US</a></li>

					 <li className="footer_icons">
    <a href="https://www.whatsapp.com/?lang=en" className="icons" target="_blank">
      <img src="/src/assets/images/w-icon.svg" alt="WhatsApp" />
    </a>
    <a href="https://www.instagram.com/" className="icons" target="_blank">
      <img src="/src/assets/images/instagram-icon.svg" alt="Instagram" />
    </a>
    <a href="https://x.com/" className="icons" target="_blank">
      <img src="/src/assets/images/x-icon.svg" alt="X" />
    </a>
  </li>
				</ul>
			</div>
		</div>
		</div >
	)
}

export default Footer
