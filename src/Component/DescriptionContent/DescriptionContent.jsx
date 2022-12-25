import React from 'react'
import './DescriptionContent.scss'
import cover_home from '../../Resources/Image/cover_home.webp'
function DescriptionContent() {
	return (
		<div className='description'>
			<div className="description__cover">
				<img src={cover_home} alt="" />
			</div>
			<div className="description__text">
				<p>Вливайся в наш стиль</p>
			</div>
		</div>
	)
}

export default DescriptionContent