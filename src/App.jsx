// import { useState, useMemo } from "react";
// import bg from "./img/bg.png";
// import Orb from "./components/orb/Orb";
// import Navigation from "./components/navigation/Navigation";
// import Dashboard from "./components/dashboard/Dashboard";
// import Income from "./components/income/Income";
// import Expenses from "./components/expenses/Expenses";
// import GroupExpenses from "./components/group/GroupExpenses";
// import { useGlobalContext } from "./context/globalContext";
// // import Groups from "./components/group/Groups";
// import AddExpenseToGroup from "./components/group/AddExpenseToGroup";
// function App() {
//   const [active, setActive] = useState(1);

//   const global = useGlobalContext();
//   console.log(global);

//   const displayData = () => {
//     switch (active) {
//       case 1:
//         return <Dashboard />;
//       case 2:
//         return <Income />;
//       case 3:
//         return <Expenses />;
//       case 4:
//         return <GroupExpenses />;
//       case 5:
//         return <AddExpenseToGroup />;
//       default:
//         return <Dashboard />;
//     }
//   };

//   const orbMemo = useMemo(() => {
//     return <Orb />;
//   }, []);

//   return (
//     <div className="flex" style={{ backgroundImage: `url(${bg})` }}>
//       {orbMemo}
//       <div className="flex-1 p-8 gap-4 flex h-[100vh] bg-slate-800">
//         <div className="bg-white border-3 border-solid border-white rounded-3xl p-8 shadow-lg">
//           <Navigation active={active} setActive={setActive} />
//         </div>
//         <main className="flex-1 overflow-x-hidden scrollbar-none rounded-3xl">
//           {displayData()}
//         </main>
//       </div>
//     </div>
//   );
// }
// export default App;

import { useEffect, useMemo, useState } from "react";
import bg from "./img/bg.png";
import Orb from "./components/orb/Orb";
import Navigation from "./components/navigation/Navigation";
import Dashboard from "./components/dashboard/Dashboard";
import Income from "./components/income/Income";
import Expenses from "./components/expenses/Expenses";
import GroupExpenses from "./components/group/GroupExpenses";
import { useGlobalContext } from "./context/globalContext";
import AddExpenseToGroup from "./components/group/AddExpenseToGroup";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignupPage from "./components/auth/SignupPage";
import LoginPage from "./components/auth/LoginPage";

function App() {
  const global = useGlobalContext();
  console.log(global);

  const orbMemo = useMemo(() => {
    return <Orb />;
  }, []);
  const [selfId, setSelfId] = useState(Number(localStorage.getItem("selfId")));
  useEffect(() => {
    setSelfId(Number(localStorage.getItem("selfId")));
  }, [selfId]);
  return (
    <Router>
      {!selfId ? (
        <Routes>
          <Route path="/" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      ) : (
        <div className="flex" style={{ backgroundImage: `url(${bg})` }}>
          {orbMemo}
          <div className="flex-1 p-8 gap-4 flex h-[100vh] bg-slate-800">
            <div className="bg-white border-3 border-solid border-white rounded-3xl p-8 shadow-lg">
              <Navigation />
            </div>
            <main className="flex-1 overflow-x-hidden scrollbar-none rounded-3xl">
              <Routes>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/incomes" element={<Income />} />
                <Route path="/personal" element={<Expenses />} />
                <Route path="/create-group" element={<GroupExpenses />} />
                <Route
                  path="/open-group/:groupId"
                  element={<AddExpenseToGroup />}
                />
                <Route path="/" element={<Dashboard />} />
              </Routes>
            </main>
          </div>
        </div>
      )}
    </Router>
  );
}

export default App;
