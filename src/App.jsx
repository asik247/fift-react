import React, { Suspense } from 'react';
import Bottols from './Components/Bottols/Bottols';
import Navbar from './Components/Navbar/Navbar';

const bottolsPromise = fetch("./Bottols.json")
.then(res=>res.json())
console.log(bottolsPromise);
const App = () => {
  return (
    <div>
      {/* nav code here */}
      <Navbar></Navbar>
      <Suspense fallback={<h1>Loadding....</h1>}>
        <Bottols bottolsPromise={bottolsPromise}></Bottols>
      </Suspense>
    </div>
  );
};

export default App;