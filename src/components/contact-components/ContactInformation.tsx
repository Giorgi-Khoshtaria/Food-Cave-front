import styled from "styled-components";
import { defaultTheme } from "../../defaultTheme";
import location from "../../assets/contact/location_icon.svg";
import phone from "../../assets/contact/phone_icon (1).svg";
import email from "../../assets/contact/mail_icon.svg";
import whatch from "../../assets/contact/watch_icon (1).svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXTwitter,
  faSquareFacebook,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

const ContactInformation = () => {
  return (
    <Container>
      <div>
        <Addrees>
          <h1>ADDRESS</h1>
          <AddressInfo>
            <div>
              <img src={location} alt="location" />
              <span>28 Seventh Avenue, Neew York, 10014</span>
            </div>
            <div>
              <img src={phone} alt="phone" />

              <a href="tel:+880 1630 225 015">+880 1630 225 015</a>
            </div>
            <div>
              <img src={email} alt="phone" />

              <a href="mailto:webmaster@example.com">resturents@gmail.com</a>
            </div>
          </AddressInfo>
        </Addrees>
        <WorkingHours>
          <h1>WORKING HOURS</h1>
          <div>
            <img src={whatch} alt="watch" />
            <span>7:30 am to 9:30pm on Weekdays</span>
          </div>
        </WorkingHours>
        <div>
          <h1>FOLLOW US</h1>
          <Icons>
            <a href="https://twitter.com/?lang=en">
              {" "}
              <FontAwesomeIcon icon={faXTwitter} size="xl" />
            </a>
            <a href="https://www.facebook.com/">
              <FontAwesomeIcon icon={faSquareFacebook} size="xl" />
            </a>
            <a href="https://www.instagram.com/">
              <FontAwesomeIcon icon={faInstagram} size="xl" />
            </a>
            <a href="https://www.linkedin.com/feed/">
              <FontAwesomeIcon icon={faLinkedinIn} size="xl" />
            </a>
          </Icons>
        </div>
      </div>
      <IframeDiv>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23642.491047820058!2d42.17797255257476!3d42.207789145495724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x405c540482872587%3A0xb63670b21d6a34b1!2sAbasha!5e0!3m2!1sen!2sge!4v1706288662964!5m2!1sen!2sge"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </IframeDiv>
    </Container>
  );
};

export default ContactInformation;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 30px;
  margin-top: 30px;
  margin-bottom: 100px;
  padding: 0 100px;
  h1 {
    font-size: 35px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    color: ${defaultTheme.colors.red};
  }
  a {
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    cursor: pointer;
    text-decoration: none;
    color: ${defaultTheme.colors.blue};
    &:hover {
      color: ${defaultTheme.colors.red};
    }
  }
  img {
    margin-right: 8px;
  }
  @media (max-width: 1150px) {
    flex-direction: column;
    text-align: center;
  }
  @media (max-width: 950px) {
    text-align: center;
  }
  @media (max-width: 768px) {
    padding: 0 50px;
  }
`;
const Addrees = styled.div`
  margin-bottom: 44px;
`;
const AddressInfo = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 17px;
  margin-top: 11px;
  margin-left: 17px;
  @media (max-width: 1150px) {
    align-items: center;
  }
`;
const WorkingHours = styled.div`
  margin-bottom: 36px;
  div {
    margin-top: 15px;
    margin-left: 17px;
  }
`;
const Icons = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: left;
  gap: 40px;
  margin-top: 16px;

  svg {
    color: ${defaultTheme.colors.red};
  }
  @media (max-width: 1150px) {
    align-items: center;
    justify-content: center;
  }
`;
const IframeDiv = styled.div`
  iframe {
    @media (max-width: 1100px) {
      width: 600px;
    }
    @media (max-width: 650px) {
      width: 500px;
    }
    @media (max-width: 530px) {
      width: 400px;
    }
    @media (max-width: 450px) {
      width: 300px;
    }
  }
`;
