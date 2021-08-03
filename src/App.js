import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Post from './components/Post';
import './App.css';
import jpg1 from './components/jpg1.png'
import orderIcon from './components/orderIcon.png'
import Pagination from './components/Pagination';
import {Container,Row,Col} from "reactstrap";

const App = () => {
  const [posts, setPosts]=useState([]);
  const [currentPage, setCurrentPage]=useState(1);
  const [postPerPage, setPostPerPage]=useState(5);
  const [search, setSearch]= useState("");
  const [visible, setVisible]=useState(3);
  const [selectOrder, setSelectOrder]=useState("");

    const showMoreItems=()=>{
        setVisible((prevValue)=>prevValue+3);
    }

  const handleChange= event=> setSearch(event.target.value);

  useEffect(() => {
    const fetchData = async () => {
    
      const {data} = await axios.get("mockData.json")
      .catch((err) => {
        console.log(err);
      });
      const items = data.data;
      setPosts(items);
     
    };
    fetchData();
  }, [search]);

  //Get current posts
  const indexOfLastPost=currentPage*postPerPage;
  const indexOfFirtPost=indexOfLastPost-postPerPage;
  const currentPosts=posts.slice(indexOfFirtPost, indexOfLastPost);

  //Change page
  const paginate=(pageNumber)=> setCurrentPage(pageNumber);

  //Select Change
  const selectChange = (e) =>{
    const selected= e.target.value;
    setSelectOrder(selected);
  }

  return (
    <div className="App container mt-5">
      {visible===3 
      ? (<div>
          <Row>
          <Col xs="12">
            <img className="logo" src={jpg1} alt=""/>
          </Col>
        </Row>

        <Row className="boxBtn">
          <Col xs="8" >
            <input className="searchBox" type="text" placeholder="Search anything" value={search} onChange={handleChange} />
          </Col>
          <Col xs="2">
            <button onClick={selectChange} className="btnSearch">Search</button>
          </Col>
        </Row>
        <Post 
        posts={currentPosts} 
        search={search}
        visible={visible}
        border={1}
        />
         
         {visible==3 
         ? (<div>
              <button className="more" onClick={showMoreItems}>Show more...</button>
            </div>
           )
         : <Pagination 
            postPerPage={postPerPage} 
            totalPosts={posts.length} 
            paginate={paginate}
           /> 
         }
      </div>) 
      : (<div>
        <Row>
          <Col xs="2">
            <img className="logo2" src={jpg1} alt=""/>
          </Col>
          <Col className="leftMove"  xs="6" >
            <input className="searchBox" type="text" placeholder="Search anything" value={search} onChange={handleChange} />
          </Col>
          <Col xs="2">
            <button className="btnSearch">Search</button>
          </Col>
       </Row>
       <Row>
         <Col>
         <select 
         className="orderTitle"
         onChange={selectChange} >
           <option selected disabled>Order By</option>
           <option value="Name ascending">Name asc</option>
           <option value="Name descending">Name desc</option>
         </select>
         </Col>
       </Row>
      <Post 
      posts={currentPosts} 
      search={search}
      visible={visible}
      border={0}
      selectOrder={selectOrder}  
      />
       
       {visible==3 
       ? (<div>
            <button className="more" onClick={showMoreItems}>Show more...</button>
          </div>
         )
       : <Pagination 
          postPerPage={postPerPage} 
          totalPosts={posts.length} 
          paginate={paginate}
         /> 
       }
    </div>)
      }
    </div>
  )
}

export default App
