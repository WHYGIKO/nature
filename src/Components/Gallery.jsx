import React from 'react'

const Gallery = () => {
	return (
		<div className="gallery">
			<div className="container">
				<h2 className="title">
					gallery
				</h2>
				<div className="gallery_box">
					<div className="gallery_card"><img src="/src/assets/images/nature.png" alt="" /></div>
					<div className="gallery_card"><img src="/src/assets/images/technology_nature.png" alt="" /></div>
					<div className="gallery_card"><img src="/src/assets/images/ice_tree.png" alt="" /></div>
					<div className="gallery_card"><img src="/src/assets/images/zabor_tree.png" alt="" /></div>
					<div className="gallery_card"><img src="/src/assets/images/ormon_stone.png" alt="" /></div>
					<div className="gallery_card"><img src="/src/assets/images/glass_stol.png" alt="" /></div>
				</div>
			</div>
		</div>
	)
}

export default Gallery
