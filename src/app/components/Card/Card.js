export const Card = (props) => {

  return (
    <div className="col-sm-4">
      <div className="card">
        <img
          width="170"
          height="170"
          src={process.env.PUBLIC_URL + `/assets/0/citron.png`}
          alt=""
        />
        <div className="card-body">
          <div className="row">
            <div className="col-sm-6">
              <h4>titre</h4>
            </div>
            <div className="col-sm-6">
              <p>1 €</p>
              <button
                className="btn btn-warning btn-sm"
                data-toggle="modal"
                data-target=""
              >
                view product
              </button> 
            </div>
          </div>
        </div>
      </div>
      {/*<Modal />*/}
    </div>
  );
};
