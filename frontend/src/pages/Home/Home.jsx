import React from 'react';
import Header from "../../components/Registration/Header.jsx";
import Footer from "../../components/Registration/Footer.jsx";
import { SearchBtn, SearchContainer, FormContainer, BestRated, Grid, OverFlow } from "../../styles/homepage.styles";

const HomePage = () => {
    return (
        <div>
            <Header />
            <SearchContainer>
                <img src="/images/icons/homepage.png" alt="homepage" />
                <FormContainer>
                    <form>
                        <input
                            autoComplete="off"
                            type="text"
                            name="search"
                            placeholder="Search ..."
                        />
                        <SearchBtn>
                            <button type="submit">Search</button>
                        </SearchBtn>
                    </form>
                </FormContainer>
            </SearchContainer>
            <OverFlow>
                <BestRated>
                    <p>BEST RATED RESTAURANTS</p>
                </BestRated>
                <Grid>
                    {/* Aquí podrías agregar componentes de tarjetas de restaurantes si los tienes */}
                </Grid>
                <Footer />
            </OverFlow>
        </div>
    );
}

export default HomePage;
