# yidu_diy_demo
壹度diy小程序插件demo

## 插件介绍
壹度diy特有的页面机制,搭配30+自定义组件,让你的站点每一个页面都可以完全自定义,可无缝对接任意小程序！

## 配置
### 1.在app.json中配置插件参数
        "plugins": {
            "myPlugin": {
              "version": "1.0.1",
              "provider": "wx0c1e00758a94e44f"
            }
          }

### 2.引入核心文件diyconfig.js,diymain.js

### 3.参数配置
      在diyconfig.js中配置商户ID(diy_id),商户KEY(diy_key)

### 4.小程序开发-页面调用
      ![https://github.com/liuxianmi/yidu_diy_demo.git]使用详情参考示例
### 5.后台内容管理需要在微擎应用市场下载小程序插件--【壹度diy插件】
    演示地址 https://card.arliki.com  账号：yidu_diy 密码：yidu_diy
## 插件优势
### 1.开发者可由该插件 低成本、高效率地开发出diy型小程序页面
### 2.页面内容高效率添加，含大量模板库，操作简单，灵活拖拽
### 3.该插件中大多数组件点击可收集表单ID,开发者可在getFormId函数中对接接口储存form_id,可用于模板消息推送





