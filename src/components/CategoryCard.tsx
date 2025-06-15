import { Link } from "react-router-dom";
interface Props {
  name: string;
  image: string;
  to: string;
}

const CategoryCard = ({ name, image, to }: Props) => (
  <Link
    to={to}
    className="group block glass glass-hover p-0 overflow-hidden w-full md:w-[340px] h-[180px] shadow-lg hover:shadow-gold transition-all ease-in-out duration-200"
  >
    <div
      className="w-full h-full flex flex-col items-end justify-end bg-cover bg-center"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="bg-gold/90 px-5 py-2 rounded-tr-none rounded-bl-glass rounded-tl-2xl font-display text-xl tracking-wide text-white group-hover:bg-gold">
        {name}
      </div>
    </div>
  </Link>
);

export default CategoryCard;
