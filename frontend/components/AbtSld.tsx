import { FaLaptop } from 'react-icons/fa';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';  // Make sure you import the necessary styles

const TimelineComponent = () => {
  return (
    <VerticalTimeline>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        iconStyle={{ background: "#2196F3", color: "#fff" }}
        icon={<FaLaptop />}
      >
        <h3 className="vertical-timeline-element-title" style={{ fontSize: "1.5rem", fontWeight: "bold" }}>Creative Director</h3>
        <h4 className="vertical-timeline-element-subtitle" style={{ fontStyle: "italic" }}>Miami, FL</h4>
        <p>Creative Direction, User Experience, Visual Design, Project Management, Team Leading</p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        iconStyle={{ background: "#2196F3", color: "#fff" }}
        icon={<FaLaptop />}
      >
        <h3 className="vertical-timeline-element-title" style={{ fontSize: "1.5rem", fontWeight: "bold" }}>Art Director</h3>
        <h4 className="vertical-timeline-element-subtitle" style={{ fontStyle: "italic" }}>San Francisco, CA</h4>
        <p>Creative Direction, User Experience, Visual Design, SEO, Online Marketing</p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        iconStyle={{ background: "#2196F3", color: "#fff" }}
        icon={<FaLaptop />}
      >
        <h3 className="vertical-timeline-element-title" style={{ fontSize: "1.5rem", fontWeight: "bold" }}>Web Designer</h3>
        <h4 className="vertical-timeline-element-subtitle" style={{ fontStyle: "italic" }}>Los Angeles, CA</h4>
        <p>User Experience, Visual Design</p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        iconStyle={{ background: "#2196F3", color: "#fff" }}
        icon={<FaLaptop />}
      >
        <h3 className="vertical-timeline-element-title" style={{ fontSize: "1.5rem", fontWeight: "bold" }}>Web Designer</h3>
        <h4 className="vertical-timeline-element-subtitle" style={{ fontStyle: "italic" }}>San Francisco, CA</h4>
        <p>User Experience, Visual Design</p>
      </VerticalTimelineElement>

      {/* Education Section */}
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        iconStyle={{ background: "#E91E63", color: "#fff" }}
        icon={<FaLaptop />}
      >
        <h3 className="vertical-timeline-element-title" style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
          Content Marketing for Web, Mobile and Social Media
        </h3>
        <h4 className="vertical-timeline-element-subtitle" style={{ fontStyle: "italic" }}>Online Course</h4>
        <p>Strategy, Social Media</p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        iconStyle={{ background: "#E91E63", color: "#fff" }}
        icon={<FaLaptop />}
      >
        <h3 className="vertical-timeline-element-title" style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
          Agile Development Scrum Master
        </h3>
        <h4 className="vertical-timeline-element-subtitle" style={{ fontStyle: "italic" }}>Certification</h4>
        <p>Creative Direction, User Experience, Visual Design</p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        iconStyle={{ background: "#E91E63", color: "#fff" }}
        icon={<FaLaptop />}
      >
        <h3 className="vertical-timeline-element-title" style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
          Bachelor of Science in Interactive Digital Media Visual Imaging
        </h3>
        <h4 className="vertical-timeline-element-subtitle" style={{ fontStyle: "italic" }}>Bachelor Degree</h4>
        <p>Creative Direction, Visual Design</p>
      </VerticalTimelineElement>

      {/* End Element */}
      <VerticalTimelineElement
        iconStyle={{ background: "#10CC52", color: "#fff" }}
        icon={<FaLaptop />}
      />
    </VerticalTimeline>
  );
};

export default TimelineComponent;
