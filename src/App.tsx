import React, { useState } from 'react';
import Filters from './components/Filters/Filters';
import Navbar from './components/Navbar/Navbar';
import { Panel } from './components/Panel/Panel';
import { ColumnZeroPadding, DivWithShadow, MainDiv, Row } from './Style';
import Text from './components/Text/Text';
import { PAGE } from './headings';

const App: React.FC = () => {
  const [value, setValue] = useState("");

  const filterByKeyword = (val: string) => {
    setValue(val);
  }

  return (
    <MainDiv>

      <Navbar />

      <div className="mt-5 offset-sm-1">
        <Text text={PAGE} fontSize={20} weight={"600"} />
      </div>

      <div className="mt-2 mb-5">

        <Row>

          {/* Sidebar */}
          <ColumnZeroPadding className="col-sm-2 offset-sm-1">
            <DivWithShadow>
              <Filters value={value} filterByKeyword={filterByKeyword} />
            </DivWithShadow>
          </ColumnZeroPadding>

          {/* Main panel */}
          <div className="col-sm-8 pl-5">
            <Panel filterKeyword={value} />
          </div>

        </Row>

      </div>

    </MainDiv>
  );
}

export default App;
