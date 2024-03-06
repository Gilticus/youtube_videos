function getVideosInfo() {
    const url = 'http://127.0.0.1:8000/youtube';
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