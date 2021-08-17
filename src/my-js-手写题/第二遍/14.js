// 客户端
// <script>
//     function fn(data) {
//         let result = document.getElementById("result");
//         result.innerHTML = data.name;
//     }
//     let scriptEle = document.createElement("script");
//     scriptEle.src = "https://url/jsonp-server?callback=fn";
//     document.body.appendChild(scriptEle);
// </script>
//
// 服务端
// app.get("jsonp-server", (req, res) => {
//     const data = {
//         name: "remie"
//     };
//     const dataStr = JSON.stringify(data);
//     res.end(`${req.query.callback}(${dataStr})`);
// })
