import logo from './logo.svg';
import './App.css';
import Item from "./Item";
import { useState, useEffect } from 'react';
import axios from "axios";
import ItemMenu from "./components/ItemMenu";

function App() {
  let [products, setProducts] = useState([]);

  useEffect(async () => {
    //const res = await axios.get(`http://localhost:5000/shoes`);
    // console.log(res.data)

    axios.get('http://localhost:5000/shoes')
      .then((response) => {
        console.log(response);
        setProducts(response.data)
      })

    console.log("hi");


  }, [])


  return (

    <div class="grid grid-cols-12 gap-4">
      <div class="border p-4 text-center col-span-3">
        <ItemMenu />
      </div>
      <div class="border p-4 text-center col-span-9">

        <div className="App grid grid-cols-3 gap-4">
          {
            products.map((product) => {
              return (<Item {...product} />)
            })
          }
        </div>

      </div>
    </div>





  );
}

export default App;
