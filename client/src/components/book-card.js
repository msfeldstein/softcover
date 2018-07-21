import React from 'react'
import ReadingLabel from './reading-label'

export default class BookCard extends React.Component {
	render() {
		const frameStyle = {
			display: 'inline-block',
			marginRight: '60px',
			marginBottom: '60px',
			position: 'relative'
		}
		
		const dataContainerStyle = {
			display: 'flex',
			width: '100%',
			height: '100%',
			boxOrient: 'vertical',
			boxDirection: 'normal',
			justifyContent: 'flex-start',
			boxAlign: 'start',
			alignItems: 'flex-start'
		}

		const coverStyle = {
			display: 'inline-block',
			maxWidth: '100%',
		}

		const imgStyle = {
			width: '300px',
			marginTop: '14px',
			marginBottom: '10px',
			border: '10px solid #fff',
			borderRadius: '8px',
			boxShadow: '0 2px 2px 0 rgba(0, 0, 0, 0.1)'
		}



		const image = 'https://uploads-ssl.webflow.com/5b5274ff4486f808718b34c0/5b529e49ef1d583c4049106b_41y1MiB5CML.jpg'
		return <div style={frameStyle}>
			<div style={dataContainerStyle}>
				<div style={coverStyle}>
					<img alt="done" style={imgStyle} src={image} />
					<ReadingLabel />
				</div>
			</div>
		</div>
	}
}
