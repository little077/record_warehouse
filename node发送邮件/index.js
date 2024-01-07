//1、找文件夹nodemailer=>lib=>well-known=>services.json文件，搜索你的邮箱，ctrlcv
const nodemailer = require("nodemailer");


const transporter = nodemailer.createTransport({
  host: "smtp.qq.com",
  port: 465,
  secure: true,
  auth: {
    // TODO: replace `user` and `pass` values from <https://forwardemail.net>
    // 邮箱用户名
    user: "1837687575@qq.com",
    //邮箱密码 stmp的允许密码
    pass: "",
  },
});
const sendMessage  = async()=>{
const info = await transporter.sendMail({
  from: '1837687575@qq.com', // sender address
  //可以是数组
  to: "811601866@qq.com", // list of receivers
  //标题
  subject: "您好，这是你的验证码", // Subject line
  //本次邮件的文本内容，与html只能写一个
  text: "Hello world?", // plain text body
  //超文本内容
  html: "<b>Hello world?</b>", // html body
});
  console.log("发送成功", info.messageId);
}

sendMessage().catch(e=>console.log(e,"发送失败"))
