import React, { Suspense } from 'react';
import Bottols from './Components/Bottols/Bottols';
import Navbar from './Components/Navbar/Navbar';
// Bottoles promise fetch code start here;
const bottolsPromise = fetch("./Bottols.json")
.then(res=>res.json())
console.log(bottolsPromise);
// Bottoles promise fetch code end here;

const App = () => {
  return (
    <div>
      {/* nav code here */}
      <Navbar></Navbar>
      {/* suspense use for Bottols components */}
      <Suspense fallback={<h1>Loadding....</h1>}>
        <Bottols bottolsPromise={bottolsPromise}></Bottols>
      </Suspense>
    </div>
  );
};

export default App;