import ReactFullpage from "@fullpage/react-fullpage";
const FullPage = () => {
  return (
    <ReactFullpage
      licenseKey={"gplv3-license"}
      scrollingSpeed={1000}
      style={{ height: "100vh", width: "100%" }}
      render={({ state, fullpageApi }) => {
        return (
          <div style={{ height:"100vh" }}>
            <div className="section h100" style={{ height:'100vh' }}>
              <p><h1>我是王雅政</h1></p>
              <button onClick={() => fullpageApi.moveSectionDown()}>
                
              </button>
            </div>
            <div className="section h100" style={{ height:'100vh' }}>
              <p>我是刘雅楠</p>
              <button onClick={() => fullpageApi.moveSectionUp()}>Move up</button>
            </div>
            <div className="section h100" style={{ height:'100vh' }}>
              <p>我是朱元璋</p>
            </div>
          </div>
        );
      }}
    />
  );
};

export default FullPage;
