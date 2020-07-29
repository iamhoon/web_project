import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


class Aa extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            open: false
        }
        this.clickopen = this.clickopen.bind(this);
        this.clickclose = this.clickclose.bind(this);
    }

    clickopen(){
        this.setState({
            open:true
        })
    }

    clickclose(){
        this.setState({
            open:false
        })
    }

    render(){
        return(
            <div>
                <Button variant="outlined" color="primary" onClick={this.clickopen}>
                    Open alert dialog
                </Button>
                <Dialog
                    open={this.state.open}
                    onClose={this.clickclose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">{"Use Google's location service?"}</DialogTitle>
                    <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Let Google help apps determine location. This means sending anonymous location data to
                        Google, even when no apps are running.
                    </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                    <Button onClick={this.clickclose} color="primary">
                        Disagree
                    </Button>
                    <Button onClick={this.clickclose} color="primary" autoFocus>
                        Agree
                    </Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
}

export default Aa;