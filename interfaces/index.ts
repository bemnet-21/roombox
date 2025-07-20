export interface RoomProps {
    id: string
    name: string
    address: string
    image: string
    availability: string
    price: number
}

export interface HeadingProps {
    title: string | undefined
}
export interface RoomPageProps {
  params: {
    id: string;
  };
}