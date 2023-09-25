<script>
    document.getElementById('download-form').addEventListener('submit', function (e) {
        e.preventDefault();

        const videoLink = document.getElementById('videoLink').value;

        // Replace 'YOUR_API_KEY' with your actual API key
        const apiKey = 'AIzaSyAleIGjrxCUS4SdnM1upi5Bgal3f90X36I';
        const apiUrl = `https://www.googleapis.com/youtube/v3/videos?key=${apiKey}&part=snippet&id=${videoLink}`;

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                if (data.items && data.items.length > 0) {
                    const videoId = data.items[0].id;
                    const downloadLink = `https://www.youtube.com/watch?v=${videoId}`;
                    document.getElementById('download-link').innerHTML = `<a href="${downloadLink}" target="_blank">Download Video</a>`;
                    document.getElementById('download-link').style.display = 'block';
                } else {
                    alert('Video not found or API quota exceeded.');
                }
            })
            .catch(error => {
                console.error('Error:', error);
                alert('An error occurred while fetching video data.');
            });
    });
</script>

