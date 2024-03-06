function getVideosInfo() {
    const url = 'https://soul.ru.xsph.ru/youtube';
    fetch(url)
      .then(response => response.json())
      .then(data => {
        return data
      })
      .catch(error => {
        return {'1': 'нихуя'}
      });
}

async function renderPage() {
    var page = ''
    var data = await getVideosInfo()
    console.log(data)
}
