import React, { Suspense } from 'react';
import Bottols from './Components/Bottols/Bottols';

const bottolsPromise = fetch("./Bottols.json")
.then(res=>res.json())
console.log(bottolsPromise);
const App = () => {
  return (
    <div>
      <Suspense fallback={<h1>Loadding....</h1>}>
        <Bottols bottolsPromise={bottolsPromise}></Bottols>
      </Suspense>
    </div>
  );
};

export default App;