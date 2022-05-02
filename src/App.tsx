import { Layout, Menu, Breadcrumb } from "antd";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Board from "./pages/Board";
import "antd/dist/antd.css";
import "./app.css";
import React from "react";

const { Header, Content, Footer } = Layout;

const App = (): JSX.Element => {

  return (
    <Router>
      <Layout className="layout">
        <Header>
          <Menu theme="dark" mode="horizontal">

            <Menu.Item id="latest-blocks" key="blocks">
              <Link to="/">Mancala</Link>
            </Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: "0 50px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Mancala</Breadcrumb.Item>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
          </Breadcrumb>
          <div className="site-layout-content">
            <Switch>
              <Route exact path="/" component={Board} />
            </Switch>
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>Sithija©2022</Footer>
      </Layout>
    </Router>

  );
};

export default App;
