import {v4 as uuidv4} from "uuid"

export const projects =[
    {
        id:uuidv4(),
        title:"Angular App",
        desc:"Приложение на Angular JS",
        github:"https://github.com/MaxTarasevich/myFirstAngularApp",
        demo:"https://maxtarasevich.github.io/myFirstAngularApp/",
        image:"./images/angular app.png",
    },
    {
        id:uuidv4(),
        title:"Landing page",
        desc:"Верстка, посадка на CMS Wordpress",
        github:"https://github.com/MaxTarasevich/build-company",
        demo:"http://o299894z.beget.tech/",
        image:"./images/build_company.png",

    },
    {
        id:uuidv4(),
        title:"Landing page",
        desc:"Верстка",
        github:"https://github.com/MaxTarasevich/Adele",
        demo:"https://maxtarasevich.github.io/Adele/",
        image:"./images/adelle.png",

    },
   
]