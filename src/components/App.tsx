import React from 'react';
import Progress from './Progress';

const App = () => {
  return (
    <div className="App">
      <Progress
        number={30}
        width={100}
        height={100}
        isTextShown={true}
        strokeColor={"#000"}>
      </Progress>
    </div>
  );
}

export default App;
