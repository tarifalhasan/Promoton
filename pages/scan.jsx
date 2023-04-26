import React, { useState } from 'react';

import { QrReader } from 'react-qr-reader';

const Scanner = () => {
  const [data, setData] = useState('No result please scan');

  return (
    <>
      <QrReader
        facingMode="user"
        onResult={(result, error) => {
          if (!!result) {
            setData(result?.text);
          }

          if (!!error) {
            console.info(error);
          }
        }}
        style={{ width: '100%' }}
      />
      <p className=" text-lg text-center font-normal">{data}</p>
    </>
  );
};

export default Scanner;
