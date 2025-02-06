import componentsImg from '../assets/component-components.png';
import jsxImg from '../assets/component-jsx.webp';
import propsImg from '../assets/component-props.png';
import stateImg from '../assets/component-states.jpg';

export const CORE_CONCEPTS = [
    {
        image: componentsImg,
        title: 'Components',
        description: 'Components are the basic building blocks of React applications.'
    },
    {
        image: jsxImg,
        title: 'JSX',
        description: 'JSX is a syntax extension to JavaScript.'
    },
    {
        image: propsImg,
        title: 'Props',
        description: 'Props are the way to pass data from parent to child components.'
    },
    {
        image: stateImg,
        title: 'State',
        description: 'State is a way to manage component-specific data.'
    }
];

export const EXAMPLES = [
    {
        title: 'Components',
        description: 'Example',
        code: `
function Welcome () {
    return <h1>Hello, world</h1>;
}`
    },
    {
        title: 'JSX',
        description: 'Example',
        code: `
function Welcome () {
    return <h1>Hello, world</h1>;
}`
    },
    {
        title: 'Props',
        description: 'Example',
        code: `
const [data, setData] = useState('');`
    },
    {
        title: 'State',
        description: 'Example',
        code: `
const [data, setData] = useState('');`
    },
]

export const DUMMY_PRODUCTS = [
    {id: 1, title:"Test 1", image: "", info: "test info", price: 453.1, description: "test description"},
    {id: 2, title:"Test 2", image: "", info: "test info", price: 453.1, description: "test description"},
    {id: 3, title:"Test 3", image: "", info: "test info", price: 453.1, description: "test description"},
    {id: 4, title:"Test 4", image: "", info: "test info", price: 453.1, description: "test description"},
    {id: 5, title:"Test 5", image: "", info: "test info", price: 453.1, description: "test description"},
    {id: 6, title:"Test 6", image: "", info: "test info", price: 453.1, description: "test description"},
    {id: 7, title:"Test 7", image: "", info: "test info", price: 453.1, description: "test description"}
]