const suggestions = document.querySelector("#suggestions");
const input = document.querySelector("#searchInput");

const arr = [
    { name: "Elephant Girl", img: "https://cdn.pixabay.com/photo/2016/11/14/03/46/girl-1822525_1280.jpg" },
    { name: "Elephant Man", img: "https://cdn.pixabay.com/photo/2016/11/14/03/22/elephant-1822481_1280.jpg" },
    { name: "Elephant", img: "https://cdn.pixabay.com/photo/2023/09/14/19/46/elephant-8253639_1280.jpg" },
    { name: "Roses", img: "https://cdn.pixabay.com/photo/2013/07/21/13/00/rose-165819_1280.jpg" },
    { name: "Kitten with Flower", img: "https://cdn.pixabay.com/photo/2017/07/25/01/22/cat-2536662_1280.jpg" },
    { name: "Bird on a branch", img: "https://cdn.pixabay.com/photo/2017/05/08/13/15/bird-2295431_1280.jpg" },
    { name: "Kangaroos", img: "https://cdn.pixabay.com/photo/2015/06/08/20/41/kangaroo-802458_1280.jpg" },
    { name: "Kangaroo", img: "https://cdn.pixabay.com/photo/2022/11/10/12/48/kangaroo-7582773_1280.jpg" },
    { name: "Kangaroos baby", img: "https://cdn.pixabay.com/photo/2021/08/19/10/47/kangaroo-6557734_1280.jpg" },
    { name: "Horses", img: "https://cdn.pixabay.com/photo/2016/10/17/11/00/iceland-1747368_1280.jpg" },
    { name: "Horse", img: "https://cdn.pixabay.com/photo/2023/07/03/14/36/horse-8104389_1280.jpg" },
    { name: "Portrait", img: "https://cdn.pixabay.com/photo/2015/03/03/18/58/woman-657753_1280.jpg" }
]

// const ShowPhotos = () => {
//     let clutter = " ";
//     arr.forEach((photo, index) => {
//         clutter += `
//         <figure>
//             <img src="${photo.img}" alt="${photo.name}">
//             <figcaption onclick="preview(${index})">${photo.name}</figcaption>
//         </figure>`;
//     })

//     document.querySelector(".container").innerHTML = clutter;
// }

const ShowPhotos = () => {
    let clutter = " ";
    const filteredArray = arr.filter(obj => obj.name.toLowerCase().trim().includes(input.value));
    filteredArray.forEach((photo, index) => {
        clutter += `
                <figure>
                <img src="${photo.img}" alt="${photo.name}">
                <figcaption>${photo.name}</figcaption>
                </figure>`;
    })
    document.querySelector(".container").innerHTML = clutter;
}

const showSuggestions = () => {

    let clutter = "";
    arr.forEach((elem) => {
        clutter += `<div><i class="ri-search-line"></i>${elem.name}</div>`;
    })

    input.addEventListener("input", () => {
        let real = "";
        const filteredArray = arr.filter(obj => obj.name.toLowerCase().startsWith(input.value)); // if the filterArray is empty the arr(Original Array is shown as suggestions)
        filteredArray.forEach((elem) => {
            real += `<div><i class="ri-search-line"></i>${elem.name}</div>`;
        })
        suggestions.innerHTML = real;
        ShowPhotos();
        filteredArray.forEach((elem)=>{
            elem.addEventListener("click",(e)=>{
                console.log(e.innerHTML )
            })
        })
    })


    input.addEventListener("focus", () => {
        document.body.classList.add("overlay-active");
    })
    input.addEventListener("blur", () => {
        document.body.classList.remove("overlay-active");
    })
    suggestions.innerHTML = clutter;

};

showSuggestions();
ShowPhotos();