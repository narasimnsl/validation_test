import React, {Component}from 'react';
import Aux from '../../hoc/aux'

/* Condition Imports*/
import Conditional from '../../hoc/conditional'
/*Components Import*/
import InputComp from '../../components/textInput'
import SelectComp from '../../components/selectInput'
import CheckComp from '../../components/checkInput';


class CreateAccount extends Component{
 /* State to store Input element Valid state and error class*/
    state ={
        form:{
            email:{id:'email', valid:false, erClass:""},
            password:{id:'password', valid:false, erClass:""},
            colour:{id:'colour', valid:false, erClass:""},
            animal:{
                id:'animal', 
                valid:false, 
                erClass:"",
                chStat:[]
            },
            tiger_type:{id:'tiger_type', valid:true, erClass:""},
        },
        showTgType:false,
        formIsValid:false
    }
    /* Function to reset Error*/
    resetErrorInfo = () =>{
         /*Immutable State*/
         const curEstat = {...this.state.form};
         for(let cls in curEstat){
            /*reset the eror class to null */
            curEstat[cls].erClass = "";
         }
         this.setState({formIsValid:false,form:curEstat});
    }
    /* Function to Validate and update .valid property of state element*/
    inputChangedHandler = (event) =>{
        /* reset error class so only when they click submit they see errors*/
        this.resetErrorInfo();

        const curEstat = {...this.state.form};
        let changedVal = event.target.value;
        let chName = event.target.getAttribute('name');
        /* For Email Validation*/
        if(chName ==='email'){
            const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
            curEstat[chName].valid = pattern.test(changedVal) 
        }
         /* For Password Validation*/
        if(chName === 'password' ){
            curEstat[chName].valid = changedVal.length >=8 && changedVal.trim()!=="" ? true:false; 
        }
         /* For Colour Validation*/
        if(chName === 'colour' ){
            curEstat[chName].valid = changedVal !=="" ? true:false; 
        }
         /* For Tiger Type Validation*/
        if(chName === 'tiger_type' ){
            curEstat[chName].valid = changedVal.trim()!=="" ? true:false; 
        }
         /* For Animal Validation*/
        if(chName === 'animal' ){
            let chChecked = event.target.checked;
            let defArray = curEstat[chName].chStat
            if(changedVal === "tiger"){
                this.setState({showTgType:chChecked})
                curEstat["tiger_type"].valid = !chChecked
            }
            if(chChecked){
                if(!defArray.includes(changedVal)) defArray.push(changedVal)
            }else{
                var index = defArray.indexOf(changedVal);
                if (index > -1) defArray.splice(index, 1);
            }
            curEstat[chName].valid = defArray.length >=2;
        }
        
        this.setState({form:curEstat})

        
    }

    checkValidity = () => {
        /*Immutable State*/
        const curEstat = {...this.state.form};
        /* Form Complete Info*/
        let formOverallValidity = true;
       
        /* iterate among elements to get the class based on valid*/
        for(let ele in curEstat){
            formOverallValidity = curEstat[ele].valid && formOverallValidity
            curEstat[ele].erClass = curEstat[ele].valid ? "":"error";
        }
        this.setState({form:curEstat,formIsValid:formOverallValidity});
       
    }
    /*Function to Handle Submit*/
    submitBtnHandler = (e) => {
        e.preventDefault();
        this.checkValidity();
     }

    render(){
        let selOptionsList = ['Choose colour','Blue','Green','Red','Black','Brown'];
        let checkOptionsList = ['Bear','Tiger','Snake','Donkey']
        return(
            
            <Aux>
            <form method='post' action=''>
                <h1>Fill out this awesome form</h1>
                <fieldset>
                    <h3>Your details</h3>
                    <InputComp clName= {this.state.form.email.erClass} id={this.state.form.email.id} type="text" changed={this.inputChangedHandler}>Email</InputComp>
                    <InputComp clName={this.state.form.password.erClass} id={this.state.form.password.id} type="password" changed={this.inputChangedHandler}>Password</InputComp>
                   
                </fieldset>

                <fieldset>
                    <h3>Your animal</h3>
                    <SelectComp clName= {this.state.form.colour.erClass} id={this.state.form.colour.id} selectOptions={selOptionsList} changed={this.inputChangedHandler}/>
                    <CheckComp clName= {this.state.form.animal.erClass} id={this.state.form.animal.id} checkOptions={checkOptionsList} changed={this.inputChangedHandler}/>
                    <Conditional if={this.state.showTgType}>
                        <InputComp clName= {this.state.form.tiger_type.erClass} id={this.state.form.tiger_type.id} type="text" changed={this.inputChangedHandler}>Type of tiger</InputComp>
                    </Conditional>
                   
                   
                </fieldset>
                <fieldset>
                    <div>
                        <button className="submitButton" onClick={this.submitBtnHandler}>Create account</button>
                    </div>
                    <Conditional if={this.state.formIsValid}>
                       <p className="completeInfo">Well Done Your form is complete!!!</p>
                    </Conditional>   
                </fieldset>
            </form>

            </Aux>
            
        )

    }
    
}



  
  export default CreateAccount; 