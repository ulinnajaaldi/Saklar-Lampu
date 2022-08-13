function saklarKeluarga(){
    let toogle_keluarga = document.getElementById("toogle-keluarga");
    let toogle_keluarga_1 = document.getElementById("toogle-keluarga-1");
    let toogle_keluarga_2 = document.getElementById("toogle-keluarga-2");
    let toogle_keluarga_3 = document.getElementById("toogle-keluarga-3");
    let lampu_keluarga_1 = document.getElementById("lampu-keluarga-1");
    let lampu_keluarga_2 = document.getElementById("lampu-keluarga-2");
    let lampu_keluarga_3 = document.getElementById("lampu-keluarga-3");

    if (toogle_keluarga_1.checked){
        lampu_keluarga_1.src="assets/image/on.gif";
    }else{
        lampu_keluarga_1.src="assets/image/off.gif"
    }
    if (toogle_keluarga_2.checked){
        lampu_keluarga_2.src="assets/image/on.gif";
    }else{
        lampu_keluarga_2.src="assets/image/off.gif"
    }
    if (toogle_keluarga_3.checked){
        lampu_keluarga_3.src="assets/image/on.gif";
    }else{
        lampu_keluarga_3.src="assets/image/off.gif"
    }
    if(toogle_keluarga.checked){
        lampu_keluarga_1.src = lampu_keluarga_2.src = lampu_keluarga_3.src = "assets/image/on.gif";
    }
}

function saklarMakan(){
    let toogle_makan = document.getElementById("toogle-makan");
    let toogle_makan_1 = document.getElementById("toogle-makan-1");
    let lampu_makan_1 = document.getElementById("lampu-makan-1");
    
    if (toogle_makan_1.checked){
        lampu_makan_1.src = "assets/image/on.gif"
    }else{
        lampu_makan_1.src = "assets/image/off.gif"
    }
    if (toogle_makan.checked){
        lampu_makan_1.src = "assets/image/on.gif"
    }
}
function saklarTidur(){
    let toogle_tidur = document.getElementById("toogle-tidur");
    let toogle_tidur_1 = document.getElementById("toogle-tidur-1");
    let toogle_tidur_2 = document.getElementById("toogle-tidur-2");
    let lampu_tidur_1 = document.getElementById("lampu-tidur-1");
    let lampu_tidur_2 = document.getElementById("lampu-tidur-2");
    
    if (toogle_tidur_1.checked){
        lampu_tidur_1.src = "assets/image/on.gif"
    }else{
        lampu_tidur_1.src = "assets/image/off.gif"
    }
    if (toogle_tidur_2.checked){
        lampu_tidur_2.src = "assets/image/on.gif"
    }else{
        lampu_tidur_2.src = "assets/image/off.gif"
    }
    if (toogle_tidur.checked){
        lampu_tidur_1.src = lampu_tidur_2.src = "assets/image/on.gif"
    }
}
function saklarTamu(){
    let toogle_tamu = document.getElementById("toogle-tamu");
    let toogle_tamu_1 = document.getElementById("toogle-tamu-1");
    let toogle_tamu_2 = document.getElementById("toogle-tamu-2");
    let toogle_tamu_3 = document.getElementById("toogle-tamu-3");
    let toogle_tamu_4 = document.getElementById("toogle-tamu-4");
    let lampu_tamu_1 = document.getElementById("lampu-tamu-1");
    let lampu_tamu_2 = document.getElementById("lampu-tamu-2");
    let lampu_tamu_3 = document.getElementById("lampu-tamu-3");
    let lampu_tamu_4 = document.getElementById("lampu-tamu-4");
    
    if (toogle_tamu_1.checked){
        lampu_tamu_1.src = "assets/image/on.gif"
    }else{
        lampu_tamu_1.src = "assets/image/off.gif"
    }
    if (toogle_tamu_2.checked){
        lampu_tamu_2.src = "assets/image/on.gif"
    }else{
        lampu_tamu_2.src = "assets/image/off.gif"
    }
    if (toogle_tamu_3.checked){
        lampu_tamu_3.src = "assets/image/on.gif"
    }else{
        lampu_tamu_3.src = "assets/image/off.gif"
    }
    if (toogle_tamu_4.checked){
        lampu_tamu_4.src = "assets/image/on.gif"
    }else{
        lampu_tamu_4.src = "assets/image/off.gif"
    }
    if (toogle_tamu.checked){
        lampu_tamu_1.src = lampu_tamu_2.src = lampu_tamu_3.src =  lampu_tamu_4.src = "assets/image/on.gif"
    }
}