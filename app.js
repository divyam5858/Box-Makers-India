const smallBoxes = [
    {
        code: "N1132U",
        type: "Universal Corrugated Box",
        ply: "5 Ply - Strong",
        size: "45 × 30 × 20 cm",
        inch: "17.7 × 11.8 × 7.9 inch (OD)"
    },
    {
        code: "N1133U",
        type: "Universal Corrugated Box",
        ply: "5 Ply - Standard",
        size: "52 × 32.5 × 21 cm",
        inch: "20.5 × 12.8 × 8.3 inch (OD)"
    },
    {
        code: "N1134U",
        type: "Universal Corrugated Box",
        ply: "5 Ply - Standard",
        size: "52 × 32.5 × 30 cm",
        inch: "20.5 × 12.8 × 11.8 inch (OD)"
    }
];

const largeBoxes = [
    {
        code: "N1135U",
        type: "Universal Corrugated Box",
        ply: "5 Ply - Ultra Plus",
        size: "61 × 44 × 33 cm",
        inch: "24 × 17.3 × 13 inch (OD)"
    },
    {
        code: "N1136U",
        type: "Universal Corrugated Box",
        ply: "5 Ply - Standard",
        size: "58 × 40 × 40 cm",
        inch: "22.8 × 15.7 × 15.7 inch (OD)"
    },
    {
        code: "N1137U",
        type: "Universal Corrugated Box",
        ply: "5 Ply - Standard",
        size: "60 × 50 × 50 cm",
        inch: "23.6 × 19.7 × 19.7 inch (OD)"
    }
];

const extraLargeBoxes = [
    {
        code: "N1138U",
        type: "Universal Corrugated Box",
        ply: "5 Ply - Standard",
        size: "60 × 60 × 60 cm",
        inch: "23.6 × 23.6 × 23.6 inch (OD)"
    },
    {
        code: "N1139U",
        type: "Universal Corrugated Box",
        ply: "5 Ply - Extra Strong",
        size: "90 × 60 × 60 cm",
        inch: "35.4 × 23.6 × 23.6 inch (OD)"
    },
    {
        code: "N1112U",
        type: "Universal Corrugated Box",
        ply: "7 Ply - Strong",
        size: "120 × 60 × 60 cm",
        inch: "47.2 × 23.6 × 23.6 inch (OD)"
    }
];

const packingMaterials = [
    {
        title: "Foam Wrap - N1923U",
        image: "https://img1.wsimg.com/isteam/getty/2149989672/:/cr=t:16.67%25,l:0%25,w:100%25,h:66.67%25/rs=w:388,h:194,cg:true/qt=q:32",
        desc: "N1923U - EPE Foam - White - 2mm - Roll of 5 meters"
    },
    {
        title: "Bubble Wrap - N1914U",
        image: "https://img1.wsimg.com/isteam/getty/2195036437/:/rs=w:388,h:194,cg:true,m/cr=w:388,h:194/qt=q:32",
        desc: "N1914U - Bubble Wrap - 1.5 meters height - 5 meters length - 10 mm Bubble - 50 GSM"
    },
    {
        title: "Carton Roll - N1120U",
        image: "https://img1.wsimg.com/isteam/ip/6660eb61-ce99-445a-9a74-7fcee167fda9/68791a36-56f6-40a7-8607-9562b8bfc995.jpg/:/cr=t:25%25,l:0%25,w:100%25,h:50%25/rs=w:388,h:194,cg:true/qt=q:32",
        desc: "N1120U - Corrugated Roll - Single Face 2 Ply"
    },
    {
        title: "2 Inch Transparent Tape - N1900T",
        image: "https://img1.wsimg.com/isteam/getty/477899865/:/cr=t:15.88%25,l:0%25,w:100%25,h:68.23%25/rs=w:388,h:194,cg:true/qt=q:32",
        desc: 'N1900T - Self Adhesive 2" Transparent BOPP Tape'
    },
    {
        title: "3 Inch Transparent Tape - N1924T",
        image: "https://img1.wsimg.com/isteam/getty/477899865/:/cr=t:15.88%25,l:0%25,w:100%25,h:68.23%25/rs=w:388,h:194,cg:true/qt=q:32",
        desc: 'N1924T - Self Adhesive 3" Transparent BOPP Tape'
    },
    {
        title: "2 Inch Brown Tape - N1900B",
        image: "https://img1.wsimg.com/isteam/getty/124632201/:/cr=t:12.35%25,l:0%25,w:100%25,h:75.29%25/rs=w:388,h:194,cg:true/qt=q:32",
        desc: 'N1900B - Self Adhesive 2" Brown BOPP Tape'
    },
    {
        title: "3 Inch Brown Tape - N1924B",
        image: "https://img1.wsimg.com/isteam/getty/124632201/:/cr=t:12.35%25,l:0%25,w:100%25,h:75.29%25/rs=w:388,h:194,cg:true",
        desc: 'N1924B - Self Adhesive 3" Brown BOPP Tape'
    }
];

function renderBoxes(data, containerId) {

    const container = document.getElementById(containerId);

    container.innerHTML = data.map(item => `
        <div class="product-card">
            <h3>${item.code}</h3>
            <p>${item.type}</p>
            <p>${item.ply}</p>
            <p>${item.size}</p>
            <p>${item.inch}</p>
        </div>
    `).join("");

}

function renderPacking(data) {

    const container = document.getElementById("packing-material");

    container.innerHTML = data.map(item => `
        <div class="packing-card">
            <h4>${item.title}</h4>
            <img src="${item.image}" alt="${item.title}">
            <p>${item.desc}</p>
        </div>
    `).join("");

}


renderBoxes(smallBoxes, "small-boxes");
renderBoxes(largeBoxes, "large-boxes");
renderBoxes(extraLargeBoxes, "extra-large-boxes");

renderPacking(packingMaterials);