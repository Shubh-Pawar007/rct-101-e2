import React, { useEffect, useState } from "react";
import axios from 'axios'
import AddProduct from "./AddProduct";
import Pagination from "./Pagination";
import Product from "./Product";
import { Grid, GridItem } from '@chakra-ui/react';
import { Flex, Spacer } from '@chakra-ui/react'

const Products = () => {
  // TODO: Remove below const and instead import them from chakra
  // const Flex = () => <div />;
  // const Grid = () => <div />;
  const [bag,setBag]=useState([])
  

  useEffect(()=>{
    getData()
  },[])

  const getData=async()=>{
    let res= await axios.get("http://localhost:8080/products");
    let data=res.data;
    
    
    console.log(data);
    setBag(data);
}
  return (
    <Flex>
      <AddProduct/>
      <Grid>{/* List of Products */}
        {bag.map((e)=>{
          <Product key={e.id} product={e}/>
        })}
      </Grid>
      {/* Pagination */}
      <Pagination />
    </Flex>
  );
};

export default Products;
