import React from "react";

export default function Footer(props) {
    
    return (
        <footer style={style.footer}>
            <img
            style={style.img}
            src={props.url}
            alt="recodePro"
            />
        </footer>
    );
}

const style = {
    footer: {
        position: 'absolute',
        bottom: '0px',
        padding: '20px',
        width: '100%',
        textAlign: 'center',
      },
      
      img: {
        height: '30px'
      }
}