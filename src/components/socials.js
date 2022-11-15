import { Opensea } from "../assets/icon";
import mbtoken from "../assets/mbtoken.svg";
import metamask from "../assets/metamask.svg";

const Socials = () => {
  return (
    <div className="socials">
      <img src={mbtoken} alt="socials" />
      <img src={metamask} alt="socials" />
      <Opensea/>
    </div>
  );
};

export default Socials;
