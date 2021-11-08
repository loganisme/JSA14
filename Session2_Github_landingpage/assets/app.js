function validate(){
    let name = document.forms['form']['name'].value;
    let email = document.forms['form']['email'].value;
    let mess = document.forms['form']['message'].value;
    // alert('tên bạn là :' + name + '\n' + 'email bạn là:' + email)
    if(email.includes('@gmail.com')){
        document.writeln('Chào '+name+'<br>')
        document.writeln('Email của bạn là ' + email+'<br>')
        if(mess == ""){
            document.writeln('bạn không muốn nói gì sao?')
        }
        else{document.writeln('Your message : ' + mess)}   
        
}
    else{alert('vui lòng nhập đúng email')}


}
