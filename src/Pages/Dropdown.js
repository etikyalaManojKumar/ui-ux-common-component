import React, { Component } from 'react';

class Dropdown extends Component {
    state = {}
    render() {
        return (
            <>
               

                
                <div className=' dropdown main_div'>
                    <button class="dropbtn">Dropdown</button>
                    <div class="dropdown-content">
                        <a href="https://www.w3schools.com/html/html_intro.asp">HTML5</a>
                        <a href="https://www.w3schools.com/css/default.asp">CSS3</a>
                        <a href="https://www.w3schools.com/js/default.asp">JavaScript</a>
                        <a href="https://www.w3schools.com/react/default.asp">ReactJS</a>
                    </div>
                </div>
               
            </>
            );
    }
}

export default Dropdown;