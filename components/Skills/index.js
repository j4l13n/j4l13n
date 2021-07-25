const Skills = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col d-inline-flex justify-content-center">
          <h3>Tools / Skills / Programming Languages</h3>
        </div>
      </div>
      <div className="row py-5">
        <div className="col-2 shadow-sm d-flex justify-content-center">
          {/* <a href="#" className="p-2 z-depth-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Tooltip on top"> */}
            <img src="/python-4.svg" alt="Python" className="w-100" data-bs-toggle="tooltip" data-bs-placement="top" title="Python" />
          {/* </a> */}
        </div>
        <div className="col-2 shadow-sm d-flex justify-content-center">
          <img src="/django-community.svg" className="p-2 w-100 z-depth-2" alt="Django" />
        </div>
        <div className="col-2 shadow-sm d-flex justify-content-center">
          <img src="/javascript-1.svg" className="p-2 w-100 z-depth-2" alt="Javascript" />
        </div>
        <div className="col-2 shadow-sm d-flex justify-content-center">
          <img src="/react-2.svg" className="p-2 w-100 z-depth-2" alt="ReactJs" />
        </div>
        <div className="col-2 shadow-sm d-flex justify-content-center">
          <img src="/next-js.svg" className="p-2 w-100 z-depth-2" alt="NextJS" />
        </div>
        <div className="col-2 shadow-sm d-flex justify-content-center">
          <img src="/flutter.svg" className="p-2 w-100 z-depth-2" alt="Flutter" />
        </div>
      </div>
      <div className="row py-2">
        <div className="col-2 shadow-sm d-flex justify-content-center">
          <img src="/trello.svg" className="p-2 w-100 z-depth-2" alt="Trello" />
        </div>
        <div className="col-2 shadow-sm d-flex justify-content-center">
          <img src="/github-icon-1.svg" className="p-2 w-100 z-depth-2" alt="GitHub" />
        </div>
        <div className="col-2 shadow-sm d-flex justify-content-center">
          <img src="/travis-ci.svg" className="p-2 w-100 z-depth-2" alt="TravisCi" />
        </div>
        <div className="col-2 shadow-sm d-flex justify-content-center">
          <img src="/digitalocean-logo.svg" className="p-2 w-100 z-depth-2" alt="DigitalOcean" />
        </div>
        <div className="col-2 shadow-sm d-flex justify-content-center">
          <img src="/nodejs-icon.svg" className="p-2 w-100 z-depth-2" alt="NodeJs" />
        </div>
        <div className="col-2 shadow-sm d-flex justify-content-center">
          <img src="/aws-2.svg" className="p-2 w-100 z-depth-2" alt="AWS" />
        </div>
      </div>
    </div>
  )
};

export default Skills