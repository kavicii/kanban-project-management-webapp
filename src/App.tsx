import './App.css';
import {compressJSON, decompressJSON} from './utils/JSONCompress';

function App() {
  const test = { my: 'super', puper: [456, 567 ,134 ,132, 12123 ,12412 ,214], awesome: 'pako' };
  const comp = compressJSON(test)
  const result = decompressJSON(comp)


  return (
    <div className='view-container'>
      <p>compressed: {comp}</p>
      <p>result: {result}</p>

    </div>
  );
}

export default App;