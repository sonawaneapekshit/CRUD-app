import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import Posts from './components/posts/Posts';
import SearchFilter from './components/search/SearchFilter';

function App() {
  const [postArray, setPostArray] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filterText, setFilterText] = useState('');
  const fetchData = async () => {
    let response = null;
    try {
      response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      console.log('Axios call triggered 222');
    } catch (error) {
      console.log(error);
    }

    if (response?.status === 200) {
      return response.data;
    } else {
      return [];
    }
  };


  const handleFilterPosts = () => {

  }

  useEffect(() => {
    let isMounted = true; // cancellation flag
    setLoading(true);

    const getData = async () => {
      const data = await fetchData(); // properly await fetchData
      if (isMounted) {
        setPostArray(data); // set state with actual data
        setLoading(false);
      }
    };

    getData(); // invoke the async function
    
    return () => {};
  }, []);
  console.log(filterText);
  return (
    <>
      <main className="bg-amber-100 min-h-screen text-zinc-900">
        <div className="container xl:container-xl mx-auto pt-6 pb-4 py-5">
          <h1 className="font-bold text-6xl mb-8 text-center">
            Hello, Welcome to CRUD App
          </h1>
          <form action="" className='mb-4'>
            <SearchFilter setFilterText={setFilterText} />
          </form>
          <Posts loading={loading} postArray={postArray} filterText={filterText} />
        </div>
      </main>
    </>
  );
}

export default App;
