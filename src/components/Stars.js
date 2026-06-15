import { IoIosStar, IoIosStarOutline, IoIosStarHalf } from "react-icons/io";
import styled from "styled-components";

const Stars = ({ stars, reviews }) =>{
    console.log("stars: ", stars);
    
    const starIcons = Array.from({length: 5}, (_, i)=>{
        if(i<stars){
            return <IoIosStar className="icon"/>
        }if(i>=stars && i<stars+0.5){
            return <IoIosStarHalf  className="icon" />
        }
        if(i>=stars){
            return <IoIosStarOutline  className="icon" />
        }
    })
    return <>
        <Wrapper>
            <div className="icon-style">
                {starIcons}
                <p>{reviews ? reviews.length : 0} reviews</p>
            </div>
        </Wrapper>
        
    </>
}

const Wrapper = styled.section`
  .icon-style {
    display: flex;
    gap: 0.2rem;
    align-items: center;
    justify-content: flex-start;

    .icon {
      font-size: 2rem;
      color: orange;
    }

    .empty-icon {
      font-size: 2.6rem;
    }
    p {
      margin: 0;
      padding-left: 1.2rem;
    }
  }
`;


export default Stars;