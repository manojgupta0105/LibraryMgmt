import React from "react";
import { connect } from 'react-redux';
import Button from "../Components/Button";
import Modal from '../Components/Modal';
import Textbox from "../Components/Textbox";
import { getBooks } from '../reducer/app';


class Library extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
      showModal: false,
      bookEditData: {}
    }
  }

  onTextchange = (e) => {
    console.log(e.target.value);
    this.setState({
      searchQuery: e.target.value
    });
  };

  btnAction = () => {
    this.setState({
      showModal: true
    })
  };

  closeModal = () => {
    this.setState({
      showModal: false
    })
  };

  editBook = (data) => {
    this.setState({
      bookEditData: data,
      showModal: true
    })
  }

  addBookData = (e) => {
    e.preventDefault();
    const { books, addRecord, editRecord } = this.props;
    const formData = new FormData(e.target.parentElement);
    const bookData = {
      id: formData.get('bookId') ? formData.get('bookId') : '',
      name: formData.get('bookName'),
      qty: formData.get('bookQuantity'),
      author: formData.get('authName'),
      desc: formData.get('bookDesc')
    }
    console.log(bookData);
    if (!bookData.id) {
      addRecord(bookData);
    } else {
      editRecord(bookData);
    }
      
    this.setState({
      bookEditData: {},
      showModal: false
    });
  };

  renderBookElement = () => {
    const { books } = this.props;
    const { searchQuery } = this.state;
    let element = [];
    if(books.length > 0) {
      books.forEach((data, index) => {
        if(searchQuery === '' || data.name.indexOf(searchQuery) > -1) {
          element.push(<div style={{display: "flex", justifyContent: 'space-evenly'}} key={`book-${index}`}>
            <div>{data.name}</div>
            <div>{data.qty}</div>
            <div>{data.author}</div>
            <div>{data.desc}</div>
            <div><button onClick={() => this.editBook(data)}>Edit</button></div>
          </div>
          );
        }
      });
    } else {
      element = <div> NO result found</div>;
    }
    return element
  };

  render() {
    const {showModal, bookEditData} = this.state;
    return <div className="library-container" style={{width: '400px'}}>
      <div className="library-action-btns">
        Test btn
        <Textbox onChange={this.onTextchange} value="" />
        <Button onClick={this.btnAction} text="Add" />
        <div style={{display: "flex", justifyContent: 'space-evenly'}}>
          <div>Name</div>
          <div>Quantity</div>
          <div>Author</div>
          <div>Description</div>
          <div>Action</div>
        </div>
        
          {this.renderBookElement()}
        
      </div>
      {showModal ? <Modal addBookData={this.addBookData} closeModal={this.closeModal} bookEditData={bookEditData} /> : ""}
    </div>
  }
}

const mapStateToProps = state => {
  return {
    books: getBooks(state)
  };
};


const mapDispatchToProps = dispatch => {
  return {
    addRecord: (data) => dispatch({ type: 'ADD_BOOK_DATA', data }),
    editRecord: (data) => dispatch({ type: 'EDIT_BOOK_DATA', data })
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(Library);
