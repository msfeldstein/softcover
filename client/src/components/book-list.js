import React from 'react'
import BookCard from './book-card'

export default class BookList extends React.Component {
	render() {
		return <div>
			<BookCard />
			<BookCard />
			<BookCard />
		</div>
	}
}