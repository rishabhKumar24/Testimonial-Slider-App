import React, { useState } from "react";
import Card from "./Card";
import { FiChevronLeft, FiChevronRight} from "react-icons/fi";

const Testimonial = (props) => {
    let reviews = props.reviews;
    const[index, setIndex] = useState(0);

    function leftShiftHandler() {
        if (index - 1 < 0) {
            setIndex(reviews.length - 1);
        }
        else {
            setIndex(index - 1);
        }
    }

    function rightShiftHandler() {
        if (index + 1  >= reviews.length) {
            setIndex(0);
            
        }
        else {
            setIndex(index + 1);
        }
    }
    function surpriseHandler(){
        // Generate a random index
        // and set it as the current index
        let randomIndex = Math.floor(Math.random() * reviews.length);
        setIndex(randomIndex);
    }
    
    
  return (
    <div className="w-[85vw] md:w-[700px] bg-white flex flex-col justigy-center items-center
                  mt-10 p-10 transition-all duration-700 hover:shadow-lg shadow-gray-600 rounded-md">
      <Card reviews = {reviews[index]}></Card>

        <div className="flex text-3xl mt-5 gap-3 text-violet-400 font-bold mb-4">
            <button className="cursor-pointer hover:text-violet-500"
                onClick={leftShiftHandler}>
                <FiChevronLeft />
            </button>

            <button className="cursor-pointer hover:text-violet-500
            "
                onClick={rightShiftHandler}>
                <FiChevronRight />
            </button>

        </div>

        <div className="mt-4">
            <button className="bg-violet-400 hover:bg-violet-500 transition-all 
            duration-200 cursor-pointer px-10 py-2 rounded-md font-bold text-white text-lg"
            onClick={surpriseHandler}>Surprise Me</button>
        </div>

      </div>
  );
};


export default Testimonial;