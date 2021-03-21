import React, { useState } from 'react';
import Filters from './components/filters/Filters';
import Navbar from './components/navbar/Navbar';
import { Panel } from './components/panel/Panel';
import { ColumnZeroPadding, DivWithShadow, MainDiv } from './Style';
import Text from './components/text/Text';

const App: React.FC = () => {
  const [value, setValue] = useState("");

  const filterByKeyword = (val: string) => {
    setValue(val);
  }

  return (
    <MainDiv>
      <Navbar />

      <div className="mt-5 offset-sm-1">
        <Text text={"Popular Movies"} fontSize={20} weight={"600"} />
      </div>

      <div className="mt-2 mb-5">
        <div style={{ display: "flex", flexDirection: 'row' }}>

          {/* Sidebar */}
          <ColumnZeroPadding className="col-sm-2 offset-sm-1">
            <DivWithShadow>
              <Filters value={value} filterByKeyword={filterByKeyword} />
            </DivWithShadow>
          </ColumnZeroPadding>

          {/* Main panel */}
          <div className="col-sm-8 pl-5" style={{}}>
            <Panel filterKeyword={value} />
          </div>

        </div>
      </div>
    </MainDiv>
  );
}

export default App;
