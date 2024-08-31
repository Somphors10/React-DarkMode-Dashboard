import { useState } from "react"
import Header from "./components/Header/Header"
import Sidebar from "./components/Sidebar/Sidebar";
import Content from "./ul/Content";
import Main from "./ul/Main";
import Profile from "./profile/Profile";
import Stats from "./components/Stats/Stats";
import Team from "./components/Team/Team";
import Event from "./components/Event/Event";


const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isSidbarOpen, setIsSidbarOpen] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleSidebar = () => {
    setIsSidbarOpen(!isSidbarOpen); 
  };

  return (
    <div className={`${darkMode && "dark"} font-quicksand`}>
      <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} 
      toggleSidebar={toggleSidebar}/>
      <Sidebar   isSidbarOpen={isSidbarOpen}/>

      <Main>
        <Content>
          <Stats darkMode={darkMode} />
          <div className="flex flex-col gap-3 lg:flex-row">
            <Team/>
            <Event/>
          </div>
        </Content>
        <Profile/>
      </Main>
    </div>
  )
}

export default App
