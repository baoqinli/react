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
          
          render={({ fullpageApi }) => {
            return (
              <div style={{ height: "100vh" }} className={ styles['box1'] }>
                <div className="section h100" style={{ height: '100vh' }}>
                  <Introduce />
                </div>
                <div className="section h100" style={{ height: '100vh' }}>
                  <button onClick={() => fullpageApi.moveSectionUp()}>Move up</button>
                </div>
                <div className="section h100" style={{ height: '100vh' }}>
                  <div>这里是个人作品</div>
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
