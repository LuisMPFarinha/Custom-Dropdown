import type { Item } from '@/entities/Item'
import { ChevronUp } from 'lucide-react'
import React, { useState } from 'react'

const DropInput = ({
  selectedItem,
  toggleIsOpen,
  isOpen
}: {
  selectedItem: Item | undefined
  toggleIsOpen: () => void
  isOpen: boolean
}) => {


  return (
    <div
      className="flex border-2 rounded-lg w-50 px-2 py-1.5 hover:cursor-pointer hover:bg-gray-50"
      onClick={toggleIsOpen}
    >
      <label>{selectedItem ? selectedItem.name : "Select an Item"}</label>
      <ChevronUp className={`flex ml-auto ${isOpen && "rotate-180" } transition duration-300`} />
    </div>
  )
}

export default DropInput
