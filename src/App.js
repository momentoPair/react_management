import "./App.css";
import { Component } from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from "@mui/material";
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
      <TableContainer
        component={Paper}
        sx={{ minWidth: "1080px", maxHeight: "300px" }}
      >
        <Table aria-label="simple Table">
          <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>이미지</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>생년월일</TableCell>
              <TableCell>성별</TableCell>
              <TableCell>직업</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
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
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
}

export default App;
