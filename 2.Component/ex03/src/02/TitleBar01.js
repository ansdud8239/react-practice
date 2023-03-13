import React, {Component} from 'react';

export default class TitelBar01 extends Component {
    constructor(props){
        super(props);
        // this.no vs this.state.no
        this.no=0;
        this.state = {
            no:0
        }
    }
   onClickHandler(){
         // this.no vs this.state.no
        this.no++;
        console.log(`TitleBar01 Clicked:${this.no}`);

        // 직접적으로 변경하지 말것(no값을 변경하는 것이 아니라 state를 새로 만들어서 체인지)
        this.setState({
            no : this.state.no+1
        });
   } 
    render() {
        return (



            
            <div>
                <h1
                    onClick={this.onClickHandler.bind(this)}
                    style={{
                        cursor:'pointer'
                    }}
                >Function Handler</h1>
                {
                    // this.no vs this.state.no
                    
                    `${this.no} vs ${this.state.no}`
                }
            </div>
        )
    }
}