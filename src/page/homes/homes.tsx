import ReactFullpage from "@fullpage/react-fullpage";
import Aside from "../../components/aside/Aside";
import Introduce from "../../components/introduce/Introduce";
import styles from "./homes.module.css"

const FullPage = () => {
  return (
    <div className={styles['container']}>
      <div className={styles['boxer']}>
        <Aside />
        <ReactFullpage
          licenseKey={"gplv3-license"}
          scrollingSpeed={1000}
          style={{ height: "100vh", width: "100%" }}
          render={({ state, fullpageApi }) => {
            return (
              <div style={{ height: "100vh" }} className={ styles['box1'] }>
                <div className="section h100" style={{ height: '100vh' }}>
                  <Introduce />
                </div>
                <div className="section h100" style={{ height: '100vh' }}>
                <p>1111111111111111111111111111111111111111111111111111111111111111111111</p>
                <p>1111111111111111111111111111111111111111111111111111111111111111111111</p>
                  <p>1111111111111111111111111111111111111111111111111111111111111111111111</p>
                  <p>1111111111111111111111111111111111111111111111111111111111111111111111</p>
                  <p>1111111111111111111111111111111111111111111111111111111111111111111111</p>
                  <p>1111111111111111111111111111111111111111111111111111111111111111111111</p>
                  <p>1111111111111111111111111111111111111111111111111111111111111111111111</p>
                  <p>1111111111111111111111111111111111111111111111111111111111111111111111</p>
                  <button onClick={() => fullpageApi.moveSectionUp()}>Move up</button>
                </div>
                <div className="section h100" style={{ height: '100vh' }}>
                  <p>1111111111111111111111111111111111111111111111111111111111111111111111</p>
                  <p>1111111111111111111111111111111111111111111111111111111111111111111111</p>
                  <p>1111111111111111111111111111111111111111111111111111111111111111111111</p>
                  <p>1111111111111111111111111111111111111111111111111111111111111111111111</p>
                  <p>1111111111111111111111111111111111111111111111111111111111111111111111</p>
                  <p>111111111</p>
                </div>
              </div>
            );
          }}
        />
      </div>

    </div>

  );
};

export default FullPage;
