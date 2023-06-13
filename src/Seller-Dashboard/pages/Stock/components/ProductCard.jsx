import ProductCarousel from "../../../../components/ui-components/ProductCarousel";

const ProductCard = ({
    children,
    productTitle,
    productDescription,
    stock,
    productPrice,
    discountPercentage,
    minimumRetailPrice,
    sold,
    productImages,
}) => {
    return (
        <article className={styles.productCard}>
        <ProductCarousel>
            {productImages &&
            productImages.map((image, index) => (
                <img
                key={image._id}
                className="object-contain"
                src={image.secureURL}
                alt={`${productTitle}Image-${index}`}
                />
            ))}
        </ProductCarousel>
        </article>
    );
};
const styles = {
    productCard: "w-[300px] flex flex-col rounded-xl",
};
export default ProductCard;
