import "tailwindcss/tailwind.css";
import "react-notifications-component/dist/theme.css";
import "react-vertical-timeline-component/style.min.css";
import "../styles/HeaderStyles.css";
import "../styles/FooterStyles.css";
import "../styles/ContactStyles.css";
import "../styles/SkillCardStyles.css";
import "../styles/MenuStyles.css";
import "../styles/MenuProfile.css";
import "../styles/SkillsStyles.css";
import "../styles/Global.css";
import "../styles/ExperiencesStyles.css";
import "../styles/IndexStyles.css";
import "../styles/AboutStyles.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="font-sans uppercase">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
