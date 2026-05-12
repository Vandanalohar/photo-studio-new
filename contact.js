function getData(){

   let username =
   document.getElementById("name").value;

   let mobile =
   document.getElementById("mobile").value;

   let message =
   document.getElementById("message").value;

   let files =
   document.getElementById("file-upload").files;

   // Validation

   if(username == "" || mobile == ""){

      alert("Please Fill The Form");

      return;

   }

   // Console Data

   console.log("Name:", username);

   console.log("Mobile:", mobile);

   console.log("Message:", message);

   console.log("Total Files:", files.length);

   for(let i = 0; i < files.length; i++){

      console.log("File Name:", files[i].name);

   }

   // Success Message

   alert("Order Submitted Successfully!");

}
function fileUploaded(){

   let files =
   document.getElementById("file-upload").files;

   let text =
   document.getElementById("upload-text");

   if(files.length > 0){

      text.innerHTML =
      "✔ Files Uploaded Successfully";

   }

}