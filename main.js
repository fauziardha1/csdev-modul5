let url         = location.pathname
let filename    = url.substring(url.lastIndexOf('/')+1);


function goToOtherPage(page) {
    location.replace(page)
}

if(sessionStorage.getItem('isLogin') == true){
    goToOtherPage('./home.html')
}

// body.style.color      = '#1abc9c'
// body.style.textAlign  = 'center'

if(filename == 'index.html'){

    //cek login
    console.log('isLogin',sessionStorage.getItem('isLogin'))
    if(sessionStorage.getItem('isLogin') == 'true'){
        goToOtherPage('./home.html')
    }

    let adminEmail      = "admin@gmail.com"
    let adminPassword   = "admin"

    const body = document.querySelector('body')

    // body
    body.style.fontFamily = "Monospace"
    body.style.fontSize   = '1.5em'

console.log(location)

let button = document.querySelector('#login')

button.addEventListener('click',event =>  {
    event.preventDefault()

    let email = document.querySelector('#email') // ambil email dari user
    let pass  = document.querySelector('#pass') // ambil password dari user


    if(email.value == adminEmail && pass.value == adminPassword){
        //
        sessionStorage.setItem('isLogin',true)
        
        swal({
            title   : "Good job!",
            text    : "Login Success",
            icon    : "success",
            button:false
          });
        setTimeout(()=>{
            goToOtherPage('./home.html')
        },2000)
    } else {
        swal({
            title   : "Oow :x",
            text    : "There is something Wrong, Please try again",
            icon    : "error",
            button  : "Try again!",
          });
        // alert("Login gagal/ email / pass salah")
    }
})
}


// untuk home.html
if(filename == 'home.html'){
    const body      = document.querySelector('body')
    const h1        = document.querySelector('h1')
    const h3        = document.querySelector('h3')
    const wrapper   = document.querySelector('.wrapper')
    const input     = document.querySelector('#number')
    const button    = document.querySelector('#button')


    if(sessionStorage.getItem('isLogin') == null){
        goToOtherPage('./index.html')
    }
    
    // body
    body.style.fontFamily = "Monospace"
    body.style.fontSize   = '1.5em'
    body.style.color      = '#1abc9c'
    body.style.textAlign  = 'center'
    
    // h1
    h1.style.fontWeight = 'bolder'
    h1.style.color      = '#e74c3c'
    
    // h3
    h3.style.fontSize       = '1.5em'
    h3.style.textDecoration = 'underline'
    h3.style.color          = '#34495e'
    h3.style.fontWeight     = 'bold'
    
    // input
    input.style.border      = '2px solid blue'
    input.style.minHeight   = '50px'
    input.style.minWidth    = '20%'
    input.style.borderRadius = '10px'
    input.style.fontSize    = '2em'
    input.style.textAlign   = 'center'
    input.style.padding     = '0'
    
    // buttton 
    button.style.minHeight      = '60px';
    button.style.minWidth       = '5%'
    button.style.borderRadius   = '10px'
    button.style.backgroundColor = '#2980b9'
    button.style.color          = 'white'
    button.style.fontWeight     = '100'
    button.style.border         ='2px solid #2980b9'
    button.style.fontSize       = '1.5em'
    
    // wrapper
    wrapper.style.display       = 'grid'
    wrapper.style.gridTemplateColumns = 'auto auto auto auto auto'
    wrapper.style.textAlign     = 'center'
    wrapper.style.justifyContent = 'center'
    wrapper.style.margin        = '3%'
    

    // ketika button di click maka ambil data dari api dan tampilkan
    button.addEventListener('click', event =>{
        event.preventDefault()
        wrapper.innerHTML   ='';
        let banyakAngka     = input.value;
    
        for(let i=1;i<=banyakAngka;i++){
            let item                = document.createElement('div')
            item.innerHTML          = i;
            item.style.fontSize     = '2em'
            item.style.display      = 'inline'
            item.style.color        = 'white'
            item.style.padding      = '25px'
            item.style.margin       = '5px'
            item.style.minWidth     = '100px'
            item.style.fontWeight   = 'bolder'
            item.style.borderRadius = '5px'
        
            var isPrime = true;
            let akar    = Math.floor(Math.sqrt(i))
            for(let test=2;test<=akar ;test++){
                if(i%test == 0 ){
                    isPrime = false
                    break
                }
            }
        
            isPrime = i<2 ? false : isPrime;
            
            if(isPrime){
                item.style.background = '#e74c3c'
            }else if(i%2==0){
                item.style.background = '#f1c40f'
            } else if(i%2 == 1){
                item.style.background = `#2ecc71`
            }
            wrapper.appendChild(item)
    
        }
    
    })
}




// untuk movie.html
if( filename == 'movie.html'){

    if(sessionStorage.getItem('isLogin') == null){
        goToOtherPage('./index.html')
    }

    const body      = document.querySelector('body')
    const h1        = document.querySelector('h1')
    const h3        = document.querySelector('h3')
    const wrapper   = document.querySelector('.wrapper')
    const input     = document.querySelector('#inputTitle')
    const button    = document.querySelector('#button')
    let url         = 'http://www.omdbapi.com/?s='
    let apiKey      = '&apikey=2df18fa6'
    let keyword     = 'human'

    
    // body
    body.style.fontFamily = "Monospace"
    body.style.fontSize   = '1.5em'
    body.style.color      = '#1abc9c'
    body.style.textAlign  = 'center'
    
    // h1
    h1.style.fontWeight = 'bolder'
    h1.style.color      = '#e74c3c'
    
    // h3
    h3.style.fontSize       = '1.5em'
    h3.style.textDecoration = 'underline'
    h3.style.color          = '#34495e'
    h3.style.fontWeight     = 'bold'
    
    // input
    input.style.border      = '2px solid blue'
    input.style.minHeight   = '50px'
    input.style.minWidth    = '20%'
    input.style.borderRadius = '10px'
    input.style.fontSize    = '2em'
    input.style.textAlign   = 'center'
    input.style.padding     = '0'
    
    // buttton 
    button.style.minHeight      = '60px';
    button.style.minWidth       = '5%'
    button.style.borderRadius   = '10px'
    button.style.backgroundColor = '#2980b9'
    button.style.color          = 'white'
    button.style.fontWeight     = '100'
    button.style.border         ='2px solid #2980b9'
    button.style.fontSize       = '1.5em'
    
    // wrapper
    wrapper.style.display       = 'grid'
    wrapper.style.gridTemplateColumns = 'auto auto auto auto auto'
    wrapper.style.textAlign     = 'center'
    wrapper.style.justifyContent = 'center'
    wrapper.style.margin        = '3%'

    var moviesData = ''

    function getMovies() {
        fetch(url+keyword+apiKey)
        .then(Response => Response.json())
        .then(res=>{
            moviesData = res.Search
            console.log(moviesData)
            render(moviesData)
        })
    }
    
    function render(moviesData) {
        wrapper.innerHTML = ''
        for(index in moviesData){
            
            // let item                    = document.createElement('div')
            //     item.innerHTML          = moviesData[index].Title;
            //     item.style.fontSize     = '2em'
            //     item.style.display      = 'inline'
            //     item.style.color        = 'black'
            //     item.style.padding      = '25px'
            //     item.style.margin       = '5px'
            //     item.style.minWidth     = '100px'
            //     item.style.fontWeight   = 'bolder'
            //     item.style.borderRadius = '5px'
            //     item.style.background   = '#e74c3c'

            // card bootstrap
           let item = 
            `<div class="card mx-3 my-3 text-dark shadow p-3 mb-5 bg-white rounded" >
                <img src=${moviesData[index].Poster} class="card-img-top" alt="Poster">
                <div class="small card-body">
                    <h5 class="card-title">${moviesData[index].Title}</h5>
                    <p class="card-text">${moviesData[index].Type}</p>
                    <a href="#" class="btn card-img-bottom btn-primary">${moviesData[index].Year}</a>
                </div>
            </div>`
                wrapper.innerHTML += item;
            
        }
    }

    getMovies()
    

    // ketika button di click , ambil data form json dan tampilkan
    function updatePage(){
        event.preventDefault()
        wrapper.innerHTML   =''
        keyword = input.value

        getMovies()

    }
    input.addEventListener('keyup', event =>{
           updatePage()     
    })

    button.addEventListener('click', event =>{
        updatePage()
    })
}









