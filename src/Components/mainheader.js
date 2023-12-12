import React from 'react';
import API from '../appi/navigation.json'
export default function MainHeader() {
  return (
    <>
      <div className='flex flex-row ' > {/* Add flex and items-center to align items in a row */}
        <div className='w-1/4'>
          <h1 className='text-2xl font-bold mb-2 mr-2'>Zarfinities Solution</h1> {/* Add margin-right to create space between the title and navigation */}
        </div>
        <div className='flex flex-row gap bg-slate-500 w-3/4 justify-evenly items-center' >
          {API.map((item)=>{
              return  (<a href={item.url}><div >{item.title}</div></a>)

          })}
          
          
        </div>
      </div>
    </>
  );
}

