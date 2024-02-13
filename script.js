function openImage() {
    const imageSrc = 'path_to_your_image.jpg'; // Replace 'path_to_your_image.jpg' with the actual path to your image
    const imageContainer = document.createElement('div');
    imageContainer.classList.add('image-container');
    
    const image = document.createElement('img');
    image.src = imageSrc;
    imageContainer.appendChild(image);
    
    const closeButton = document.createElement('button');
    closeButton.innerText = 'Close';
    closeButton.classList.add('close-button');
    closeButton.addEventListener('click', () => {
        document.body.removeChild(imageContainer);
    });
    imageContainer.appendChild(closeButton);
    
    document.body.appendChild(imageContainer);
}
