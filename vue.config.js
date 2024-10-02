const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    devServer: {
    port: 3000, // 원하는 포트 번호로 변경하세요.
  },
  transpileDependencies: true
})
