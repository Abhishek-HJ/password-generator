function myfunction()
{
     var s='';
     var st='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_-{}[]|';
     const l=15;
     for(var i=0;i<15;i++)
     {
        var a=Math.floor(Math.random()*st.length);
        s+=st[a];
     }
     document.getElementById("password").value=s;

}
function copypassword(){

    const passwordInput = document.getElementById("password");
    passwordInput.select();
    document.execCommand("copy");
}
