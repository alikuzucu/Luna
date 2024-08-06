import Header from "../../components/Registration/Header.jsx";
import Footer from "../../components/Registration/Footer.jsx";
import {Container} from "../../styles/globalStyles.jsx";
import styled from "styled-components";
import ClockLogo from '../../assets/luna-project-assets/clock.svg';
import Money from '../../assets/luna-project-assets/money.svg';
import {useParams} from "react-router-dom";
import useAutoFetch from "../../hooks/useAutoFetch.js";
import RestaurantHeader from "../../components/RestaurantHeader/RestaurantHeader.jsx";
import ReviewFilterCard from "../../components/ReviewFilterCard/ReviewFilterCard.jsx";

const FilterSection = styled.div`
    form {
        display: flex;
        width: 650px;
        margin-bottom: 25px;
        margin-top: 15px;
    }

    input {
        color: darkblue;
        font-size: 16px;
        width: 510px;
        height: 40px;
        border: 1px solid #ebebeb;
        border-radius: 3px;
        padding: 5px;

    }

    form > div > button {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 20px;
        background-color: #e47d31;
        color: white;
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
        height: 41px;
        width: 120px;
        border-radius: 20px;
        border: none;
        font-size: 16px;
        font-weight: 400;

    }`;

const WriteReview = styled.div`
    display: flex;
    flex-direction: column;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-style: normal;
    background-color: #f5f5f5;
    width: 508px;
    height: 744px;
    padding: 1px;
    font-weight: 300;
    font-size: 20px;
    margin-left: 20px;

    button {
        display: flex;
        justify-content: center;
        align-items: center;
        border: none;
        background-color: #e47d31;
        color: white;
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
        height: 39px;
        width: 200px;
        border-radius: 20px;
        margin-left: 35px;

    }

    hr {
        margin: 13px 0;
    }

    img {
        margin-right: 25px;
    }

    div {
        display: flex;
    }

    div:nth-of-type(3) {
        margin-top: 30px;
    }
`;

const Flex = styled.div`
    display: flex;
    justify-content: center;
    background-color: #f8f8f8;
`;

const OverFlow = styled.div`
    overflow-y: auto;
    height: 100vh;
`;


const Restaurants = () => {
    const {id} = useParams();
    const {
        data: reviews,
        error: reviewsError,
        loading: reviewsLoading
    } = useAutoFetch('GET', `reviews/restaurant/${id}/`, null, id);
    const {
        data: restaurantData,
        error: restaurantError,
        loading: restaurantLoading
    } = useAutoFetch('GET', `restaurant/${id}`, null, id);

    if (reviewsLoading || restaurantLoading) {
        return <div>Loading...</div>;
    }

    if (reviewsError || restaurantError) {
        return <div>Error: {reviewsError?.message || restaurantError?.message}</div>;
    }
    return (
        <Container>
            <Header/>
            <RestaurantHeader
                image={restaurantData.image}
                name={restaurantData.name}
                category={restaurantData.category}
                street={restaurantData.street}
                telephone={restaurantData.telephone}/>
            <Flex>
                <FilterSection>
                    <OverFlow>
                        <form>
                            <input placeholder={"Filter list..."} type={"text"} name={"search"}/>
                            <div>
                                <button type="submit">FILTER</button>
                            </div>
                        </form>
                        {reviews?.map((review) => (
                            review && <ReviewFilterCard key={review.id} reviewprops={review}/>
                        ))}
                    </OverFlow>
                </FilterSection>
                <WriteReview>
                    <div>
                        <img src={ClockLogo} alt="Clock-Logo"/>
                        <p>opening_hours</p>
                    </div>
                    <hr/>
                    <div>
                        <img src={Money} alt="Money"/>
                        <p>Price level: $$$</p>
                    </div>
                    <div>
                        <button>WRITE A REVIEW</button>
                        <button>EDIT DATA</button>
                    </div>
                </WriteReview>
            </Flex>
            <Footer/>
        </Container>
    );
};

export default Restaurants;
