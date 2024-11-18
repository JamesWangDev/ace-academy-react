import { BannerImg } from "../../../assets/imgs"
import { Button } from "../../../components/button"

const Banner = () => {
    return (
        <div className="w-full h-88 p-7.5 relative z-10 text-midblack bg-bannergrey shadow-custom3 rounded-2.5">
            <img className="absolute -z-10 right-0 top-0" src={BannerImg} alt="banner image" />
            <div>
                <div className="text-30 font-extrabold">Welkom Jeffrey</div>
                <div className="mt-2 font-semibold">Je hebt nog 1000 euro learn budget</div>
                <div className="text-26 mt-9.5 text-center font-brawler leading-10">"Learning never exhausts the mind."</div>
                <div className="text-15 font-semibold leading-6 text-center">LEONARDO DA VINCI</div>
            </div>
            <div className="mt-12.5 flex justify-start gap-2.5">
                <Button label="AI Advisor" type="primary" rounded />
                <Button label="Browse Courses" rounded />
            </div>
        </div>
    )
}

export default Banner