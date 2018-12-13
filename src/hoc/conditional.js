const conditional = (props) => {
    return(
      !!props.if && props.children
    );
  }
  
export default conditional;