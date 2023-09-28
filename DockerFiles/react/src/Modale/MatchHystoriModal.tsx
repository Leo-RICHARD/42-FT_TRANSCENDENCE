import React, { useState } from "react";
import {useEffect } from 'react';
import '../css/modal.css';
import '../css/UserPage.css';

import { MatchHist } from "../Pages/MatchHistory";
interface User {
    name: string;
    uid : number
  }
  
  interface Props {
    User: User;
    onClose: () => void;
  }

const MatchHistMod: React.FC<Props> = ({ onClose, User }) => {
  const [showModal, setShowModal] = useState(false);

useEffect(() => {
     setShowModal(true);
    }, []);

  const handleCloseModal = () => {
    setShowModal(false);
    onClose();
  };
  return (
    <>

      {showModal && (
        <div className="modal-overlay">
          <div className="new_modal">
            <div className="modal-header">
              <h2>Match History</h2>
              <button className="user-button" onClick={handleCloseModal}>Close</button>
            </div>
            <div className="new_modal-body">
             <div className="test">
              <MatchHist User={User} />
              </div>
              <div/>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MatchHistMod;