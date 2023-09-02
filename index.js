function Submit(){
    alert("Are you shore submit press ok")
    let product=document.getElementById("product").value;
    let quantity=document.getElementById("quantity").value;
    let prize=document.getElementById("prize").value;
    let tot=quantity*prize;
    let totalprize=document.getElementById("totalprize").value=tot;
    console.log(totalprize)
    let cgst=document.getElementById("cgst").value;
    let sgst=document.getElementById("sgst").value;
    let rup=tot*cgst/100;
    let cgst1=document.getElementById("cgst1").value=rup;
    let rup1=tot*sgst/100;
    let sgst1=document.getElementById("sgst1").value=rup1;
    let tax=document.getElementById("tax").value=rup+rup1;
    let final=document.getElementById("final").value=(quantity*prize)+rup+rup1;

    }

    function Clear(){
        alert(" clear all press ok and enter value")
        let product=document.getElementById("product").value=[]
        let quantity=document.getElementById("quantity").value=[]
        console.log(quantity)
        let prize=document.getElementById("prize").value=[];
        let tot=quantity*prize;
        let totalprize=document.getElementById("totalprize").value=tot;
        console.log(totalprize)
        let cgst=document.getElementById("cgst").value=[];
        let sgst=document.getElementById("sgst").value=[];
        let rup=tot*cgst/100;
        let cgst1=document.getElementById("cgst1").value=rup;
        let rup1=tot*sgst/100;
        let sgst1=document.getElementById("sgst1").value=rup1;
        let tax=document.getElementById("tax").value=rup+rup1;
        let final=document.getElementById("final").value=(quantity*prize)+rup+rup1;
        
        
        }


    