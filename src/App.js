import React from "react";
import "./style.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default class App extends React.Component {
  allowDrop = ev => {
    ev.preventDefault();
  };

  drag = ev => {
    ev.dataTransfer.setData("text", ev.target.id);
  };

  drop = ev => {
    ev.preventDefault();
    let data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
  };

  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col
              xs={6}
              md={6}
              lg={6}
              onDrop={() => this.drop(event)}
              onDragOver={() => this.allowDrop(event)}
            >
              <Row>
                <Col xs={12} md={12} lg={12}>
                  <canvas
                    id="shape1"
                    width="200"
                    height="100"
                    draggable="true"
                    onDragStart={() => this.drag(event)}
                  />
                </Col>
              </Row>
              <br />
              <Row>
                <Col xs={12} md={12} lg={12}>
                  <canvas
                    id="shape2"
                    width="100"
                    height="100"
                    draggable="true"
                    onDragStart={() => this.drag(event)}
                  />
                </Col>
              </Row>
            </Col>
            <Col
              xs={6}
              md={6}
              lg={6}
              className="border-box"
              onDrop={() => this.drop(event)}
              onDragOver={() => this.allowDrop(event)}
            />
            
          </Row>
        </Container>
      </div>
    );
  }
}
