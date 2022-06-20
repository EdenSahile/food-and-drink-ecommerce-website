
import { Card } from "../Card/Card";

export const CardsList = ({data}) => {




  return (
    <div className="col-sm">
      <div className="row">

        {
        data.map(item=>{
           return <Card key={item.ref} item={item} />;
             

          })
        }
   
      </div>
    </div>
  );
};