import { useState } from 'react';
import './App.css';
import './Modal.jsx'
import Modal from './Modal.jsx';
function App() {
  const [modalActive, setModalActive] = useState(false)
  return (
    <div className='app text-center'>
          <button  onClick={()=>setModalActive(true)} type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" className ='bt inline-block px-6 py-2 border-4  border-blue-600 text-blue-600 font-medium text-xs leading-tight uppercase rounded-xl hover:bg-black hover:bg-opacity-25 focus: shadow-lg focus:outline-none focus:ring-0 active:bg-slate-400 active:shadow-lg transition duration-150 ease-in-out' >Dialog box</button>
<Modal active={modalActive} setActive={setModalActive}/>
</div>

  );
}

export default App;
