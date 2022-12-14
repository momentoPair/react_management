import "./App.css";
import { Component } from "react";
import Customer from "./components/Customer";

const customers = [
  {
    id: 1,
    image: "https://placeimg.com/64/64/any",
    name: "자자자",
    birthday: "11111",
    gender: "남",
    job: "job1",
  },
  {
    id: 2,
    image: "https://placeimg.com/64/64/5",
    name: "자자자",
    birthday: "22222",
    gender: "남",
    job: "job2",
  },
  {
    id: 3,
    image: "https://placeimg.com/64/64/8",
    name: "자자자",
    birthday: "3333",
    gender: "남",
    job: "job3",
  },
];

class App extends Component {
  render() {
    return (
      <div>
        {customers.map((c) => {
          return (
            <Customer
              key={c.id}
              id={c.id}
              image={c.image}
              name={c.name}
              birthday={c.birthday}
              gender={c.gender}
              job={c.job}
            />
          );
        })}
      </div>
    );
  }
}

export default App;
