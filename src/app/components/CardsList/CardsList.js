
import { Card } from "../Card/Card";

export const CardsList = ({data}) => {

  const fruits=data[0]
  console.log(fruits)

  return (
    <div className="col-sm">
      <div className="row">

        {
         fruits.map(fruit=>{
           return <Card fruit={fruit} />;
             

          })
        }
   
      </div>
    </div>
  );
};