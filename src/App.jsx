import './App.css';
import Formulario from './components/Formulario';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <div className='centrado p-3'>

        <section> 
          <h1>Bienvenido</h1>
          <h6>Ingresa tus tareas</h6>
        </section>

        <section>
          <Formulario></Formulario>
        </section>

      </div>
    </div>
  );
}

export default App;
