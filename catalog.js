

const boxOne = document.querySelector("#smallBoxOne .cards-container");

const boxTwo = document.querySelector("#smallBoxTwo .cards-container");

const boxThree = document.querySelector("#smallBoxThree .cards-container");

const boxFour = document.querySelector("#smallBoxFour .cards-container");

const boxFive = document.querySelector("#smallBoxFive .cards-container");

const mediumBoxOne = document.querySelector("#mediumBoxOne .cards-container");

const mediumBoxTwo = document.querySelector("#mediumBoxTwo .cards-container");

const largeBoxOne = document.querySelector("#largeBoxOne .cards-container");

const extraLargeBoxOne =

document.querySelector(

"#extraLargeBoxOne .cards-container"

);

const flatBoxOne =

document.querySelector(

"#flatBoxOne .cards-container"

);


const mailerBoxOne =

document.querySelector(

"#mailerBoxOne .cards-container"

);


const mailerBoxTwo=

document.querySelector(

"#mailerBoxTwo .cards-container"

);



const pizzaContent=

document.getElementById(

"pizzaContent"

);


const rigidContent=
document.getElementById(
"rigidContent"
);


const otherProducts =

document.querySelector(

"#otherProducts .cards-container"

);



const whatsappBtn =
document.getElementById("whatsapp-btn");

const rscBtn = document.getElementById("rscBtn");

const mailerBtn=

document.getElementById(

"mailerBtn"

);



const products = {


  smallBoxOne: [
    {
      title: "N2800U",

      description:
        "Universal Corrugated Box - 3 Ply - Strong - 7.6×7.6×7.6 cm / 3×3×3 inch - OD",
    },

    {
      title: "N1122U",

      description:
        "Universal Corrugated Box - 3 Ply - Strong - 10.2×10.2×6.3 cm / 4×4×2.5 inch - OD",
    },

    {
      title: "N1163U",

      description:
        "Universal Corrugated Box - 3 Ply - Strong - 12×11×5.5 cm / 4.7×4.3×2.2 inch - OD",
    },

    {
      title: "N2805U",

      description:
        "Universal Corrugated Box - 3 Ply - Strong - 10.1×10.1×10.1 cm / 4×4×4 inch - OD",
    },

    {
      title: "N1127U",

      description:
        "BSLTT - 3 Ply - Strong - 12×8.5×10.3 cm / 4.7×3.3×4.1 inch - OD - Top White",
    },

    {
      title: "N1176U",

      description:
        "Universal Corrugated Box - 3 Ply - Strong - 15×13×6 cm / 5.9×5.1×2.4 inch - OD",
    },
  ],



  smallBoxTwo: [
    {
      title: "N1216U",

      description:
        "Universal Corrugated Box - 3 Ply - Strong - 17.8×14.3×6.5 cm / 7×5.6×2.6 inch - OD",
    },

    {
      title: "N1143U",

      description:
        "Universal Corrugated Box - 3 Ply - Strong - 21×7×8.3 cm / 8.3×2.8×3.3 inch - OD",
    },

    {
      title: "N1128U",

      description:
        "BSLTT - 3 Ply - Strong - 18.5×9.5×9 cm / 7.3×3.7×3.5 inch - OD - Top White",
    },

    {
      title: "N2807U",

      description:
        "Universal Corrugated Box - 3 Ply - Strong - 25×8×10 cm / 9.8×3.1×3.9 inch - OD",
    },
  ],

 

  smallBoxThree: [
    {
      title: "N2803U",

      description:
        "Universal Corrugated Box - 3 Ply - Strong - 21×14.5×6.5 cm / 8.3×5.7×2.6 inch - OD - ANC52A",
    },

    {
      title: "N2804U",

      description:
        "Universal Corrugated Box - 3 Ply - Strong - 17.9×10.5×10.5 cm / 7×4.1×4.1 inch - OD - ANC44A",
    },

    {
      title: "N2806U",

      description:
        "Universal Corrugated Box - 3 Ply - Strong - 12.7×12.7×12.7 cm / 5×5×5 inch - OD",
    },

    {
      title: "N1117U",

      description:
        "Universal Corrugated Box - 3 Ply - Strong - 19×9×16.6 cm / 7.5×3.5×6.3 inch - OD",
    },

    {
      title: "N1606U",

      description:
        "BSLTT Corrugated Box - 3 Ply - Strong - 9.2×9.2×3.2 cm / 3.6×3.6×1.26 inch - OD",
    },

    {
      title: "N2810U",

      description:
        "Universal Corrugated Box - 3 Ply - Strong - 24.2×15.3×7.7 cm / 9.5×6×3 inch - OD - ANC54",
    },

    {
      title: "N2812U",

      description:
        "Universal Corrugated Box - 3 Ply - Strong - 18×13×12.5 cm / 7.1×5.1×4.9 inch - OD",
    },

    {
      title: "N1223U",

      description:
        "Universal Corrugated Box - 3 Ply - Strong - 25×22×6 cm / 9.8×8.7×2.4 inch - OD",
    },

    {
      title: "N2813U",

      description:
        "Universal Corrugated Box - 3 Ply - Strong - 15×15×15 cm / 6×6×6 inch - OD",
    },

    {
      title: "N2817U",

      description:
        "Universal Corrugated Box - 3 Ply - Strong - 28×15×11.5 cm / 11×5.4×4.5 inch - OD - ANC30A",
    },

    {
      title: "N2818U",

      description:
        "Universal Corrugated Box - 5 Ply - Strong - 13.9×13.9×20.3 cm / 5.5×5.5×8 inch - OD - ANC30A",
    },
  ],



  smallBoxFour: [
    {
      title: "N2814U",

      description:
        "Universal Corrugated Box - 3 Ply - Strong - 23×15×12 cm / 9.1×5.9×4.7 inch - OD",
    },

    {
      title: "N1252U",

      description:
        "Universal Corrugated Box - 3 Ply - Strong - 21×16×14 cm / 8.3×6.3×5.5 inch - OD",
    },

    {
      title: "N1630U",

      description:
        "Universal Corrugated Box - 3 Ply - Strong - 12×12×3 cm / 4.7×4.7×1.3 inch - OD",
    },

    {
      title: "N2820U",

      description:
        "Universal Corrugated Box - 3 Ply - Strong - 29.3×14.1×12.9 cm / 11.5×5.5×5.1 inch - OD - ANC8A",
    },

    {
      title: "N2821U",

      description:
        "Universal Corrugated Box - 3 Ply - Strong - 18×18×18 cm / 7×7×7 inch - OD",
    },
  ],



  smallBoxFive: [
    {
      title: "N2824U",

      description:
        "Universal Corrugated Box - 3 Ply - Strong - 25×22×11.5 cm / 9.8×8.7×4.5 inch - OD",
    },

    {
      title: "N2899U",

      description:
        "Universal Corrugated Box - 3 Ply - Strong - 30×15×15 cm / 11.8×5.9×5.9 inch - OD",
    },

    {
      title: "N1107U",

      description:
        "Universal Corrugated Box - 3 Ply - Strong - 14.5×13.5×26.5 cm / 5.7×5.3×10.4 inch - OD",
    },

    {
      title: "N2822U",

      description:
        "Universal Corrugated Box - 3 Ply - Strong - 20.3×20.3×20.3 cm / 8×8×8 inch - OD",
    },

    {
      title: "N1102U",

      description:
        "Universal Corrugated Box - 5 Ply - Strong - 28×23×12 cm / 11×9×4.7 inch - OD",
    },

    {
      title: "N2823U",

      description:
        "Universal Corrugated Box - 3 Ply - Strong - 31.9×16.5×15.4 cm / 12.6×6.5×6.1 inch - OD - ANC9A",
    },

    {
      title: "N1194U",

      description:
        "Universal Corrugated Box - 3 Ply - Strong - 26×18×10 cm / 10.2×7.1×4 inch - OD",
    },

    {
      title: "N2826U",

      description:
        "Universal Corrugated Box - 3 Ply - Strong - 28×28×12 cm / 11×11×4.7 inch - OD",
    },
  ],



  mediumBoxOne: [
    {
      title: "N2830U",

      description:
        "Universal Corrugated Box - 3 Ply - Strong - 24.6X21.3X20.3 cm / 9.7X8.4X8 Inch - OD - ANC31AA",
    },

    {
      title: "N2840U",

      description:
        "Universal Corrugated Box - 3 Ply - Strong - 35X22X15 cm / 13.8X8.7X5.9 inch - OD",
    },

    {
      title: "N2850U",

      description:
        "Universal Corrugated Box - 3 Ply - Strong - 27.9X21X22.8 cm / 11X8.3X9 Inch - OD - ANC32AA",
    },

    {
      title: "N1263U",

      description:
        "Universal Corrugated Box - 3 Ply - Strong - 33.7X30X16 cm / 13.3X11.8X6.3 inch - OD",
    },

    {
      title: "N1232U",

      description:
        "Universal Corrugated Box - 5 Ply - Strong - 31X28X20.5 cm / 12.2X11X8.1 inch - OD",
    },

    {
      title: "N1171U",

      description:
        "Universal Corrugated Box - 3 Ply - Strong - 34.5X34.5X15.5 cm / 13.6X13.6X6.1 inch - OD",
    },
  ],


  mediumBoxTwo: [
    {
      title: "N2856U",

      description:
        "Universal Corrugated Box - 3 Ply - Strong - 25X25X30 cm / 9.8X9.8X11.8 inch - OD",
    },

    {
      title: "N1235U",

      description:
        "Universal Corrugated Box - 3 Ply - Strong - 45.7X29.2X16.5 cm / 18X11.5X6.5 inch - OD",
    },

    {
      title: "N2859U",

      description:
        "Universal Corrugated Box - 3 Ply - Strong - 32X32X25 cm / 12.6X12.6X9.8 inch - OD",
    },

    {
      title: "N2860U",

      description:
        "Universal Corrugated Box - 3 Ply - Strong - 34.5X28X27 cm / 13.6X11X10.6 Inch - OD - AKS14A",
    },

    {
      title: "N1240U",

      description:
        "Universal Corrugated Box - 5 Ply - Strong - 39X33.7X20 cm / 15.3X13.3X7.9 inch - OD",
    },

    {
      title: "N2862U",

      description:
        "Universal Corrugated Box - 3 Ply - Strong - 33X33X33 cm / 13X13X13 inch - OD",
    },

    {
      title: "N2865U",

      description:
        "Universal Corrugated Box - 3 Ply - Strong - 43X32X29.8 cm / 16.9X12.6X11.7 inch - OD",
    },

    {
      title: "N1288U",

      description:
        "Universal Corrugated Box - 3 Ply - Strong - 32X32X50 cm / 12.6X12.6X19.7 inch - OD",
    },
  ],



  largeBoxOne: [
    {
      title: "N1132U",

      description:
        "Universal Corrugated Box - 5 Ply - Strong - 45X30X20 cm / 17.7X11.8X7.9 inch - OD",
    },

    {
      title: "N1133U",

      description:
        "Universal Corrugated Box - 5 Ply - Standard - 52X32.5X21 cm / 20.5X12.8X8.3 inch - OD",
    },

    {
      title: "N1134U",

      description:
        "Universal Corrugated Box - 5 Ply - Standard - 52X32.5X30 cm / 20.5X12.8X11.8 inch - OD",
    },

    {
      title: "N1135U",

      description:
        "Universal Corrugated Box - 5 Ply - Ultra Plus - 61X44X33 cm / 24X17.3X13 inch - OD",
    },

    {
      title: "N1136U",

      description:
        "Universal Corrugated Box - 5 Ply - Standard - 58X40X40 cm / 22.8X15.7X15.7 inch - OD",
    },

    {
      title: "N1334U",

      description:
        "Universal Corrugated Box - 3 Ply - Standard - 61X40.5X48 cm / 24X15.9X18.9 inch - OD",
    },

    {
      title: "N1137U",

      description:
        "Universal Corrugated Box - 5 Ply - Standard - 60X50X50 cm / 23.6X19.7X19.7 inch - OD",
    },

    {
      title: "N1138U",

      description:
        "Universal Corrugated Box - 5 Ply - Standard - 60X60X60 cm / 23.6X23.6X23.6 inch - OD",
    },
  ],




extraLargeBoxOne:[


{

title:"N1139U",

description:
"Universal Corrugated Box - 5 Ply - Extra Strong - 90X60X60 cm / 35.4X23.6X23.6 inch - OD"

},


{

title:"N1112U",

description:
"Universal Corrugated Box - 7 Ply - Strong - 120X60X60 cm / 47.2X23.6X23.6 inch - OD"

}


],




flatBoxOne:[


{

title:"N1272U",

description:
"FOL Corrugated Box - 5 Ply - Strong - 39X7X29 cm / 15.3X2.8X11.4 inch - OD"

},



{

title:"N1273U",

description:
"FOL Corrugated Box - 5 Ply - Strong - 52X7X29 cm / 20.5X2.8X11.4 inch - OD"

},




{

title:"N1274U",

description:
"FOL Corrugated Box - 5 Ply - Strong - 51X33X14 cm / 20.1X13X5.5 inch - OD"

},





{

title:"N2530U",

description:
"FOL Corrugated Box - 5 Ply - Strong - 37.5X11.5X50 cm / 14.8X4.5X19.7 inch - OD"

},





{

title:"N1218U",

description:
"Universal Corrugated Box - 5 Ply - Strong - 65X55X15 cm / 25.6X21.6X5.9 inch - OD"

},





{

title:"N1220U",

description:
"Universal Corrugated Box - 5 Ply - Strong - 48.2X20.3X45.7 cm / 19X8X18 inch - OD"

}


],




mailerBoxOne:[


{

title:"N1750U",

description:
"Self Locking Mailer Corrugated Box - 3 Ply - Strong - 8.5X5.7X3 cm / 3.3X2.2X1.2 inch - OD"

},



{

title:"N2744U",

description:
"Self Locking Corrugated Mailer Box - 3 Ply - Strong - 10X7.7X7.7 cm / 3.9X3X3 inch - OD"

},




{

title:"N2701U",

description:
"Self Locking Corrugated Mailer Box - 3 Ply - Strong - 13.4X9.5X4.4 cm / 5.3X3.7X1.7 inch - OD"

},




{

title:"N2742U",

description:
"Self Locking Mailer Corrugated Box - 3 Ply - Strong - 15X8.2X7 cm / 5.9X3.2X2.8 inch - OD"

},




{

title:"N2703U",

description:
"Self Locking Corrugated Mailer Box - 3 Ply - Strong - 25X19X13 cm / 9.8X7.5X5.1 inch - OD"

},





{

title:"N2705U",

description:
"Self Locking Corrugated Mailer Box - 3 Ply - Strong - 16.4X13X6 cm / 6.5X5.1X2.4 inch - OD"

},





{

title:"N2702U",

description:
"Self Locking Mailer Corrugated Box - 3 Ply - Strong - 19.8X10.5X3.6 cm / 7.8X4.1X1.4 inch - OD"

},





{

title:"N2704U",

description:
"Self Locking Mailer Corrugated Box - 3 Ply - Strong - 18.4X15.1X4.4 cm / 7.2X5.9X1.7 inch - OD"

},






{

title:"N2706U",

description:
"Self Locking Mailer Corrugated Box - 3 Ply - Strong - 23X15.5X5.5 cm / 9.1X6.1X2.2 inch - OD"

},





{

title:"N2711U",

description:
"Self Locking Mailer Corrugated Box - 3 Ply - Strong - 12X22.5X5 cm / 4.7X8.9X2 inch - OD"

},






{

title:"N2777U",

description:
"Self Locking Mailer Corrugated Box - 3 Ply - Strong - 21X20X5.5 cm / 8.3X7.9X2.2 inch - OD"

},






{

title:"N2715U",

description:
"Self Locking Mailer Corrugated Box - 3 Ply - Strong - 24.7X23.4X8 cm / 9.7X9.2X3.1 inch - OD"

}

],




mailerBoxTwo:[


{

title:"N2707U",

description:
"Self Locking Mailer Corrugated Box - 3 Ply - Strong - 23.5X22X5.5 cm / 9.2X8.7X2.2 inch - OD"

},


{

title:"N2708U",

description:
"Self Locking Mailer Corrugated Box - 3 Ply - Strong - 30.2X16.5X5.2 cm / 11.9X6.5X2 inch - OD"

},



{

title:"N2709U",

description:
"Self Locking Mailer Corrugated Box - 3 Ply - Strong - 33.8X20.5X6.7 cm / 13.3X8.1X2.6 inch - OD"

},




{

title:"N2729U",

description:
"Self Locking Mailer Corrugated Box - 3 Ply - Strong - 24.7X18.8X7.8 cm / 9.7X7.4X3.1 inch - OD"

},





{

title:"N2761U",

description:
"Self Locking Mailer Corrugated Box - 3 Ply - Strong - 34X26.7X2.5 cm / 13.4X10.5X1 inch - OD"

},





{

title:"N2762U",

description:
"Self Locking Mailer Corrugated Box - 3 Ply - Strong - 34X26.7X5 cm / 13.4X10.5X2 inch - OD"

},





{

title:"N2763U",

description:
"Self Locking Mailer Corrugated Box - 3 Ply - Strong - 34X26.7X7.5 cm / 13.4X10.5X3 inch - OD"

},





{

title:"N2765U",

description:
"Self Locking Mailer Corrugated Box - 3 Ply - Strong - 34X33X7.5 cm / 13.4X13X3 inch - OD"

},





{

title:"N2764U",

description:
"Self Locking Mailer Corrugated Box - 3 Ply - Strong - 34X26.7X10 cm / 13.4X10.5X4 inch - OD"

},





{

title:"N1722U",

description:
"Self Locking Mailer Corrugated Box - 3 Ply - Strong - 45.7X40.7X9 cm / 18X16X3.5 inch - OD"

},





{

title:"N1714U",

description:
"Self Locking Mailer Corrugated Box - 3 Ply - Strong - 36X36X15 cm / 14.2X14.2X5.9 inch - OD"

}


],




pizzaBoxes:[


{

title:"N1242U",

description:
"Corrugated Pizza Box - 7X7X1.5 inch - 3 Ply - Plain Brown"

},



{

title:"N1202U",

description:
"Corrugated Pizza Box - 8X8X1.5 inch - 3 Ply - Plain Brown"

},




{

title:"N1201U",

description:
"Corrugated Pizza Box - 9X9X1.5 inch - 3 Ply - Plain Brown"

},





{

title:"N1204U",

description:
"Corrugated Pizza Box - 10X10X1.5 inch - 3 Ply - Plain Brown"

},





{

title:"N1210U",

description:
"Corrugated Pizza Box - 11X11X1.5 inch - 3 Ply - Plain Brown"

},





{

title:"N1200U",

description:
"Corrugated Pizza Box - 12X12X1.5 inch - 3 Ply - Plain Brown"

},





{

title:"N1243U",

description:
"Corrugated Garlic Bread Box - 12X6X1.5 inch - 3 Ply - Plain Brown"

}


],




rigidBoxes:[


{

title:"N1825U",

description:
"Rigid Box - Kraft Finish - 23.5X16.5X4.8 cm / 9.2X6.5X1.9 Inch - OD -1.8 mm Body"

},


{

title:"N1835U",

description:
"Rigid Box - Kraft Finish - 30.8X22.4X4.8 cm / 12.1X8.8X1.9 Inch - OD -1.8 mm Body"

},


{

title:"N1837U",

description:
"Rigid Box - Black Finish - 7.6X7.6X5 cm / 3X3X2 Inch - OD -1.8 mm Body"

},


{

title:"N1840U",

description:
"Rigid Box - Black Finish - 15.2X15.2X7.6 cm / 6X6X3 Inch - OD -1.8 mm Body"

},


{

title:"N1845U",

description:
"Rigid Box - Black Finish - 17.8X17.8X10.2 cm / 7X7X4 Inch - OD -1.8 mm Body"

},


{

title:"N1850U",

description:
"Rigid Box - Black Finish - 20.3X20.3X10.2 cm / 8X8X4 Inch - OD -1.8 mm Body"

},


{

title:"N1858U",

description:
"Rigid Box - Black Finish - 23.8X26.8X8.9 cm / 9.4X10.5X3.5 Inch - OD -1.5 mm Body"

},


{

title:"N1860U",

description:
"Rigid Box - Black Finish - 25.4X25.4X10.2 cm / 10X10X4 Inch - OD -1.8 mm Body"

},


{

title:"N1870U",

description:
"Rigid Box - Black Finish - 30X30X10.2 cm / 12X12X4 Inch - OD -1.8 mm Body"

}

],



otherProducts:[


{

title:"N1120U",

image:
"https://img1.wsimg.com/isteam/stock/72110/:/cr=t:16.61%25,l:0%25,w:100%25,h:66.77%25/rs=w:388,h:194,cg:true/qt=q:32",

description:
"Corrugated Packing Roll - Single Face 2 Ply"


},



{

title:"N1119U",

image:
"https://img1.wsimg.com/isteam/ip/6660eb61-ce99-445a-9a74-7fcee167fda9/Corrugated%20Pads.jpg/:/cr=t:22.94%25,l:17.53%25,w:64.94%25,h:54.11%25/rs=w:388,h:194,cg:true,m/qt=q:32",

description:
"Corrugated Pad - CF - 3 Ply - Standard - 100X100 CM"

},



{

title:"N1164U",

image:
"https://img1.wsimg.com/isteam/ip/6660eb61-ce99-445a-9a74-7fcee167fda9/Kraft%20Paper%20Filler.jpg",

description:
"Kraft Paper Filler (eco-friendly)"


},




{

title:"N1947U",

image:
"https://img1.wsimg.com/isteam/ip/6660eb61-ce99-445a-9a74-7fcee167fda9/HEX%20Wrap-0001.jpg/:/cr=t:19.36%25,l:0%25,w:100%25,h:50.7%25/rs=w:388,h:194,cg:true/qt=q:32",

description:
"Kraft Paper Hex Wrap. 39.3 CM Width"

}


],
};



function displayCards(data, container) {
  container.innerHTML += data
    .map((item) => {
      return `

            <div class="card">

                <h3>${item.title}</h3>

                <p>${item.description}</p>

            </div>

            `;
    })

    .join("");
}





displayCards(products.smallBoxOne, boxOne);

// SMALL BOX THREE

displayCards(products.smallBoxThree, boxThree);

// SMALL BOX FOUR

displayCards(products.smallBoxFour, boxFour);

// SMALL BOX FIVE

displayCards(products.smallBoxFive, boxFive);

displayCards(
  products.mediumBoxOne,

  mediumBoxOne,
);

displayCards(

products.largeBoxOne,

largeBoxOne

); 

displayCards(

products.extraLargeBoxOne,

extraLargeBoxOne

);

displayCards(

products.flatBoxOne,

flatBoxOne

);


displayCards(

products.mailerBoxOne,

mailerBoxOne

);


displayCards(

products.mailerBoxTwo,

mailerBoxTwo

);



mailerBoxTwo.innerHTML += `


<div class="custom-size">


<h3>

Didn't find
the correct size?


</h3>



<p>

Call us for
customisation.


</p>



<button id="customSizeBtn">

CALL US NOW

</button>



</div>

`;



extraLargeBoxOne.innerHTML += `


<div class="contact-card">


<h3>

Need Extra large Customised Boxes?


</h3>



<button id="customBoxBtn">

Contact us

</button>



</div>


`;

displayCards(
  products.mediumBoxTwo.slice(0, 6),

  mediumBoxTwo,
);

mediumBoxTwo.innerHTML += `


<div class="card">

<h3>

${products.mediumBoxTwo[6].title}

</h3>

<p>

${products.mediumBoxTwo[6].description}

</p>

</div>



<div class="card">

<h3>

${products.mediumBoxTwo[7].title}

</h3>

<p>

${products.mediumBoxTwo[7].description}

</p>

</div>




<div class="call-us">

<button id="callBtn">

CLICK HERE TO
CALL US NOW

</button>

</div>

`;



displayCards(products.smallBoxTwo.slice(0, 3), boxTwo);



boxTwo.innerHTML += `


<div class="card">

    <h3>
        ${products.smallBoxTwo[3].title}
    </h3>

    <p>
        ${products.smallBoxTwo[3].description}
    </p>

</div>




<div class="call-us">

    <button id="callBtn">

        CLICK HERE TO
        CALL US NOW

    </button>

</div>



`;



whatsappBtn.addEventListener("click", () => {
  window.open(
    "https://wa.me/919844123579",

    "_blank",
  );
});


rscBtn.addEventListener("click", () => {
  window.open(
    "https://boxmakersindia.com/regular-slotted-container-rsc-boxes",

    "_blank",
  );
});



document.addEventListener("click", (e) => {
  if (e.target.id === "callBtn") {
    window.location.href = "tel:+919844123579";
  }
});



window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};


document.addEventListener("click",(e)=>{


if(e.target.id==="customBoxBtn"){


window.location.href=

"tel:+919844123579";


}


});


mailerBtn.addEventListener("click",()=>{


window.open(

"https://boxmakersindia.com/mailer-boxes",

"_blank"

);


});


document.addEventListener("click",(e)=>{


if(e.target.id==="customSizeBtn"){


window.location.href=

"tel:+919844123579";


}


});


products.pizzaBoxes.forEach((item)=>{


    pizzaContent.innerHTML +=


    `


    <div class="pizza-box">


        <h3>

            ${item.title}

        </h3>


        <p>

            ${item.title} - ${item.description}

        </p>


    </div>


    `;


});


if(rigidContent){

products.rigidBoxes.forEach((item)=>{


rigidContent.innerHTML += `


<div class="rigid-box">


<h3>

${item.title}

</h3>


<p>

${item.description}

</p>


</div>


`;


});


}




if(otherProducts){


products.otherProducts.forEach((item)=>{


otherProducts.innerHTML += `


<div class="other-card">


<img
src="${item.image}"

alt="${item.title}">


<h3>

${item.title}

</h3>



<p>

${item.title}

-

${item.description}

</p>


</div>


`;


});


}