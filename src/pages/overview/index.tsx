import Tour from "./components/tour"
import { CardData } from "../../components/card/card"
import { Slider } from "../../components/slider"
import { CardImgLg01, CardImgLg02, CardImgLg03, CardImgMd01, CardImgMd02, CardImgMd03, CardImgMd04 } from "../../assets/imgs"
import Banner from "./components/banner"

const lgcards: CardData[] = [
    {name: "Frank Gehry", title: "Teaches Design and Architecture", ratings: 4.9, like: false, price: 300, img: CardImgLg01, size: 'lg'},
    {name: "Gordon Ramsay", title: "Take your cooking to the next level in Gordon’s masterclass", ratings: 4.9, like: true, price: 240, img: CardImgLg02, size: 'lg'},
    {name: "Lewis Hamilton", title: "Lewis Hamilton teaches a Winning Mindset", ratings: 4.9, like: false, price: 200, img: CardImgLg03, size: 'lg'},
    {name: "Lewis Hamilton", title: "Lewis Hamilton teaches a Winning Mindset", ratings: 4.9, like: false, price: 200, img: CardImgLg03, size: 'lg'},
    {name: "Gordon Ramsay", title: "Take your cooking to the next level in Gordon’s masterclass", ratings: 4.9, like: true, price: 240, img: CardImgLg02, size: 'lg'},
    {name: "Frank Gehry", title: "Teaches Design and Architecture", ratings: 4.9, like: false, price: 300, img: CardImgLg01, size: 'lg'},
    {name: "Gordon Ramsay", title: "Take your cooking to the next level in Gordon’s masterclass", ratings: 4.9, like: true, price: 240, img: CardImgLg02, size: 'lg'},
    {name: "Lewis Hamilton", title: "Lewis Hamilton teaches a Winning Mindset", ratings: 4.9, like: false, price: 200, img: CardImgLg03, size: 'lg'},
    {name: "Gordon Ramsay", title: "Take your cooking to the next level in Gordon’s masterclass", ratings: 4.9, like: true, price: 240, img: CardImgLg02, size: 'lg'},
    {name: "Frank Gehry", title: "Teaches Design and Architecture", ratings: 4.9, like: false, price: 300, img: CardImgLg01, size: 'lg'},
    {name: "Frank Gehry", title: "Teaches Design and Architecture", ratings: 4.9, like: false, price: 300, img: CardImgLg01, size: 'lg'},
    {name: "Gordon Ramsay", title: "Take your cooking to the next level in Gordon’s masterclass", ratings: 4.9, like: true, price: 240, img: CardImgLg02, size: 'lg'}
]

const mdcards: CardData[] = [
    {name: "Office Newb", title: "Microsoft Excel - Excel from Beginner to Advanced", ratings: 4.7, like: true, price: 240, img: CardImgMd01, size: 'md'},
    {name: "Scrum Academy", title: "Productivity for Creators: Systems, Organization & Workflow", ratings: 4.7, like: false, price: 400, img: CardImgMd02, size: 'md'},
    {name: "Ran Segall", title: "The Complete Web Developer Course 3.0", ratings: 4.3, like: true, price: 140, img: CardImgMd03, size: 'md'},
    {name: "Phil Ebiner & Kevin Gardin", title: "Drawing Masterclass: Art, Sketching, Drawing Course", ratings: 4.3, like: false, price: 340, img: CardImgMd04, size: 'md'},
    {name: "Scrum Academy", title: "Productivity for Creators: Systems, Organization & Workflow", ratings: 4.7, like: false, price: 400, img: CardImgMd02, size: 'md'},
    {name: "Ran Segall", title: "The Complete Web Developer Course 3.0", ratings: 4.3, like: true, price: 140, img: CardImgMd03, size: 'md'},
    {name: "Scrum Academy", title: "Productivity for Creators: Systems, Organization & Workflow", ratings: 4.7, like: false, price: 400, img: CardImgMd02, size: 'md'},
    {name: "Ran Segall", title: "The Complete Web Developer Course 3.0", ratings: 4.3, like: true, price: 140, img: CardImgMd03, size: 'md'},
    {name: "Phil Ebiner & Kevin Gardin", title: "Drawing Masterclass: Art, Sketching, Drawing Course", ratings: 4.3, like: false, price: 340, img: CardImgMd04, size: 'md'},
    {name: "Scrum Academy", title: "Productivity for Creators: Systems, Organization & Workflow", ratings: 4.7, like: false, price: 400, img: CardImgMd02, size: 'md'},
    {name: "Phil Ebiner & Kevin Gardin", title: "Drawing Masterclass: Art, Sketching, Drawing Course", ratings: 4.3, like: false, price: 340, img: CardImgMd04, size: 'md'},
    {name: "Scrum Academy", title: "Productivity for Creators: Systems, Organization & Workflow", ratings: 4.7, like: false, price: 400, img: CardImgMd02, size: 'md'},
    {name: "Ran Segall", title: "The Complete Web Developer Course 3.0", ratings: 4.3, like: true, price: 140, img: CardImgMd03, size: 'md'},
    {name: "Scrum Academy", title: "Productivity for Creators: Systems, Organization & Workflow", ratings: 4.7, like: false, price: 400, img: CardImgMd02, size: 'md'},
    {name: "Ran Segall", title: "The Complete Web Developer Course 3.0", ratings: 4.3, like: true, price: 140, img: CardImgMd03, size: 'md'},
    {name: "Phil Ebiner & Kevin Gardin", title: "Drawing Masterclass: Art, Sketching, Drawing Course", ratings: 4.3, like: false, price: 340, img: CardImgMd04, size: 'md'},
    {name: "Scrum Academy", title: "Productivity for Creators: Systems, Organization & Workflow", ratings: 4.7, like: false, price: 400, img: CardImgMd02, size: 'md'},
    {name: "Ran Segall", title: "The Complete Web Developer Course 3.0", ratings: 4.3, like: true, price: 140, img: CardImgMd03, size: 'md'},
    {name: "Phil Ebiner & Kevin Gardin", title: "Drawing Masterclass: Art, Sketching, Drawing Course", ratings: 4.3, like: false, price: 340, img: CardImgMd04, size: 'md'},
    {name: "Scrum Academy", title: "Productivity for Creators: Systems, Organization & Workflow", ratings: 4.7, like: false, price: 400, img: CardImgMd02, size: 'md'}
]

const OverView = () => {

    return (
        <>
            <Tour />
            <Slider cards={lgcards} cardsPerPage={4} label="Recommendations" />
            <div className="mt-7.5"><Banner /></div>
            <Slider className="mt-12.5" cards={mdcards} cardsPerPage={5} label="People like you also viewed" />
            <Slider className="mt-12.5" cards={mdcards} cardsPerPage={5} label="People like you also viewed" />
        </>
    )
}

export default OverView