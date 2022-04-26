import './App.css';
import FiresbaseAuthHookProvider from './firebase/FirebaseAuthHook';
import FirebaseDataHookProvider from './firebase/FirebaseDataHook';
import Routing from './routes/Routing';

function App() {
  return (
    <div className="App">
    <FiresbaseAuthHookProvider>
      <FirebaseDataHookProvider>       
        <Routing/>
      </FirebaseDataHookProvider>
      </FiresbaseAuthHookProvider>
    </div>
  );
}

export default App;
