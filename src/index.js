import React, { Component } from "react";
import './styles.css';
import Row from "react-bootstrap/lib/Row";
import Col from "react-bootstrap/lib/Col";
import Table from "react-bootstrap/lib/Table";
import Button from "react-bootstrap/lib/Button";

class CompareChart extends Component {
  constructor(props) {
    super(props);

    this.hideProduct = this.hideProduct.bind(this);
    var handleHide = this.hideProduct;
    if (this.props.onHide) {
      handleHide = this.props.onHide
    }
    this.state = {
      productDataList: this.props.data,
      productListTodisplay: this.props.data,
      handleHideProduct: handleHide,
      hideItemOption: false
    };
  }
  render() {
    return (
      <div className="compare-table">
        <Table className="compare-result-table" striped>
          {this.generateHeader(this.state.productListTodisplay)}
          {this.generateBody(this.state.productListTodisplay)}
        </Table>
      </div>
    );
  }

  generateHeader(data) {
    return (
      <thead>
        <tr>
          <th>
            <Row className="product-image-header">
              <Col md={12} sm={6} />
            </Row>
            <Row className="blue-header">
              <Col md={12} sm={6}>
              </Col>
            </Row>
          </th>
          {data.map((product, i) => this.productHeaderDetails(product, i))}
        </tr>
      </thead>
    );
  }
  productHeaderDetails(product, i) {
    return (
      <th key={i} className="btn-table-header">
        <div className="product-image-header">
          <img
            src={product.image}
            alt="product img"
            className="product-image"
            id={product.image}
          //   onClick={e => this.handleSelectProduct(e.target)}
          />
        </div>
        {this.getProductHeaderRow(product.Name, product.id)}
      </th>
    );
  }

  getProductHeaderRow(name, id) {
    return (
      <Row className="product-name-header">
        <Col md={this.props.hideItemOption ? 9 : 12} 
        xs={12} 
        className="product-name-header-item product-name">
          <p>{name}</p>
        </Col>
        {(() => {
          if (this.props.hideItemOption) {
            return (
              <Col md={3} xs={12} className="product-name-header-item remove-porduct-btn"
                onClick={() => { this.state.handleHideProduct(id) }}>
                <p><span className="glyphicon glyphicon-trash" /></p>
              </Col>
            );
          }
        })()}
      </Row>
    );
  }

  generateBody(data) {
    if (data.length <= 0) {
      return "No products to display";
    } else {
      return (
        <tbody>
          {this.props.features.map(feature => this.productComparisonFeature(feature, data))}
        </tbody>
      );
    }
  }

  productComparisonFeature(feature, data) {
    if (data.find(item => item[feature] !== "N/A")) {
      return (
        <tr>
          <td className="feature-header">
            {feature}
          </td>
          {data.map(product => this.getFeatureForProduct(product, feature))}
        </tr>
      );
    }
  }
  getFeatureForProduct(product, feature) {
    return <td className="feature-value">{product[feature]}</td>;
  }



  hideProduct(product_id) {
    console.log("product Id: " + product_id);
    var temp_list = this.state.productListTodisplay;
    temp_list = temp_list.filter(item => item.id !== product_id);
    this.setState({
      productListTodisplay: temp_list
    })
  }

}
export default CompareChart;
