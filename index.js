const head = document.getElementById('para');
const but = document.getElementById('btn');
const btn_1 = document.getElementById('btn-1');
const a = async () =>{
    try{
        const url = await fetch("https://baconipsum.com/api/?type=all ")
        const data = await url.json();
        but.addEventListener('click',()=>{
            let rand = Math.floor(Math.random() * data.length);
            head.textContent = JSON.stringify(data[rand]);
        })
        btn_1.addEventListener('click',()=>{
            head.textContent = "Hi!";
        });
    
    }
    catch(e){
        console.log(e)
    }
    
}
a()