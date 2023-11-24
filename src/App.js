import { RecoilRoot } from "recoil";

import Table from "./Components/Table/Table";
import Form from "./Components/Form/Form";

import "./Global/Style.css";

function App() {
  return (
    <RecoilRoot>
      <Form />
      <Table />
    </RecoilRoot>
  );
}

export default App;