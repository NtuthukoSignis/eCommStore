const Validation = (values) => {
    let errors = {};
    if (!values.email){
        errors.email= "Email is required!"
    }
    else if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(values.email)){
        errors.email="Email is Invalid"
    }
    if (!values.password){
        errors.password="Password is Required!"
    }else if (values.password.length < 8){
        errors.password="Password must have atleast 8 characters"
    }
    if (!values.confirmPass){
        errors.confirmPass="Password is Required!"
    }else if (values.confirmPass.length < 8){
        errors.confirmPass="Password must have atleast 8 characters"
    }
    if (values.password !== values.confirmPass){
        errors.confirmPass="Password don't match!"
    }

    return errors;
};

export default Validation;