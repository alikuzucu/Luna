import {
    AnchorTagStyle,
    CopyrightDiv,
    FooterDiv,
    SocialMediaDiv,
    UnListDiv,
    UpFooterDiv
} from "../../styles/globalStyles.jsx";

export default function Footer() {
    return (
        <FooterDiv>
            <UpFooterDiv>
                <UnListDiv>
                    <li><AnchorTagStyle href="#">About us</AnchorTagStyle></li>
                    <li><AnchorTagStyle href="#">Press</AnchorTagStyle></li>
                    <li><AnchorTagStyle href="#">Blog</AnchorTagStyle></li>
                    <li><AnchorTagStyle href="#">iOS</AnchorTagStyle></li>
                    <li><AnchorTagStyle href="#">Android</AnchorTagStyle></li>
                </UnListDiv>
                <SocialMediaDiv>
                    <img src={"src/assets/luna-project-assets/facebook.svg"}/>
                    <img src={"src/assets/luna-project-assets/twitter.svg"}/>
                    <img src={"src/assets/luna-project-assets/googleplus.svg"}/>
                    <img src={"src/assets/luna-project-assets/instagram.svg"}/>
                </SocialMediaDiv>
            </UpFooterDiv>
            <CopyrightDiv>
                <p>&copy; Copyright Luna 2018</p>
            </CopyrightDiv>
        </FooterDiv>


    )
}