# 1. 新建文件夹存储密钥，这里用keys文件夹存储，使用git-bash终端进行密钥操作

#mkdir keys
#cd keys
#openssl
生成私钥
#openssl genrsa -out private.key 2048
生成公钥
#openssl rsa -in private.key -pubout -out public.key


# 2. 输入密钥保存路径，并按提示输入密钥文件名，密钥文件名一般为私钥文件名，如：private.key

