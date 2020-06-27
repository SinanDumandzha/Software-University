function printMovieInfos(input) {
    let movies = [];

    input.forEach(element => {
        let movieData = element.split(' ');

        if (movieData.includes('addMovie')) {
            let addMovieIndex = movieData.indexOf('addMovie');
            let name = movieData.slice(addMovieIndex + 1).join(' ');

            movies.push({
                name: name
            });
        }

        if (movieData.includes('directedBy')) {
            let directedByIndex = movieData.indexOf('directedBy');
            let name = movieData.slice(0, directedByIndex).join(' ');
            let director = movieData.slice(directedByIndex + 1).join(' ');

            movies.forEach(movie => {
                if (movie.name === name) {
                    movie.director = director;
                }
            });
        }

        if (movieData.includes('onDate')) {
            let onDateIndex = movieData.indexOf('onDate');
            let name = movieData.slice(0, onDateIndex).join(' ');
            let date = movieData.slice(onDateIndex + 1).join(' ');

            movies.forEach(movie => {
                if (movie.name === name) {
                    movie.date = date;
                }
            });
        }
    });

    movies.forEach(movie => {
        if (movie.name !== undefined && movie.director !== undefined && movie.date !== undefined) {
            console.log(JSON.stringify(movie));
        }
    });
}

printMovieInfos(
    [
        'addMovie Fast and Furious',
        'addMovie Godfather',
        'Inception directedBy Christopher Nolan',
        'Godfather directedBy Francis Ford Coppola',
        'Godfather onDate 29.07.2018',
        'Fast and Furious onDate 30.07.2018',
        'Batman onDate 01.08.2018',
        'Fast and Furious directedBy Rob Cohen'
    ]
);