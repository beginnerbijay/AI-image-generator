const form = document.getElementById('form')
const text = document.getElementById('text')
const sizeval = document.getElementById('size')
const image = document.getElementById('image')
const btn = document.getElementById('btn')
const loader = document.querySelector('.loader')

const imageGenerate =async(prompt,size)=>{
    try{
        btn.innerHTML = "Loading..."
        loader.classList.add("show")
        const {data} = await axios.post("/openai/generateimage",JSON.stringify({prompt,size,}))
        if(data === "cant generate"){
            alert("description is against our policy")
        }else{
            image.src = data
            loader.classList.remove("show")
            btn.innerHTML = "Generate"
        }
    }catch(e){
        console.log(e)
    }
}

const handler =(e)=>{
    e.preventDefault()
    const prompt = text.value
    const size = sizeval.value
    image.src = ''
    if(prompt === ''){
        alert('pls input some image description')
    }else if(size === ''){
        alert('pls select size')
    }else{
        imageGenerate(prompt,size)
    }
}

form.addEventListener('submit',handler)