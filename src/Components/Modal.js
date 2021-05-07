import React from 'react';

const Modal = ({id, name, qty, author, desc, addBookData}) => {
  return (
    <div>
      <form id="BookForm">
        <input type="hidden" id="bookId" value={id} />
        Book Name: <input id="bookName" value={name} />
        Book Quantity: <input id="bookQuantity" value={qty} />
        Author Name: <input  id="authName" value={author}/>
        Book Description: <textarea id="bookDesc">{desc}</textarea>
        <button onClick={addBookData}>Submit</button>
      </form>
    </div>
  )
};

export default Modal;