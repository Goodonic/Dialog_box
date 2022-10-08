import React from "react";
import './Modal.css'
const Modal = ({active, setActive}) => {
    return(
      <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false) }>
       <div className="modal__content" onClick={e => e.stopPropagation()}>
         <h1>
          Hello World
         </h1>
       </div>

      </div>

    )
  }

  export default Modal;