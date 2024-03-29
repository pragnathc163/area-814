import Hunger from '../img/hunger.png';
import Spaghetti from '../img/spaghetti.png';
import ChickenShaw from '../img/chickenShaw.png';
import Panini from '../img/panini.png';
import Ramen from '../img/ramen.png';

export const staticData = [
    {
        id: 1,
        name: "Running Spaghetti",
        decp: "BM's Brewhouse",
        offer: 'Save 10%+',
        imgSrc: Spaghetti
    },
    {
        id: 2,
        name: 'Chicken Shawarma',
        decp: "Genie's Gyro",
        offer: 'Get first order free',
        imgSrc: ChickenShaw
    },
    {
        id: 3,
        name: 'Mozzarella Panini',
        decp: 'Moonbucks',
        offer: '50% off first order',
        imgSrc: Panini
    },
    {
        id: 4,
        name: 'Miso Ramen',
        decp: 'NinjaNoodles',
        offer: 'Next order free',
        imgSrc: Ramen
    },
];

export const filterCategories = [
    {
        id: 1,
        name: 'Indian',
        urlParamName: 'indian',
    },
    {
        id: 2,
        name: 'Fast Food',
        urlParamName: 'fastFood',
    },
    {
        id: 3,
        name: 'Mexican',
        urlParamName: 'mexican',
    },
    {
        id: 4,
        name: 'Greek',
        urlParamName: 'greek',
    },
    {
        id: 5,
        name: 'Chinese',
        urlParamName: 'chinese',
    },
    {
        id: 6,
        name: 'Middle Eastern',
        urlParamName: 'middleEastern',
    },
    {
        id: 7,
        name: 'Deserts',
        urlParamName: 'Deserts',
    },
];