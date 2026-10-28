// console.log(document.getElementsByClassName("flexbox"));
// // querySelectorAll() : Finds all matching items, example: multiple elements
// console.log(document.querySelectorAll(".flexbox"));
// console.log(document.querySelectorAll("#photoGallery"));

// Unlike querySelectorAll (which finds all matches),
// querySelector stops searching the moment it finds the first matching element.
// const elem = document.querySelector("#photoGallery");
// console.log(elem);

// const elem1 = document.querySelector("#photoGallery").querySelectorAll("img");
// console.log(elem1);

// const elem2 = document.querySelector("#photoGallery").querySelectorAll("img");
// elem2.forEach((img) => {
//     console.log(img.src, img.alt);
// });

// // childNodes: A property that looks inside that container and gathers everything sitting directly on the next level down.
// // Imagine your #photoGallery is a big toy box.
// // document.querySelector("#photoGallery").childNodes; is like dumping the toy box out on the floor to see everything inside.
// // But it doesn't just show you your toys (the pictures). It also counts the dust and empty spaces between the toys!
// const elem3 = document.querySelector("#photoGallery").childNodes;
// elem3.forEach((n) => {
//     // console.log(n);
//     // console.log(n, n.nodeName, n.nodeType);
//     if(n.nodeType === 1){
//         console.log(n, n.nodeName, n.nodeType);
//     }
// });

// const elem4 = document.querySelector("#photoGallery").childNodes;
// console.log(elem4[5]);
// console.log(elem4[5].previousSibling);
// console.log(elem4[5].nextSibling);
// console.log(elem4[5].parentNode);

// const elem5 = document.querySelector("#photoGallery").children;
// elem5.forEach((n) => {
//     console.log(n, n.nodeName, n.nodeType);
// });

// const elem6 = document.querySelector("#photoGallery").children;
// Array.from(elem6).forEach((n) => {
//     console.log(n, n.nodeName, n.nodeType);
// });

// const elem7 = document.querySelector("#photoGallery").children;
// console.log(elem7[5].previousElementSibling);
// console.log(elem7[5].nextElementSibling);
// console.log(elem7[5].parentElement);

// const elem8 = document.querySelector("#photoGallery").children;
// const box = elem8[5];
// const capt = box.querySelector("figcaption");
// console.log(capt.closest("ul"));

// const elem9 = document.querySelector("#photoGallery").children;
// document.addEventListener("DOMContentLoaded", (evt) => {
//     const box = elem9[5];
//     const capt = box.querySelector("figcaption");
//     console.log(capt.closest("ul"));
// });

// document.addEventListener("DOMContentLoaded", (evt) => {
//     const elem10 = document.querySelector("#photoGallery").children;
//     const box = elem10[5];
//     const capt = box.querySelector("figcaption");
//     console.log(capt.closest("ul"));
// });

document.addEventListener("DOMContentLoaded", (evt) => {
    const elem11 = document
        .querySelector("#photoGallery")
        .querySelectorAll("img");
    elem11.forEach((img) => {
        // img.addEventListener("click", (evt) => {
        //     // console.log(img, evt);
        //     // go to css file in ul#photoGallery li figure img, add cursor: pointer
        //     // console.log(img.src);
        //     alert(img.src);
        //     // after g
        //     console.log(evt);
        // });

        img.addEventListener("mousedown", (evt) => {
            alert(img.src);
            console.log(evt);
        });

        img.addEventListener("mouseover", (evt) => {
            img.style.objectFit = "cover";
        });

        img.addEventListener("mouseout", (evt) => {
            img.style.objectFit = "contain"; // g
        });
    });

    // 2026 10 28
    const addImageButton = document.querySelector("button#append_image");
    // addImageButton.addEventListener("click", (evt) => {
    //     const preview = document.querySelector("div#image-preview");
    //     const previewedImage = document.querySelector("img#previewed-image");
    //     console.log(previewedImage);
    //     if(previewedImage) return;
    //     const imagePath = "images/20261028_02.jpg";
    //     const imgObject = new Image();        //new Image() creates a new instance of an HTMLImageElement object (an <img> element in memory).
    //     imgObject.src = imagePath;
    //     const appendImage = document.createElement("img"); //document.createElement() is a built-in method (function) used to create any HTML element  //
    //     // preview.appendChild(appendImage);     //JavaScript method that inserts a specified child node (like an element) as the last child inside a parent element. //
    //     const written = document.querySelector("img#written-image");
    //     if(!written) return;
    //     // preview.insertBefore(appendImage, written);
    //     // preview.append(appendImage);
    //     preview.prepend(appendImage); //add it b4 the current added one, its  pre-append
    //     appendImage.src = imgObject.src;
    //     appendImage.setAttribute("id", "previewed-image");
    // });

    addImageButton.addEventListener("click", (evt) => {
        const preview = document.querySelector("div#image-preview");
        const images = ["20261028_02.jpg", "20261028_03.jpg"];
        const preload = [];
        const elems = [];
        images.forEach((f, i) =>{
            const imgObject = new Image();
            imgObject.src = `images/${f}`;
            // preload.push(imgObject);

            const appendImg = document.createElement("img");
            appendImg.setAttribute("id", `append-image0${i}`);
            appendImg.setAttribute("src", imgObject.src);
            elems.push(appendImg);
        });
        preview.prepend(...elems);
    });



    const removeImageButton = document.querySelector("button#remove_image");
    removeImageButton.addEventListener("click", (evt) => {
        const preview = document.querySelector("div#image-preview");
        // const removeImage = preview.lastElementChild;
        // if(removeImage){                               sol1, if add 3 elements, remove the last added element
        //     preview.removeChild(removeImage);
        // }
        if(preview.firstElementChild){
            preview.removeChild(preview.firstElementChild); // remove the first added element//
        }
    })
});
