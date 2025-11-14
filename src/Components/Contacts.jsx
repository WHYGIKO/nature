import { FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

const Contacts = () => {
	return (
		<div className="contacts">
			<div className="container">
				
				<div className="contacts_box">
					<h3 className="main">our</h3>
					<h1 className="title">contacts</h1>
					
					<div className="contacts_card">
						<h4 className="contacts_card_title">Call us at this number:</h4>
						<p className="contacts_card_text"><span>•</span> <a href="tel:+(212) 111-4242">+(212) 111-4242</a></p>
					</div>
					<div className="contacts_card">
						<h4 className="contacts_card_title">The agency is located at:</h4>
						<p className="contacts_card_text"><span>•</span> State of California, Los Angeles Country</p>
					</div>
					<div className="contacts_card">
						<h4 className="contacts_card_title">Contact us by mail:</h4>
						<p className="contacts_card_text"><span>•</span> <a href="mail:Design@interior.agency">Design@interior.agency</a></p>
					</div>
					<div className="contacts_card">
						<h4 className="contacts_card_title">Follow us on social networks:</h4>
						<p className="contacts_card_text icons">
							<a href="https://www.whatsapp.com/?lang=en" className="icons"><img src="/src/assets/images/w-icon.svg" alt="" /></a>
						<a href="https://www.instagram.com/" className="icons"><img src="/src/assets/images/instagram-icon.svg" alt="" /></a>
						<a href="https://x.com/" className="icons"><img src="/src/assets/images/x-icon.svg" alt="" /></a>
						</p>
					</div>
				</div>
				<div className="contacts_img">
					<img src="/src/assets/images/contacts.png" alt="" />
				</div>
			</div>
		</div>
	)
}

export default Contacts
