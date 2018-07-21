import React from 'react'

export default class ReadingLabel extends React.Component {
	render() {
		const containerStyle = {
			position: 'absolute',
			display: 'flex',
			paddingRight: '14px',
			boxAlign: 'center',
			backgroundColor: '#00c88a',
			boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.1)',
			boxSizing: 'border-box',
			borderRadius: '4px',
			lineHeight: '20px',
			alignItems: 'center',
			top: 0
		}

		const imgStyle = {
			width: '36px',
			height: '36px'
		}

		const labelStyle = {
			display: 'inline-block',
			maxWidth: '350px',
			fontFamily: 'Unica',
			color: '#fff',
			fontSize: '13px',
			letterSpacing: '0.5pt'
		}
		return <div style={containerStyle}>
			<img alt="cover" style={imgStyle} src="/check.png" />
			<div style={labelStyle}>Done</div>
		</div>
	}
}