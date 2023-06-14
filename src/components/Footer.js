import Github from "../img/guthub.png"
import Linkedin from "../img/LI-In-Bug.png"

const Footer = () => {
  return (
    <div id="foot">
      <h3>diemartinezdev</h3>
      <a href="https://github.com/diemartinezdev" target="_blank">
        <img src={Github} alt="github logo" />
      </a>
      <a href="https://www.linkedin.com/in/diego-martinezpineiro/" target="_blank">
        <img src={Linkedin} alt="linkedin logo" />
      </a>
      <p>Your future best dev</p>
    </div>
  );
};

export default Footer;
