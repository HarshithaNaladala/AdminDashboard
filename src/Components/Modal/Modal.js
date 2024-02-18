import React from 'react';
import ReactModal from 'react-modal';

export default function Modal({ isOpen, message, closeModal }) {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={{
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        },
        content: {
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '300px',
          height: '50px',
          padding: '10px',
          borderRadius: '8px',
          overflow: 'hidden',
          textAlign: 'center',
        },
      }}
    >
      <div>{message}</div>
      <button style={{ float: 'right' }} onClick={closeModal}>Close</button>
    </ReactModal>
  );
}
