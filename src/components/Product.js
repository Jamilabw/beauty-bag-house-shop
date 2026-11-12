import { NavLink } from "react-router-dom";
import FormatPrice from "../Helpers/FormatPrice";


const Product = ({ curElem }) => {
    const { _id, brand, image, price, name } = curElem;


    return (
        <NavLink to={`/singleproduct/${_id}`}>
            <div className="card">
                <figure>
                    <img src={image} alt={brand} />
                    {console.log("Image is "+image)};
                    {/* <figcaption className="caption">{category}</figcaption> */}
                </figure>

                <div className="card-data">
                    <div className="card-data-flex">
                        <h3>{name}</h3>
                        <p className="card-data--price">
                            <FormatPrice price={price} />
                        </p>
                    </div>
                </div>
            </div>
        </NavLink>
    )
}

export default Product;