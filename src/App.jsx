import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import Posts from './components/posts/Posts';
import SearchFilter from './components/search/SearchFilter';
import PaginationFilter from './components/paginationsize/PaginationFilter';
import SortFilter from './components/sort/SortFilter';
import Pagination from './components/pagination/Pagination';

function App() {
  const [postArray, setPostArray] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filterText, setFilterText] = useState('');
  const [pageSize, setpageSize] = useState(6);
  const [currentPage, setcurrentPage] = useState(1);
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

  const handleFilterPosts = () => {};

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

  let lastPostIndex = currentPage * pageSize;
  let firstPostIndex = lastPostIndex - pageSize;
  let currentPosts = postArray.slice(firstPostIndex, lastPostIndex);
  let totalPosts = postArray.length;

  return (
    <>
      <main className="bg-amber-100 min-h-screen text-zinc-900">
        <div className="container xl:container-xl mx-auto pt-6 pb-4 py-5">
          <h1 className="font-bold text-6xl mb-8 text-center">
            Hello, Welcome to CRUD App
          </h1>
          <form action="" className="mb-4 flex gap-4">
            <SearchFilter setFilterText={setFilterText} />
            <SortFilter />
            <PaginationFilter setpageSize={setpageSize} classNamesWrapper="ml-auto" />
          </form>
          <Posts
            loading={loading}
            postArray={currentPosts}
            filterText={filterText}
          />
          <Pagination
            totalPosts={totalPosts}
            pageSize={pageSize}
            setcurrentPage={setcurrentPage}
            currentPage={currentPage}
          />
        </div>
      </main>
    </>
  );
}

export default App;
