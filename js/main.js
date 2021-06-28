const btn = document.getElementById('clicks');

function colorChange(){
    const nums = [
        1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'
    ]

    let plus = "#";

    for(let f=0; f<6; f++){
        let random = Math.floor(Math.random() * nums.length);

        plus += nums[random];

        document.getElementById("outline").style.backgroundColor = plus;
        document.getElementById("text").innerText = plus;
        
    }
}



if(btn){
    btn.addEventListener('click',colorChange);
}