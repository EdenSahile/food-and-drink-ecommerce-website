
import { Card } from "../Card/Card";

export const CardsList = ({data,category}) => {

  const grocery=data[category]


  return (
    <div className="col-sm">
      <div className="row">

        {
         grocery.map(fruit=>{
           return <Card key={fruit.ref} fruit={fruit} />;
             

          })
        }
   
      </div>
    </div>
  );
};