import { useState } from "react"
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { IconButton } from "@mui/material";

const ProductCarousel = ({ children: images, }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const goBack = () => {

    }
    const goFront = () => {
        
    }
    return (
        <main className={styles.carouselContainer}>
            <section className={styles.imagesContainer}>
                {images}
            </section>

            <section className={styles.arrowIcons}>
                <div className=" text-fuchsia-700 bg-fuchsia-600/40 hover:bg-fuchsia-600/40 active:bg-fuchsia-600/40 rounded-full w-7 h-7 cursor-pointer flex items-center justify-center"><ChevronLeftIcon  className="text-lg text-black scale-105 font-extrabold opacity-70 hover:opacity-100"/></div>
                <div className=" text-fuchsia-700 bg-fuchsia-600/40 hover:bg-fuchsia-600/40 active:bg-fuchsia-600/40 rounded-full w-7 h-7 cursor-pointer flex items-center justify-center"><ChevronRightIcon className="text-lg text-black scale-105 font-extrabold opacity-70 hover:opacity-100"/></div>
            </section>

            {/* Image Index Indicators */}
            <section className={styles.indicatorsContainer}>
                <div className={styles.indicators}>
                    {images && images.map((_, index) => (
                        <div key={index} className={`transition-all duration-300 linear w-2 h-2 rounded-full bg-fuchsia-600 ${currentImageIndex === index ? 'p-[6px]' : 'bg-opacity-40'}`}  />
                    ))}
                </div>
            </section>
        </main>
    )
}
const styles = {
    carouselContainer: "relative overflow-hidden rounded-xl",
    imagesContainer:"flex",
    arrowIcons: "absolute inset-0 flex items-center justify-between",
    indicatorsContainer: "absolute inset-x-0 bottom-4",
    indicators: "flex items-center justify-center gap-1"
}
export default ProductCarousel