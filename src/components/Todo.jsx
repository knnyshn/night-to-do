import { AiFillEdit } from 'react-icons/ai'
import { BsFillTrashFill } from "react-icons/bs";


function Todo({task}) {
  return (
      <div className="flex justify-between items-center bg-violet-800 text-white py-3 px-4 rounded-md mb-1 cursor-pointer">
          <p>{task.task}</p>
          <div className='flex items-center gap-x-4'>
              <AiFillEdit className='text-xl'/>
              <BsFillTrashFill className='text-xl' />
          </div>
      </div>
  )
}

export default Todo