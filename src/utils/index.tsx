enum MONTHS {
    Jan,
    Feb,
    Mar,
    Apr,
    May,
    Jun,
    Jul,
    Aug,
    Sep,
    Oct,
    Nov,
    Dec
}

export const parseDate = (releaseDate: string) => {
    const [year, month, date] = releaseDate.split("-");
    const monthInt = parseInt(month);
    let newDate = `${MONTHS[monthInt - 1]} ${date}, ${year}`;

    return newDate;
}

export const toPercentage = (number: number): number => {
    return (number * 10);
}

export const parseMovie = (movie: any) => {
    return {
        id: movie['id'],
        imagePath: movie['poster_path'],
        title: movie['title'],
        releaseDate: movie['release_date'],
        vote: movie['vote_average']
    };
}