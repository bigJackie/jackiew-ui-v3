# 应用布局

包含一下用于布局的容器组件，快速构建应用页面：

`<j-app>`：最外层的根容器，用于给所有的组件应用 css 样式

`<j-container>`：外层容器，当子元素中包含 `<j-header>` 或 `<j-footer>` 时，所有子元素会垂直排列， 否则会左右排列。

`<j-header>`：顶部 `<header>`容器

`<j-main>`：主要内容 `<main>`容器

`<j-aside>`：侧栏 `<aside>`容器

`<j-footer>`：底部 `<footer>`容器

## 常见页面布局

:::demo

components/application/layout_1

:::

:::demo

components/application/layout_2

:::

:::demo

components/application/layout_3

:::

:::demo

components/application/layout_4

:::

:::demo

components/application/layout_5

:::

:::demo

components/application/layout_6

:::

:::demo

components/application/layout_7

:::

## 应用布局 API

### Container 属性

| 属性名    | 类型    | 默认值 | 说明                                                                                  |
| --------- | ------- | ------ | ------------------------------------------------------------------------------------- |
| direction | String  |        | 子元素中包含 `<j-header>` 或 `<j-footer>` 时，所有子元素会垂直排列， 否则会左右排列。 |
| app       | Boolean | false  | 充当应用程序                                                                          |

### Container 插槽

| 插槽名  | 说明     |
| ------- | -------- |
| default | 默认内容 |

### Aside 属性

| 属性名 | 类型           | 默认值 | 说明 |
| ------ | -------------- | ------ | ---- |
| width  | String，Number | 256px  |      |

### Aside 插槽

| 插槽名  | 说明     |
| ------- | -------- |
| default | 默认内容 |

### Header 属性

| 属性名 | 类型           | 默认值 | 说明 |
| ------ | -------------- | ------ | ---- |
| height | String，Number | 60px   |      |

### Header 插槽

| 插槽名  | 说明     |
| ------- | -------- |
| default | 默认内容 |

### Footer 属性

| 属性名 | 类型           | 默认值 | 说明 |
| ------ | -------------- | ------ | ---- |
| height | String，Number | 60px   |      |

### Footer 插槽

| 插槽名  | 说明     |
| ------- | -------- |
| default | 默认内容 |

### Main 插槽

| 插槽名  | 说明     |
| ------- | -------- |
| default | 默认内容 |
