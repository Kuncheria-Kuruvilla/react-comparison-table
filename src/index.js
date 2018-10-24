import React, { Component } from "react";
import './styles.css';
import Row from "react-bootstrap/lib/Row";
import Col from "react-bootstrap/lib/Col";
import Table from "react-bootstrap/lib/Table";
import Button from "react-bootstrap/lib/Button";

class CompareChart extends Component {
    render() {
        return (
            <div className="compare-table">
                <Table className="compare-result-table" striped>
                  {this.generateHeader(this.props.data)}
                  {this.generateBody(this.props.data)}
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
                    <p className="product-name-header">FEATURES</p>
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
            <Row className="product-image-header">
                <img
                  src={product.image}
                  alt="product img"
                  className="product-image"
                  id={product.image}
                //   onClick={e => this.handleSelectProduct(e.target)}
                />
            </Row>
            {this.getProductHeaderRow(product.Name, product.id)}
          </th>
        );
      }

      getProductHeaderRow(name, id) {
        return (
          <Row className="blue-header">
            <p className="product-name-header">{name}</p>
          </Row>
        );
      }





      generateBody(data) {
        if (data.length <= 0) {
          return "No matching products.";
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
}
export default CompareChart;
