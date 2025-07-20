import { RoomProps } from '@/interfaces'
import React from 'react'

const RoomCard: React.FC<RoomProps> = ({
    name,
    image,
    availability,
    price,
    address
}) => {
  return (
    <div
        className="bg-white shadow rounded-lg p-4 mt-4 flex flex-col sm:flex-row justify-between items-start sm:items-center"
      >
        <div className="flex flex-col sm:flex-row sm:space-x-4">
          <img
            src={image}
            alt={name}
            className="w-full sm:w-32 sm:h-32 mb-3 sm:mb-0 object-cover rounded-lg"
          />
          <div className="space-y-1">
            <h4 className="text-lg font-semibold">{name}</h4>
            <p className="text-sm text-gray-600">
              <span className="font-semibold text-gray-800"> Address:</span> {address}
            </p>
            <p className="text-sm text-gray-600">
              <span className="font-semibold text-gray-800"> Availability:</span>
              {availability}
            </p>
            <p className="text-sm text-gray-600">
              <span className="font-semibold text-gray-800"> Price:</span>
              ${price}/hour
            </p>
          </div>
        </div>
        <div
          className="flex flex-col sm:flex-row w-full sm:w-auto sm:space-x-2 mt-2 sm:mt-0"
        >
          <a
            href="room.html"
            className="bg-blue-500 text-white px-4 py-2 rounded mb-2 sm:mb-0 w-full sm:w-auto text-center hover:bg-blue-700"
            >View Room</a
          >
        </div>
      </div>
  )
}

export default RoomCard