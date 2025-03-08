export const Footer = () => {
  return (
    <>
    <hr className="mt-5 border-2" />
    <footer className="py-2">
      <div className="container text-center">
        <div className="row justify-content-between">
          <div className="col-md-4">
            <div>
            <ul className="list-unstyled d-inline-flex">
              <li className="ms-5">
              <a className="text-secondary-emphasis text-secondary-emphasis text-decoration-none" href="#">
                Home
              </a>
            </li>
            <li className="ms-5">
              <a className="text-secondary-emphasis text-decoration-none" href="#">
              About
              </a>
            </li>
            <li className="ms-5">
              <a className="text-secondary-emphasis text-decoration-none" href="#">
              Projects
              </a>
            </li>
            <li className="ms-5">
              <a className="text-secondary-emphasis text-decoration-none" href="#">
              Articles
              </a>
            </li>
            <li className="ms-5 me-5">
              <a className="text-secondary-emphasis text-decoration-none" href="#">
              Contact
              </a>
            </li>
            </ul>
            </div>
          </div>
          <div className="col-md-4">
            <p className="mb-0">&copy; 2025 Your Company. All Rights Reserved.</p>
          </div>
        </div>
        
      </div>
    </footer>
    </>
  );
};
