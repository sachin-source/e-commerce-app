import React from 'react'
import { Dialog, DialogContent, DialogTrigger } from '../ui/dialog'
import { SearchIcon } from 'lucide-react'

const SearchBox = () => {
  return (
    <Dialog>
        <DialogTrigger>
            <SearchIcon size={26} cursor={"pointer"} />
        </DialogTrigger>
        <DialogContent>
            <form>
                <input
                type='text'
                placeholder='Search Product'
                className='block w-full bg-gray-300 rounded-lg px-6 py-2 mt-4 outline-none' />
            </form>
        </DialogContent>
    </Dialog>
  )
}

export default SearchBox