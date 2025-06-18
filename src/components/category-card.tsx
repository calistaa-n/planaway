export default function CategoryCard (
  {title, description, image}: {
    title: string;
    description: string;
    image: string;
  }) {

   return(
    <div className="w-full h-full bg-[#F2ECE3] p-6 rounded-2xl flex flex-col items-center text-center justify-center space-y-3 cursor-pointer hover:ring-4 hover:ring-white transition duration-200 hover:shadow-lg">
        <img src={image} alt={title} className="h-16 w-16 object-cover"/>
        <p className="text-[#1D2B29] text-xl font-bold">{title}</p>
        <p className="text-base">{description}</p>
    </div>
   );
}