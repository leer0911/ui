import React, { Fragment, useState } from 'react';
import { Modal } from '../../index';
import '../style';

const Demo = () => {
  const [visible, setVisible] = useState(false);
  return (
    <Fragment>
      <button
        onClick={() => {
          setVisible(true);
        }}
      >
        showModal
      </button>
      <button
        onClick={() => {
          Modal.operation();
        }}
      >
        showOperation
      </button>
      <button
        onClick={() => {
          Modal.alert('title', 'message');
        }}
      >
        showAlert
      </button>
      <button
        onClick={() => {
          Modal.prompt('title', 'message', () => {
            alert('end');
          });
        }}
      >
        showPrompt
      </button>
      <Modal
        visible={visible}
        title="title"
        transparent={true}
        onClose={() => {
          setVisible(false);
        }}
        footer={[
          {
            text: 'footerButton',
            onPress: () => {
              setVisible(false);
            },
          },
        ]}
      >
        children
      </Modal>
    </Fragment>
  );
};

export default Demo;
