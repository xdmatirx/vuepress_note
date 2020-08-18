# CSS：

### 两栏布局

#### flex可以实现让其中一子元素填充满

方法：

```javascript
//father
.father{
	display:flex;
	width:100%
}
.son1{
	width:300px//一个需要定值
}
.son2{
	//空着就行
}
```

高度 宽度计算属性

```javascript
.bar{
	height: calc(100vh - 30px) //表示可视高度的100%减去30px
}
```

#### 一侧float，另一侧margin-left：-n px

```
//father
.father{
}
.son1{
	width:300px//一个需要定值
	folat:left
}
.son2{
	//空着就行
	margin-left: -300px 
}
```

