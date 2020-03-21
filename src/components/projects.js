import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, CardMenu, Button, IconButton, CardText } from 'react-mdl';

class Projects extends Component{

    constructor(props){
        super(props);
        this.state = { activeTab: 0};
    }

    toggleCategories() {
        if (this.state.activeTab === 0){
            return (
                <div className="projects-grid">
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color:'#000000', height: '175px', background:'url(https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Python.svg/1200px-Python.svg.png) center / cover'}}>Python</CardTitle>
                    <CardText>Python Project description</CardText>
                    <CardActions border>
                        <Button colored> Github</Button>
                    </CardActions>
                    <CardMenu style={{color: 'FFF'}}>
                        <IconButton name="share"/>
                    </CardMenu>
                </Card>

                {/* Project 2 */}
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >React Project #2</CardTitle>
                    <CardText>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                    </CardText>
                    <CardActions border>
                    <Button colored>GitHub</Button>
                    <Button colored>CodePen</Button>
                    <Button colored>Live Demo</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share" />
                    </CardMenu>
                </Card>

                </div>        
            )
        }
        else if (this.state.activeTab === 1){
            return (
                <div className="projects-grid">
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color:'#000000', height: '175px', background:'url(https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Python.svg/1200px-Python.svg.png) center / cover'}}>Python</CardTitle>
                        <CardText>Python Project description</CardText>
                        <CardActions border>
                            <Button colored> Github</Button>
                        </CardActions>
                        <CardMenu style={{color: 'FFF'}}>
                            <IconButton name="share"/>
                        </CardMenu>
                    </Card>  
                    
                </div>
            )
        
        }
    }
   
    render(){
        return(
            <div>
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId})} ripple>
                    <Tab>React</Tab>
                    <Tab>React</Tab>
                </Tabs>
                
               
                <Grid>
                    <Cell col={12}>
                        <div classname="content">{this.toggleCategories()}</div>
                    </Cell>
                </Grid>
              
            
            </div>

            
        )
    }


}

export default Projects;