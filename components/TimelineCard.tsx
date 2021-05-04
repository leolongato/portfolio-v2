import Fade from "react-reveal/Fade";

interface CardProps {
  company: string;
  period: string;
  description: string;
  tasks: string[];
}

const TimelineCard: React.FC<CardProps> = ({
  company,
  period,
  description,
  tasks,
}) => {
  return (
    <Fade left>
      <li>
        <article>
          <div className="timeline-container">
            <h3 className="company">{company}</h3>
            <time className="time">
              <svg
                viewBox="0 0 12 12"
                className="w-3 h-3 mr-6 overflow-visible text-gray-300 text-teal-"
              >
                <circle cx="6" cy="6" r="6" className="circle"></circle>
                <path
                  d="M 6 -6 V -30"
                  fill="none"
                  stroke-width="2"
                  stroke="currentColor"
                  className="path"
                ></path>
                <path
                  d="M 6 18 V 500"
                  fill="none"
                  stroke-width="2"
                  stroke="currentColor"
                  className="path"
                ></path>
              </svg>
              {period}
            </time>
            <p className="work-description-container">
              <p className="work-description">{description}</p>
              <div className="tasks-container">
                <p className="task-title">Tarefas:</p>
                <ul>
                  {tasks.map((element, index) => {
                    return (
                      <li key={index} className="task-element">
                        - {element}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </p>
          </div>
        </article>
      </li>
    </Fade>
  );
};

export default TimelineCard;
