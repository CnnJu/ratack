const galleryContainer = document.getElementById('galleryContainer');
const modal = document.getElementById('modal');
const modalContent = document.getElementById('modalContent');

// Replace these paths with your actual image paths
const images = [
    // Add more images as needed
    { path: 'images/2024/ifoundyou.jpeg', year: 2024, caption:'I Found You, 2024' },
    { path: 'images/2024/ifoundyou.jpeg', year: 2024, caption:'I Found You, 2024' },
    { path: 'images/2023/youareinmyworldnow.jpeg', year: 2023, caption:'You Are in My World Now, 2023' },
	{ path: 'images/2023/whenwelookedateachotheronmossygrounds.jpeg', year: 2023, caption:'When We Looked at Each Other on Mossy Grounds, 2023' },
	{ path: 'images/2023/seeingyou.jpeg', year: 2023, caption:'Seeing You, 2023' },
	{ path: 'images/2023/lastdance.jpeg', year: 2023, caption:'Last Dance, 2023' },
	{ path: 'images/2023/allthesunsatonceforyou.jpeg', year: 2023, caption:'All the Sun at Once for You, 2023' },
	{ path: 'images/2022/youtoldmeitwouldneverbethesame.jpeg', year: 2022, caption:'You Told Me It Would Never Be the Same, 2022' },
	{ path: 'images/2022/yousoothemymemory.jpeg', year: 2022, caption:'You Soothe My Memory, 2022' },
	{ path: 'images/2022/yousaidiwasawarrior.jpeg', year: 2022, caption:'You Said I Was a Warrior, 2022' },
	{ path: 'images/2022/whenwecameback.jpeg', year: 2022, caption:'When We Came Back, 2022' },
	{ path: 'images/2022/inthegardenyouheldme.jpeg', year: 2022, caption:'In the Garden You Held Me, 2022' },
	{ path: 'images/2022/asifyouwerehiding.jpeg', year: 2022, caption:'As If You Were Hiding, 2022' },
	{ path: 'images/2022/arewestilllovers.jpeg', year: 2022, caption:'Are We Still Lovers?, 2022' },
	{ path: 'images/2021/whenisawyouagain.jpeg', year: 2021, caption:'When I Saw You Again, 2021' },
	{ path: 'images/2021/wefeltthesame.jpeg', year: 2021, caption:'We Felt the Same, 2021' },
	{ path: 'images/2021/wearehere.jpeg', year: 2021, caption:'We Are Here, 2021' },
	{ path: 'images/2021/Iamrunningintoyou.jpeg', year: 2021, caption:'I Am Running Into You, 2021' },
	{ path: 'images/2020/Tothewonderisavedyou.jpeg', year: 2020, caption:'To the Wonder I Saved You, 2020' },
	{ path: 'images/2020/Ilostherbathinginflowers.jpeg', year: 2020, caption:'I Lost Her (Bathing Flowers), 2020' },
	{ path: 'images/2020/Iknowwhoyouarenow.jpeg', year: 2020, caption:'I Know Who You Are Now, 2020' },
	{ path: 'images/2020/amberandashes.jpeg', year: 2020, caption:'Amber and Ashes, 2020' },
	{ path: 'images/2020/Allwehadwasthis.jpeg', year: 2020, caption:'All We Had Was This, 2020' },
	{ path: 'images/2019/womenareflowers3.jpg', year: 2019, caption:'Women Are Flowers 3, 2019'},
	{ path: 'images/2019/womanandbuckethamam.jpg', year: 2019, caption:'Women and Bucket Hamam, 2019' },
	{ path: 'images/2019/ouroborusinthefield1.jpg', year: 2019, caption:'Our Oborus in the Field, 2019' },
	{ path: 'images/2019/kust10.jpg', year: 2019, caption:'Kust 10, 2019' },
	{ path: 'images/2019/kust8.jpg', year: 2019, caption:'Kust 8, 2019' },
	{ path: 'images/2019/kust5.jpg', year: 2019, caption:'Kust 5, 2019' },
	{ path: 'images/2019/fields15.jpg', year: 2019, caption:'Fields 15, 2019' },
	{ path: 'images/2019/fields10.jpg', year: 2019, caption:'Fields 10, 2019' },
	{ path: 'images/2019/drinkingteaandlongingforsunset.jpg', year: 2019, caption:'Drinking Tea and Longing for Sunset, 2019' },
	{ path: 'images/2019/blackflowers.jpg', year: 2019, caption:'Black Flowers, 2019' },
];

let currentImageIndex = 0;

images.forEach((image, index) => {
    const galleryItem = document.createElement('div');
    galleryItem.className = 'gallery-item';
    galleryItem.style.backgroundImage = `url(${image.path})`;

    // Add data-year attribute to the first item of each year
    if (index === 0 || (images[index - 1] && images[index - 1].year !== image.year)) {
        galleryItem.setAttribute('data-year', image.year);
    }

    galleryItem.addEventListener('click', () => {
        openModal(image.path, image.year, index);
    });

    galleryContainer.appendChild(galleryItem);
});

function openModal(imagePath, year, index) {
    currentImageIndex = index;

    const image = images[currentImageIndex];
    const caption = getImageCaption(image.caption);
    modalContent.innerHTML = `
        <img src="${imagePath}" alt="Painting for ${year}">
        <div class="caption">${caption}</div>`;
    modal.style.display = 'block';
}
function getImageCaption(caption) {
    return `${caption}`;
}
function closeModal() {
    modal.style.display = 'none';
}
window.onclick = function (event) {
    if (event.target === modal) {
        closeModal();
    }
};

function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    updateModalContent();
}

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    updateModalContent();
}

function updateModalContent() {
    const image = images[currentImageIndex];
    const caption = getImageCaption(image.caption);
    modalContent.innerHTML = `
        <img src="${image.path}" alt="Painting for ${image.year}">
        <div class="caption">${caption}</div>`;
}
document.addEventListener('keydown', function (event) {
    if (event.key === 'ArrowLeft') {
        prevImage();
    } else if (event.key === 'ArrowRight') {
        nextImage();
    }
});