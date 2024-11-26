import "./style.css";
import NavBar from "../Landing/NavBar";
import Ad from "../Landing/Ad";
import ExploreCab from "./ExploreCab";

function Index() {
  return (
    <>
      <div>
        <NavBar />
        <div className="wrapper-on-bg-img">
          <div className="bg-image-on-landing">
            <div className="dark-image-background">
              <div className="tag-lines">
                <div className="tag-line-wrapper">
                  <h1 className="tag-line-first-item">
                    ​India's{" "}
                    <span className="tag-line-bold">
                      Leading One-Way Inter-City{" "}
                    </span>{" "}
                    Cab Service Provider
                  </h1>
                  <p>
                    {" "}
                    <p className=" tag-line-bold-1"></p>{" "}
                  </p>
                  <p className="tag-line-bold"></p>
                  <p></p>
                </div>
              </div>
              <ExploreCab />
            </div>
          </div>
          <Ad />
        </div>
      </div>
    </>
  );
}

export default Index;
