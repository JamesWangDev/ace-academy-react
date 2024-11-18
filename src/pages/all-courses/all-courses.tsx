import { useState } from "react"
import { CardData } from "../../components/card/card"
import { CardImgMd01, CardImgMd02, CardImgMd03, CardImgMd04 } from "../../assets/imgs"
import Card from "../../components/card/card"
import { IconSmDownArrow } from "../../assets/icons"
import { Dropdown } from "../../components/dropdown"
import { Switch } from "../../components/switch"

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
    {name: "Ran Segall", title: "The Complete Web Developer Course 3.0", ratings: 4.3, like: true, price: 140, img: CardImgMd03, size: 'md'},
    {name: "Phil Ebiner & Kevin Gardin", title: "Drawing Masterclass: Art, Sketching, Drawing Course", ratings: 4.3, like: false, price: 340, img: CardImgMd04, size: 'md'},
    {name: "Scrum Academy", title: "Productivity for Creators: Systems, Organization & Workflow", ratings: 4.7, like: false, price: 400, img: CardImgMd02, size: 'md'},
    {name: "Phil Ebiner & Kevin Gardin", title: "Drawing Masterclass: Art, Sketching, Drawing Course", ratings: 4.3, like: false, price: 340, img: CardImgMd04, size: 'md'},
    {name: "Scrum Academy", title: "Productivity for Creators: Systems, Organization & Workflow", ratings: 4.7, like: false, price: 400, img: CardImgMd02, size: 'md'}
]

const dropdownOptions = [
    "Arts & Entertainment",
    "Business",
    "Community & Government",
    "Design & Style",
    "Food",
    "Home & Lifestyle",
    "Music",
    "Science & Tech",
    "Sports & Gaming",
    "Writing",
]

const AllCourses = () => {
    const [isChecked, setIsChecked] = useState(false);

    const handleChange = (checked: boolean) => {
        setIsChecked(checked);
      };

    return (
        <div className="mx-auto w-fit px-10">
            <div className="text-30 text-midblack font-extrabold">All courses</div>
            <div className="mt-4 w-full flex justify-between items-center">
                <div className="flex gap-3">
                    <Dropdown label="Category" options={dropdownOptions} />
                    <Dropdown label="Budget" options={dropdownOptions} />
                    <Dropdown label="Provider" options={dropdownOptions} />
                    <Dropdown label="Duration" options={dropdownOptions} />
                </div>
                <div>
                    <Switch label="Enable Feature" checked={isChecked} onChange={handleChange} />
                </div>
            </div>
            <div className="mt-12 flex justify-between text-xs text-brightgrey font-bold">
                <span>167 courses available</span>
                <div className="flex">
                    <span>Sort by:&nbsp;</span>
                    <span className="flex text-midblack font-bold">Relevance&nbsp;<span className="my-auto"><IconSmDownArrow /></span></span>
                </div>
            </div>
            <div className="mt-5 flex flex-wrap gap-3.75 justify-between">
                {mdcards.map((card) => <Card data={card} />)}
            </div>
        </div>
    )
}

export default AllCourses