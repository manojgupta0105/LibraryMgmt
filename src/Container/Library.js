import React from "react";
import { connect } from 'react-redux';
import Button from "../Components/Button";
import Textbox from "../Components/Textbox";
import { getBooks } from '../reducer/app';


class Library extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: ''
    }
  }

  onTextchange = (e) => {
    console.log(e.target.value);
    this.setState({
      searchQuery: e.target.value
    });
  };

  btnAction = () => {
    
  }

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
        </div>
        
          {this.renderBookElement()}
        
      </div>
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
    addRecord: () => dispatch({ type: 'INCREMENT' }),
    EditRecord: () => dispatch({ type: 'DECREMENT' })
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(Library);
