
## INSTALL

- 安装相关依赖
    ```sh 
    npm install
    ```

- 编译本项目
    ```sh 
    npx tsc
    ```

- 连接到本地库
    ```sh
    npm link
    ```

- 修改执行权限
    ```sh
    chmod -R 777 ./bin  
    ```

- 执行命令
    ```sh
    latest-changes-tool ./ 2
    ```

## bin入口

命令行指令通过package.json中的bin入口文件进行调用
