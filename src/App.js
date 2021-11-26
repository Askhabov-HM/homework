import React from "react";

import {
    Router,
    Route,
    IndexRoute,
    browserHistory
} from "react-router";

import Layout from "./layouts/Layout";
import PageNotFound from "./pages/PageNotFound";
import Main from './pages/Main';

import Comments from './pages/Comments';
import Users from './pages/Users';
import Posts from './pages/Posts';

import Comment from './pages/Comment';
import User from './pages/User';
import Post from './pages/Post';

class App extends React.Component{
    render(){
        return <Router history={browserHistory}>
                <Route path="/" component={Layout} >
                    <IndexRoute component={Main} />
                    <Route path="/comments" component={Comments}>
                        <Route path=":commentId" component={Comment}/>
                    </Route>
                    <Route path="/posts" component={Posts}>
                        <Route path=":postId" component={Post}/>
                    </Route>
                    <Route path="/users" component={Users}>
                        <Route path=":userId" component={User}/>
                    </Route>
                    <Route path="*" component={PageNotFound}/>
                </Route>
            </Router>
    }
}

export default App;