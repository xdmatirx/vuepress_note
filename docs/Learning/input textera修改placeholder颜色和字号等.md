input textera修改placeholder颜色和字号等



```html
<input class="needchange" placeholder="请输入名字" >
```

```css
.change:-moz-placeholder{ 
    /*mozilla firefox 4-8*/
    color: red
}
.change::-moz-placeholder{
	/*mozilla firefox 4-8*/
    color: red
}

.change::-webkit-input-placeholder{
  color: red;
}
.change::-moz-input-placeholder{
  color: red;
}
.change::-ms-input-placeholder{
  color: red;
}
```

如果需要一开始就变化，那把该属性添加到input或者textarea上就行。

否则利用js动态修改添加属性修改class。

```js
document.getElementByClassName('needchange')[0].classList.add('change')
document.getElementByClassName('needchange')[0].setAttribute('placeholder', '写入其他内容，动态修改')
// 这里两句必须分开写
```




