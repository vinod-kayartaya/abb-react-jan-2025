import React, { useEffect, useState } from 'react';

const UseEffectDemo = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [z, setZ] = useState(0);

  useEffect(() => {
    console.log('1st useEffect called at', new Date().toLocaleTimeString());
  }, []);

  useEffect(() => {
    console.log('2nd useEffect called at', new Date().toLocaleTimeString());
  }, [x, y]);

  useEffect(() => {
    console.log('3rd useEffect called at', new Date().toLocaleTimeString());
  });

  return (
    <>
      <h2>useEffect() demo</h2>
      <h3>
        X = {x}, Y = {y} and Z = {z}
      </h3>

      <button onClick={() => setX(x + 1)} className='btn btn-primary me-3'>
        Increment X
      </button>
      <button onClick={() => setY(y + 1)} className='btn btn-primary me-3'>
        Increment Y
      </button>
      <button onClick={() => setZ(z + 1)} className='btn btn-primary me-3'>
        Increment Z
      </button>
    </>
  );
};

export default UseEffectDemo;
