import React from "react";
import {BrowserRouter as Router, HashRouter, Route, Switch} from "react-router-dom";
import {createBrowserHistory} from "history";
import {routes} from "./routes";

import Layout from "./layout/Layout";

const history = createBrowserHistory();

const App = () => {
    return (
        <HashRouter history={history}>
            {/* Layout 带自定义头部的布局 */}
            <Layout>
                {/* route 路由 */}
                <Switch>
                    {Object.values(routes).map((route, index) => (
                        //遍历注册路由
                        <Route
                            {...route}
                            key={index}
                            path={
                                typeof route.path === "function" ? route.path() : route.path
                            }
                        >

                        </Route>
                    ))}
                </Switch>
            </Layout>
        </HashRouter>
    );
};
export default App;
