import { Component, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular " + VERSION.major;
  locations: Ilocation[] = [
    { name: "New York", type: "city", parent:"USA", children:[{
      name:"John F. Kennedy International Airport", type:"airport",symbol:'JFK'
    },{
      name:"LaGuardia Airport", type:"airport",symbol:'LGA'
    }] }
  ];
}
interface Ilocation {
  name: string;
  type: string;
  parent?: string;
  symbol?: string;
  children?: Ilocation[];
}
