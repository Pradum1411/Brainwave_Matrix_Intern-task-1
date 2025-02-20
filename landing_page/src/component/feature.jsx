
import style from "./css/feature.module.css";

export const Feature = () => {
  return (
    <>
    <hr />
      <div className={`${style.feature_div}`} id="feature">
        <div className={`${style.feature_name}`}>FEATURE</div>
        <div className={`${style.feature_easy}`}>
          <span className={`${style.feature_span}`}>Easy Build</span> Your Code
        </div>
        <div className={`${style.feature_grid}`}>
          <div className={`${style.feature_div2}`}>
            <h3 className={`${style.feature_span}`}>Drag-and-Drop Interface</h3>
            <p className={`${style.feature_p}`}>
              A drag-and-drop interface features smooth element movement,
              real-time feedback, customizable drag zones, drop targets, event
              handling, animations, and accessibility support.
            </p>
          </div>
          <div className={`${style.feature_div2}`}>
            <h3 className={`${style.feature_span}`}>Multi-Platform Compatibility</h3>
            <p className={`${style.feature_p}`}>
              Multi-platform compatibility ensures seamless functionality across
              devices, including desktops, tablets, and mobiles, with responsive
              design, cross-browser support, and adaptive performance.{" "}
            </p>
          </div>
          <div className={`${style.feature_div2}`}>
            <h3 className={`${style.feature_span}`}>Built-in Templates</h3>
            <p className={`${style.feature_p}`}>
              **Built-in templates** provide pre-designed layouts, reusable
              components, customizable styles, and ready-to-use structures,
              enhancing efficiency, consistency, and user experience. 🚀
            </p>
          </div>
          <div className={`${style.feature_div2}`}>
            <h3 className={`${style.feature_span}`}>Real-Time Preview</h3>
            <p className={`${style.feature_p}`}>
              Real-time preview allows users to instantly see changes as
              they edit, enhancing interactivity, accuracy, and efficiency in
              design and development workflows.
            </p>
          </div>
          <div className={`${style.feature_div2}`}>
            <h3 className={`${style.feature_span}`}>Collaboration Tools</h3>
            <p className={`${style.feature_p}`}>
              **Collaboration tools** feature real-time editing, multi-user
              access, live chat, version history, role-based permissions,
              comments, and seamless file sharing.
            </p>
          </div>
          <div className={`${style.feature_div2}`}>
            <h3 className={`${style.feature_span}`}>Analytics Dashboard</h3>
            <p className={`${style.feature_p}`}>
              Analytics dashboard features real-time data visualization,
              interactive charts, user insights, performance metrics,
              customizable reports, filters, and trend analysis for informed
              decision-making.
            </p>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};
