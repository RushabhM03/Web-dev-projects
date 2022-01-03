// get all elements
const search = document.getElementById("search")
const main = document.getElementById("main")
const form = document.getElementById("form")
const srchbtn = document.getElementById("btn")

// set api urls source: themoviedb
const searchurl = 'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="'
const apiurl = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1'
const imagepath = 'https://image.tmdb.org/t/p/w1280'

get(apiurl)

async function get(url) {
    const res = await fetch(url)
    const data = await res.json()
    display(data.results)
    
}

function display(data){
    main.innerHTML = ''

    data.forEach((element) => {
        const { title, poster_path, vote_average, overview } = element
        const movie_element = document.createElement('div')
        movie_element.classList.add('movie')

        movie_element.innerHTML=`
            <img src="${imagepath+ poster_path}" alt="${title}">
            <div class="movie-info">
                <h3>${title}</h3>
                <span class="${getColor(vote_average)}">${vote_average}</span>
            </div>
            <div class="overview">
                <h3>Overview</h3>
                ${overview}
            </div>
        `

        main.appendChild(movie_element)
    
    });

    if(main.innerHTML === ''){
        console.log("jk k")
        main.innerHTML = ''
        const err_msg = document.createElement('div')
        err_msg.classList.add('error')

        err_msg.innerHTML =`
            <h2>Error 404 No Movies found.</h2>
        `
        main.appendChild(err_msg)
    }

}

// function to get the color based on rating
function getColor(rating){
    if(rating>=8){
        return "green"
    }
    else if(rating>=5){
        return "yellow"
    }
    else{
        return "red"
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault()

    // take value entered by user
    const search_item = search.value

    if(search_item.value !== '' && search_item){
        get(searchurl + search_item)
        search_item.values=''
    }
    else{
        window.location.reload()
    }
})

btn.addEventListener('click', (e) => {
    e.preventDefault()

    const search_item = search.value

    if(search_item.value !== '' && search_item){
        get(searchurl + search_item)
        search_item.values=''
    }
    else{
        window.location.reload()
    }
})