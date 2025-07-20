import Image from "next/image";
import rooms from "@/data/rooms.json"
import RoomCard from "@/components/RoomCard";
import Heading from "@/components/Heading";

export default function Home() {
  return (
    <>
    <Heading title="Available Rooms" />
    {rooms.length > 0 ? rooms.map((room) => (
      <RoomCard key={room.$id} name={room.name} address={room.address} image={`@/assets/images/rooms/${room.image}`} price={room.price_per_hour} availability={room.availability}/>
    )) :
    <p>No available rooms at the moment</p>
    }
    </>
  )
}
