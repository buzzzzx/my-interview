/**
 * JSONP 核心原理：script 标签不受同源策略约束，所以可以用来进行跨域请求，优点是兼容性好，但是只能用于 GET 请求
 */

// 客户端
// <body>
//   <div id={"result"}></div>
//   <script>
//     function handle(data) {
//       const node = document.getElementById("result");
//       node.innerHTML = data.name;
//     }
//     const scriptEle = document.createElement("script");
//     scriptEle.src = "url/json-server?callback=handle";
//     document.body.appendChild(scriptEle);
//   </script>
// </body>;

// 服务端
// app.get("json-server", (req, res) => {
//   const data = {
//     name: "remie",
//   }
//   const json = JSON.stringify(data);
//   res.end(`${req.query.callback}(${json})`)
// })
