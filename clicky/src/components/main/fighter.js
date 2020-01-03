//----- Import -----//
import React, {Component} from 'react';

//----- State Change -----//
export default class Fighter extends Component {
    handleClick = () => {
        this.props.onFighterClick(this.props.index);
    }

 //----- Render -----//
    render(){
        return(
            <div className="fighter">
                <img
                    src={this.props.fighter.img}
                    alt="fighter"
                    className="picture"
                    onClick={this.handleClick} />
            </div>
        )
    }   
}