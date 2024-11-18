import { IconStar, IconWhiteHeart, IconGreyHeart } from "../../assets/icons";

export interface CardProps {
    className?: string;
    data: CardData;
}

export interface CardData {
    price: number;
    name: string;
    title: string;
    like: boolean;
    ratings: number;
    img: string;
    size: "md" | "lg";
}

const Card = ({className, data}: CardProps) => {
    const {price, name, title, like, ratings, img, size} = data
    const cardClassName = `flex flex-col ${size === "lg" ? "w-101 h-80 " : " w-75 h-90"} rounded-2.5 bg-white shadow-custom3 cursor-pointer ${className}`
    return (
        <div className={cardClassName}>
            <div className="relative">
                <img src={img} alt="card image" />
                <div className={`${size === "lg" ? "top-5 right-5" : "top-4 right-4"} absolute px-4 py-2 w-fit bg-primary-500 rounded-15 text-13 leading-4 font-bold text-midblack`}><span>${price}</span></div>
            </div>
            <div className="pt-5 pl-7.5 pr-4 pb-4 h-full flex flex-col justify-between">
                <div>
                    <div className="text-brightgrey text-xs font-semibold">{name}</div>
                    <div className="mt-2.5 text-midblack text-lg leading-6 font-extrabold">{title}</div>
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex gap-0.25">
                        <IconStar />
                        <span className="text-xs text-midblack font-semibold">{ratings}/5</span>
                    </div>
                    <div className="w-9 h-9 bg-tangerine rounded-full flex">
                        <span className="m-auto">
                            {like ? <IconGreyHeart /> : <IconWhiteHeart />}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card