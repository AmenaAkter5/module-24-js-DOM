// 1. access all paragraphs by tag name

const blogs = document.getElementsByTagName('p');
// console.log(blogs); // to see the paragraphs in console

// here we can also apply for loop to get blogs

for (const blog of blogs) {
    // console.log(blog);

    // apply style on blogs
    blog.style.backgroundColor = 'navy';
    blog.style.color = 'white';
    // margin, padding, border, radius add করা যাবে।
}



// 2. id দিয়ে ধরে নিয়ে আসা যাবে [natus এ id দেয়া হলো special-blog]

const natus = document.getElementById('special-blog');
// natus এর style, inner text change করা যাবে।

// change inner text
// natus.innerText = 'New Natus';

// change inner html
natus.innerHTML = `
    <h4>Special inner HTML</h4>
    <div>
        <ul>
            <li>First list</li>
            <li>Second list</li>
        </ul>
    </div>
`


// 3. class দিয়ে ধরে নিয়ে আসা যাবে 'getElementsbyClassName'


// 4. console এ document.getElementsbyTagName('p')
// দিলে paragraph গুলো দেখাবে HTMLCollections দিয়ে
// কারণ সে html element গুলোকে access করছে।


// 5. console এ document.querySelectorAll('p')
// দিলে paragraph গুলো দেখাবে NodeList দিয়ে
// html tag ছাড়াও অন্যান্য element কে document এ Node ধরা হয়।
// তাই CSS selector এদেরকে nodelist দিয়ে নিয়ে আসবে।



// 6. element remove করা। parent টা কে দিয়ে child কে access করে তাকে remove করতে হবে।

const friends = document.getElementById('friends');
// console.log(friends.childNodes); // যত childNodes আছে সব দেখাবে
console.log(friends.children); // শুধু child html দেখাবে
const fifth = friends.children[4];
console.log(fifth); // check the fifth li is selected
friends.removeChild(fifth); // to remove fifth child from friends



// element add করা। [index অনুযায়ী add না করে last element হিসেবে add]

// step 1: create element
const friend = document.createElement('li');

// step 2: set inner text
friend.innerText = 'friend-11';

// step 3: add  / append on ul [parent Node]
friends.appendChild(friend);


// important things to know from this module - 12:47 [video]