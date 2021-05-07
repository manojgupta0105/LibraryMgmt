import React from "react";

const Textbox = ({text, onChange}) => {

  return(<div>
    <input type="text" onChange={onChange} value={text} />
  </div>);

};

// Textbox.Proptypes = {
//   text: Prototypes.string,
//   onChange: Proptypes.func.isRequired
// }

export default Textbox;