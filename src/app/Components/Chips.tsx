import React from 'react'

const Chips = ({txt}:{txt:string}) => {
  return (
    <div className='gap border-2 px-2 hover:cursor-pointer py-1 rounded-lg  border-primary'>
              <h3 className='font-medium text-sm text-primary'>{txt}</h3>
            </div>
  )
}

export default Chips