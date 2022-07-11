import './App.css';
import ImageAddForm from './components/ImageAddForm';
import ImageList from './components/ImageList';

function App() {
  return (
    <div>
      <strong><h2>Axios Lab 5</h2></strong>
      <strong>Add post</strong>
      <ImageAddForm/>
      <span className='center' id='posts'><ImageList/></span>
    </div>
  );
}

export default App;
