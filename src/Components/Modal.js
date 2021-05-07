import React from 'react';

const Modal = ({bookEditData, addBookData, closeModal}) => {
  return (
    <div className="bookUpdateForm" style={{display: "inline-flex"}}>
      <form id="BookForm">
        <div><input type="hidden" name="bookId" value={bookEditData.id} /></div>
        <div>Book Name: <input name="bookName" value={bookEditData.name} /></div>
        <div>Book Quantity: <input name="bookQuantity" value={bookEditData.qty} /></div>
        <div>Author Name: <input  name="authName" value={bookEditData.author}/></div>
        <div>Book Description: <textarea name="bookDesc">{bookEditData.desc}</textarea></div>
        <button onClick={addBookData}>Submit</button>
        <button onClick={closeModal}>Cancel</button>
      </form>
    </div>
  )
};

export default Modal;