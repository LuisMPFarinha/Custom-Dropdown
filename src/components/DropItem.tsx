import type { Item } from '@/entities/Item'
import { Check } from 'lucide-react'
import React from 'react'

const DropItem = ({
  item,
  select,
  last,
}: {
  item: Item
  select: () => void
  last: boolean
}) => {
  return (
    <div
      className={`flex p-2 hover:cursor-pointer rounded-t-2xl hover:bg-gray-50 ${last ? 'rounded-b-2xl' : 'border-b-2'}`}
      id={'' + item.id}
      onClick={select}
    >
      <label>{item.name}</label>
      {item.selected && <Check className="flex ml-auto" />}
    </div>
  )
}

export default DropItem
