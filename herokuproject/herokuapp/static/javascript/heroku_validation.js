function formvalidation(){
    var status = 1
    email=document.getElementById('emailid')
    pass=document.getElementById('password')

    if(email.value==""){
        document.getElementById('emailid').style.borderColor="red"
        document.getElementById('email_error').innerHTML="Please Enter Email Address"
        document.getElementById('email_error').style.color="red"
        document.getElementById('email_error').style.display="block"
        status=0
    }

    else{
        document.getElementById('emailid').style.borderColor="black"
        document.getElementById('email_error').style.display="none"
        status=1
    }

    if(pass.value==""){
        document.getElementById('password').style.borderColor="red"
        document.getElementById('password_error').innerHTML="Please Enter Password"
        document.getElementById('password_error').style.color="red"
        document.getElementById('password_error').style.display="block"
        status=0
    }

    else{
        document.getElementById('password').style.borderColor="black"
        document.getElementById('password_error').style.display="none"
        status=1
    }

    if(status==0){
        return false
    }
    else if(status==1){
        return true
    }
}

function emailvalid(){
    email=document.getElementById('emailid').value

    if(email.length<8){
        document.getElementById('email_error').innerHTML="** Email Id Must Have @gmail.com"
        document.getElementById('email_error').style.color="red"
    }

    if(email.value=Number){
        document.getElementById('email_error').innerHTML="** Please Enter A Valid Email Id"
    }
}

function passvalid(){
    pass=document.getElementById('password').value

    if(pass.length<=6){
        document.getElementById('password_error').innerHTML="** Password Must Have 8 Characters"
        document.getElementById('password_error').style.color="red"
    }

    if(pass.length>=10){
        document.getElementById('password_error').innerHTML="** Password Must Have 8 Characters"
        document.getElementById('password_error').style.color="red"
    }

    if(pass=="Ja57Drj@2"){
        document.getElementById('password_error').innerHTML="** Your Password Is A Strong Password"
        document.getElementById('password_error').style.color="green"
    }

    if(pass=="@#$%&*"){
        document.getElementById('password_error').innerHTML="** Your Password Is A Strong Password"
        document.getElementById('password_error').style.color="green"  
    }
}