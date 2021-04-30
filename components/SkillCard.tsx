import Flip from "react-reveal/Flip";

interface SkillProps {
  title: string;
  description: string;
  icon: string;
  porcentage: number;
}

const SkillCard: React.FC<SkillProps> = ({
  title,
  description,
  icon: Icon,
  porcentage,
}) => {
  return (
    <div className="card">
      <div className="top-section">
        <img src={Icon} className="icon" />
        <div className="infos">
          <p className="title-card">{title}</p>
          <p className="description-card">{description}</p>
        </div>
      </div>
      <div className="progress-div">
        <span className="porcentage">{`${porcentage}%`}</span>
        <div className="progress-bar">
          <svg width={`${porcentage}%`} className="level" />
          <svg width={`${100 - porcentage}%`} className="sub-level" />
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
