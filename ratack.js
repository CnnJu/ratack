const galleryContainer = document.getElementById('galleryContainer');
const modal = document.getElementById('modal');
const modalContent = document.getElementById('modalContent');

// Replace these paths with your actual image paths
const images = [
    // Add more images as needed
    { path: 'images/2024/ifoundyou.jpeg', year: 2024, caption:'<i>I Found You, 2024</i>' },
    { path: 'images/2024/departingfromeachothertoomanytimes.jpeg', year: 2024, caption:'<i>Departing from each other too many times, 2024</i>' },
    { path: 'images/2024/departingfromeachothertoomanytimes.jpeg', year: 2024, caption:'<i>Departing from each other too many times, 2024</i>' },
    { path: 'images/2023/youareinmyworldnow.jpeg', year: 2023, caption:'<i>You Are in My World Now, 2023</i>' },
	{ path: 'images/2023/whenwelookedateachotheronmossygrounds.jpeg', year: 2023, caption:'<i>When We Looked at Each Other on Mossy Grounds</i>, 2023' },
	{ path: 'images/2023/seeingyou.jpeg', year: 2023, caption:'<i>Seeing You</i>, 2023' },
	{ path: 'images/2023/lastdance.jpeg', year: 2023, caption:'<i>Last Dance</i>, 2023' },
	{ path: 'images/2023/allthesunsatonceforyou.jpeg', year: 2023, caption:'<i>All the Sun at Once for You</i>, 2023' },
	{ path: 'images/2022/youtoldmeitwouldneverbethesame.jpeg', year: 2022, caption:'<i>You Told Me It Would Never Be the Same</i>, 2022' },
	{ path: 'images/2022/yousoothemymemory.jpeg', year: 2022, caption:'<i>You Soothe My Memory</i>, 2022' },
	{ path: 'images/2022/yousaidiwasawarrior.jpeg', year: 2022, caption:'<i>You Said I Was a Warrior</i>, 2022' },
	{ path: 'images/2022/whenwecameback.jpeg', year: 2022, caption:'<i>When We Came Back</i>, 2022' },
	{ path: 'images/2022/inthegardenyouheldme.jpeg', year: 2022, caption:'<i>In the Garden You Held Me</i>, 2022' },
	{ path: 'images/2022/asifyouwerehiding.jpeg', year: 2022, caption:'<i>As If You Were Hiding</i>, 2022' },
	{ path: 'images/2022/arewestilllovers.jpeg', year: 2022, caption:'<i>Are We Still Lovers?</i>, 2022' },
	{ path: 'images/2021/whenisawyouagain.jpeg', year: 2021, caption:'<i>When I Saw You Again</i>, 2021' },
	{ path: 'images/2021/wefeltthesame.jpeg', year: 2021, caption:'<i>We Felt the Same</i>, 2021' },
	{ path: 'images/2021/wearehere.jpeg', year: 2021, caption:'<i>We Are Here</i>, 2021' },
	{ path: 'images/2021/Iamrunningintoyou.jpeg', year: 2021, caption:'<i>I Am Running Into You</i>, 2021' },
	{ path: 'images/2020/Tothewonderisavedyou.jpeg', year: 2020, caption:'<i>To the Wonder I Saved You</i>, 2020' },
	{ path: 'images/2020/Ilostherbathinginflowers.jpeg', year: 2020, caption:'<i>I Lost Her (Bathing Flowers)</i>, 2020' },
	{ path: 'images/2020/Iknowwhoyouarenow.jpeg', year: 2020, caption:'<i>I Know Who You Are Now</i>, 2020' },
	{ path: 'images/2020/amberandashes.jpeg', year: 2020, caption:'<i>Amber and Ashes</i>, 2020' },
	{ path: 'images/2020/Allwehadwasthis.jpeg', year: 2020, caption:'<i>All We Had Was This</i>, 2020' },
	{ path: 'images/2019/womenareflowers3.jpg', year: 2019, caption:'<i>Women Are Flowers 3</i>, 2019'},
	{ path: 'images/2019/womanandbuckethamam.jpg', year: 2019, caption:'<i>Women and Bucket Hamam</i>, 2019' },
	{ path: 'images/2019/ouroborusinthefield1.jpg', year: 2019, caption:'<i>Our Oborus in the Field</i>, 2019' },
	{ path: 'images/2019/kust10.jpg', year: 2019, caption:'<i>Kust 10</i>, 2019' },
	{ path: 'images/2019/kust8.jpg', year: 2019, caption:'<i>Kust 8</i>, 2019' },
	{ path: 'images/2019/kust5.jpg', year: 2019, caption:'<i>Kust 5</i>, 2019' },
	{ path: 'images/2019/fields15.jpg', year: 2019, caption:'<i>Fields 15</i>, 2019' },
	{ path: 'images/2019/fields10.jpg', year: 2019, caption:'<i>Fields 10</i>, 2019' },
	{ path: 'images/2019/drinkingteaandlongingforsunset.jpg', year: 2019, caption:'<i>Drinking Tea and Longing for Sunset</i>, 2019' },
	{ path: 'images/2019/blackflowers.jpg', year: 2019, caption:'<i>Black Flowers</i>, 2019' },
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