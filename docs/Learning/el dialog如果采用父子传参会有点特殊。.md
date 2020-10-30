el dialog如果采用父子传参会有点特殊。

子组件

```vue
<template>
  <el-dialog
    title="提示"
    :visible.sync="moveTaskStatus"
    width="35%"
    :before-close="cancelDialog"
    center
  >
    <span slot="footer" class="dialog-footer">
      <el-button @click="cancelDialog">取 消</el-button>
      <el-button type="primary" @click="submit">确 定</el-button>
    </span>
  </el-dialog>
</template>
<script>
export default {
  name: 'MoveTask',
  props: {
    moveTaskStatus: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      showMoveTask: 'false'
    }
  },
  methods: {
    cancelDialog() {
      this.$emit('move-task-cancel')
    },
    submit() {
      this.$emit('move-task-submit')
    }
  }
}
</script>
```



父组件

```vue
    <MoveTask
      v-if="showMoveTask"
      :move-task-status="showMoveTask"
      @move-task-cancel="moveTaskCancel"
      @move-task-submit="moveTaskSubmit"
    />

	<scipt>
        // 用于取消时调用
		moveTaskCancel() {
      		this.showMoveTask = false
    	},
        // 用于提交时调用
    	moveTaskSubmit() {
      		this.showMoveTask = false
      		console.log('1')
   	 	}
	</scipt>
```

需要借助`el-dialog`的 `:before-close` 属性绑定一个事件用于实现父组件操作dialog的出现与否。

:before-close是一个在 dialog 关闭前的回调，可暂停dialog的关闭。 默认为

```javascript
function(done){
	done//用于关闭dialog
}
```

子组件接收父组件的一个prop 用于dialog的显现与否，子组件不可以直接操作传过来的这个显示值，只能通过自身监听的几个关闭dialog函数（cancelDialog，submit）去驱动父组件的关闭显示事件。