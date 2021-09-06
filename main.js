const Form = document.getElementById('Form');
const search = document.getElementById('search');
const Url = "https://api.themoviedb.org/3/search/movie/api_key=3423455f987792fb8ee9f09ffdf3483b"
const Getmovies = () => {
    fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=3423455f987792fb8ee9f09ffdf3483b")
        .then(res => res.json())
        .then(data => Display(data.results));
}
Getmovies();

const Display = data => {
    const container = document.getElementById('container');
    const First9 = data.slice(0, 9);
    for (const movies of First9) {
        console.log(movies);
        const div = document.createElement('div');
        div.classList.add('col');
        const Moviesimage = " https://image.tmdb.org/t/p/original" + movies.poster_path;
        div.innerHTML = ` <div class="card shadow">
            <img src="${Moviesimage}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title fw-bold">${movies.title}</h5>
                <p class="card-text">${movies.overview.slice(0,150)}</p>
                <span class="green rounded">${movies.vote_average}</span>
            </div>
        </div>`;

        container.appendChild(div);
    }
}
Form.addEventListener('submit', (e) => {
    e.preventDefault();

    const SearchText = search.value;
    if (SearchText) {
        Getmovies(Url + '&quary=' + SearchText);
    }
})