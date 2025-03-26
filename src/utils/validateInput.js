const password_regex=/^(?=.*?[0-9])(?=.*?[A-Za-z]).{8,32}$/;
const email_regex=/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/

export const validateInput=(email,pass)=>{
   let mail_chk=email_regex.test(email);
   let pass_chk=password_regex.test(pass);
   console.log(mail_chk,pass_chk);
   

   if(!mail_chk) return 'Not a valid mail';
   if(!pass_chk) return 'Not a valid password';

   return null


}