import { useState } from "react";

const ImageSlider = ({slides}) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const sliderStyles = {
        height: "100%",
        position: "relative",
    }

    const slideStyles = {
        width: "100%",
        height: "100%",
        borderRadius: "10px",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundImage: `url(${slides[currentIndex].url})`,
    }

    const leftArrowStyle = {
        position: "absolute",
        top: "50%",
        transform: "translate(0, -50%)",
        left: "32px",
        fontSize: "45px",
        color: "black",
        zIndex: 1,
        cursor: "pointer",
    };

    const rightArrowStyle = {
        position: "absolute",
        top: "50%",
        transform: "translate(0, -50%)",
        right: "32px",
        fontSize: "45px",
        color: "black",
        zIndex: 1,
        cursor: "pointer",
    };

    const gotoPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const gotoNext = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const dotContainerStyles = {
        display: "flex",
        justifyContent: "center",
    }

    const dotStyles = {
        margin: "0 5px",
        cursor: "pointer",
        fontSize: "15px",
    }

    const gotoSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    }

    return (
        <div style={sliderStyles}>
            <div style={leftArrowStyle} onClick={gotoPrevious}>
                <i class="bi bi-caret-left-fill"></i>
            </div>

            <div style={rightArrowStyle} onClick={gotoNext}>
                <i class="bi bi-caret-right-fill"></i>
            </div>

            <div style={slideStyles}></div>
            
            <div style={dotContainerStyles}>
                {slides.map ((slide, slideIndex) => (
                    <div style={dotStyles} key={slideIndex} onClick={()=> gotoSlide(slideIndex)}>
                        <i class="bi bi-circle"></i>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ImageSlider;