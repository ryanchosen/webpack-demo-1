# webpack-demo-1
# 在线预览链接
https://ryanchosen.github.io/webpack-demo-1/
# 如何实现一键发布?
1.我新建了一个branch： github-pages，这个branch把dist目录里的内容都提取出来，也就是把webpack打包后的全部文件都提取出来，并且把src中的的源码都删除  
2.本地创建一个sh脚本 --- touch deploy.sh
2.在deploy.sh中输入以下代码
```
npm run build &&
git checkout github-pages &&
rm -rf src *.sh *.js *.json &&
mv dist/* ./ &&
rm -rf dist &&
git add . &&
git commit -m 'update' &&
git push &&
git checkout -
```
主要功能是自动编译，切版本，把dist中的内容都拿出来，把源码都删掉，并且自动更新到github上让预览地址实时保持最新状态  
3. 运行sh ./deploy.sh
