import { Timeline } from "../components/Timeline";
import { experiences } from "../constants";
const Experiences = () => {
  return (
    <section className="c-space section-spacing">
    <div className="w-full" id = "experience">
      <Timeline data={experiences} />
    </div>
    </section>
  );
};

export default Experiences;