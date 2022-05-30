import React from "react";
import { Text } from '@chakra-ui/react';
import { Image,Tag,TagLabel,Box,Stack,Heading } from '@chakra-ui/react'


const Product = ({product}) => {
  // TODO: Remove below const and instead import them from chakra
  // const Text = () => <div />;
  // const Image = () => <div />;
  // const Box = () => <div />;
  // const Stack = () => <div />;
  // const Heading = () => <div />;
  // const Tag = () => <div />;
  // const TagLabel = () => <div />;
  return (
    <Stack data-cy="product">
      <Image data-cy="product-image" src={product.imageSrc} />
      <Text data-cy="product-category">{product.category}</Text>
      <Tag>
        <TagLabel data-cy="product-gender">{product.gender}</TagLabel>
      </Tag>
      <Heading data-cy="product-title">{product.title}</Heading>
      <Box data-cy="product-price">{product.price}</Box>
    </Stack>
  );
};

export default Product;
