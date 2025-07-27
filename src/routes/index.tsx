import DropInput from '@/components/DropInput'
import DropItem from '@/components/DropItem'
import type { Item } from '@/entities/Item'
import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'

const App = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedItem, setSelectedItem] = useState<Item>()

  const [list, setList] = useState<Array<Item>>([
    { id: 1, name: 'First Item', selected: false },
    { id: 2, name: 'Second Item', selected: false },
    { id: 3, name: 'Third Item', selected: false },
    { id: 4, name: 'Fourth Item', selected: false },
    { id: 5, name: 'Fifth Item', selected: false },
  ])

  const toggleIsOpen = () => {
    setIsOpen((prev) => !prev)
  }

  const select = (id: number) => {
    setList((prev) =>
      prev.map((item) =>
        item.id === id || item.selected
          ? { ...item, selected: !item.selected }
          : item,
      ),
    )
    setSelectedItem(list.find((item) => item.id === id))
    setIsOpen(false)
  }

  let content = list.map((item, i) => (
    <DropItem
      key={item.id}
      item={item}
      select={() => select(item.id)}
      last={i === list.length - 1}
    />
  ))

  return (
    <div className="flex flex-col items-center h-full pt-40">
      <DropInput
        selectedItem={selectedItem}
        toggleIsOpen={toggleIsOpen}
        isOpen={isOpen}
      />

      <div
        className={`transition duration-100 origin-top scale-y-0 ${isOpen && 'scale-y-100'} border-2 rounded-2xl mt-2 w-50`}
      >
        {content}
      </div>
    </div>
  )
}

export const Route = createFileRoute('/')({
  component: App,
})
