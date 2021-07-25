import styles from './Home.module.css'

const Home = () => {
  return (
    <div className="container">
      <div className="row p-5 shadow-sm">
        <div className="col-6 p-3">
          <div className="m-5">
            <p className="lead font-weight-light text-muted"><span className="">I am</span> <b className="">Karangwa Hirwa Julien</b> 👋</p>
            <p className="lead font-weight-light text-muted">
              A <b>Fullstack Software Developer</b> who is self-motivated and 
              everyday learner for life. 
              Interested in software architecture, analysis, development 
              and testing web and mobile applications.
            </p>
            <p className="lead font-weight-light">
              "The best way out is always through." <br />
              --Robert Frost
            </p>
          </div>
        </div>
        <div className={`col-6 d-flex`}>
          <div className="justify-content-center">
            <img src="/_julien_.png" className="rounded-circle shadow-lg z-depth-2 w-100" alt="vercel test" data-holder-rendered="true" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;