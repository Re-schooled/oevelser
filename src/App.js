import "./App.sass";
import Nav from "./components/Nav";
import Create1 from "./opgaver/Create1/Create1";
import Modify1 from "./opgaver/Modify1/Modify1";
import Modify2 from "./opgaver/Modify2/Modify2";
import Use1 from "./opgaver/Use1/Use1";
import Use2 from "./opgaver/Use2/Use2";
import Use3 from "./opgaver/Use3/Use3";
import Use4 from "./opgaver/Use4/Use4";
import Use5 from "./opgaver/Use5/Use5";

function App() {
      const assignments = [
          "use-1",
          "use-2",
          "use-3",
          "use-4",
          "use-5",
          "modify-1",
          "modify-2",
          "create-1"
      ];

    return (
        <>
            <Nav list={assignments} />
            <main>
                <Use1 />
                <Use2 />
                <Use3 />
                <Use4 />
                <Use5 />
                <Modify1 />
                <Modify2 />
                <Create1 />
            </main>
        </>
    );
}

export default App;
