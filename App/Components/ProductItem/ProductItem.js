import React, { Component } from 'react';
import {
  Text,
  Image,
  TouchableOpacity
} from 'react-native';
import PropTypes from 'prop-types';

import Style from './ProductItemStyle';

export default class ProductItem extends Component {
  render() {
    const { product } = this.props;

    return (
      <TouchableOpacity style={Style.container} onPress={() => this.props.showDetail(product)}>
        <Image
          style={Style.image}
          source={{uri: product.logo}}
        />
        <Text>Thương hiệu: {product.label}</Text>
        <Text>Mã số sản phẩm: {product.code}</Text>
        <Text>{product.desc}</Text>
      </TouchableOpacity>
    )
  }
}

ProductItem.propTypes = {
  product: PropTypes.object,
  showDetail: PropTypes.func
}