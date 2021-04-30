import { FaClipboard } from "react-icons/fa";
import { MdArrowForward } from "react-icons/md";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { store, ReactNotificationOptions } from "react-notifications-component";
import SwitchTheme from "../components/SwitchTheme";
import Fade from "react-reveal/Fade";

const notification: ReactNotificationOptions = {
  title: "",
  message: "E-mail copiado com sucesso!",
  type: "success",
  insert: "bottom",
  container: "bottom-center",
  animationIn: ["animate__animated animate__fadeIn"], // `animate.css v4` classes
  animationOut: ["animate__animated animate__fadeOut"], // `animate.css v4` classes,
  dismiss: {
    duration: 1000,
    onScreen: false,
  },
};

const Contact: React.FC = () => {
  return (
    <Fade left>
      <div className="contact">
        <p className="title">Entre em contato:</p>
        <CopyToClipboard text="leonardolongato@gmail.com">
          <div className="clip-switch">
            <div
              className="clipboard-content"
              onClick={() => store.addNotification(notification)}
            >
              <div className="contact-content">
                <img src="/gmail.svg" className="gmail_icon" />
                <p className="email-address">leonardolongato@gmail.com</p>
              </div>
              <FaClipboard fill="#374151" size={18} />
            </div>
            <div className="switch-div">
              <p className="title-theme">
                Altere o tema&nbsp;
                <MdArrowForward />
                &nbsp;
              </p>
              <SwitchTheme />
            </div>
          </div>
        </CopyToClipboard>
      </div>
    </Fade>
  );
};

export default Contact;
