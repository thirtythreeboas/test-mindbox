import { useState, useEffect } from 'react';
import '../../css/content.scss';
import SearchBar from './searchbar/SearchBar';
import List from './list/List';
import Footer from './footer/Footer';
import { tasks } from "../../data/data";

const Content = () => {

  const [data, setData] = useState([]);
  const [sortedData, setSortedData] = useState([]);

  useEffect(() => {
    setData([...tasks])
  }, [])

  // getting items checked on click
  const changeStatus = e => {
    const id = e.currentTarget.parentNode.id;
    const copiedData = data;
    const index = data.findIndex(elem => elem.task === id);
    copiedData[index].status = !copiedData[index].status;
    setData([...copiedData])
  }

  // handling search bar
  const searchResult = e => {
    const request = e.target.value.toLowerCase();
    const sortedArr = data.filter(elem => elem.task.toLowerCase().includes(request))
    setSortedData([...sortedArr]);
  }

  // handling items display on click
  const handleDisplay = e => {
    const content = e.target.innerText.toLowerCase();
    if (content === 'all') {
      for (let i = 0; i < data.length; i++) {
        let elem = document.getElementById(data[i].task);
        elem.style.display = 'flex';
      }
    }
    if (content === 'active') {
      for (let i = 0; i < data.length; i++) {
        let elem = document.getElementById(data[i].task);
        elem.style.display = data[i].status === false ? 'flex' : 'none';
      }
    }
    if (content === 'complited') {
      for (let i = 0; i < data.length; i++) {
        let elem = document.getElementById(data[i].task);
        elem.style.display = data[i].status === true ? 'flex' : 'none';
      }
    }
    if (content === 'clear complited') {
      const arr = data.filter(e => e.status === false);
      setData([...arr])
    }
  }

  return (
    <div className="content">
      <SearchBar
        searchResult={searchResult}
      />
      <List 
        data={data}
        sortedData={sortedData}
        changeStatus={changeStatus}
      />
      <Footer 
        data={data}
        handleDisplay={handleDisplay}
      />
      
    </div>
  )
}
  
export default Content;