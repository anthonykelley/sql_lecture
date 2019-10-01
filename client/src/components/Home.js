import React from 'react'
import { Table, Button, } from 'semantic-ui-react'
import axios from 'axios'
import Search from './Search'

class Home extends React.Component {
  state = { books: [], column: 'customers.name' }

  listBooks = () => {
    return this.state.books.map(book => {
      return (
        <Table.Row>
          <Table.Cell>{book.name}</Table.Cell>
          <Table.Cell>{book.title}</Table.Cell>
          <Table.Cell>{book.formatted_date}</Table.Cell>
        </Table.Row>
      )
    })
  }

  searchName = (e, search) => {
    e.preventDefault()

    axios.get(`/api/logs?column=${this.state.column}&search=${search}`)
      .then(res => {
        this.setState({ books: res.data })
      })
  }

  handleChange = (name) => {
    this.setState({ column: name })
  }

  render() {
    return (
      <div style={{ margin: '20px 40px' }}>
        <Button.Group style={{ margin: '20px 0' }}>
          <Button
            color={this.state.column === 'customers.name' ? 'blue' : 'grey'}
            onClick={() => this.handleChange('customers.name')}
          >
            Customer
          </Button>
          <Button.Or />
          <Button
            color={this.state.column === 'books.title' ? 'blue' : 'grey'}
            onClick={() => this.handleChange('books.title')}
          >
            Book
          </Button>
        </Button.Group>
        <Search searchName={this.searchName} />
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Customer Name</Table.HeaderCell>
              <Table.HeaderCell>Book Title</Table.HeaderCell>
              <Table.HeaderCell>Purchase Date</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {this.listBooks()}
          </Table.Body>
        </Table>
      </div>
    )
  }
}

export default Home
