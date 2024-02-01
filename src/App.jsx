import { useState, useMemo } from "react";
import bg from "./img/bg.png";
import Orb from "./components/orb/Orb";
import Navigation from "./components/navigation/Navigation";
import Dashboard from "./components/dashboard/Dashboard";
import Income from "./components/income/Income";
import Expenses from "./components/expenses/Expenses";
import GroupExpenses from "./components/group/GroupExpenses";
import { useGlobalContext } from "./context/globalContext";

function App() {
  const [active, setActive] = useState(1);

  const global = useGlobalContext();
  console.log(global);

  const displayData = () => {
    switch (active) {
      case 1:
        return <Dashboard />;
      case 2:
        return <Income />;
      case 3:
        return <Expenses />;
      case 4:
        return <GroupExpenses />;
      default:
        return <Dashboard />;
    }
  };

  const orbMemo = useMemo(() => {
    return <Orb />;
  }, []);

  return (
    <div className="flex" style={{ backgroundImage: `url(${bg})` }}>
      {orbMemo}
      <div className="flex-1 p-8 gap-4 flex">
        <div className="bg-white border-3 border-solid border-white rounded-3xl p-8 shadow-lg">
          <Navigation active={active} setActive={setActive} />
        </div>
        <main className="flex-1 overflow-x-hidden scrollbar-none">
          {displayData()}
        </main>
      </div>
    </div>
  );
}

export default App;
