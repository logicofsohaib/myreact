import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Jani from "./Components/jani";
import Jgr from "./Components/jgr";
import Dll from "./Components/dll";
import Gurdey from "./Components/gurdey";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Spanclass from "./span";

export default function App() {
  return (
    <div>
      <Header message="Hello" />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Jani />} />
          <Route path="/Jgr" element={<Jgr />} />
          <Route path="/Dll" element={<Dll />} />
          <Route path="/Gurdey" element={<Gurdey />} />
        </Routes>
      </BrowserRouter>


      <Spanclass/>
    </div>
  );
}

// import React from 'react';

// export default function MainHeader() {
//   return (
//     <>
//       <div className='flex flex-row ' > {/* Add flex and items-center to align items in a row */}
//         <div className='w-1/4'>
//           <h1 className='text-2xl font-bold mb-2 mr-2'>Zarfinities Solution</h1> {/* Add margin-right to create space between the title and navigation */}
//         </div>
//         <div className='flex flex-row gap bg-slate-500 w-3/4 justify-evenly items-center' >
//           <div >Home</div> {/* Add margin-right to create space between navigation items */}
//           <div>Our Domain</div>
//           <div >Our Team</div>
//           <div >Contac US</div> {/* Correct the typo from "Contact" to "Contac" */}
//           <div>Career</div>
//         </div>
//       </div>
//     </>
//   );
// }
