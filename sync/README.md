# 说明

此文件夹用于存放同步所需信息，以及作为同步的临时目录。
使用 vext-bin sync 命令，符合以下目录约定：

```md
- sync                  // 用于同步的目录
    - package.json      // 指定同步的小包及其版本
    - README.md         // 相关说明
- dist                  // 编译后的对外暴露文件
- lib                   // 存放组件的目录
- index.js              // 暴露的js出口
- index.scss            // 暴露的scss出口
```