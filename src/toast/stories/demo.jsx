import React, { Fragment, useState } from 'react';
import { Toast } from '../../index';
import '../style';

const Demo = () => {
  return (
    <Fragment>
      <button
        onClick={() => {
          Toast.show('show');
        }}
      >
        show
      </button>
      <button
        onClick={() => {
          Toast.success('success');
        }}
      >
        success
      </button>
      <button
        onClick={() => {
          Toast.fail('fail');
        }}
      >
        fail
      </button>
      <button
        onClick={() => {
          Toast.info('info');
        }}
      >
        info
      </button>
      <button
        onClick={() => {
          Toast.offline('offline');
        }}
      >
        offline
      </button>
      <button
        onClick={() => {
          Toast.loading('loading');
        }}
      >
        loading
      </button>
    </Fragment>
  );
};

export default Demo;
