export const Card = ({fruit}) => {

  return (
    <div className="col-sm-4">
      <div className="card">
        <img
          width="170"
          height="170"
          src={process.env.PUBLIC_URL + `/assets/${fruit.category}/${fruit.image}`}
          alt={fruit.name}
        />
        <div className="card-body">
          <div className="row">
            <div className="col-sm-6">
              <h4>{fruit.name}</h4>
            </div>
            <div className="col-sm-6">
              <p>{fruit.price} €</p>
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
