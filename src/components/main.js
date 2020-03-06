import React from 'react';
import { Switch, Route } from 'react-router-dom';
import About from './about';
import Landing from './landingpage';
import Projects from './projects';
import Resume from './resume'
import Contact from './contact';

const Main =()=> (
        <Switch>
            <Route exact path="/" component={Landing}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/contact" component={Contact}/>
            <Route exact path="/resume" component={Resume}/>
            <Route exact path="/projects" component={Projects}/>
        </Switch>
)

export default Main;