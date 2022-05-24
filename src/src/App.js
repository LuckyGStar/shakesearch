import "./App.css";
import { useState } from "react";

// components
import { SearchForm } from './components/SearchForm/SearchForm';
import { Notification } from './components/Notification/Notification';
import { Table } from './components/Table/Table';

function App() {
  const [message, setMessage] = useState('');
  const [posts, setPosts] = useState('');

  const getPosts = async (query) => {
    try {
      const res = await fetch(`/search?q=${query.trim().toLowerCase()}`);
      const results = await res.json();
      if (res.status === 200) {
        setPosts(results);
        setMessage(`${results.length} results found!`);
      } else {
        setMessage("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="app">
      <SearchForm getPosts={getPosts} />
      <Notification message={message} />
      <Table posts={posts} />
    </div>
  );
}

export default App;
