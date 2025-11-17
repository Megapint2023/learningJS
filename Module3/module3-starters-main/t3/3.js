'use strict';
const target = document.getElementById('target')

const names = ['John', 'Paul', 'Jones'];

const list = [];
for (let x = 0; x < names; x++) {
  const item = list;
  list.push(item)
}

let list =  listHTML;
for (const result of names) {
    listHTML += `<li>${item.list}</li>`;
}

target.appendChild(l1);
document.querySelector('#target').innerHTML = listHTML;

/* Open t3 folder in your IDE/editor. <br>
    Add HTML by using innerHTML property. <br>
    Add the following HTML code to the element with id="target". <br>
    Add the values from 'names' array to the &lt;li&gt; elements in a for-loop. <br>
&lt;li&gt;John&lt;/li&gt; <br>
&lt;li&gt;Paul&lt;/li&gt; <br>
&lt;li&gt;Jones&lt;/li&gt; */