import React, { Component } from 'react';
import { Grid, Cell} from 'react-mdl';
import logo from '../img/roy-memoji.jpg' 

class Landing extends Component{
    render(){
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img src={logo} alt={"logo"}
                            alt="avatar"
                            className="avatar-img"
                        />
                        <div className="banner-text">
                            <h1> Developer </h1>
                            <hr/>
                            <p>
                                SQL | Python | Shell |
                            </p>
                            <div className="social-links">
                                {/* LinkedIn */}}
                                <a href="https://www.linkedin.com/in/itsroymorales/" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-linkedin-square"  area-hidden="true" />
                                </a>

                                {/* Github */}}
                                <a href="https://github.com/itsroymorales" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-github-square"  area-hidden="true" />
                                </a>

                                {/* Youtube */}}
                                <a href="https://github.com/itsroymorales" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-youtube-square"  area-hidden="true" />
                                </a>

                            </div>

                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }


}

export default Landing;