import React from 'react';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import './App.css';


class Best extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            anchorEl:null
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    handleClick(e){
        this.setState({
            anchorEl:e.currentTarget
        })
    }

    handleClose(){
        this.setState({
            anchorEl:null
        })
    }

    render(){
        return(
            <div>
                <Button aria-describedby={Boolean(this.state.anchorEl) ? 'simple-popover' : undefined} variant="contained" color="primary" onClick={this.handleClick}>
                    Open Popover
                </Button>
                <Popover
                    id={Boolean(this.state.anchorEl) ? 'simple-popover' : undefined}
                    open={Boolean(this.state.anchorEl)}
                    anchorEl={this.state.anchorEl}
                    onClose={this.handleClose}
                    anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                    }}
                    transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                    }}
                    className="best"
                >
                    <Typography>The content of the Popover.</Typography>
                </Popover>
            </div>
        )
    }
}

export default Best;