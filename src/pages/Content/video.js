
const Video = {
    showDownloadButton: () => {

        let posts = document.querySelectorAll('[data-urn^="urn:li:activity:"]:not(.video-downloader-parsed)');
        posts.forEach(post => {
            let video = post.getElementsByTagName('video');
            if (video.length) {
                let videoElem = video[0];
                Video.renderDownloadButton(videoElem, post);
            }

        })
    },
    renderDownloadButton: (videoElement, postElement) => {

        let link = videoElement.getAttribute('src');
        if(link)
        {
            let icon = Video.getDownloadIcon(link);
            videoElement.closest('.media-player__player')?.appendChild(icon);
            postElement.classList.add('video-downloader-parsed');
        }
    },
    getDownloadIcon: (link) => {


        let container=document.createElement('div');
        container.classList.add('linkedin-grabber-container');

        const loader = document.createElement("span");
        loader.classList.add('linkedin-grabber-loader-loader');
        loader.classList.add('display-none');

        let button = document.createElement('img');
        button.className = 'linkedin-grabber-extension-linkedin-video-downloader-button';
        button.setAttribute('data-video-link', link);
        button.setAttribute('title','Download this video');
        button.addEventListener('click', Video.download);
        let imagePath=chrome.runtime.getURL('download-icon.png');
        button.src=imagePath;

        container.appendChild(loader);
        container.appendChild(button);
        return container;


    },
    fetchFile(url, target) {
        let container=target.closest('.linkedin-grabber-container');

        target.classList.add('display-none');
        container.querySelector('.linkedin-grabber-loader-loader').classList.remove('display-none');

        fetch(url).then(res => res.blob()).then(file => {
            let tempUrl = URL.createObjectURL(file);
            const aTag = document.createElement("a");
            aTag.href = tempUrl;
            aTag.download = url.replace(/^.*[\\\/]/, '');
            document.body.appendChild(aTag);
            aTag.click();
            URL.revokeObjectURL(tempUrl);
            aTag.remove();
            target.classList.remove('display-none');
            container.querySelector('.linkedin-grabber-loader-loader').classList.add('display-none');
        }).catch(() => {
            alert("Failed to download video");
            target.classList.remove('display-none');
            container.querySelector('.linkedin-grabber-loader-loader').classList.add('display-none');
        });
    },
    download: (e)=>{
        let target=e.target;
        let link=target.getAttribute('data-video-link');

        Video.fetchFile(link, target);
    }
};


export default Video;