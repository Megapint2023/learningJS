'use strict';

const target = document.getElementById('target')

const l1 = document.createElement('li')
l1.textContent = 'First item';
target.appendChild(l1);

const l2 = document.createElement('li')
l2.classList.add('my-list');
l2.textContent = 'First item';
target.appendChild(l2);

const l3 = document.createElement('li')
l3.textContent = 'First item';
target.appendChild(l3);

/*  Open t2 folder in your IDE/editor. <br>
    Add HTML by using createElement() and appendChild methods. <br>
    Add the following HTML code to the element with id="target" <br>
&lt;li&gt;First item&lt;/li&gt; <br>
&lt;li&gt;Second item&lt;/li&gt; <br>
&lt;li&gt;Third item&lt;/li&gt; <br>
Add class my-item to the second list item. */