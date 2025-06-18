import { MapPin } from 'lucide-react';
import { Star } from 'lucide-react';
import { Link } from "react-router-dom";

export default function ProductCard({image, title,location, review}: 
{image: string, title: string, location: string, review: string}) {
  return(
    <Link to="/explore" className="w-full rounded-md overflow-x-hidden">
      <img src={image} alt={title} className="w-full h-auto object-cover rounded-t-md"/>
        <div className="p-4 bg-[#F2ECE3] flex flex-col gap-y-2 rounded-br-3xl rounded-bl-3xl">
          <h3 className="text-lg font-bold break-words leading-snug max-w-full gap-y-5">{title}</h3>
          <div className='flex items-center '>
            <MapPin size={18} stroke="#F2ECE3" fill="#F52936"/>
            <span className='pl-2'>{location}</span>
        </div>
        <div className='flex items-center'>
          <Star size={18} stroke="#F2ECE3" fill='#FFB800'/>
          <span className='pl-2'>{review}</span>
        </div>
        </div>
    </Link>
    )
}